import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signup from "../assests/signup.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSignup = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleResend = () => {
    console.log("OTP resent");
  };

  const categories = [
    "Retail and ecommerce",
    "Beauty",
    "Real estate",
    "Food and beverage",
    "Other",
  ];

  return (
    <div className="min-h-screen flex font-poppins">
      {/* Left */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] relative flex flex-col">
        <Link to="/" className="absolute top-6 left-10 text-ramp-blue-700 text-3xl font-bold">MyApp</Link>

        <div className="flex flex-col justify-center h-full px-10 mt-20 md:mt-0">

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Let’s get started</h2>
              <p className="text-gray-600 mb-8">Signup for free</p>
              <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
                <input type="text" placeholder="Email or Username" className="px-4 py-3 border border-gray-300 rounded-md" />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md pr-12"
                  />
                  <span onClick={togglePassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500">
                    {showPassword ? <AiFillEye size={22} /> : <AiFillEyeInvisible size={22} />}
                  </span>
                </div>
                <button type="submit" className="bg-[#A78BFA] text-white py-3 rounded-md font-medium">Sign Up</button>
              </form>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <form onSubmit={handleUsernameSubmit} className="flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Username</h2>
              <input type="text" placeholder="Enter your username" className="px-4 py-3 border border-gray-300 rounded-md" />
              <button type="submit" className="bg-[#A78BFA] text-white py-3 rounded-md font-medium">Choose</button>
            </form>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(4); }} className="space-y-6">
              <h2 className="text-2xl font-semibold mb-2">Enter the OTP Code</h2>
              <p className="text-gray-500 text-sm">We sent a code to <span className="font-medium">****@gmail.com</span></p>
              <input type="text" placeholder="Enter OTP" className="w-full px-4 py-3 border border-gray-300 rounded-md" />
              <button type="button" onClick={handleResend} className="text-blue-600 hover:underline mt-1">Resend</button>
              <button type="submit" className="bg-[#A78BFA] text-white py-3 w-full rounded-md font-medium">Continue</button>
            </form>
          )}

          {/* Step 4 - Goal Selection */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="flex justify-center space-x-1">
                <div className="w-6 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-6 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-6 h-2 bg-gray-200 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Which best describes your goal for using <span className="text-orange-500">myapp</span></h2>
              <p className="text-sm text-gray-500">This helps us personalize your experience</p>

              {["Creator", "Business", "Personal"].map((goal) => (
                <div key={goal} className="border rounded-md p-4 hover:shadow cursor-pointer transition-all">
                  <h3 className="font-semibold">{goal}</h3>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              ))}

              <button className="bg-purple-500 text-white w-full py-3 rounded-full font-semibold mt-4" onClick={() => setStep(5)}>Continue</button>
            </div>
          )}

          {/* Step 5 - Business Category (your screenshot) */}
          {step === 5 && (
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-6 h-2 rounded-full ${i < 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-800">Select your business category</h2>
              <p className="text-sm text-gray-500">Choose the best that apply your niche.</p>

              <div className="space-y-2">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={`py-3 px-4 rounded-full cursor-pointer bg-[#e7eff7] hover:bg-[#d7e7f0] ${selectedCategory === cat && "ring-2 ring-purple-500"}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </div>
                ))}

                <textarea
                  placeholder="Share about your business here"
                  className="w-full p-3 rounded-md border border-gray-300 bg-[#e7eff7] mt-2"
                  value={businessDescription}
                  onChange={(e) => setBusinessDescription(e.target.value)}
                ></textarea>

                <button
                  onClick={() => setStep(6)}
                  className="bg-purple-500 text-white w-full py-3 rounded-full font-semibold mt-4"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 6 - Pricing (placeholder) */}
          {step === 6 && (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Pricing Page</h2>
              <p className="text-sm text-gray-500">Here you can choose your subscription or continue with free plan.</p><br/>
              <Link to="/pricing" className="bg-purple-600 text-white px-6 py-3 rounded-full">Start Free</Link>
            </div>
          )}

          {/* Login Link (only show on step 1) */}
          {step === 1 && (
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right side image */}
      <div className="hidden md:block w-1/2">
        <img src={signup} alt="Signup Visual" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Signup;
