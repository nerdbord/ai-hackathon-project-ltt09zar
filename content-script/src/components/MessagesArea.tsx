import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

const MessagesArea = () => {
  return (
    <div className="border-gray-300 border-[1px] w-full h-[400px] flex justify-between flex-col">
      <Messages />

      <ChatInput />
    </div>
  );
};

export default MessagesArea;
