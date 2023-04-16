import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";

// Sentiment analysis polarity meaning
// 0 - negative
// 1 - neutral
// 2 - positive
const CHAT_MESSAGES = {
  // The AI recommends these messages to be kept
  recommend_keep: [
    {
      username: "gamerking42",
      content: "bro, your stream is straight up fire",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      username: "epic_panda",
      content: "watching your streams always puts me in a good mood",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      username: "l33t_haxor",
      content: "ur gameplay is so t3rr1b1e",
      ai_polarity: 1,
      ai_correct: false,
      intended_polarity: 0,
    },
    {
      username: "xX_dark_dragon_Xx",
      content: "u r the w0r$t streamer ive ever seen",
      ai_polarity: 1,
      ai_correct: false,
      intended_polarity: 0,
    },
    // ... more messages
  ],
  // The AI recommends these messages to be removed
  recommend_remove: [
    {
      username: "ninja_wombat",
      content: "sweet usage of that potion to poison that playa.",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      username: "pixelmom",
      content:
        "mom here, this game is so bad for our children. STOP THE STREAM!!!!!!",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "racerdude100",
      content: "this game is terrible and ur stream isnt making it any better",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "EpicGorillaGamer",
      content:
        "so bored id rather watch paint dry than continue watching ur stream",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "cosmic_crusher404",
      content: "seen more skill from someone playing with their feet",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "xXvenomBroXx",
      content: "pretty sure my cat could play this game better than u",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    // ... more messages
  ],
};

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

const ChatRoom = () => {
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

export default ChatRoom;
