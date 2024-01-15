import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage.jsx";
import { generateRandomName, makeRandomMessage } from "../../utils/helper.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice.js";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chatslice.messages);

  useEffect(() => {
    //API polling
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col-reverse justify-between w-full h-[520px] border border-black rounded-lg bg-gray-100 overflow-y-scroll">
      <div className=" ">
        {messages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({ name: "Daksh Dhama", message: liveChatMessage })
          );
          setLiveChatMessage("");
        }}
        className="flex absolute bottom-[52px]"
      >
        <input
          className="w-72 rounded-lg px-2 border border-gray-600"
          type="text"
          value={liveChatMessage}
          onChange={(e) => setLiveChatMessage(e.target.value)}
        />
        <button className="p-1 px-4 mx-4 rounded-lg bg-gray-300">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
