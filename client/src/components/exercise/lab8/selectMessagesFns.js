import { CHAT_MESSAGES } from "../../../constants/lab8";

const totalMessages = 6;
const halfMessages = Math.floor(totalMessages / 2);

// Select random messages to display in the chat room including AI incorrect messages.
export function selectMessagesAiBias() {
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

// // Select random messages to display in the chat room, but only correct messages.
// export function selectMessagesAiRepaired() {
//   // Process all the messages into buckets based on their type
//   const correctKeep = CHAT_MESSAGES.recommend_keep.filter(
//     (msg) => msg.ai_correct
//   );
//   const correctRemove = CHAT_MESSAGES.recommend_remove.filter(
//     (msg) => msg.ai_correct
//   );

//   // Select random messages from each bucket to display in the chat room.
//   const selectedKeep = shuffleArray(correctKeep).slice(0, halfMessages);
//   const selectedRemove = shuffleArray(correctRemove).slice(0, halfMessages);

//   // Shuffle the messages and return them.
//   return shuffleArray([...selectedKeep, ...selectedRemove]);
// }

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}