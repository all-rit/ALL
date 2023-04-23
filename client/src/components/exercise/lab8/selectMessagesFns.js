import { CHAT_MESSAGES } from "../../../constants/lab8";


// Select and shuffle messages to display in the chat room before the repair.
export function selectMessagesAiBias() {
  // Shuffle the messages and return them.
  const messages = shuffleArray(CHAT_MESSAGES.before_repair);

  return messages;
}

// // Select and shuffle messages to display in the chat room after the repair.
// export function selectMessagesRepair() {
//   // Shuffle the messages and return them.
//   const messages = shuffleArray(CHAT_MESSAGES.after_repair);

//   return messages;
// }

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
