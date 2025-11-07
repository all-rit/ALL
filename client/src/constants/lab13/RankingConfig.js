const initialColumns = [
  { id: "column1", title: "Most Knowledgeable", cards: [] },
  { id: "column2", title: "Moderately Knowledgeable", cards: [] },
  { id: "column3", title: "Least Knowledgeable", cards: [] },
];

const initialBank = [
  {
    id: "topic1",
    title: "Deaf/Hard of Hearing (HOH)",
    body: "",
    isCorrect: true,
  },
  {
    id: "topic2",
    title: "Dexterity",
    body: "",
    isCorrect: true,
  },
  {
    id: "topic3",
    title: "Literacy",
    body: "",
    isCorrect: true,
  },
];

// Since ranking is subjective, we'll consider any complete ranking as correct
const correctAssignments = [
  { id: "column1", cards: [] },
  { id: "column2", cards: [] },
  { id: "column3", cards: [] },
];

module.exports = {
  initialColumns,
  initialBank,
  correctAssignments,
};
