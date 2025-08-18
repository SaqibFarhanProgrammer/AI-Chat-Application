// Sidebar.jsx
import React, { useState, useEffect, useRef, useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { gsap } from "gsap";
import naviconclose from "../assets/cions/icons8-arrow-50-2.png";
import naviconopen from "../assets/cions/icons8-arrow-50-4.png";

export default function Sidebar() {
  const [expand, setexpand] = useState(false);
  const sidebarRef = useRef(null);
  const fadeContentRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const items = fadeContentRef.current?.children || [];
    if (expand) {
      const tl = gsap.timeline();
      tl.to(sidebar, {
        width: "16rem",
        duration: 0.35,
        ease: "power3.out",
      }).fromTo(
        items,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.1"
      );
    } else {
      const tl = gsap.timeline();
      tl.to(items, {
        opacity: 0,
        x: -15,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      }).to(sidebar, {
        width: "4.3rem",
        duration: 0.3,
        ease: "power3.inOut",
      });
    }
  }, [expand]);

  return (
    <div
      ref={sidebarRef}
      onMouseEnter={() => setexpand(true)}
      onMouseLeave={() => setexpand(false)}
      className="h-screen w-[4.3rem] text-white flex flex-col border-r border-gray-900 shadow-lg sidebar backdrop-blur-[15px] overflow-hidden relative"
    >
      <div className="text-2xl flex items-center gap-10">
        {expand ? (
          <div className="flex gap-35 p-3 px-5 items-center text-2xl font-bold tracking-wide border-b border-gray-900 text-white">
            <p className="text2">AI</p>
            <img
              className="icon inset-0 h-[4vh] pr-7 cursor-pointer"
              alt=""
              src={naviconclose}
              onClick={() => setexpand(false)}
            />
          </div>
        ) : (
          <img
            onClick={() => setexpand(true)}
            className="icon inset-0 h-[3vh] pr-7 cursor-pointer m-4"
            src={naviconopen}
            alt=""
          />
        )}
      </div>

      {expand ? (
        <button
          onClick={() => setnewchat(false)}
          className="m-4 px-4 text-[12px] py-2 rounded-[5px] bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
        >
          + New Chat
        </button>
      ) : (
        <button className="m-[.7vw] flex  justify-center items-center relative h-[5vh] w-[2.5vw] rounded-[6px] bg-gradient-to-r from-gray-200 to-white text-black font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition">
          <p onClick={() => setnewchat(false)} className="text-2xl pb-1 ">
            +
          </p>
        </button>
      )}

      <div ref={fadeContentRef} className="flex flex-col flex-1">
        {expand ? (
          <div className="flex-1 overflow-y-auto px-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {["Previous Chat 1", "Previous Chat 2", "Previous Chat 3"].map(
              (chat, i) => (
                <div
                  key={i}
                  className="p-3 text-[12px] rounded-lg bg-grayborder border-transparent hover:border-white hover:bg-zinc-800 cursor-pointer transition"
                >
                  {chat}
                </div>
              )
            )}
          </div>
        ) : null}
      </div>

      {expand ? (
        <div className="p-4 w-full absolute bottom-0 flex items-center gap-3 cursor-pointer hover:bg-zinc-900/60 hover:text-gray-300 transition">
          <FiSettings size={20} />
          <span className="font-medium">Settings</span>
        </div>
      ) : (
        <FiSettings size={20} className="absolute bottom-4 left-5 text-[5vw]" />
      )}
    </div>
  );
}
