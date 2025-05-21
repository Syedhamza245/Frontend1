import React, { useState, useRef } from 'react';
import { Pencil } from 'lucide-react'; // npm install lucide-react

const ProfileDetails = () => {
  const [avatar, setAvatar] = useState(null);
  const [title, setTitle] = useState("justin");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur. Pharetra porttitor at ipsum viverra ullamcorper faucibus justo pellentesque."
  );
  const [isTitleEditable, setIsTitleEditable] = useState(false);
  const [isBioEditable, setIsBioEditable] = useState(false);
  const fileInputRef = useRef(null);

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">Add your profile details</h2>
      <p className="text-gray-500 mb-6">Here you add your all relevant links</p>

      {/* Avatar Section */}
      <div className="flex justify-center items-center space-x-4 mb-6 relative">
        <div className="relative">
          <img
            src={
              avatar
                ? avatar
                : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="profile"
            className="rounded-full w-20 h-20 object-cover"
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300"
          >
            <Pencil size={16} className="text-gray-600" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarUpload}
          />
        </div>
      </div>

      {/* Title */}
      <div className="relative mb-4">
        <input
          type="text"
          value={title}
          disabled={!isTitleEditable}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none ${
            isTitleEditable ? "border border-blue-400" : "border-transparent"
          }`}
        />
        <button
          onClick={() => setIsTitleEditable((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <Pencil size={18} />
        </button>
      </div>

      {/* Bio */}
      <div className="relative mb-6">
        <textarea
          rows={4}
          value={bio}
          disabled={!isBioEditable}
          onChange={(e) => setBio(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none resize-none ${
            isBioEditable ? "border border-blue-400" : "border-transparent"
          }`}
        />
        <button
          onClick={() => setIsBioEditable((prev) => !prev)}
          className="absolute right-3 top-3"
        >
          <Pencil size={18} />
        </button>
      </div>

      {/* <button className="w-full py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
        Continue
      </button> */}
    </div>
  );
};

export default ProfileDetails;
