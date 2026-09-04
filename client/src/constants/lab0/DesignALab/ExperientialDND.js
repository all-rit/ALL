const initialColumns = [
  { id: "column1", title: "1 (Most Experiential)", cards: [] },
  { id: "column2", title: "2", cards: [] },
  { id: "column3", title: "3 (Least Experiential)", cards: [] },
];

const initialBank = [
  {
    id: "card1",
    title: "Code Review",
    body:
      "In this exercise, the participant is given a series of code blocks of links, buttons, and other elements on a webpage in HTML " +
      "and Javascript, and are tasked with recognizing why the code is or isn't focus order accessible.",
    isCorrect: true,
  },
  {
    id: "card2",
    title: "Out of Order with Screen Readers",
    body:
      "This exercise entails the experience of someone who is visually impaired and relies on screen readers " +
      "to assist in using the internet. The participant is given a blurry web page, and are not allowed to use the mouse, " +
      "and are tasked with selecting the proper link while not being able to see the selection they are on, and must rely on " +
      "intuitive focus order and their screen reader to find the link. However, the focus order is incorrect and they will " +
      "experience difficulty in finding the proper link.",
    isCorrect: true,
  },
  {
    id: "card3",
    title: "Out of Order",
    body:
      "In this exercise, users will be given a webpage to browse through, but are not allowed to use " +
      "the mouse, and must tab through each link and button. However, the focus order of these links is out of order, " +
      "and send the user all over the webpage, making it difficult to reach the link they are tasked with selecting.",
    isCorrect: true,
  },
];

const correctAssignments = [
  { id: "column1", cards: ["card2"] },
  { id: "column2", cards: ["card3"] },
  { id: "column3", cards: ["card1"] },
];

export { initialColumns, initialBank, correctAssignments };
