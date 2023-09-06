import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

import PropTypes from "prop-types";

const ChatRoom = (props) => {
  const {
    moderationCompleteCallback,
    messages: updatedMessages,
    selectMessages,
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [moderationStatus, setModerationStatus] = useState(
    (updatedMessages || selectMessages()).map(() => false)
  );

  const currentMessages = updatedMessages || selectMessages();

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
    if (currentIndex < currentMessages.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, Math.floor(Math.random() * 3000) + 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentMessages]);

  // when the component mounts or unmounts, clear the timeout
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  // check if all messages have been moderated
  useEffect(() => {
    const allModerated = moderationStatus.every((status) => status);
    if (allModerated) {
      moderationCompleteCallback();
    }
  }, [moderationStatus]);

  return (
    <div className="chat-room tw-space-y-6 tw-bg-[#ffffff] tw-bg-opacity-80 tw-h-[624px] tw-w-[35%] tw-p-4 tw-overflow-y-auto">
      {currentMessages.slice(0, currentIndex).map((message) => {
        return (
          <ChatMessage
            key={message.id}
            id={message.id}
            username={message.username}
            message={message.content}
            ai_polarity={message.ai_polarity}
            useModeration={true}
            onModeration={() => handleModeration(message.id)}
          />
        );
      })}
    </div>
  );
};

ChatRoom.propTypes = {
  moderationCompleteCallback: PropTypes.func.isRequired,
  messages: PropTypes.array,
  selectMessages: PropTypes.func.isRequired,
};

export default ChatRoom;
