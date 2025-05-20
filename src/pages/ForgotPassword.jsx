import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import loginImg from "../assests/signup.jpg"; // same image for consistency
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call your API to send reset link
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
        {!emailSent ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forgot Password</h2>
            <p className="text-gray-600 mb-6">Enter your email to receive a reset link.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-blue-600 hover:underline">
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Link Sent!</h2>
            <p className="text-gray-600 mb-6">We&rsquo;ve sent a password reset link to <span className="font-medium">{email}</span>.</p>
            <button
              onClick={() => setEmailSent(false)}
              className="mb-4 w-full bg-[#A78BFA] text-white py-3 rounded-md font-medium hover:opacity-90 transition-all"
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
