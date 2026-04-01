export const initialColumns = [
  { id: "column1", title: "Sprint 1", cards: [] },
  { id: "column2", title: "Sprint 2", cards: [] },
  { id: "column3", title: "Sprint 3", cards: [] },
];

export const initialBank = [
  {
    id: "card1",
    content: "A",
    body: `
1. Create Code block for Improving Focus Order
2. Create Data Service for Exercise
3. Create Newly Accessible Webpage
4. Create Key Takeaways
    `,
    color: "tw-bg-[#FC8DC1]",
    isCorrect: true,
  },
  {
    id: "card2",
    content: "B",
    body: `
1. Create Skeleton for Exercise Structure
2. Create Exercise Introduction
3. Display Blurred Webpage
4. Create Screen Reader
5. Create Tab through Nav
6. Create Out of Order Tab Nav
    `,
    color: "tw-bg-[#6D67E6]",
    isCorrect: true,
  },
  {
    id: "card3",
    content: "C",
    body: `
1. Write an Explanation of Disordered Focus
2. Explain the Issue of Hearing Mismatched Labels
3. Write an Explanation of the Inaccessibility
    `,
    color: "tw-bg-[#FF860D]",
    isCorrect: true,
  },
];

export const correctAssignments = [
  { id: "column1", cards: ["card2"] },
  { id: "column2", cards: ["card3"] },
  { id: "column3", cards: ["card1"] },
];