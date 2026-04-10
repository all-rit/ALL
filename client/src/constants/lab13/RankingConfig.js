export const initialColumns = [
  { id: "column1", title: "Most Knowledgeable", cards: [] },
  { id: "column2", title: "Moderately Knowledgeable", cards: [] },
  { id: "column3", title: "Least Knowledgeable", cards: [] },
];

export const initialBank = [
  {
    id: "dyslexia",
    title: "Dyslexia",
    body: "",
    isCorrect: true,
  },
  {
    id: "colorblindness",
    title: "Color Blindness",
    body: "",
    isCorrect: true,
  },
  {
    id: "localization",
    title: "Localization",
    body: "",
    isCorrect: true,
  },
];

// Since ranking is subjective, we'll consider any complete ranking as correct
export const correctAssignments = [
  { id: "column1", cards: [] },
  { id: "column2", cards: [] },
  { id: "column3", cards: [] },
];
