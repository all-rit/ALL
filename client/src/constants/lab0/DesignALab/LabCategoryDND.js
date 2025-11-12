//
// These are for the Design A Lab DND
//
const columns = [
  { id: "column1", title: "Accessibility", cards: [] },
  { id: "column2", title: "AI / ML", cards: [] },
  { id: "column3", title: "New Category", cards: [] },
];

const initial_Bank = [
  { id: "card8", content: "Computer Vision", isCorrect: true },
  { id: "card4", content: "Focus Order", isCorrect: true },
  { id: "card1", content: "Dyspraxia", isCorrect: true },
  { id: "card6", content: "Natural Language Processing", isCorrect: true },
  { id: "card7", content: "Neural Networks", isCorrect: true },
  { id: "card3", content: "Alt Text", isCorrect: true },
  { id: "card10", content: "Digital Privacy", isCorrect: true },
  { id: "card5", content: "Federated Learning", isCorrect: true },
  { id: "card9", content: "Cryptography", isCorrect: true },
  { id: "card2", content: "Photosensitivity", isCorrect: true },
];

const correctAssignments = [
  { id: "column1", cards: ["card1", "card2", "card3", "card4"] },
  { id: "column2", cards: ["card5", "card6", "card7", "card8"] },
  { id: "column3", cards: ["card9", "card10"] },
];

//
// These are for the Design A Lab DND with New Category
//

const columns_new_category = [
  { id: "column1", title: "Accessibility", cards: [] },
  { id: "column2", title: "AI / ML", cards: [] },
  { id: "column3", title: "", cards: [] },
];

const previous_Bank = [
  { id: "card8", content: "Computer Vision", isCorrect: true },
  { id: "card4", content: "Focus Order", isCorrect: true },
  { id: "card1", content: "Dyspraxia", isCorrect: true },
  { id: "card6", content: "Natural Language Processing", isCorrect: true },
  { id: "card7", content: "Neural Networks", isCorrect: true },
  { id: "card3", content: "Alt Text", isCorrect: true },
  { id: "card5", content: "Federated Learning", isCorrect: true },
  { id: "card2", content: "Photosensitivity", isCorrect: true },
];

const correctAssignmentsNewCategory = [
  { id: "column1", cards: ["card1", "card2", "card3", "card4"] },
  { id: "column2", cards: ["card5", "card6", "card7", "card8"] },
  { id: "column3", cards: [] },
];

module.exports = {
  columns,
  initial_Bank,
  correctAssignments,
  columns_new_category,
  previous_Bank,
  correctAssignmentsNewCategory,
};
