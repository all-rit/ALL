const PostSurveyQuestions25 = [
  {
    question:
      "I feel frustrated when I come across software that negatively affects certain groups, such as being inaccessible to Deaf users or showing bias toward one gender over another.",
    type: "likert",
  },
  {
    question: "Witnessing unfairness in a team setting affects me emotionally.",
    type: "likert",
  },
  {
    question:
      "I find it challenging to relate to experiences of individuals who face difficulties due to unfair practices.",
    type: "likert",
  },
  {
    question:
      "I feel obligated to confront unfair treatment whenever I notice it happening within my group.",
    type: "likert",
  },
  {
    question:
      "The activity increased my interest in issues related to fairness.",
    type: "likert",
  },
  {
    question: "The activity increased my curiosity related to fairness.",
    type: "likert",
  },
  {
    question:
      "Why do you believe that your opponent lost? Select the response that best represents your feelings.",
    answers: [
      {
        index: "0",
        content: "The opponent's game version was harder than mine.",
      },
      {
        index: "1",
        content: "The game was too challenging for the opponent.",
      },
    ],
    type: "singleChoice",
    avatar: "Opponent",
  },
  {
    question:
      "Rank the following items in order of how important you view them in a software application.",
    answers: ["Security", "Software fairness", "Affordability", "Efficiency"],
    type: "ranking",
  },
];

export default PostSurveyQuestions25;
