// ChatBox.jsx
import React, { useEffect } from "react";
import Spotlight from "./Spotligth";

export default function ChatBox({ getmassageslentghfromchild }) {
  const messages = [];

  useEffect(() => {
    getmassageslentghfromchild(messages);
  }, []);

  return (
    <div className="w-full h-screen  bg-gradient-to-b from-black to-zinc-900   text-white flex flex-col overflow-hidden relative">
      {/* Spotlight background */}
      <Spotlight fill="white" className="top-[-110%] left-[-20%] opacity-5" />

      {/* Header */}
      <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between relative z-10">
        <h1 className="text-lg font-semibold">Chat with AI</h1>
        <span className="text-sm text-zinc-400">Desktop Mode</span>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto relative z-10 flex flex-col items-center justify-center p-6 space-y-5">
        {messages.length === 0 ? (
          <div className=" flex flex-col items-center">
            <h4 className="text-1xl">Ask Anything With </h4>
            <h3 className="text-5xl">Lexora AI</h3>
          </div>
        ) : (
          <>
            {/* Example AI message */}
            <div className="w-full flex justify-start">
              <div className="bg-zinc-900 px-5 py-3 rounded-2xl max-w-[70%] shadow-sm border border-transparent hover:border-zinc-700 transition">
                Hello! How can I help you today?
              </div>
            </div>

            {/* Example User message */}
            <div className="w-full flex justify-end">
              <div className="bg-white text-black px-5 py-3 rounded-2xl max-w-[70%] shadow-sm border border-transparent hover:border-zinc-300 transition">
                Can you explain how AI works?
              </div>
            </div>
          </>
        )}
      </div>

      {/* Input */}
      {/* Input */}
      <div className="p-6 border-t border-zinc-800 relative z-10">
        <div
          className="max-w-3xl mx-auto flex items-center gap-3 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 
    rounded-full px-5 py-2 border border-zinc-800
    focus-within:border-white/70 focus-within:shadow-[0_0_18px_rgba(255,255,255,0.2)] 
    transition-all duration-300 ease-in-out"
        >
          {/* Input Field */}
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-white placeholder-white/40 px-2 text-base tracking-wide"
          />

          {/* Send Button */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full 
      bg-white text-black shadow-md 
      hover:shadow-lg hover:scale-110 active:scale-95 
      transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
