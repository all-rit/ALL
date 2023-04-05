import React from "react";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const messages = [
    //Recheck sentiment scores and that they align with strings
    {
      username: "User828",
      message: "This is the best gameplay!",
      sentiment_score: "2",
    },
    {
      username: "User812",
      message: "This is the worst gameplay I have ever seen!",
      sentiment_score: "0",
    },
    {
      username: "User708",
      message: "Kinda mid",
      sentiment_score: "1",
    }
  ];

  return (
    <div className="chat-room">
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            username={message.username}
            message={message.message}
            sentiment_score={message.sentiment_score}
          />
        );
      })}
    </div>
  );
};

export default ChatRoom;
