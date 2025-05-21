import React from "react";
import { FaCheckCircle, FaTimesCircle, FaDollarSign } from "react-icons/fa";

const featuresList = [
  "Public Profile",
  "Profile Image",
  "Custom Slug",
  "Light/Dark Mode",
  "Title + Bio + Social Links",
  "Max Links",
  "Link Reordering (Drag & Drop)",
  "Profile Banner (Cover Photo)",
  "Link Click Tracking (Counts)",
  "Link Scheduling (Start/End Time)",
  "Link Icons & Subtitles",
  "Analytics",
  "Custom Theme Colors",
];

const plans = [
  {
    title: "Free",
    price: "0",
    features: [
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "5 Links",
      "No",
      "No",
      "No",
      "No",
      "No",
      "No",
      "No",
    ],
    buttonType: "outline",
  },
  {
    title: "Pro",
    price: "9.99",
    features: [
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Unlimited",
      "Yes",
      "Yes",
      "Yes",
      "No",
      "No",
      "No",
      "No",
    ],
    buttonType: "solid",
    highlight: true,
  },
  {
    title: "Premium",
    price: "19.99",
    features: [
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Unlimited",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
      "Yes",
    ],
    buttonType: "outline",
  },
];

const PricingPlans = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-14">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-xl p-10 flex flex-col justify-between min-h-[650px] ${
              plan.highlight ? "bg-orange-100 border-2 border-orange-500" : "bg-gray-50"
            }`}
          >
            <div>
              <div className="flex items-center mb-4 text-3xl font-semibold">
                <FaDollarSign className="mr-2 text-green-600" />
                {plan.price} / mo
              </div>
              <h3 className="text-2xl font-bold mb-6">{plan.title}</h3>
              <h4 className="text-lg font-semibold mb-4">Key Features</h4>
              <ul className="space-y-3">
                {featuresList.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    {plan.features[idx] === "Yes" || plan.features[idx] === "Unlimited" ? (
                      <FaCheckCircle className="text-green-500 mr-2" />
                    ) : (
                      <FaTimesCircle className="text-red-400 mr-2" />
                    )}
                    <span className="font-medium">
                      {feature}{" "}
                      {plan.features[idx] !== "Yes" && plan.features[idx] !== "No"
                        ? `(${plan.features[idx]})`
                        : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            {plan.buttonType === "solid" ? (
              <button className="mt-10 bg-[#7D4CDB] text-white py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all">
                Continue with this Plan
              </button>
            ) : (
              <button className="mt-10 border-2 border-[#6a3fbf] text-[#6a3fbf] py-3 rounded-full text-lg font-semibold hover:bg-[#6a3fbf] hover:text-white transition-all">
                Continue with this Plan
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
