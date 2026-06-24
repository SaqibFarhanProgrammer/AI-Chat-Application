import React, { useContext, useEffect, useState } from "react";
import chatquestions from "../../data";
import { context } from "../context/context";
import { ArrowUpRight } from "lucide-react";

function Chatboxes() {
  const { handlechatquestionssend } = useContext(context);
  const [chatsQuestion, setChatsQuestion] = useState([]);

  function getRandomChatQuestions() {
    const shuffled = [...chatquestions].sort(() => 0.5 - Math.random());
    setChatsQuestion(shuffled.slice(0, 3));
  }

  useEffect(() => {
    getRandomChatQuestions();
  }, []);

  return (
    <div className="chatboxes-container">
      {chatsQuestion.map((chat, i) => (
        <div
          key={i}
          className="chatbox-card"
          onClick={() => handlechatquestionssend(chat)}
        >
          <p className="chatbox-text">{chat}</p>
          <div className="chatbox-action">
            <span>Try this</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chatboxes;