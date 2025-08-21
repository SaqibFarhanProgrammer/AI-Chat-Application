import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";

function App() {
  const [prevprompts, setprevprompts] = useState([]);
  function getchat(p) {
    setprevprompts(p);
  }

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="flex relative h-screen w-full App  bg-gradient-to-b from-transparent via-transparent  to-black">
      <Sidebar prevprompts={prevprompts} />
      <ChatBox getchat={getchat} />
    </div>
  );
}

export default App;
