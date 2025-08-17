import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";

function App() {
  return (
    <div className="flex relative h-screen w-full App  bg-gradient-to-b from-transparent via-transparent  to-black">
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
