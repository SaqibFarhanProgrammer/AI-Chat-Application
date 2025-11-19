import React, { useContext, useEffect, useState } from "react";
import chatquestions from "../../data";
import { context } from "../context/context";

function Chatboxes() {
  const { handlechatquestionssend } = useContext(context);
  const [chatsQuestion, setChatsQuestion] = useState([]);

  function getRandomChatQuestions() {
    const randomSet = [];
    for (let i = 0; i < 3; i++) {
      const q = chatquestions[Math.floor(Math.random() * chatquestions.length)];
      randomSet.push(q);
    }
    setChatsQuestion(randomSet);
  }

  useEffect(() => {
    getRandomChatQuestions();
  }, []);

  return (
    <div
      className="
        w-full
        flex flex-col gap-3
        px-4 py-3
        max-w-[900px] 
        max-[420px]:ml-10
        max-[420px]:h-[40vh]
        max-[420px]:mb-20
          mr-10
        max-[420px]:overflow-hidden
        sm:flex-row sm:justify-between 
      "
    >
      {chatsQuestion.map((chat, i) => (
        <div
          key={i}
          className="
            flex flex-col justify-between
            bg-black text-white 
            p-4 rounded-xl border border-white/10
            transition-all duration-300 hover:bg-zinc-800
            cursor-pointer
            h-[12vh]
            w-full
            sm:flex-1 sm:h-[14vh]
          "
        >
          <h1 className="text-sm sm:text-base leading-tight">{chat}</h1>

          <button
            onClick={() => handlechatquestionssend(chat)}
            className="
              text-xs sm:text-sm 
              px-3 py-1 mt-2 self-start
            "
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default Chatboxes;
