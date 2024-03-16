import React from "react";
import { ReactComponent as Send } from "../assets/SendSVG.svg";
const ChatInput = () => {
  return (
    <div className="h-12 w-full border-t  border-gray-300 flex gap-2 p-2">
      <input type="text" className="w-11/12 h-full bg-transparent" placeholder="Type a message..." />
      <Send className="w-1/12 h-full cursor-pointer" />
    </div>
  );
};

export default ChatInput;
