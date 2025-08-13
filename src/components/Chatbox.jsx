// ChatBox.jsx
import React from "react";
import Spotlight from "./Spotligth";

export default function ChatBox() {
  return (
    <div className="w-full h-screen bg-black text-white shadow-2xl border border-zinc-900 flex flex-col overflow-hidden relative">
      {/* Top Spotlight (Tailwind style) */}

      {/* Header */}
      <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between relative z-10">
        <h1 className="text-lg font-semibold tracking-tight">Chat with AI</h1>
        <span className="text-sm text-zinc-400">Desktop Mode</span>
      </div>
      <Spotlight fill="gray" className="top-[-110%] left-[-20%]" />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent relative z-10">
        {/* AI Message */}
        <div className="flex items-start">
          <div className="bg-zinc-900 px-5 py-3 rounded-2xl max-w-[70%] shadow-md border border-transparent hover:border-zinc-700 transition">
            Hello! How can I help you today?
          </div>
        </div>

        {/* User Message */}
        <div className="flex items-start justify-end">
          <div className="bg-white text-black px-5 py-3 rounded-2xl max-w-[70%] shadow-md border border-transparent hover:border-zinc-300 transition">
            Can you explain how AI works?
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-zinc-800 bg-black relative z-10">
        <div className="flex items-center bg-zinc-900/70 backdrop-blur-md rounded-full px-4 py-2 border border-zinc-800 focus-within:border-white focus-within:shadow-[0_0_8px_rgba(255,255,255,0.2)] transition">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-white placeholder-zinc-500 px-2 text-sm"
          />

          <button className="ml-2 px-5 py-1.5 bg-white text-black rounded-full hover:bg-zinc-200 transition font-medium shadow-sm hover:shadow">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
