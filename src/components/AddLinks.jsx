import React from 'react';

const AddLinks = () => {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* <div className="flex justify-center mb-4">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i} className={`w-6 h-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-blue-100'}`} />
          ))}
        </div>
      </div> */}

      <h2 className="text-2xl font-bold">Add your links</h2>
      <p className="text-gray-500 mb-6">Here you add your all relevant links</p>

      <div className="mb-4 bg-blue-100 rounded-full px-4 py-3 text-left">
        <span className="font-medium text-red-600 mr-2">YouTube</span>
        <input placeholder="youtube username" className="bg-transparent focus:outline-none w-3/4" />
      </div>

      <div className="space-y-3 mb-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <input key={idx} placeholder="youtube username" className="w-full px-4 py-3 rounded-full bg-blue-100 focus:outline-none" />
        ))}
      </div>

      {/* <button className="w-full py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">Continue</button> */}
    </div>
  );
};

export default AddLinks;
