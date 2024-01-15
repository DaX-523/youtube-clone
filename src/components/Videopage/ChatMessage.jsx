import React from "react";
import { USER_ICON_URL } from "../../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center hover:bg-slate-50 p-1">
      <img className="w-12 h-12 py-2" src={USER_ICON_URL} alt="user-icon" />
      <span className="px-1 pr-2 font-bold ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
