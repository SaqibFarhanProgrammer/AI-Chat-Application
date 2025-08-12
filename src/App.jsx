import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="chat-window">
      {/* Messages area */}
      <div className="chat-messages">
        <div className="message bot">Hello, I’m your AI assistant.</div>
        <div className="message user">Tell me something interesting.</div>
        <div className="message bot">Did you know? Honey never spoils.</div>
      </div>

      {/* Input area */}
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
}
