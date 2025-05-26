import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const AnalyticsSection = ({ isActive }) => {
  useEffect(() => {
    if (isActive) {
      const signupChart = new Chart(document.getElementById('signupChart'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [
            {
              label: '2023',
              data: [850, 920, 1020, 1150, 1200, 1350, 1420, 1500, 1600],
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              tension: 0.3,
              fill: true,
            },
            {
              label: '2022',
              data: [700, 750, 800, 850, 900, 950, 1000, 1050, 1100],
              borderColor: '#d1d5db',
              backgroundColor: 'rgba(209, 213, 219, 0.1)',
              tension: 0.3,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' } },
        },
      });

      const planChart = new Chart(document.getElementById('planChart'), {
        type: 'doughnut',
        data: {
          labels: ['Free', 'Pro', 'Premium'],
          datasets: [
            {
              data: [6540, 3200, 2718],
              backgroundColor: ['#e0f2fe', '#ede9fe', '#fce7f3'],
              borderColor: ['#0369a1', '#7c3aed', '#db2777'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'right' } },
        },
      });

      const growthChart = new Chart(document.getElementById('growthChart'), {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [
            {
              label: 'New Users',
              data: [850, 920, 1020, 1150, 1200, 1350, 1420, 1500, 1600],
              backgroundColor: '#6366f1',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { position: 'top' } },
        },
      });

      const funnelChart = new Chart(document.getElementById('funnelChart'), {
        type: 'bar',
        data: {
          labels: ['Visit', 'Signup', 'Profile Setup', 'Publish'],
          datasets: [
            {
              label: 'Conversion Steps',
              data: [10000, 6500, 4500, 3000],
              backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef'],
            },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          plugins: { legend: { display: false } },
        },
      });

      return () => {
        signupChart.destroy();
        planChart.destroy();
        growthChart.destroy();
        funnelChart.destroy();
      };
    }
  }, [isActive]);

  return (
    <>
    <br/>
    <br/>
    <div className={`space-y-8 ${isActive ? 'block' : 'hidden'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: 'Total Users', value: '12,458', change: '+12.5% from last month', positive: true },
          { title: 'Active Users (7d)', value: '8,742', change: '+5.3% from last week', positive: true },
          { title: 'New Signups', value: '324', change: '-2.1% from last week', positive: false },
          { title: 'MRR', value: '$24,580', change: '+8.7% from last month', positive: true },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-500 mb-2">{stat.title}</h3>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className={`text-xs ${stat.positive ? 'text-success' : 'text-danger'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-lg shadow-sm lg:col-span-2">
          <h3 className="text-lg text-gray-700 mb-5">Signup Trends</h3>
          <canvas id="signupChart"></canvas>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg text-gray-700 mb-5">Plan Distribution</h3>
          <canvas id="planChart"></canvas>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg text-gray-700 mb-5">User Growth</h3>
        <canvas id="growthChart"></canvas>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg text-gray-700 mb-5">Signup Funnel</h3>
        <canvas id="funnelChart"></canvas>
      </div>
    </div>
    </>
  );
};

export default AnalyticsSection;