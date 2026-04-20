export const STAGE_OPTIONS = {
  goal: [
    {
      id: "goal-1",
      text: "Explain a science concept that would help a student who is struggling to keep up with their class.",
      score: 1,
    },
    {
      id: "goal-2",
      text: "Help me understand Newton's Laws so I can do better on my next science assignment.",
      score: 2,
    },
    {
      id: "goal-3",
      text: "Give me a detailed breakdown of all the laws of motion so I have everything I need for class.",
      score: 3,
    },
    {
      id: "goal-4",
      text: "Explain Newton's First Law in simple terms for a middle school student.",
      score: 4,
    },
  ],
  context: [
    {
      id: "context-1",
      text: "I just need help with something from class, nothing too complicated.",
      score: 1,
    },
    {
      id: "context-2",
      text: "I'm reviewing material from this week's science class before a quiz.",
      score: 2,
    },
    {
      id: "context-3",
      text: "We covered forces in class and I want a quick refresher before tomorrow.",
      score: 3,
    },
    {
      id: "context-4",
      text: "This is for a class recap and I struggled with motion and forces this week.",
      score: 4,
    },
  ],
  sources: [
    {
      id: "sources-1",
      text: "Use whatever sources you think would give the clearest explanation for a student.",
      score: 1,
    },
    {
      id: "sources-2",
      text: "Look up a reliable source online that explains this topic clearly for students.",
      score: 2,
    },
    {
      id: "sources-3",
      text: "Use our textbook chapter on Forces as a reference.",
      score: 3,
    },
    {
      id: "sources-4",
      text: "Use our textbook chapter on Forces and cite one trustworthy educational source.",
      score: 4,
    },
  ],
  expectations: [
    {
      id: "expectations-1",
      text: "Explain it however you think is best, I just want to understand it.",
      score: 1,
    },
    {
      id: "expectations-2",
      text: "Write a clear explanation that covers the main idea without going into too much detail.",
      score: 2,
    },
    {
      id: "expectations-3",
      text: "Break it down into a few key points and include a simple example.",
      score: 3,
    },
    {
      id: "expectations-4",
      text: "Answer in 4 bullet points and include one real-world example.",
      score: 4,
    },
  ],
};

export const PROMPT_BUILDER_HEADING = "Prompt Builder";
export const PROMPT_BUILDER_DESCRIPTION =
  "Build your prompt part by part using GCSE. Choose the strongest option in each category to improve your prompt.";
export const PROMPT_COMPLETE_MESSAGE =
  "You wrote a complete prompt! Click next to see how ALL-IE will respond.";
export const PROMPT_QUESTION_TEMPLATE =
  "Choose a {label} statement for your prompt.";
