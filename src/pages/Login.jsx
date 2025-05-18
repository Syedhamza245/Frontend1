import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import loginImg from "../assests/signup.jpg"; // same image for consistency
import { Link } from "react-router-dom";

const Login = () => {
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
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Login to your account</p>

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
                {showPassword ? <AiFillEye size={22} /> : <AiFillEyeInvisible size={22} />}
              </span>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={loginImg}
          alt="Login Visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
