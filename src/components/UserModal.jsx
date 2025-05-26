const UserModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="bg-white w-[800px] max-w-[90%] rounded-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-lg text-gray-700">User Details</h3>
          <button className="text-gray-500 text-xl" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
        <div className="p-5">
          <div className="flex gap-5 mb-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl mb-3">John Doe</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { label: 'Username', value: 'john_doe' },
                  { label: 'Profile URL', value: 'linktr.ee/john_doe' },
                  { label: 'Email', value: 'john@example.com' },
                  { label: 'Signup Date', value: 'May 15, 2023' },
                  { label: 'Status', value: <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs">Active</span> },
                  { label: 'Goal/Category', value: 'Content Creator' },
                ].map((item, index) => (
                  <div key={index} className="min-w-[150px]">
                    <label className="text-xs text-gray-500 block mb-1">{item.label}</label>
                    <div className="font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h4 className="text-base text-gray-700 mb-4 pb-2 border-b border-gray-200">Subscription Details</h4>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Plan', value: <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs">Premium</span> },
              { label: 'Start Date', value: 'May 15, 2023' },
              { label: 'Expiry Date', value: 'November 15, 2023' },
              { label: 'Payment Status', value: 'Paid' },
              { label: 'Renewal', value: 'Auto' },
              { label: 'Payment Method', value: 'Visa ****4242' },
            ].map((item, index) => (
              <div key={index} className="min-w-[150px]">
                <label className="text-xs text-gray-500 block mb-1">{item.label}</label>
                <div className="font-medium">{item.value}</div>
              </div>
            ))}
          </div>

          <h4 className="text-base text-gray-700 mb-4 pb-2 border-b border-gray-200">User Activity</h4>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Last Login', value: '2 hours ago' },
              { label: 'Link Clicks (7d)', value: '1,248' },
              { label: 'Profile Views (7d)', value: '3,572' },
            ].map((item, index) => (
              <div key={index} className="min-w-[150px]">
                <label className="text-xs text-gray-500 block mb-1">{item.label}</label>
                <div className="font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;