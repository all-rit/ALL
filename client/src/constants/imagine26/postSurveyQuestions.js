//we need to updated pre/post survey questions
const postSurveyQuestions = [
  {
    question:
      "How much sympathy did you feel for the person affected by the deepfake?",
    type: "likert",
  },
  {
    question: "To what extent do you generally trust the information you see online?",
    type: "likert",
  },
  {
    question:
      "Measure Empathy",
      answers: [
        {
          index: "0",
          content: "I felt concerned for the person affected by the deepfake.",
        },
        {
          index: "1",
          content: "I could imagine how upsetting this experience would be for them.",
        },
        {
          index: "2",
          content: "I felt emotionally affected by what happened to them.",
        },
        {
          index: "3",
          content: "I felt protective of the person who was deepfaked.",
        },
      ],
      type: "multiChoice",
    },
  {
    question:
      "What are three words that describe your [teammate’s] feelings?",
      answers: ["Response"],
    type: "TextInput",
  },
  {
    question:
      "Please rank the following computing-related concerns based on how important or detrimental you believe they are",
    answers: ["Deepfakes", "Data privacy breaches", "Cybersecurity Attacks", "AI bias and Discrimination"],
    type: "ranking",
  },
];

export default postSurveyQuestions;
