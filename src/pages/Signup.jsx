import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signup from "../assests/signup.jpg";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignup = (e) => {
    e.preventDefault();
    // Normally, you'd call an API to send OTP here
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd verify OTP here
    navigate("/MultiStepSlider");
  };

  return (
    <div className="min-h-screen flex font-poppins">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] relative flex flex-col justify-center px-10">
        <Link to="/" className="absolute top-6 left-10 text-ramp-blue-700 text-3xl font-bold">MyApp</Link>

        {step === 1 && (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600 mb-8">Sign up with your email</p>
            <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
              <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-md" required />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md pr-12"
                  required
                />
                <span onClick={togglePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                  {showPassword ? <AiFillEye size={22} /> : <AiFillEyeInvisible size={22} />}
                </span>
              </div>
              <button type="submit" className="bg-[#A78BFA] text-white py-3 rounded-md font-medium">Sign Up</button>
            </form>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
              </p>
            </div>
          </>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-2">Enter OTP</h2>
            <p className="text-gray-500 text-sm">A code was sent to your email</p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="bg-[#A78BFA] text-white py-3 w-full rounded-md font-medium">Continue</button>
          </form>
        )}
      </div>

      {/* Right Image */}
      <div className="hidden md:block w-1/2">
        <img src={signup} alt="Signup Visual" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Signup;
