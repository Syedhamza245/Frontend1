import React from "react";

const Category = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Select your business category
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        Choose the best that apply your niche.
      </p>

      <div className="space-y-3 w-full max-w-md">
        {[
          "Retail and ecommerce",
          "Beauty",
          "Real estate",
          "Food and beverage",
          "Other",
        ].map((item) => (
          <button
            key={item}
            className="w-full bg-blue-50 text-gray-900 font-medium py-3 px-4 rounded-full hover:bg-blue-100 transition"
          >
            {item}
          </button>
        ))}

        <textarea
          placeholder="Share about your business here"
          className="w-full mt-2 bg-blue-50 p-4 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows={4}
        ></textarea>
      </div>

      {/* <button className="mt-8 text-purple-600 font-medium hover:underline">
        Continue
      </button> */}
    </div>
  );
};

export default Category;
