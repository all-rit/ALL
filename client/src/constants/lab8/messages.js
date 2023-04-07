const CHAT_MESSAGES = {
  recommend_keep: [
    {
      username: "gamerking42",
      content: "bro, your stream is straight up fire",
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      username: "epic_panda",
      content: "watching your streams always puts me in a good mood",
      ai_correct: true,
      intended_polarity: 2,
    },
    {
      username: "l33t_haxor",
      content: "ur gameplay is so t3rr1b1e i cant stand to watch it anymore",
      ai_correct: false,
      intended_polarity: 0,
    },
    {
      username: "xX_dark_dragon_Xx",
      content: "u r the w0r$t streamer ive ever seen",
      ai_correct: false,
      intended_polarity: 0,
    },
    // ... more messages
  ],
  recommend_remove: [
    {
      username: "ninja_wombat",
      content: "sweet usage of that potion to poison that playa.",
      ai_correct: false,
      intended_polarity: 2,
    },
    {
      username: "pixelmom",
      content: "mom here, this game is so bad for our children. STOP THE STREAM!!!!!!",
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "racerdude100",
      content: "this game is terrible and ur stream isnt making it any better",
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "EpicGorillaGamer",
      content: "so bored id rather watch paint dry than continue watching ur stream",
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "cosmic_crusher404",
      content: "seen more skill from someone playing with their feet",
      ai_correct: true,
      intended_polarity: 0,
    },
    {
      username: "xXvenomBroXx",
      content: "pretty sure my cat could play this game better than u",
      ai_correct: true,
      intended_polarity: 0,
    },
    // ... more messages
  ],
}

const PREDATA_POINTS = {
  positive: [
    "I am happy",
  ],
  negative: [
    "you're terrible booo",
  ],
  neutral: [
    "I am tired today",
  ]
}

export { CHAT_MESSAGES, PREDATA_POINTS }