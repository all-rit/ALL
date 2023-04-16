import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { CHAT_MESSAGES } from "../../../../constants/lab8";

import PropTypes from "prop-types";

// Select random messages to display in the chat room.
function selectMessages() {
  const totalMessages = Math.floor(Math.random() * 3) + 4; // Random number between 4 and 6.
  const halfMessages = Math.floor(totalMessages / 2);

  // Process all the messages into buckets based on their type
  const incorrectKeep = CHAT_MESSAGES.recommend_keep.filter(
    (msg) => !msg.ai_correct
  );
  const incorrectRemove = CHAT_MESSAGES.recommend_remove.filter(
    (msg) => !msg.ai_correct
  );

  const correctKeep = CHAT_MESSAGES.recommend_keep.filter(
    (msg) => msg.ai_correct
  );
  const correctRemove = CHAT_MESSAGES.recommend_remove.filter(
    (msg) => msg.ai_correct
  );

  // Select random messages from each bucket to display in the chat room.
  const selectedKeep = [
    ...shuffleArray(incorrectKeep).slice(0, 1),
    ...shuffleArray(correctKeep).slice(0, halfMessages - 1),
  ];

  const selectedRemove = [
    ...shuffleArray(incorrectRemove).slice(0, 1),
    ...shuffleArray(correctRemove).slice(0, halfMessages - 1),
  ];

  // Shuffle the messages and return them.
  return shuffleArray([...selectedKeep, ...selectedRemove]);
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const ChatRoom = (props) => {
  const { moderationCompleteCallback } = props;

  const [messages] = useState(selectMessages());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moderationStatus, setModerationStatus] = useState(
    messages.map(() => false)
  );

  // callback for when button is clicked by user
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
    <div className="chat-room tw-space-y-6 tw-bg-[#ababab] tw-bg-opacity-20 tw-h-full tw-w-[50%] tw-p-4 tw-overflow-y-auto">
      {messages.slice(0, currentIndex).map((message, index) => {
        return (
          <ChatMessage
            key={index}
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
};

export default ChatRoom;
