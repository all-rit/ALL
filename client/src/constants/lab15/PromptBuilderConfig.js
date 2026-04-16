export const STAGE_OPTIONS = {
  goal: [
    {
      id: "goal-1",
      text: "Tell me about science.",
      score: 1,
    },
    {
      id: "goal-2",
      text: "Help me with science homework.",
      score: 2,
    },
    {
      id: "goal-3",
      text: "Explain Newton's First Law for 8th grade students.",
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
      text: "No extra context.",
      score: 1,
    },
    {
      id: "context-2",
      text: "I need this quickly.",
      score: 2,
    },
    {
      id: "context-3",
      text: "This is for a class recap on motion and forces.",
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
      text: "No source requirements.",
      score: 1,
    },
    {
      id: "sources-2",
      text: "Use anything online.",
      score: 2,
    },
    {
      id: "sources-3",
      text: "Use our textbook chapter on Forces.",
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
      text: "Give any answer.",
      score: 1,
    },
    {
      id: "expectations-2",
      text: "Make it short.",
      score: 2,
    },
    {
      id: "expectations-3",
      text: "Answer in 3 bullet points with a simple example.",
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
  "Choose the best {label} statement for your prompt.";
