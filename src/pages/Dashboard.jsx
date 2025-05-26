

// import React, { useState } from "react";
// import {
//   FaLink,
//   FaPalette,
//   FaChartBar,
//   FaCog,
//   FaFacebookF,
//   FaInstagram,
//   FaTiktok,
//   FaTrash,
//   FaShareAlt,
//   FaLock,
//   FaEdit
// } from "react-icons/fa";
// import { RiThreadsLine } from "react-icons/ri";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts";
// import profile from "../assests/hero-image.jpg";
// import banner from "../assests/signup.jpg";
// import Footer from "../components/Footer";
// import CustomHeader from "../components/CustomHeader";

// const dummyData = [
//   { day: "Mon", clicks: 50, views: 120 },
//   { day: "Tue", clicks: 70, views: 160 },
//   { day: "Wed", clicks: 90, views: 200 },
//   { day: "Thu", clicks: 40, views: 100 },
//   { day: "Fri", clicks: 100, views: 220 },
//   { day: "Sat", clicks: 80, views: 190 },
//   { day: "Sun", clicks: 60, views: 150 }
// ];

// const Dashboard = () => {
//   const [selectedTab, setSelectedTab] = useState("Links");
//   const [profileImage, setProfileImage] = useState(profile);
//   const [tagline, setTagline] = useState("Your profile tagline here");
//   const [isEditingTagline, setIsEditingTagline] = useState(false);
//   const [name, setName] = useState("John Doe");
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [links, setLinks] = useState([
//     { name: "Instagram", url: "https://link.to/instagram" },
//     { name: "Facebook", url: "https://link.to/facebook" },
//     { name: "Threads", url: "https://link.to/threads" },
//     { name: "TikTok", url: "https://link.to/tiktok" }
//   ]);
//   const [newLinkName, setNewLinkName] = useState("");
//   const [newLinkUrl, setNewLinkUrl] = useState("");

//   const handleTabClick = (tab) => setSelectedTab(tab);

//   const handleProfileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setProfileImage(URL.createObjectURL(file));
//   };

//   const handleTaglineSave = () => setIsEditingTagline(false);
//   const handleNameSave = () => setIsEditingName(false);

//   const handleDeleteLink = (index) => {
//     setLinks((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleAddLink = () => {
//     if (!newLinkName.trim() || !newLinkUrl.trim()) return;
//     setLinks((prev) => [...prev, { name: newLinkName.trim(), url: newLinkUrl.trim() }]);
//     setNewLinkName("");
//     setNewLinkUrl("");
//   };

//   const AppearanceContent = () => (
//     <div className="space-y-6">
//       <div className="bg-white rounded-2xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-[#333] mb-4">🎨 Themes</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="relative h-36 rounded-xl bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center text-white text-lg font-semibold cursor-pointer shadow-md"
//             >
//               Theme {i + 1}
//               {i >= 3 && (
//                 <div className="absolute top-2 right-2 text-yellow-500">
//                   <FaLock />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-[#333] mb-4">🖼 Backgrounds</h3>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//           {["#f8fafc", "#fef3c7", "#d1fae5", "#e0f2fe", "#fde68a", "#fbcfe8"].map((color, i) => (
//             <div
//               key={i}
//               className="h-12 w-12 rounded-full cursor-pointer shadow-md border"
//               style={{ backgroundColor: color }}
//             ></div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl shadow-md p-6">
//         <h3 className="text-xl font-semibold text-[#333] mb-4">🔠 Fonts</h3>
//         <div className="space-y-2">
//           {["Poppins", "Roboto", "Inter", "Open Sans"].map((font, i) => (
//             <div key={i} className="text-gray-700 cursor-pointer hover:font-bold">
//               {font}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );


// const AnalyticsContent = () => (
//     <div className="w-full px-6 py-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">📊 Analytics Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//         <div className="bg-white p-4 rounded-xl shadow-md text-center">
//           <p className="text-gray-500 text-sm">Total Clicks</p>
//           <h3 className="text-2xl font-bold text-[#4A4A4A]">490</h3>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md text-center">
//           <p className="text-gray-500 text-sm">Total Views</p>
//           <h3 className="text-2xl font-bold text-[#4A4A4A]">1140</h3>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md text-center">
//           <p className="text-gray-500 text-sm">Conversion Rate</p>
//           <h3 className="text-2xl font-bold text-[#4A4A4A]">42%</h3>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow-md text-center">
//           <p className="text-gray-500 text-sm">Active Links</p>
//           <h3 className="text-2xl font-bold text-[#4A4A4A]">4</h3>
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Weekly Clicks & Views</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={dummyData}>
//             <CartesianGrid stroke="#ccc" />
//             <XAxis dataKey="day" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="clicks" stroke="#A78BFA" strokeWidth={2} />
//             <Line type="monotone" dataKey="views" stroke="#4A4A4A" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <CustomHeader />
//       <div className="min-h-screen flex bg-gray-50">
//         {/* Sidebar */}
//         <aside className="w-64 bg-white shadow-lg p-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-8">MyApp</h1>
//           <nav className="space-y-4">
//             {["Links", "Appearance", "Analytics", "Settings"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => handleTabClick(tab)}
//                 className={`flex items-center w-full gap-3 px-4 py-2 rounded-lg transition ${
//                   selectedTab === tab
//                     ? "bg-indigo-100 text-indigo-600"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 {tab === "Links" && <FaLink />}
//                 {tab === "Appearance" && <FaPalette />}
//                 {tab === "Analytics" && <FaChartBar />}
//                 {tab === "Settings" && <FaCog />}
//                 <span>{tab}</span>
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* Main content */}
//         <main className="flex-1 p-8">
//           {selectedTab === "Links" && (
//             <section className="space-y-8">
//               {/* Profile Card */}
//               <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 text-center relative">
//                 <label className="inline-block relative mx-auto">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-200"
//                   />
//                   <div className="absolute bottom-3 right-1 bg-white p-2 rounded-full shadow">
//                     <FaEdit className="text-gray-600 text-lg" />
//                   </div>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleProfileChange}
//                     className="hidden"
//                   />
//                 </label>

//                 {isEditingName ? (
//                   <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     onBlur={handleNameSave}
//                     className="mt-4 text-xl font-semibold border-b-2 border-indigo-300 focus:outline-none"
//                     autoFocus
//                   />
//                 ) : (
//                   <h2 className="mt-4 text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2 cursor-pointer"
//                     onClick={() => setIsEditingName(true)}>
//                     {name}
//                     <FaEdit className="text-gray-400" />
//                   </h2>
//                 )}

//                 {isEditingTagline ? (
//                   <input
//                     value={tagline}
//                     onChange={(e) => setTagline(e.target.value)}
//                     onBlur={handleTaglineSave}
//                     className="mt-2 text-sm text-gray-600 border-b border-gray-300 focus:outline-none"
//                     autoFocus
//                   />
//                 ) : (
//                   <p
//                     className="mt-2 text-gray-600 cursor-pointer hover:text-indigo-600"
//                     onClick={() => setIsEditingTagline(true)}
//                   >
//                     {tagline} <FaEdit className="inline text-gray-400" />
//                   </p>
//                 )}
//               </div>

//               {/* Add Link Form */}
//               <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">➕ Add New Link</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Link Name"
//                     value={newLinkName}
//                     onChange={(e) => setNewLinkName(e.target.value)}
//                     className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-200"
//                   />
//                   <input
//                     type="text"
//                     placeholder="URL (https://...)"
//                     value={newLinkUrl}
//                     onChange={(e) => setNewLinkUrl(e.target.value)}
//                     className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-200"
//                   />
//                   <button
//                     onClick={handleAddLink}
//                     className="bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700 transition"
//                   >
//                     Add Link
//                   </button>
//                 </div>
//               </div>

//               {/* Published Links */}
//               <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">🔗 Your Links</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {links.map((link, idx) => (
//                     <div key={idx} className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
//                       <div>
//                         <p className="font-medium text-gray-800">{link.name}</p>
//                         <a
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm text-indigo-600 hover:underline"
//                         >
//                           {link.url}
//                         </a>
//                       </div>
//                       <div className="flex gap-3 text-gray-600">
//                         <FaShareAlt className="cursor-pointer hover:text-indigo-600" />
//                         <FaTrash className="cursor-pointer hover:text-red-500" onClick={() => handleDeleteLink(idx)} />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}

//           {selectedTab === "Appearance" && <AppearanceContent />}
//           {selectedTab === "Analytics" && <AnalyticsContent />}
//           {selectedTab === "Settings" && (
//             <div className="text-center text-gray-600 mt-20">⚙️ Settings are coming soon!</div>
//           )}
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaLink,
  FaPaintBrush,
  FaChartBar,
  FaCog
} from "react-icons/fa";
import { MdOutlineDelete, MdOutlineInsertLink } from "react-icons/md";
import Appearence from "../components/Appearence"
import Analytics from "../components/Analytics"

import CustomHeader from "../components/CustomHeader";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Links");

  const [profile, setProfile] = useState({
    name: "@Justin",
    role: "Influencer youtuber content creater",
    image:
      "https://static-00.iconduck.com/assets.00/avatar-default-icon-1024x1024-dvpl2mz1.png",
    banner:
      "https://img.freepik.com/premium-vector/energetic-businesswoman-running-with-banner-avatar-character_1339081-474.jpg",
  });

  const [links, setLinks] = useState([
    {
      title: "Youtube",
      url: "http://justin@vlogs.com",
      clicks: 12,
      enabled: true,
    },
    { title: "Spotify", url: "http://spotify.com/justin", clicks: 8, enabled: true },
  ]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
  };

  const toggleLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks[index].enabled = !updatedLinks[index].enabled;
    setLinks(updatedLinks);
  };

  const deleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  const addLink = () => {
    setLinks([
      ...links,
      { title: "New Link", url: "", clicks: 0, enabled: true },
    ]);
  };

  // COMPONENTS for different sections
  const LinksSection = () => (
    <>
      <section className="bg-[#3e0e69] text-white p-6 rounded-xl mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={profile.image}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "image")}
              className="absolute top-0 left-0 w-16 h-16 opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="bg-[#5d2890] p-1 rounded w-full"
            />
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleProfileChange}
              className="bg-[#5d2890] p-1 rounded w-full mt-2"
            />
            <div className="flex space-x-2 mt-2">
              <button className="bg-[#5d2890] px-2 py-1 rounded text-sm">Add</button>
              <button className="bg-[#5d2890] px-2 py-1 rounded text-sm">Add</button>
              <button className="bg-[#5d2890] px-2 py-1 rounded text-sm">Add</button>
              <button className="bg-[#5d2890] px-2 py-1 rounded text-sm">+</button>
            </div>
          </div>
        </div>
        <div className="relative mt-4">
          <img
            src={profile.banner}
            alt="Banner"
            className="w-full h-32 object-cover rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, "banner")}
            className="absolute top-0 left-0 w-full h-32 opacity-0 cursor-pointer"
          />
        </div>
        <button
          onClick={addLink}
          className="bg-[#a75cf8] text-white py-2 px-6 rounded-full mt-4"
        >
          Add links
        </button>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Published links</h2>
        {links.map((link, index) => (
          <div
            key={index}
            className="bg-[#e3edf7] p-4 rounded mb-4 flex justify-between items-center"
          >
            <div className="w-4/5">
              <input
                type="text"
                value={link.title}
                onChange={(e) =>
                  handleLinkChange(index, "title", e.target.value)
                }
                className="block mb-2 w-full rounded p-1 text-lg font-semibold"
              />
              <input
                type="text"
                value={link.url}
                onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                className="block w-full rounded p-1 text-sm"
              />
              <p className="text-purple-700 mt-1 text-sm">{link.clicks} clicks</p>
            </div>
            <div className="flex items-center space-x-2">
              <button>
                <MdOutlineInsertLink />
              </button>
              <button onClick={() => deleteLink(index)}>
                <MdOutlineDelete />
              </button>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={link.enabled}
                  onChange={() => toggleLink(index)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        ))}
      </section>
    </>
  );

  const AppearanceSection = () => (
    <div>
      <Appearence />
      {/* <h2 className="text-xl font-bold mb-4">Appearance Settings</h2>
      <p>Customize theme, colors, fonts, and styles here.</p> */}
    </div>
  );

  const AnalyticsSection = () => (
    <div>
     <Analytics />
    </div>
  );

  const SettingsSection = () => (
    <div>
      <h2 className="text-xl font-bold mb-4">General Settings</h2>
      <p>Change preferences, account settings, and privacy.</p>
    </div>
  );

  return (
    <>
      <CustomHeader />
      <div className="flex h-screen font-sans">
        {/* Sidebar */}
        <aside className="w-1/5 bg-[#e9edfb] p-6 space-y-6 text-lg">
          <div
            className={`cursor-pointer flex items-center space-x-2 ${
              activeSection === "Links" ? "text-purple-600 font-semibold" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("Links")}
          >
            <FaLink /> <span>Links</span>
          </div>
          <div
            className={`cursor-pointer flex items-center space-x-2 ${
              activeSection === "Appearance" ? "text-purple-600 font-semibold" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("Appearance")}
          >
            <FaPaintBrush /> <span>Appearance</span>
          </div>
          <div
            className={`cursor-pointer flex items-center space-x-2 ${
              activeSection === "Analytics" ? "text-purple-600 font-semibold" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("Analytics")}
          >
            <FaChartBar /> <span>Analytics</span>
          </div>
          <div
            className={`cursor-pointer flex items-center space-x-2 ${
              activeSection === "Settings" ? "text-purple-600 font-semibold" : "text-gray-600"
            }`}
            onClick={() => setActiveSection("Settings")}
          >
            <FaCog /> <span>Settings</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeSection === "Links" && <LinksSection />}
          {activeSection === "Appearance" && <AppearanceSection />}
          {activeSection === "Analytics" && <AnalyticsSection />}
          {activeSection === "Settings" && <SettingsSection />}
        </main>

        {/* Right Preview Panel */}
        <aside className="w-1/4 bg-gradient-to-b from-[#0c1e40] to-[#0d64c2] text-white p-6 rounded-xl overflow-auto">
          <div className="text-center">
            <img
              src={profile.image}
              alt="Profile"
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm mb-2">{profile.role}</p>

            <div className="flex justify-center space-x-4 text-xl mb-4">
              <FaFacebookF />
              <FaInstagram />
              <FaSpotify />
              <FaTiktok />
            </div>

            <img src={profile.banner} alt="Banner" className="rounded-lg mb-4" />
            <p className="mb-4">Justin website</p>

            {links.map(
              (link, index) =>
                link.enabled && (
                  <button
                    key={index}
                    className="block w-full bg-orange-400 text-black rounded px-4 py-2 mb-2 flex items-center justify-center space-x-2"
                  >
                    <img
                      src="https://via.placeholder.com/20"
                      alt="icon"
                      className="rounded-full"
                    />
                    <span>{link.title}</span>
                  </button>
                )
            )}

            <button className="mt-4 underline">MyApp</button>
          </div>
        </aside>
      </div>
    </>
  );
}
