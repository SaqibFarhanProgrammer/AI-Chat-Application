import React, { useEffect, useState } from "react";
import chatquestions from "../../data";
function ChatBoxes() {
  const [chatsQuestion, setchatsQuestion] = useState([]);
  function getRandomChatQuestions() {
    const randomSet = [];
    for (let i = 0; i < 3; i++) {
      const q = chatquestions[Math.floor(Math.random() * chatquestions.length)];
      randomSet.push(q);
    }
    setchatsQuestion(randomSet);
  }
  useEffect(() => {
    getRandomChatQuestions();
  }, []);

  return (
    <div className="w-[80%] h-40 flex items-center justify-between gap-4 px-6">
      {chatsQuestion.map((chat, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-end h-[14vh] bg-black text-white p-4 rounded-xl border border-white/10 
                     hover:bg-zinc-800  transition-all duration-300 cursor-pointer"
        >
          <h1 className="text-lg leading-tight">{chat}</h1>
          <button className="text-lg px-4 p-1 cursor-pointer      ">Add</button>
        </div>
      ))}
    </div>
  );
}

export default ChatBoxes;
