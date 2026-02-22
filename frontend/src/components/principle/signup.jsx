import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 text-white p-10">
          <h3 className="text-3xl font-extrabold mb-4">Join SomStudyHub</h3>
          <p className="text-center opacity-90">
            Create an account and start practicing past exams today.
          </p>
        </div>
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-6">
            Sign up to begin your learning journey.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
