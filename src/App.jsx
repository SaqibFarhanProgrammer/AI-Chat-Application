import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";

function App() {
  const [func, setfunc] = useState();
  function getchat(answare) {
    setfunc(answare);
  }

  console.log(func);

  return (
    <div className="flex relative h-screen w-full App  bg-gradient-to-b from-transparent via-transparent  to-black">
      <Sidebar func={func} />
      <ChatBox getchat={getchat} />
    </div>
  );
}

export default App;
