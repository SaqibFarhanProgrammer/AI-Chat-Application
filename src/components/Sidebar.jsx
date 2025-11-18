import React, { useState, useEffect, useRef } from "react";
import { FiSettings } from "react-icons/fi";
import { gsap } from "gsap";
import naviconclose from "../assets/cions/icons8-arrow-50-2.png";
import naviconopen from "../assets/cions/icons8-arrow-50-4.png";

export default function Sidebar() {
  const [expand, setExpand] = useState(false);
  const sidebarRef = useRef(null);
  const fadeContentRef = useRef(null);
  const [prevprompts, setPrevPrompts] = useState([]);

  function getPrevPrompts() {
    setPrevPrompts((prev) => [...prev, localStorage.getItem("recentChats")]);
  }

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const items = fadeContentRef.current?.children || [];
    if (expand) {
      const tl = gsap.timeline();
      tl.to(sidebar, { width: "16rem", duration: 0.35, ease: "power3.out" }).fromTo(
        items,
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.08, ease: "power2.out" },
        "-=0.1"
      );
    } else {
      const tl = gsap.timeline();
      tl.to(items, { opacity: 0, x: -15, duration: 0.2, stagger: 0.05, ease: "power2.in" }).to(
        sidebar,
        { width: "4.3rem", duration: 0.3, ease: "power3.inOut" }
      );
    }
  }, [expand]);

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      className="h-screen w-[4.3rem] max-[640px]:w-[3.5rem] text-white flex flex-col border-r border-gray-900 shadow-lg sidebar backdrop-blur-[15px] overflow-hidden relative"
    >
      {/* Header */}
      <div className="text-2xl flex items-center gap-10">
        {expand ? (
          <div className="flex gap-8 p-3 px-5 items-center text-2xl font-bold tracking-wide border-b border-gray-900 text-white max-[640px]:px-3 max-[640px]:gap-4">
            <p className="text2 text-base max-[640px]:text-sm">AI</p>
            <img
              className="icon inset-0 h-[4vh] pr-7 cursor-pointer max-[640px]:h-[3vh] max-[640px]:pr-3"
              alt=""
              src={naviconclose}
              onClick={() => setExpand(false)}
            />
          </div>
        ) : (
          <img
            onClick={() => setExpand(true)}
            className="icon inset-0 h-[3vh] pr-7 cursor-pointer m-4 max-[640px]:h-[2.5vh] max-[640px]:pr-3 max-[640px]:m-2"
            src={naviconopen}
            alt=""
          />
        )}
      </div>

      {/* New Chat Button */}
      {expand ? (
        <button className="m-4 px-4 text-[12px] py-2 rounded-[5px] bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition max-[640px]:m-2 max-[640px]:px-3 max-[640px]:py-1 text-xs">
          + New Chat
        </button>
      ) : (
        <button className="m-[.7vw] flex justify-center items-center relative h-[5vh] w-[2.5vw] rounded-[6px] bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition max-[640px]:h-[4vh] max-[640px]:w-[10vw]">
          <p className="text-2xl pb-1 max-[640px]:text-xl">+</p>
        </button>
      )}

      {/* Previous Prompts */}
      <div ref={fadeContentRef} className="flex flex-col flex-1">
        {expand && (
          <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent max-[640px]:px-2">
            {prevprompts.map((chat, i) => (
              <div
                key={i}
                className="p-3 text-[12px] rounded-lg bg-grayborder border-transparent hover:border-white hover:bg-zinc-800 cursor-pointer transition max-[640px]:text-[10px] max-[640px]:p-2"
              >
                {chat}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Settings */}
      {expand ? (
        <div className="p-4 w-full absolute bottom-0 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 hover:text-gray-300 transition max-[640px]:p-2">
          <FiSettings size={20} />
          <span className="font-medium text-sm max-[640px]:text-xs">Settings</span>
        </div>
      ) : (
        <FiSettings
          size={20}
          className="absolute bottom-4 left-5 text-[5vw] max-[640px]:text-[6vw]"
        />
      )}
    </div>
  );
}
