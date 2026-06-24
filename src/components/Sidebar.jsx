import React, { useContext, useState } from "react";
import { context } from "../context/context";
import { FiMenu, FiX, FiSettings, FiMessageSquare, FiPlus } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { previousPrompts, prepromptinchat } = useContext(context);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sidebar-toggle"
      >
        {open ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FiMessageSquare size={20} />
            <span>Neura AI</span>
          </div>
        </div>

        {/* New Chat */}
        <button
          onClick={() => window.location.reload()}
          className="sidebar-newchat"
        >
          <FiPlus size={16} />
          <span>New Chat</span>
        </button>

        {/* Previous Prompts */}
        <div className="sidebar-prompts">
          <p className="sidebar-section-title">Recent</p>
          {previousPrompts.length === 0 && (
            <p className="sidebar-empty">No conversations yet</p>
          )}
          {previousPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => prepromptinchat(item)}
              className="sidebar-prompt-item"
              title={item}
            >
              <FiMessageSquare size={14} />
              <span>{item.length > 35 ? item.slice(0, 35) + "..." : item}</span>
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="sidebar-footer">
          <div className="sidebar-settings">
            <FiSettings size={18} />
            <span>Settings</span>
          </div>
        </div>
      </aside>
    </>
  );
}