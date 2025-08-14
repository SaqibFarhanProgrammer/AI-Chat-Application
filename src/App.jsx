import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";
import background from "./assets/a (2).jpeg";
function App() {
  return (
    <div className="flex relative  App">
      <img
        src={background}
        className="absolute image h-[100%] w-[100%] top-50  saturate-0 opacity-30 z-[-5]"
        alt=""
      />
      <Sidebar />
      <ChatBox />
    </div>
  );
}

export default App;
