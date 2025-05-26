import { FaFilter, FaDownload, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const UsersSection = ({ isActive, setIsModalOpen }) => {
  const users = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      username: 'john_doe',
      email: 'john@example.com',
      plan: 'Premium',
      signupDate: '2023-05-15',
      status: 'Active',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      username: 'jane_smith',
      email: 'jane@example.com',
      plan: 'Pro',
      signupDate: '2023-06-22',
      status: 'Active',
    },
    {
      avatar: 'https://ui-avatars.com/api/?name=RS',
      username: 'robert_s',
      email: 'robert@example.com',
      plan: 'Free',
      signupDate: '2023-07-10',
      status: 'Inactive',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      username: 'sarah_j',
      email: 'sarah@example.com',
      plan: 'Pro',
      signupDate: '2023-08-05',
      status: 'Active',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      username: 'mike_t',
      email: 'mike@example.com',
      plan: 'Free',
      signupDate: '2023-09-18',
      status: 'Active',
    },
  ];

  return (
    <div className={`space-y-8 ${isActive ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-lg text-gray-700">User Management</h3>
          <div className="flex gap-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              <FaFilter className="mr-2" /> Filters
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              <FaDownload className="mr-2" /> Export
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {['User', 'Email', 'Plan', 'Signup Date', 'Status', 'Actions'].map((header) => (
                <th key={header} className="text-left p-5 text-gray-500 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt="User" className="w-9 h-9 rounded-full" />
                    <span>{user.username}</span>
                  </div>
                </td>
                <td className="p-5">{user.email}</td>
                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.plan === 'Premium'
                        ? 'bg-pink-100 text-pink-600'
                        : user.plan === 'Pro'
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {user.plan}
                  </span>
                </td>
                <td className="p-5">{user.signupDate}</td>
                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-5">
                  <button
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <FaEye className="mr-2" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-5 border-t border-gray-200">
          <div className="text-gray-500 text-sm">
            Showing 1 to 5 of 12458 entries
          </div>
          <div className="flex gap-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              <FaChevronLeft className="mr-2" /> Previous
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
              Next <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSection;