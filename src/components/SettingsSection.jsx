const SettingsSection = ({ isActive }) => {
  return (
    <div className={`space-y-8 ${isActive ? 'block' : 'hidden'}`}>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg text-gray-700 mb-5">Settings</h3>
        <p>Admin settings will be displayed here.</p>
      </div>
    </div>
  );
};

export default SettingsSection;