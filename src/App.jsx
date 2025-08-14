import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";
import background from "./assets/bg (5).jpeg";
function App() {
  return (
    <div className="flex relative  App">
      <img
        src={background}
        className="absolute image h-[100%] w-[100%]  saturate-0 opacity-30 z-[-5]"
        alt=""
      />
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
