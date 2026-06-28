import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      // login() saves token + user to state and localStorage
      // AppRouter will automatically redirect to /dashboard
    } catch (error: any) {
      setError(error.response?.data?.message || "Invalid email or password.");
      console.error("Login failed:", error);
      // You can add an error state here later to show a message to the user
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F7F9EE] px-4 font-sans text-[#2D311B]">
      {/* Header / Brand Logo Section */}
      <div className="mb-6 flex flex-col items-center text-center">
        {/* Custom App Icon */}
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#324525] text-[#C0E763]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Herath SuperPOS</h1>
        <p className="text-xs font-medium text-[#7C8465] mt-0.5">
          Supermarket Administration Portal
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-110 overflow-hidden rounded-[28px] bg-white border border-[#E5E9D5] shadow-lg shadow-[#1c2415/0.03]">
        {/* Accent Top Bar */}
        <div className="h-2 bg-[#4D6636]"></div>

        <form onSubmit={handleSubmit} className="p-8 sm:p-10">
          {/* Admin Email Input */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-xs font-bold tracking-wider text-[#4D5335] uppercase mb-2"
            >
              Admin Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#A1AA84]">
                <span className="text-lg">@</span>
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@superpos.com"
                required
                className="w-full rounded-xl border border-[#E1E6CE] bg-[#F7F9EE]/50 py-3.5 pl-11 pr-4 text-sm font-medium text-[#2D311B] placeholder-[#BAC29E] transition-all duration-200 outline-none focus:border-[#4D6636] focus:bg-white focus:ring-2 focus:ring-[#4D6636]/10"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="password"
                className="text-xs font-bold tracking-wider text-[#4D5335] uppercase"
              >
                Password
              </label>
              <a
                href="#forgot"
                className="text-xs font-bold text-[#4D6636] hover:underline"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#A1AA84]">
                {/* Padlock Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-[#E1E6CE] bg-[#F7F9EE]/50 py-3.5 pl-11 pr-11 text-sm font-medium text-[#2D311B] placeholder-[#BAC29E] transition-all duration-200 outline-none focus:border-[#4D6636] focus:bg-white focus:ring-2 focus:ring-[#4D6636]/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#A1AA84] hover:text-[#4D5335]"
              >
                {/* Eye Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C1F161] py-3.5 text-sm font-bold text-[#233513] shadow-md shadow-[#C1F161]/20 transition-all duration-200 hover:bg-[#b5e454] active:scale-[0.99]"
          >
            Login to Dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          {/* Divider Line */}
          <div className="my-6 border-t border-[#F0F3E6]"></div>

          {/* Technical Support Footer inside card */}
          <p className="text-center text-xs font-medium text-[#7C8465]">
            Need technical assistance?{" "}
            <a
              href="#support"
              className="font-bold text-[#4D6636] hover:underline"
            >
              Contact support
            </a>
          </p>
        </form>
      </div>

      {/* System Status Footer */}
      <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-semibold text-[#A1AA84]">
        <div className="flex items-center gap-1.5 rounded-full bg-[#E5EAD2] px-2.5 py-1 text-[#2B4518]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#40AA22] animate-pulse"></span>
          SYSTEMS OPERATIONAL
        </div>
        <span>v1.0-stable</span>
      </div>
    </div>
  );
}
