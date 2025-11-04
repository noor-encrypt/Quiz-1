import React from "react";

export default function LoginPage() {
  return (
    <div className="flex justify-center py-12 bg-gradient-to-br from-gray-50 to-gray-200 min-h-[calc(100vh-80px)]">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Log in to Airbnb
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 shadow-md transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-gray-600 mt-5 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-500 font-medium hover:underline">
            Sign Up
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social logins */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 py-3 rounded-xl hover:bg-white transition font-medium">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-gray-50 py-3 rounded-xl mt-3 hover:bg-white transition font-medium">
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook"
            className="w-5 h-5"
          />
          Facebook
        </button>
      </div>
    </div>
  );
}
