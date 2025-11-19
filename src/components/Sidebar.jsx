import { context } from "../context/context";
import React, { useContext, useState } from "react";
import { FiMenu, FiX, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { previousPrompts ,prepromptinchat } = useContext(context);

  return (
    <>
      {/* FIXED TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 *:
        left-4  *:
        max-[420px]:left-1
        max-[420px]:top-1
         
        z-50 text-white text-3xl p-2 rounded-md bg-black/40 backdrop-blur-xl hover:bg-black/60 transition"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* SIDEBAR */}
      <div
        className={`sidebar fixed top-0 h-screen w-[14rem] max-[640px]:w-[4.2rem]
        bg-black/40 backdrop-blur-xl text-white border-r border-white/10
        flex flex-col transition-all duration-300 z-40
        max-[420px]:w-[50vw]

        ${open ? "left-0" : "-left-full"}
      `}
      >
        {/* HEADER */}
        <div className="px-4 py-6 border-b border-white/10">
          {open ? (
            <p className="text-lg font-semibold tracking-wide">AI</p>
          ) : (
            <div className="text-center">
              <p className="text-sm">AI</p>
            </div>
          )}
        </div>

        {/* New Chat Button */}
        {open ? ( 
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="m-4 px-4 py-2 rounded-md bg-white text-black text-xs font-medium hover:scale-[1.03] transition"
          >
            + New Chat
          </button>
        ) : (
          <button className="mx-auto mt-4 h-10 w-10 rounded-md bg-white text-black text-xl flex items-center justify-center hover:scale-[1.03] transition">
            +
          </button>
        )}

        {/* PREVIOUS PROMPTS */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2 mt-2">
          {open &&
            previousPrompts.map((item, index) => (
              <div
              onClick={()=>prepromptinchat(item)}
                key={index}
                className="p-3 text-[12px] rounded-md    cursor-pointer transition"
              >
                {item}
              </div>
            ))}
        </div>

        {/* SETTINGS */}
        {open ? (
          <div className="px-4 py-4 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 transition border-t border-white/10">
            <FiSettings size={20} />
            <span className="text-sm">Settings</span>
          </div>
        ) : (
          <FiSettings
            size={23}
            className="absolute bottom-4 left-4 cursor-pointer"
          />
        )}
      </div>
    </>
  );
}
