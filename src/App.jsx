import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";
function App() {
  return (
    <div className="flex ">
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
