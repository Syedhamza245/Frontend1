import React from "react";
import {
  FaLink,
  FaPalette,
  FaChartBar,
  FaCog,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTrash,
  FaShareAlt
} from "react-icons/fa";
import { RiThreadsLine } from "react-icons/ri";
import profile from "../assests/hero-image.jpg";
import banner from "../assests/signup.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Dashboard = () => {
  return (
        <>
        <Header/>
    <div className="min-h-screen flex font-poppins bg-[#f5f7fa]">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg px-6 py-10 space-y-8">
        <h1 className="text-2xl font-bold text-[#4A4A4A] mb-6">MyApp</h1>
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#A78BFA] cursor-pointer">
            <FaLink /> <span>Links</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#A78BFA] cursor-pointer">
            <FaPalette /> <span>Appearance</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#A78BFA] cursor-pointer">
            <FaChartBar /> <span>Analytics</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-[#A78BFA] cursor-pointer">
            <FaCog /> <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 px-10 py-8 bg-[#f0f2f5]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Profile Card */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src={profile}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 font-medium mb-2">This is a sample profile tagline</p>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-[#4267B2]" />
              <FaInstagram className="text-[#C13584]" />
              <RiThreadsLine className="text-black" />
              <FaTiktok className="text-black" />
            </div>
            <img src={banner} alt="Banner" className="rounded-lg mb-4 w-full h-32 object-cover" />
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#4267B2] text-white py-2 rounded">Facebook</button>
              <button className="bg-[#C13584] text-white py-2 rounded">Instagram</button>
              <button className="bg-black text-white py-2 rounded">Threads</button>
              <button className="bg-black text-white py-2 rounded">TikTok</button>
            </div>
          </div>

          {/* Center Info Card */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-[#333] mb-4 border-b pb-2">📄 Basic Information</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Plan:</strong> Free</p>
              </div>
              <button className="mt-4 bg-[#A78BFA] text-white px-5 py-2 rounded-lg hover:bg-[#8b6efb] transition">
                + Add Links
              </button>
            </div>

            {/* Published Links Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#333] mb-4 border-b pb-2">🔗 Published Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {["Instagram", "Facebook", "Threads", "TikTok"].map((platform, index) => (
                  <div key={index} className="bg-[#fdfdfd] shadow-inner rounded-xl p-4 flex justify-between items-start hover:bg-[#fafafa] transition">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{platform}</h4>
                      <p className="text-blue-600 text-sm truncate">https://link.to/{platform.toLowerCase()}</p>
                      <p className="text-gray-500 text-xs mt-1">10 clicks</p>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
