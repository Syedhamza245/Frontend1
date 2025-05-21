import React from 'react';

const ChoosePlatform = () => {
  const platforms = ['Instagram', 'Facebook', 'Tiktok', 'Youtube', 'Threads', 'Website link'];

  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* <div className="flex justify-center mb-4">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className={`w-6 h-1 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-blue-100'}`} />
          ))}
        </div>
      </div> */}
      <h2 className="text-2xl font-bold">Choose the platforms that you use</h2>
      <p className="text-gray-500 mb-6">Choose the template that suits your business.</p>

      <div className="space-y-3 mb-6">
        {platforms.map((platform, idx) => (
          <button key={idx} className="w-full py-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">{platform}</button>
        ))}
      </div>

      {/* <button className="w-full py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">Continue</button> */}
    </div>
  );
};

export default ChoosePlatform;
