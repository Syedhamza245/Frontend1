import { FaSearch, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AdminHeader = ({ activeSection }) => {
  return (
    <div className="relative mb-8">
      {/* 🔍 Search Bar (Only visible in 'users' section) */}
      {activeSection === 'users' && (
        <div className="flex items-center bg-white p-3 rounded-lg shadow-sm w-96">
          <FaSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full outline-none"
          />
        </div>
      )}

      {/* 👤 Admin Profile Dropdown - Fixed Top Right */}
      <div className="absolute top-0 right-0 group">
        <div className="flex items-center cursor-pointer p-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Admin"
            className="w-10 h-10 rounded-full mr-2 border border-gray-300 object-cover"
          />
          <span className="text-sm font-medium text-gray-700">Admin User</span>
        </div>

        <div className="absolute top-full right-0 bg-white rounded-lg shadow-lg w-48 hidden group-hover:block z-20">
          {[
            { label: 'Logout', icon: <FaSignOutAlt /> },
          ].map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
            >
              <span className="mr-2 w-5 text-center">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
