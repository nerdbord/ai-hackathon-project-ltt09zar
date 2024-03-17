import React, { useState } from "react";
import { ReactComponent as Send } from "../assets/SendSVG.svg";
import { ChatInputProps } from "@/ts/types";

const ChatInput = ({ addMessage }: ChatInputProps) => {
  const [typedMessage, setTypedMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedMessage(e.target.value);
  }

  const handleSubmitMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addMessage(typedMessage);
    setTypedMessage("");
  }

  return (
    <form className="h-12 w-full border-t  border-gray-300 flex gap-2 p-2" onSubmit={handleSubmitMessage}>
      <input type="text" onChange={handleInputChange} value={typedMessage} className="w-11/12 h-full bg-transparent" placeholder="Type a message..." />
      <button type="submit" className="w-1/12 h-full"><Send /></button>
    </form>
  );
};

export default ChatInput;
