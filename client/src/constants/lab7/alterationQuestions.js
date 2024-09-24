const alterationQuizQuestions = [
  // "U = File Sensitivity Level^2 / Threat Level"
  {
    question: "\\frac{(Reward\\;Value)^2}{Cost\\;Value}",
    answers: [
      {
        val: 0,
        type: "0",
        content: "This equation improves AI accuracy and makes less mistakes",
      },
      {
        val: 1,
        type: "1",
        content:
          "This equation doesn't improve AI accuracy and makes more mistakes",
      },
      {
        val: 0,
        type: "2",
        content:
          "This equation makes the same mistakes as the original equation",
      },
      {
        val: 0,
        type: "3",
        content:
          "This equation improves AI accuracy and is the ideal equation (no mistakes)",
      },
    ],
    multiChoice: false,
  },
  // "U = File Sensitivity Level / Threat Level^2",
  {
    question: "\\frac{Reward\\;Value}{(Cost\\;Value)^2}",
    answers: [
      {
        val: 0,
        type: "0",
        content: "This equation improves AI accuracy and makes less mistakes",
      },
      {
        val: 1,
        type: "1",
        content:
          "This equation doesn't improve AI accuracy and makes more mistakes",
      },
      {
        val: 0,
        type: "2",
        content:
          "This equation makes the same mistakes as the original equation",
      },
      {
        val: 0,
        type: "3",
        content:
          "This equation improves AI accuracy and is the ideal equation (no mistakes)",
      },
    ],
    multiChoice: false,
  },
  {
    // "U = (File Sensitivity Level * Threat Level) / File Sensitivity Level"
    question: "\\frac{Reward\\;Value*Cost\\;Value}{Reward\\;Value}",
    answers: [
      {
        val: 0,
        type: "0",
        content: "This equation improves AI accuracy and makes less mistakes",
      },
      {
        val: 1,
        type: "1",
        content:
          "This equation doesn't improve AI accuracy and makes more mistakes",
      },
      {
        val: 0,
        type: "2",
        content:
          "This equation makes the same mistakes as the original equation",
      },
      {
        val: 0,
        type: "3",
        content:
          "This equation improves AI accuracy and is the ideal equation (no mistakes)",
      },
    ],
    multiChoice: false,
  },
  // "U = (File Sensitivity Level * 2) / Threat Level"
  {
    question: "\\frac{Reward\\;Value*2}{Cost\\;Value}",
    answers: [
      {
        val: 0,
        type: "0",
        content: "This equation improves AI accuracy and makes less mistakes",
      },
      {
        val: 1,
        type: "1",
        content:
          "This equation doesn't improve AI accuracy and makes more mistakes",
      },
      {
        val: 0,
        type: "2",
        content:
          "This equation makes the same mistakes as the original equation",
      },
      {
        val: 0,
        type: "3",
        content:
          "This equation improves AI accuracy and is the ideal equation (no mistakes)",
      },
    ],
    multiChoice: false,
  },
];

export default alterationQuizQuestions;
