<<<<<<< HEAD
=======
import React from "react";
import Questions from "./Questions";
import Header from "./Header";
import MessagesArea from "./MessagesArea";

>>>>>>> 393f99e649d766a2ccb6f38811ed1798597dee3e
const Chat = () => {
  return (
    <div className="space-y-4">
      <Header text="It's important to know the answers to these questions:" />
      <Questions />
      <MessagesArea />
    </div>
  );
};

export default Chat;
