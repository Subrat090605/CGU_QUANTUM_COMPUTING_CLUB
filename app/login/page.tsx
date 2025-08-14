"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

export default function AdminLoginPage() {
  const [view, setView] = useState<"signin" | "signup">("signin")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative">
      {/* Background image */}
      <Image
        src="/admin-bg.jpg"
        alt="Admin Login Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        priority
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Left Side */}
        <div
          className={`w-1/2 p-10 flex flex-col justify-center items-center transition-all duration-500 ${
            view === "signin"
              ? "bg-gradient-to-br from-blue-500 to-purple-500"
              : "bg-white"
          }`}
        >
          {view === "signin" ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome Back!
              </h2>
              <p className="text-white mb-6 text-center text-sm">
                Enter your personal details to use all of site features
              </p>
              <button
                className="px-6 py-2 rounded border border-white text-white hover:bg-white hover:text-blue-600 transition font-semibold"
                onClick={() => setView("signup")}
              >
                Go to Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Hello, Friend!
              </h2>
              <p className="text-blue-600 mb-6 text-center text-sm">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="px-6 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-semibold"
                onClick={() => setView("signin")}
              >
                Go to Sign In
              </button>
            </>
          )}
        </div>
        {/* Right Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          {view === "signup" ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Create Account
              </h2>
              <div className="flex space-x-3 mb-4">
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-google"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-github"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                or use your email for registration
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white font-bold py-2 rounded hover:bg-blue-500 transition"
                >
                  SIGN UP
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In</h2>
              <div className="flex space-x-3 mb-4">
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-google"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-github"></i>
                </button>
                <button className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-blue-100">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                or use your email to sign in
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white font-bold py-2 rounded hover:bg-blue-500 transition"
                >
                  SIGN IN
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
