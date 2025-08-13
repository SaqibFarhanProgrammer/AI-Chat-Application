// Sidebar.jsx
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

export default function Sidebar({ massages }) {
  const [sidebar, setSidebar] = useState(false);

  console.log(massages);

  return (
    <div
      className={`h-screen ${sidebar ? "w-64" : "w-16"} ${
        massages.lentgh === 0
          ? " bg-gradient-to-b from-black via-[#0a0a0a] to-black"
          : "backdrop-blur-2xl  "
      } text-white flex flex-col border-r border-gray-900 shadow-lg transition-all duration-300`}
    >
      {/* Top Menu / Title */}
      <div className="flex items-center justify-between border-b border-gray-900 px-4 py-4">
        {sidebar ? (
          <h1 className="text-2xl font-bold tracking-wide">ChatBot</h1>
        ) : null}

        {/* Menu icon always visible */}
        <IoIosMenu
          className="text-3xl cursor-pointer"
          onClick={() => setSidebar(!sidebar)}
        />
      </div>

      {/* Sidebar content only if sidebar is true */}
      {sidebar && (
        <>
          {/* New Chat Button */}
          <button className="m-4 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition flex items-center gap-2">
            <FaPlus /> New Chat
          </button>

          {/* Previous Chats */}
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

          {/* Settings */}
          <div className="p-4 border-t border-zinc-900 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 hover:text-gray-300 transition">
            <FiSettings size={20} />
            <span className="font-medium">Settings</span>
          </div>
        </>
      )}
    </div>
  );
}
