import { useEffect, useState } from 'react';
import { FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`bg-white h-screen shadow-md transition-all duration-300 ease-in-out fixed top-0 left-0 z-50 p-4 
        ${collapsed ? 'w-20' : 'w-64'}`}
    >
      <div className="pb-6 border-b border-gray-200 mb-6 text-center">
        <h2 className="text-primary text-2xl font-bold hidden md:block">MyApp</h2>
        <h2 className="text-primary text-xl font-bold md:hidden">MA</h2>
      </div>

      <ul className="space-y-4">
        {[
          { id: 'users', icon: <FaUsers size={20} />, label: 'User Management' },
          { id: 'analytics', icon: <FaChartLine size={20} />, label: 'Analytics' },
          { id: 'settings', icon: <FaCog size={20} />, label: 'Settings' },
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li
              key={item.id}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors duration-200 
                ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span>{item.icon}</span>
              <span className={`${collapsed ? 'hidden' : 'inline'}`}>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
