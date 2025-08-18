import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";

function App() {
  function getchat(answare) {}
  return (
    <div className="flex relative h-screen w-full App  bg-gradient-to-b from-transparent via-transparent  to-black">
      <Sidebar getchat={getchat} />
      <ChatBox />
    </div>
  );
}

export default App;
