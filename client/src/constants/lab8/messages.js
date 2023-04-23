// Sentiment analysis polarity meaning
// 0 - negative
// 1 - neutral
// 2 - positive
const CHAT_MESSAGES = {
  before_repair: [
    {
      username: "epic_panda",
      content: "watching your streams always puts me in a good mood",
      ai_polarity: 2,
      ai_correct: true,
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
      username: "xX_dark_dragon_Xx",
      content: "u r the w0r$t streamer ive ever seen",
      ai_polarity: 1,
      ai_correct: false,
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
      username: "ninja_wombat",
      content: "sweet usage of that potion to poison that playa.",
      ai_polarity: 0,
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      username: "gamerking42",
      content: "bro, your stream is straight up fire",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
  ],
  after_repair: [
    {
      username: "epic_panda",
      content: "watching your streams always puts me in a good mood",
      ai_polarity: 2,
      ai_correct: true,
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
      username: "xX_dark_dragon_Xx",
      content: "u r the w0r$t streamer ive ever seen",
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
      username: "ninja_wombat",
      content: "sweet usage of that potion to poison that playa.",
      ai_polarity: 2,
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      username: "gamerking42",
      content: "bro, your stream is straight up fire",
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

export { CHAT_MESSAGES, PREDATA_POINTS };
