// Sidebar.jsx
import React from "react";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col border-r border-gray-800">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-gray-800">
        ChatBot
      </div>

      {/* New Chat Button */}
      <button className="m-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
        + New Chat
      </button>

      {/* Previous Chats */}
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        <div className="p-3 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer transition">
          Previous Chat 1
        </div>
        <div className="p-3 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer transition">
          Previous Chat 2
        </div>
        <div className="p-3 rounded-lg bg-gray-900 hover:bg-gray-800 cursor-pointer transition">
          Previous Chat 3
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-gray-800 flex items-center gap-3 cursor-pointer hover:bg-gray-900 transition">
        <FiSettings size={20} />
        <span>Settings</span>
      </div>
    </div>
  );
}
