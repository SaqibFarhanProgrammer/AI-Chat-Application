import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/Chatbox";

function App() {
  const [massages, setmassages] = useState(null);
  function getmassageslentghfromchild(lentgh) {
    setmassages(lentgh);
  }

  return (
    <div className="flex">
      <Sidebar massages={massages} />
      <ChatBox getmassageslentghfromchild={getmassageslentghfromchild} />
    </div>
  );
}

export default App;
