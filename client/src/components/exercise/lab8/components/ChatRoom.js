import React, { useState, useEffect } from "react";
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
      message: "kinda mid",
      sentiment_score: "1",
    },
  ];

  const [moderationStatus, setModerationStatus] = useState(
    messages.map(() => false)
  );

  function handleModeration(index) {
    setModerationStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = true;
      return newStatus;
    });
  }

  useEffect(() => {
    const allModerated = moderationStatus.every((status) => status);
    if (allModerated) {
      console.log("All messages have been moderated.");
    }
  }, [moderationStatus]);

  return (
    <div className="tw-divide-y tw-space-y-6 tw-bg-[#ababab] tw-bg-opacity-20 tw-h-full tw-w-[50%] tw-p-4">
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            username={message.username}
            message={message.message}
            sentiment_score={message.sentiment_score}
            useModeration={true}
            onModeration={() => handleModeration(index)}
          />
        );
      })}
    </div>
  );
};

export default ChatRoom;
