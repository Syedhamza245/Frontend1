import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1 = email, 2 = OTP, 3 = new password, 4 = success
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (step === 3 && newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setStep(step + 1);
  };

  const handleReset = (e) => {
    e.preventDefault();
    // TODO: API call to actually reset password
    setStep(4);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forgot Password</h2>
            <p className="text-gray-600 mb-6">Enter your email to receive an OTP code.</p>

            <form onSubmit={handleContinue} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="w-full bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
              >
                Continue
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter OTP</h2>
            <p className="text-gray-600 mb-6">An OTP has been sent to <span className="font-medium">{email}</span>.</p>

            <form onSubmit={handleContinue} className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="w-full bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
              >
                Continue
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create New Password</h2>
            <form onSubmit={handleReset} className="space-y-4">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter New Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="w-full bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
              >
                Reset Password
              </button>
            </form>
          </>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Password Changed</h2>
            <p className="text-gray-600 mb-6">Your password has been updated successfully.</p>
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
