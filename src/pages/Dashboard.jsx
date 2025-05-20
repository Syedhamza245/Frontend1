

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
  FaLock,
  FaEdit
} from "react-icons/fa";
import { RiThreadsLine } from "react-icons/ri";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import profile from "../assests/hero-image.jpg";
import banner from "../assests/signup.jpg";
import Footer from "../components/Footer";
import CustomHeader from "../components/CustomHeader";

const dummyData = [
  { day: "Mon", clicks: 50, views: 120 },
  { day: "Tue", clicks: 70, views: 160 },
  { day: "Wed", clicks: 90, views: 200 },
  { day: "Thu", clicks: 40, views: 100 },
  { day: "Fri", clicks: 100, views: 220 },
  { day: "Sat", clicks: 80, views: 190 },
  { day: "Sun", clicks: 60, views: 150 }
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Links");
  const [profileImage, setProfileImage] = useState(profile);
  const [tagline, setTagline] = useState("Your profile tagline here");
  const [isEditingTagline, setIsEditingTagline] = useState(false);
  const [name, setName] = useState("John Doe");
  const [isEditingName, setIsEditingName] = useState(false);
  const [links, setLinks] = useState([
    { name: "Instagram", url: "https://link.to/instagram" },
    { name: "Facebook", url: "https://link.to/facebook" },
    { name: "Threads", url: "https://link.to/threads" },
    { name: "TikTok", url: "https://link.to/tiktok" }
  ]);
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");

  const handleTabClick = (tab) => setSelectedTab(tab);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleTaglineSave = () => setIsEditingTagline(false);
  const handleNameSave = () => setIsEditingName(false);

  const handleDeleteLink = (index) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddLink = () => {
    if (!newLinkName.trim() || !newLinkUrl.trim()) return;
    setLinks((prev) => [...prev, { name: newLinkName.trim(), url: newLinkUrl.trim() }]);
    setNewLinkName("");
    setNewLinkUrl("");
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
      <div className="min-h-screen flex bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">MyApp</h1>
          <nav className="space-y-4">
            {["Links", "Appearance", "Analytics", "Settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`flex items-center w-full gap-3 px-4 py-2 rounded-lg transition ${
                  selectedTab === tab
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab === "Links" && <FaLink />}
                {tab === "Appearance" && <FaPalette />}
                {tab === "Analytics" && <FaChartBar />}
                {tab === "Settings" && <FaCog />}
                <span>{tab}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {selectedTab === "Links" && (
            <section className="space-y-8">
              {/* Profile Card */}
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center relative">
                <label className="inline-block relative mx-auto">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                  />
                  <div className="absolute bottom-3 right-1 bg-white p-2 rounded-full shadow">
                    <FaEdit className="text-gray-600 text-lg" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileChange}
                    className="hidden"
                  />
                </label>

                {isEditingName ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleNameSave}
                    className="mt-4 text-xl font-semibold border-b-2 border-indigo-300 focus:outline-none"
                    autoFocus
                  />
                ) : (
                  <h2 className="mt-4 text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setIsEditingName(true)}>
                    {name}
                    <FaEdit className="text-gray-400" />
                  </h2>
                )}

                {isEditingTagline ? (
                  <input
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    onBlur={handleTaglineSave}
                    className="mt-2 text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
                    autoFocus
                  />
                ) : (
                  <p
                    className="mt-2 text-gray-600 cursor-pointer hover:text-indigo-600"
                    onClick={() => setIsEditingTagline(true)}
                  >
                    {tagline} <FaEdit className="inline text-gray-400" />
                  </p>
                )}
              </div>

              {/* Add Link Form */}
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">➕ Add New Link</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Link Name"
                    value={newLinkName}
                    onChange={(e) => setNewLinkName(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-200"
                  />
                  <input
                    type="text"
                    placeholder="URL (https://...)"
                    value={newLinkUrl}
                    onChange={(e) => setNewLinkUrl(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-200"
                  />
                  <button
                    onClick={handleAddLink}
                    className="bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700 transition"
                  >
                    Add Link
                  </button>
                </div>
              </div>

              {/* Published Links */}
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🔗 Your Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {links.map((link, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{link.name}</p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-indigo-600 hover:underline"
                        >
                          {link.url}
                        </a>
                      </div>
                      <div className="flex gap-3 text-gray-600">
                        <FaShareAlt className="cursor-pointer hover:text-indigo-600" />
                        <FaTrash className="cursor-pointer hover:text-red-500" onClick={() => handleDeleteLink(idx)} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {selectedTab === "Appearance" && <AppearanceContent />}
          {selectedTab === "Analytics" && <AnalyticsContent />}
          {selectedTab === "Settings" && (
            <div className="text-center text-gray-600 mt-20">⚙️ Settings are coming soon!</div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;