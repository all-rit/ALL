const initialColumns = [
  { id: "column1", title: "Column 1", cards: [] },
  { id: "column2", title: "Column 2", cards: [] },
  { id: "column3", title: "Column 3", cards: [] },
  { id: "column4", title: "Column 4", cards: [] },
];

const initialBank = [
  { id: "card1", content: "Card 1" },
  { id: "card2", content: "Card 2" },
  { id: "card3", content: "Card 3" },
  { id: "card4", content: "Card 4" },
  { id: "card5", content: "Card 5" },
  { id: "card6", content: "Card 6" },
];

const correctAssignments = [
  { id: "column1", cards: ["card1"] },
  { id: "column2", cards: ["card2", "card3"] },
  { id: "column4", cards: ["card4", "card5"] },
  { id: "column3", cards: ["card6"] },
];

module.exports = {
  initialColumns,
  initialBank,
  correctAssignments,
};
