
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../assests/avatar.jpg"
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "lucide-react";

const templatesData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  bio: "This is a short user bio for the template preview.",
  image: Avatar,
}));

const TemplateComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelect = (id) => {
    setSelectedTemplate(id === selectedTemplate ? null : id);
  };



  const navigate = useNavigate();

// const handleContinue = () => {
//   if (selectedTemplate) {
//     navigate("/pricing");
//   }
// };


  return (
      <>
    <div
      className="min-h-screen px-6 py-10 font-poppins"
      
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Choose Your Template
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {templatesData.map((template) => (
          <div
            key={template.id}
                className={`relative rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl ${
              selectedTemplate === template.id ? "ring-4 ring-peach-orange" : ""
            }`}
           style={{
  background: "linear-gradient(to bottom, #d8f3ff, #e6f4ff)",
  height: "480px",
}}

          >
            {/* Checkbox */}
            <input
              type="checkbox"
              className="absolute top-4 right-4 w-5 h-5 accent-peach-orange"
              checked={selectedTemplate === template.id}
              onChange={() => handleSelect(template.id)}
            />

            {/* Card Content */}
            <div className="flex flex-col items-center h-full">
              <img
                src={template.image}
                alt="avatar"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-md"
              />
              <h4 className="font-semibold text-xl text-gray-800">{template.name}</h4>
              <p className="text-sm text-center text-gray-600 mt-1 mb-3 px-2">
                {template.bio}
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3 text-gray-600 text-lg mb-4">
                <FaInstagram />
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedin />
              </div>

              {/* Social Link Buttons */}
              <div className="flex flex-col gap-2 w-full mt-auto">
                <button className="bg-[#F9A825] text-white py-2 rounded-full font-semibold">
                  Add YouTube Link
                </button>
                <button className="bg-[#F9A825] text-white py-2 rounded-full font-semibold">
                  Add Instagram Link
                </button>
                <button className="bg-[#F9A825] text-white py-2 rounded-full font-semibold">
                  Add TikTok Link
                </button>
                <button className="bg-[#F9A825] text-white py-2 rounded-full font-semibold">
                  Add Facebook Link
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-12 text-center">
     {/* <button
    onClick={handleContinue}
    disabled={!selectedTemplate}
    className={`px-10 py-4 text-white text-lg font-semibold rounded-full transition-all duration-300 ${
      selectedTemplate
        ? "bg-[#FF7A00] hover:opacity-90"
        : "bg-gray-400 cursor-not-allowed"
    }`}
  >
    Continue with Template
  </button> */}



      </div>
    </div>
  </>
  );
};

export default TemplateComponent;

