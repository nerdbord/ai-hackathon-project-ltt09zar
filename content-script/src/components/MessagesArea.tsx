import React from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

type MessagesAreaPops = {
  addMessage: (question: string) => void;
  messages: string[];
}

const MessagesArea = ({ addMessage, messages }: MessagesAreaPops) => {
  return (
    <div className="border-gray-300 border-[1px] w-full h-[400px] flex justify-between flex-col">
      <Messages messages={messages} />
      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default MessagesArea;
