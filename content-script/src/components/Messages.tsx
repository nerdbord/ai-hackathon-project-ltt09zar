import React from 'react'

type MessagesProps = {
  messages: string[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className=" h-full w-full overflow-y-auto p-8">
      {messages.map((message) => 
        <p className="mb-2 text-black">{message}</p>
      )}
    </div>
  );
}

export default Messages;
