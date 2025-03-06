const initialColumns = [
  { id: "column1", title: "Sprint 1", cards: [] },
  { id: "column2", title: "Sprint 2", cards: [] },
  { id: "column3", title: "Sprint 3", cards: [] },
  { id: "column4", title: "Sprint 4", cards: [] },
];

const initialBank = [
  { id: "card1", content: "Card 1", body: "", color: "tw-bg-[#F83F3F]" },
  { id: "card2", content: "Card 2", body: "", color: "tw-bg-[#6D67E6]" },
  { id: "card3", content: "Card 3", body: "", color: "tw-bg-[#FF860D]" },
  { id: "card4", content: "Card 4", body: "", color: "tw-bg-[#37AA67]" },
];

const correctAssignments = [
  { id: "column1", cards: ["card2"] },
  { id: "column2", cards: ["card4"] },
  { id: "column3", cards: ["card1"] },
  { id: "column4", cards: ["card3"] },
];

module.exports = {
  initialColumns,
  initialBank,
  correctAssignments,
};
