// Sentiment analysis polarity meaning
// 0 - negative
// 1 - neutral
// 2 - positive
const CHAT_MESSAGES = {
  messages: [
    {
      id: 0,
      username: "epic_panda",
      content: "Great use of the star gun to destroy everyone!",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      id: 1,
      username: "gamer4life",
      content: "Nice move, now jump and kill that turtle!",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      id: 2,
      username: "blaze_bolt",
      content: "Your streams are always awesome",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      id: 3,
      username: "cosmic_champion",
      content: "You totally destroyed that monkey with your fireballs!",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      id: 4,
      username: "turbo_tiger",
      content: "My mom can play this game better than you",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      id: 5,
      username: "gamerking42",
      content: "Doing great! Blast the castle with your cannon!",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      id: 6,
      username: "pixel_pioneer",
      content: "You SUCK! Your streams are so boring!",
      ai_polarity: 0,
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      id: 7,
      username: "cyberscribe",
      content: "This is the best stream I have ever seen!",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
  ],
};

const PREDATA_POINTS = {
  positive: ["I am happy"],
  negative: ["you're terrible booo"],
  neutral: ["I am tired today"],
};

function getMessages() {
  return CHAT_MESSAGES.messages;
}

export { CHAT_MESSAGES, PREDATA_POINTS, getMessages };
