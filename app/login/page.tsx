"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { FcGoogle } from "react-icons/fc"
import { SiGmail, SiLinkedin } from "react-icons/si"

export default function AdminLoginPage() {
  const [view, setView] = useState<"signin" | "signup">("signin")

  // Dummy handlers for social login
  const handleGoogle = () => alert("Continue with Google clicked!")
  const handleGmail = () => alert("Continue with Gmail clicked!")
  const handleLinkedin = () => alert("Continue with LinkedIn clicked!")

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Navbar at the top */}
      <Navbar />

      {/* Background image */}
      <Image
        src="/admin-bg.jpg"
        alt="Admin Login Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        priority
      />

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
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
                <div className="flex flex-col gap-3 mb-4">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    onClick={handleGmail}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <SiGmail className="text-xl text-red-500" />
                    Continue with Gmail
                  </button>
                  <button
                    type="button"
                    onClick={handleLinkedin}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-200 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <SiLinkedin className="text-xl text-blue-700" />
                    Continue with LinkedIn
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  or use your email for registration
                </p>
                <form className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
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
                <div className="flex flex-col gap-3 mb-4">
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-100 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    onClick={handleGmail}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-100 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <SiGmail className="text-xl text-red-500" />
                    Continue with Gmail
                  </button>
                  <button
                    type="button"
                    onClick={handleLinkedin}
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-blue-200 text-gray-700 font-semibold py-2 rounded transition"
                  >
                    <SiLinkedin className="text-xl text-blue-700" />
                    Continue with LinkedIn
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
    </div>
  )
}
