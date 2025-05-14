import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signup from "../assests/signup.jpg";
import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex font-poppins">
      {/* Left Side with Gradient BG */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] relative flex flex-col">
        {/* MyApp Top Left */}
        <Link to="/" className="absolute top-6 left-10 text-ramp-blue-700 text-3xl font-bold">
          MyApp
        </Link>

        {/* Centered Content */}
        <div className="flex flex-col justify-center h-full px-10 mt-20 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Let’s get started</h2>
          <p className="text-gray-600 mb-8">Signup for free</p>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Email or Username"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {/* Password Field with Eye Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <AiFillEye size={22} />
                ) : (
                  <AiFillEyeInvisible size={22} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Signup */}
          <button className="flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition-all">
            <FcGoogle size={22} className="mr-3" />
            Signup with Google
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={signup}
          alt="Signup Visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
