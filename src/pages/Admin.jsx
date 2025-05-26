import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';
import AnalyticsSection from '../components/AnalyticsSection';
import UsersSection from '../components/UsersSection';
import SettingsSection from '../components/SettingsSection';
import UserModal from '../components/UserModal';

function Admin() {
  const [activeSection, setActiveSection] = useState('analytics');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="pl-20 md:pl-64 transition-all duration-300">
        <div className="p-5">
          <AdminHeader activeSection={activeSection} />
          <AnalyticsSection isActive={activeSection === 'analytics'} />
          <UsersSection isActive={activeSection === 'users'} setIsModalOpen={setIsModalOpen} />
          <SettingsSection isActive={activeSection === 'settings'} />
          <UserModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
}


export default Admin;