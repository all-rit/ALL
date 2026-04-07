export const STAGE_OPTIONS = {
  goal: [
    {
      id: "goal-1",
      text: "Help me with science.",
      score: 1,
    },
    {
      id: "goal-2",
      text: "Explain Newton's First Law in simple terms for a middle school student.",
      score: 3,
    },
  ],
  context: [
    {
      id: "context-1",
      text: "I need this quickly.",
      score: 1,
    },
    {
      id: "context-2",
      text: "This is for a class recap and I struggled with motion and forces this week.",
      score: 3,
    },
  ],
  sources: [
    {
      id: "sources-1",
      text: "Use anything online.",
      score: 1,
    },
    {
      id: "sources-2",
      text: "Use our textbook chapter on Forces and cite one trustworthy educational source.",
      score: 3,
    },
  ],
  expectations: [
    {
      id: "expectations-1",
      text: "Make it short.",
      score: 1,
    },
    {
      id: "expectations-2",
      text: "Answer in 4 bullet points and include one real-world example.",
      score: 3,
    },
  ],
};

export const PROMPT_BUILDER_HEADING = "Prompt Builder";
export const PROMPT_BUILDER_DESCRIPTION =
  "Build your prompt part by part using GCSE. Choose the strongest option in each category to improve your prompt.";
export const PROMPT_COMPLETE_PASSED_MESSAGE =
  "Prompt complete. You passed the quality threshold.";
export const PROMPT_COMPLETE_FAILED_MESSAGE =
  "Prompt complete, but score is below passing. Use the back button to redo your choices.";
export const PROMPT_QUESTION_TEMPLATE =
  "Choose the best {label} statement for your prompt.";
