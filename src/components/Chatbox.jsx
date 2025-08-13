import React, { useState } from "react";
import { FiMenu, FiSettings, FiPlus } from "react-icons/fi";

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative w-screen h-screen bg-neutral-950 text-white flex">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Sidebar */}
      <div
        className={`h-full bg-black/50 border-r border-white/10 transition-all duration-300 flex flex-col ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-black border border-white/10 rounded-lg text-sm text-gray-400">
              U
            </div>
            {sidebarOpen && <span className="font-semibold">Profile</span>}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <FiMenu size={18} />
          </button>
        </div>

        {/* New Chat */}
        <button className="flex items-center gap-2 p-3 m-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition">
          <FiPlus size={18} />
          {sidebarOpen && <span>New Chat</span>}
        </button>

        {/* Previous Chats */}
        <div className="flex-1 overflow-y-auto px-3 space-y-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 cursor-pointer hover:bg-white/10 transition"
            >
              {sidebarOpen ? `Previous Chat ${i + 1}` : `C${i + 1}`}
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="p-3 border-t border-white/10">
          <button className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-white/10 transition">
            <FiSettings size={18} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <section className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <div>
            <div className="font-semibold">AI Chat</div>
            <div className="text-xs text-gray-400">
              Secure • Minimal • Black &amp; White
            </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex gap-3 items-start">
            <div className="w-9 h-9 flex items-center justify-center bg-black rounded-lg border border-white/10 text-xs text-gray-400">
              AI
            </div>
            <div className="bg-black/60 border border-white/10 rounded-xl p-3 shadow-lg">
              Hi! Main aapki madad ke liye yahan hoon. Kuch bhi poochhein. 🙂
            </div>
          </div>

          <div className="flex gap-3 items-start flex-row-reverse">
            <div className="w-9 h-9 flex items-center justify-center bg-black rounded-lg border border-white/10 text-xs text-gray-400">
              U
            </div>
            <div className="bg-black/80 border border-white/10 rounded-xl p-3 shadow-lg">
              Mujhe is UI ka clean, professional look chahiye — sirf HTML &amp;
              CSS.
            </div>
          </div>
        </main>

        {/* Input */}
        <footer className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex gap-2 items-end bg-black/50 border border-white/10 rounded-xl p-2">
            <textarea
              rows="1"
              placeholder="Type your message…"
              className="flex-1 resize-none bg-transparent outline-none text-white placeholder-gray-500 text-sm p-1"
            />
            <button className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm hover:bg-white/10 active:scale-95 transition">
              Send
            </button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            UI only — functionality add karne ke liye baad me JS lag sakta hai.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Chat;
