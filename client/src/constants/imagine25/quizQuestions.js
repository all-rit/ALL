const quizQuestions = [
  {
    question: "What is bias?",
    answers: [
      {
        val: 0,
        type: "0",
        content: "A person’s assigned sex at birth",
      },
      {
        val: 1,
        type: "1",
        content: "A person’s unique perception of who they are",
        explanation:
          "While sex is a biological characteristic, gender is a self-identified concept.",
      },
      {
        val: 0,
        type: "2",
        content: "The sex other people perceive a person as",
      },
    ],
    multiChoice: false,
  },
  {
    question: "Why is it important to respect someone’s chosen pronouns/name?",
    answers: [
      {
        val: 0,
        type: "0",
        content: "To show respect to others",
      },
      {
        val: 0,
        type: "1",
        content: "It can lead to a decrease in anxiety",
      },
      {
        val: 0,
        type: "2",
        content: "To foster an inclusive environment",
      },
      {
        val: 1,
        type: "3",
        content: "All of the above",
        explanation:
          "Using a person’s preferred name and pronouns creates an inclusive and respectful environment and can decrease anxiety regarding gender expression.",
      },
    ],
    multiChoice: false,
  },
  {
    question:
      "Which of the following could be used to add gender-inclusive features to software?",
    answers: [
      {
        val: 0,
        type: "0",
        content: "Making everything rainbow colored",
      },
      {
        val: 1,
        type: "1",
        content: "Adding an ‘other’ text field when asking for gender",
        explanation:
          "When asking for a person’s gender in web forms, it’s important to include options in addition to just “male” and “female”.",
      },
      {
        val: 0,
        type: "2",
        content: "Mandating/requiring users to input their gender",
      },
      {
        val: 0,
        type: "3",
        content: "Adjust font size, font color, and text alignment",
      },
    ],
    multiChoice: false,
  },
  {
    question:
      "ADP, an HR and Payroll consulting company, has recently strived for inclusiveness in which of the following ways?",
    answers: [
      {
        val: 1,
        type: "0",
        content: "Advocates for the importance of using preferred names",
        explanation:
          "ADP had created HR policies regarding preferred names, making ADP a leading advocate.",
        source:
          "https://www.adp.com/spark/articles/2018/06/foster-an-inclusive-workplace-for-transgender-talent-by-creating-a-preferred-name-policy.aspx",
      },
      {
        val: 1,
        type: "1",
        content: "Outline the best practices for using preferred names at work",
        explanation:
          "ADP has created a list of 10 best practices for using preferred names, including asking if you’re unsure and leading by example.",
        source:
          "https://www.adp.com/spark/articles/2022/06/10-best-practices-for-using-preferred-or-chosen-names-at-work.aspx",
      },
      {
        val: 0,
        type: "2",
        content:
          "Harshly reprimanding anyone who doesn’t follow these social standards",
      },
      {
        val: 1,
        type: "3",
        content:
          "Become familiar with and consistent with someone’s preferred pronouns",
        explanation:
          "ADP’s HR policies include using everyone’s preferred name and pronouns.",
        source:
          "https://www.adp.com/spark/articles/2018/06/foster-an-inclusive-workplace-for-transgender-talent-by-creating-a-preferred-name-policy.aspx",
      },
    ],
    multiChoice: true,
  },
  {
    question:
      "What percentage of youth surveyed want to be open about their gender identity at their future job?",
    answers: [
      {
        val: 1,
        type: "0",
        content: "76%",
        explanation:
          "According to the Human Rights Campaign 2023 LGBTQ+ Youth Report, 76% of youth surveyed want to be open about their gender identity at their future job.",
        source: "https://reports.hrc.org/2023-lgbtq-youth-report",
      },
      {
        val: 0,
        type: "1",
        content: "31%",
      },
      {
        val: 0,
        type: "2",
        content: "12%",
      },
      {
        val: 0,
        type: "3",
        content: "This hasn’t been surveyed before.",
      },
    ],
    multiChoice: false,
  },
];

export default quizQuestions;
