// Sidebar.jsx
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import naviconclose from "../assets/cions/icons8-arrow-50-2.png";
import naviconopen from "../assets//cions/icons8-arrow-50-4.png";

export default function Sidebar() {
  const [expand, setexpand] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setexpand(true);
      }}
      onMouseLeave={() => {
        setexpand(false);
      }}
      className={`h-screen ${
        expand ? "w-64" : "w-17"
      }    text-white flex flex-col border-r 0 border-gray-900 shadow-lg sidebar `}
    >
      <div className=" text-2xl flex items-center gap-10">
        {expand ? (
          <div className=" flex gap-35 p-3 px-5 items-center text-2xl font-bold tracking-wide border-b border-gray-900  text-white ">
            <p className="text2">AI</p>
            <img
              className="icon inset-0 h-[5vh]  pr-7 cursor-pointer "
              alt=""
              src={naviconclose}
              onClick={() => setexpand(false)}
            />
          </div>
        ) : (
          <img
            onClick={() => setexpand(true)}
            className="icon inset-0 h-[5vh] pr-7 cursor-pointer m-4  "
            src={naviconopen}
            alt=""
          />
        )}
      </div>
      {expand ? (
        <button className="m-4 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          + New Chat
        </button>
      ) : (
        <button className="m-[.7vw] relative   h-[5.5vh] w-[3vw] rounded-lg bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          <p className="text-4xl bottom-1 left-2 absolute ">+</p>
        </button>
      )}

      {expand ? (
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
      ) : null}
      {expand ? (
        <div className="p-4  w-[100%] absolute bottom-0  flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 hover:text-gray-300 transition">
          <FiSettings size={20} />
          <span className="font-medium">Settings</span>
        </div>
      ) : (
        <FiSettings
          size={20}
          className="absolute bottom-4 left-5  text-[5vw]"
        />
      )}
    </div>
  );
}
