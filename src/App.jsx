import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";
function App() {
  return (
    <div className="flex bg-gradient-to-b from-black to-zinc-900">
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
