import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

import PropTypes from "prop-types";

const ChatRoom = (props) => {
  const { moderationCompleteCallback, selectMessages } = props;

  const [messages] = useState(selectMessages());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moderationStatus, setModerationStatus] = useState(
    messages.map(() => false)
  );

  // callback for when keep/remove button is clicked by user
  function handleModeration(index) {
    setModerationStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index] = true;
      return newStatus;
    });
  }

  // randomly displays messages to the chat room
  useEffect(() => {
    if (currentIndex < messages.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, Math.floor(Math.random() * 3000) + 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, messages]);

  // when the component mounts or unmounts, clear the timeout
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  // when all messages have been moderated, log a message
  useEffect(() => {
    const allModerated = moderationStatus.every((status) => status);
    if (allModerated) {
      console.log("All messages have been moderated.");
      moderationCompleteCallback();
    }
  }, [moderationStatus]);

  return (
    <div className="chat-room tw-space-y-6 tw-bg-[#ababab] tw-bg-opacity-20 tw-h-[624px] tw-w-[50%] tw-p-4 tw-overflow-y-auto">
      {messages.slice(0, currentIndex).map((message, index) => {
        return (
          <ChatMessage
            key={index}
            id={message.id}
            username={message.username}
            message={message.content}
            ai_polarity={message.ai_polarity}
            useModeration={true}
            onModeration={() => handleModeration(index)}
          />
        );
      })}
    </div>
  );
};

ChatRoom.propTypes = {
  moderationCompleteCallback: PropTypes.func.isRequired,
  selectMessages: PropTypes.func.isRequired,
};

export default ChatRoom;
