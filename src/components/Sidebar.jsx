// Sidebar.jsx
import React from "react";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white flex flex-col border-r border-gray-900 shadow-lg">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-gray-900 bg-gradient-to-r from-gray-900 to-black text-white shadow-md">
        ChatBot
      </div>

      <button className="m-4 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
        + New Chat
      </button>

      <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {["Previous Chat 1", "Previous Chat 2", "Previous Chat 3"].map(
          (chat, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-grayborder border-transparent hover:border-white hover:bg-zinc-800 cursor-pointer transition"
            >
              {chat}
            </div>
          )
        )}
      </div>

      <div className="p-4 border-t border-zinc-900 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 hover:text-gray-300 transition">
        <FiSettings size={20} />
        <span className="font-medium">Settings</span>
      </div>
    </div>
  );
}
