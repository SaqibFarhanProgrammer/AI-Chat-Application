import React from "react";
import { FiSettings } from "react-icons/fi";

export default function App() {
  return (
    <div className="bg-black text-white h-screen flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-gray-800 flex flex-col">
        {/* Logo / Title */}
        <div className="p-6 text-2xl font-bold tracking-wide border-b border-gray-800">
          ChatBot
        </div>

        {/* New Chat Button */}
        <button className="m-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition">
          + New Chat
        </button>

        {/* Previous Chats */}
        <nav className="flex-1 px-4 overflow-y-auto">
          <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
            Previous Chats
          </h2>
          <ul className="space-y-2">
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
              Project Ideas
            </li>
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
              AI Tips
            </li>
            <li className="p-2 rounded hover:bg-gray-800 cursor-pointer">
              Portfolio Help
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="p-4 border-t border-gray-800 flex items-center gap-2 cursor-pointer hover:bg-gray-800">
          <FiSettings size={20} />
          <span>Settings</span>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold">New Conversation</h1>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <p className="text-gray-400">
            Start typing your message to begin the conversation...
          </p>
        </div>

        {/* Chat Input */}
        <footer className="p-4 border-t border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gray-500"
            />
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Send
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
