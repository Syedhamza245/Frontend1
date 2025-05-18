import React, { useState } from "react";
import {
  FaLink,
  FaPalette,
  FaChartBar,
  FaCog,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTrash,
  FaShareAlt,
  FaLock
} from "react-icons/fa";
import { RiThreadsLine } from "react-icons/ri";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import profile from "../assests/hero-image.jpg";
import banner from "../assests/signup.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CustomHeader from "../components/CustomHeader";

// Dummy data for analytics
const dummyData = [
  { day: "Mon", clicks: 50, views: 120 },
  { day: "Tue", clicks: 70, views: 160 },
  { day: "Wed", clicks: 90, views: 200 },
  { day: "Thu", clicks: 40, views: 100 },
  { day: "Fri", clicks: 100, views: 220 },
  { day: "Sat", clicks: 80, views: 190 },
  { day: "Sun", clicks: 60, views: 150 },
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Links");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const AppearanceContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-[#333] mb-4">🎨 Themes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative h-36 rounded-xl bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center text-white text-lg font-semibold cursor-pointer shadow-md"
            >
              Theme {i + 1}
              {i >= 3 && (
                <div className="absolute top-2 right-2 text-yellow-500">
                  <FaLock />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-[#333] mb-4">🖼 Backgrounds</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {["#f8fafc", "#fef3c7", "#d1fae5", "#e0f2fe", "#fde68a", "#fbcfe8"].map((color, i) => (
            <div
              key={i}
              className="h-12 w-12 rounded-full cursor-pointer shadow-md border"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-[#333] mb-4">🔠 Fonts</h3>
        <div className="space-y-2">
          {["Poppins", "Roboto", "Inter", "Open Sans"].map((font, i) => (
            <div key={i} className="text-gray-700 cursor-pointer hover:font-bold">
              {font}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AnalyticsContent = () => (
    <div className="w-full px-6 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Analytics Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <p className="text-gray-500 text-sm">Total Clicks</p>
          <h3 className="text-2xl font-bold text-[#4A4A4A]">490</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <p className="text-gray-500 text-sm">Total Views</p>
          <h3 className="text-2xl font-bold text-[#4A4A4A]">1140</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <p className="text-gray-500 text-sm">Conversion Rate</p>
          <h3 className="text-2xl font-bold text-[#4A4A4A]">42%</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md text-center">
          <p className="text-gray-500 text-sm">Active Links</p>
          <h3 className="text-2xl font-bold text-[#4A4A4A]">4</h3>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Weekly Clicks & Views</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dummyData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="clicks" stroke="#A78BFA" strokeWidth={2} />
            <Line type="monotone" dataKey="views" stroke="#4A4A4A" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <>
      <CustomHeader />
      <div className="min-h-screen flex font-poppins bg-[#f5f7fa]">
        {/* Sidebar */}
        <div className="w-1/5 bg-white shadow-lg px-6 py-10 space-y-8">
          <h1 className="text-2xl font-bold text-[#4A4A4A] mb-6">MyApp</h1>
          <div className="space-y-6">
            {["Links", "Appearance", "Analytics", "Settings"].map((tab) => (
              <div
                key={tab}
                className={`flex items-center gap-3 cursor-pointer ${
                  selectedTab === tab ? "text-[#A78BFA]" : "text-gray-700 hover:text-[#A78BFA]"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab === "Links" && <FaLink />}
                {tab === "Appearance" && <FaPalette />}
                {tab === "Analytics" && <FaChartBar />}
                {tab === "Settings" && <FaCog />}
                <span>{tab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5 px-10 py-8 bg-[#f0f2f5]">
          {selectedTab === "Links" ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Card */}
              <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md p-6 text-center">
                <img src={profile} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
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

              {/* Info & Links */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                  <h2 className="text-xl font-semibold text-[#333] mb-4 border-b pb-2">
                    📄 Basic Information
                  </h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john@example.com</p>
                    <p><strong>Plan:</strong> Free</p>
                  </div>
                  <button className="mt-4 bg-[#A78BFA] text-white px-5 py-2 rounded-lg hover:bg-[#8b6efb] transition">
                    + Add Links
                  </button>
                </div>

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
                          <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                          <button className="text-gray-600 hover:text-gray-800"><FaShareAlt /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : selectedTab === "Appearance" ? (
            <AppearanceContent />
          ) : selectedTab === "Analytics" ? (
            <AnalyticsContent />
          ) : (
            <div className="text-center text-gray-500 mt-10">⚙️ Settings Page Coming Soon</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
