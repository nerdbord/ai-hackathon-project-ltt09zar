import React, { useState } from "react";
import Questions from "./Questions";
import Header from "./Header";
import MessagesArea from "./MessagesArea";
import { askOpenAI } from "@/api/main";
import { useProductName } from "@/hooks/useProductName";

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const { productName } = useProductName();

  const addMessage = (question: string) => {
    setMessages((prevMessagesArray) => [...prevMessagesArray, question]);
    askOpenAI(question, productName).then((response) => {
      if(response){
        setMessages((prevMessagesArray) => [...prevMessagesArray, response]);
      }
    });
  };

  return (
    <div className="space-y-4">
      <Header text="It's important to know the answers to these questions:" />
      <Questions addQuestion={addMessage} />
      <MessagesArea messages={messages} addMessage={addMessage} />
    </div>
  );
};

export default Chat;
