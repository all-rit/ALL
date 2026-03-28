//we need to updated pre/post survey questions
const postSurveyQuestions = [
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
      "Rank the following items in order of how important you view them in a software application.",
    answers: ["Security", "Software fairness", "Affordability", "Efficiency"],
    type: "ranking",
  },
];

export default postSurveyQuestions;
