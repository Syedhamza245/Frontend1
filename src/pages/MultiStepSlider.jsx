import React, { useState } from "react";
import { motion } from "framer-motion";
import Goal from "../components/Goal";
import Category from "../components/Category";
import PricingPlans from "../components/PricingPlans";
import TemplateComponent from "../components/TemplateComponent";
import ChoosePlatform from "../components/ChoosePlatform";
import ProfileDetails from "../components/ProfileDetails";
import AddLinks from "../components/AddLinks";

// const Template = () => <div className="p-4">📄 Template Component</div>;
// const Platform = () => <div className="p-4">🧩 Platform Component</div>;
// const AddLinks = () => <div className="p-4">🔗 Add Links Component</div>;
// const AddProfiles = () => <div className="p-4">👤 Add Profiles Component</div>;

const steps = [
  { title: "Goal", component: <Goal /> },
  { title: "Category", component: <Category /> },
  { title: "Pricing", component: <PricingPlans /> },
  { title: "Template", component: <TemplateComponent /> },
  { title: "Platform", component: <ChoosePlatform /> },
  { title: "Add Links", component: <AddLinks /> },
  { title: "Add Profiles", component: <ProfileDetails /> },
];

const MultiStepSlider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    window.location.href = "/dashboard";
  };

  // Set dynamic width class based on current step
  const dynamicWidthClass =
  ["Pricing", "Template"].includes(steps[currentStep].title)
    ? "w-full max-w-7xl"
    : "w-full max-w-md";



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-6">
      {/* Slider Indicators */}
      <div className="flex gap-2 mb-6">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-2 rounded-full transition-all duration-300 ${
              index <= currentStep ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Current Step Component */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`bg-white rounded-2xl shadow-lg p-6 ${dynamicWidthClass}`}
      >
        {steps[currentStep].component}
      </motion.div>

      {/* Navigation Buttons */}
      <div className={`mt-6 flex justify-between w-full ${dynamicWidthClass}`}>
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 text-black rounded-xl disabled:opacity-50"
        >
          Previous
        </button>
        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-xl"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepSlider;
