import React, { useContext, useEffect, useState } from "react";
import chatquestions from "../../data";
import { context } from "../context/context";

function ChatBoxes() {
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
    <div className="
      w-full sm:w-[80%] mx-auto 
      sm:h-40 flex flex-col sm:flex-row 
      items-center sm:justify-between 
      gap-4 px-4 py-2
      max-[420px]:px-3
      max-[420px]:gap-3
      max-[420px]:h-110
      max-[420px]:mt-4
      max-[420px]:ml-4
            max-[420px]:flex-wrap

    ">
      {chatsQuestion.map((chat, i) => (
        <div
          key={i}
          className="
            flex-1 flex flex-col items-end 
            h-[10vh] sm:h-[10vh]
            max-[420px]:h-[10vh]
            bg-black text-white 
            p-3 sm:p- rounded-xl 
            border border-white/10 
            hover:bg-zinc-800 
            transition-all duration-300 
            cursor-pointer
            max-[420px]:w-[70vw]
            max-[420px]:p-4
          "
        >
          <h1 className="text-sm  sm:text-lg leading-tight">{chat}</h1>

          <button
            onClick={() => handlechatquestionssend(chat)}
            className="
              text-sm sm:text-lg 
              px-3 sm:px-4 py-1 
              cursor-pointer mt-2
            "
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChatBoxes;
