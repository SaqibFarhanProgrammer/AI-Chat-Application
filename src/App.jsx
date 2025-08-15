import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";
import background from "./assets/images/New Project (1).jpg";

function App() {
  const [messageslentgh, setmessageslentgh] = useState(0);
  function getmessageslentghfromchild(messages) {
    setmessageslentgh(messages);
  }
  return (
    <div className="flex relative h-screen w-full App  bg-gradient-to-b from-transparent via-transparent  to-black">
      <img
        src={background}
        className="absolute image h-[100%] w-[100%] top-0   mix-blend-screen saturate-0 opacity-30 z-[-5]"
        alt=""
      />
      <Sidebar />
      <ChatBox getmessageslentghfromchild={getmessageslentghfromchild} />
    </div>
  );
}

export default App;
