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
        content: "30-50 years old",
      },
      {
        index: "3",
        content: "50+ years old",
      },
    ],
    type: "singleChoice",
  },
  {
    question: "What is your gender?",
    answers: [
      {
        index: "0",
        content: "Woman",
      },
      {
        index: "1",
        content: "Non-Binary",
      },
      {
        index: "2",
        content: "Man",
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
      "What demographic do you most closely identify with? (Check all that apply)",
    answers: [
      {
        index: "0",
        content: "Hispanic or Latino",
      },
      {
        index: "1",
        content: "White",
      },
      {
        index: "2",
        content: "Black or African American",
      },
      {
        index: "3",
        content: "Asian",
      },
      {
        index: "4",
        content: "Native Hawaiian or Other Pacific Islander",
      },
      {
        index: "5",
        content: "American Indian or Alaska Native",
      },
    ],
    type: "multiChoice",
  },
];

export default preSurveyQuestions;
