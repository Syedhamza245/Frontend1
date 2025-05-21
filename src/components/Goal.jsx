import React from "react";

const Goal = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Which best describes <br className="block md:hidden" />
        your goal for using <span className="text-orange-500">myapp</span>
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        This helps you to personalize your experience
      </p>

      <div className="space-y-4 w-full max-w-md">
        {["Creater", "Business", "Personal"].map((item) => (
          <button
            key={item}
            className="w-full border border-gray-300 rounded-lg p-4 text-left hover:border-orange-500 transition"
          >
            <h2 className="font-semibold text-gray-900">{item}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Lorem ipsum dolor sit amet consectetur. Sagittis bibendum
              suspendisse mi consectetur ipsum sed ipsum.
            </p>
          </button>
        ))}
      </div>

      {/* <button className="mt-8 text-purple-600 font-medium hover:underline">
        Continue
      </button> */}
    </div>
  );
};

export default Goal;
