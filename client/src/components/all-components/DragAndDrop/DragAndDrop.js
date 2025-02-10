import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DroppableColumn from "./DroppableColumn";
import DroppableBank from "./DroppableBank";

const initialColumns = {
  column1: { id: "column1", title: "Column 1", cards: [] },
  column2: { id: "column2", title: "Column 2", cards: [] },
};

const initialBank = [
  { id: "card1", content: "Card 1" },
  { id: "card2", content: "Card 2" },
  { id: "card3", content: "Card 3" },
];

const correctAssignments = {
  column1: ["card1"],
  column2: ["card2", "card3"],
};

const DragDropGame = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [bank, setBank] = useState(initialBank);
  const [message, setMessage] = useState("");

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceId = active.id;
    const destinationId = over.id;

    setColumns((prevColumns) => {
      let newColumns = { ...prevColumns };
      let movedCard;

      if (sourceId === destinationId) {
        return prevColumns;
      }

      // First, find and remove the card from its source
      for (let key in newColumns) {
        if (newColumns[key].cards.some((card) => card.id === sourceId)) {
          movedCard = newColumns[key].cards.find(
            (card) => card.id === sourceId,
          );
          newColumns[key].cards = newColumns[key].cards.filter(
            (card) => card.id !== sourceId,
          );
          break;
        }
      }

      // If card was not found in columns, get it from the bank
      if (!movedCard) {
        movedCard = bank.find((card) => card.id === sourceId);
        if (movedCard) {
          setBank((prevBank) =>
            prevBank.filter((card) => card.id !== sourceId),
          );
        }
      }

      if (movedCard) {
        if (destinationId === "bank") {
          setBank((prevBank) => {
            if (!prevBank.some((card) => card.id === movedCard.id)) {
              return [...prevBank, movedCard];
            }
            return prevBank;
          });
        } else {
          newColumns[destinationId].cards = [
            ...newColumns[destinationId].cards.filter(
              (card) => card.id !== movedCard.id,
            ),
            movedCard,
          ];
        }
      }

      return newColumns;
    });
  };

  const verifyPlacement = () => {
    for (const [columnId, correctCards] of Object.entries(correctAssignments)) {
      const placedCards = columns[columnId].cards.map((card) => card.id);
      if (placedCards.sort().toString() !== correctCards.sort().toString()) {
        setMessage("Incorrect placement. Try again!");
        return;
      }
    }
    setMessage("Correct placement! Well done!");
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="tw-flex tw-gap-5 tw-p-5">
        {Object.keys(columns).map((colId) => (
          <DroppableColumn
            key={colId}
            column={columns[colId]}
            cards={columns[colId].cards}
          />
        ))}
      </div>
      <DroppableBank bank={bank} />
      <button onClick={verifyPlacement} className="submit-button">
        Submit
      </button>
      {message && <p className="message">{message}</p>}
    </DndContext>
  );
};

export default DragDropGame;
