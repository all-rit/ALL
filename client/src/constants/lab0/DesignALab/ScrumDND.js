const initialColumns = [
  { id: "column1", title: "Sprint 1", cards: [] },
  { id: "column2", title: "Sprint 2", cards: [] },
  { id: "column3", title: "Sprint 3", cards: [] },
];

const initialBank = [
  {
    id: "card1",
    content: "Card 1",
    body: "Velocity: 6",
    color: "tw-bg-[#F83F3F]",
  },
  {
    id: "card2",
    content: "Card 2",
    body: "Velocity: 7",
    color: "tw-bg-[#6D67E6]",
  },
  {
    id: "card3",
    content: "Card 3",
    body: "Velocity: 3",
    color: "tw-bg-[#FF860D]",
  },
];

const correctAssignments = [
  { id: "column1", cards: ["card2"] },
  { id: "column2", cards: ["card3"] },
  { id: "column3", cards: ["card1"] },
];

module.exports = {
  initialColumns,
  initialBank,
  correctAssignments,
};
