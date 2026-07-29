const preSurveyQuestions = [
  {
    question: "What is your age range?",
    answers: [
      {
        index: "0",
        content: "Under 18 years old",
      },
      {
        index: "1",
        content: "18-29 years old",
      },
      {
        index: "2",
        content: "30-44 years old",
      },
      {
        index: "3",
        content: "45-65 years old",
      },
      {
        index: "4",
        content: "65+ years old",
      },
    ],
    type: "singleChoice",
  },
  {
    question: "What is your gender?",
    answers: [
      {
        index: "0",
        content: "Female",
      },
      {
        index: "1",
        content: "Non-Binary",
      },
      {
        index: "2",
        content: "Male",
      },
      {
        index: "3",
        content: "Prefer not to answer",
      },
    ],
    type: "singleChoice",
  },
  {
    question:
      "What demographic do you most closely identify with? (Check all that apply).",
    answers: [
      {
        index: "0",
        content: "Hispanic / Latino /Latinx",
      },
      {
        index: "1",
        content: "White / European descent",
      },
      {
        index: "2",
        content: "Black / African descent",
      },
      {
        index: "3",
        content: "Asian",
      },
      {
        index: "4",
        content: "Middle Eastern / North African",
      },
      {
        index: "5",
        content: "Indigenous",
      },
      {
        index: "6",
        content: "Prefer not to answer",
      },
    ],
    type: "multiChoice",
  },
  {
    question:
      "Rank the following items in order of how important you view them in a software application.(1 being the most important and 4 being the least important).",
    answers: ["Security", "Software fairness", "Affordability", "Efficiency"],
    type: "ranking",
  },
];

export default preSurveyQuestions;
