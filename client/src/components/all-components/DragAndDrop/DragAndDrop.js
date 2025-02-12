import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DroppableColumn from "./DroppableColumn";
import DroppableBank from "./DroppableBank";
import PropTypes from "prop-types";

/**
 * Use this format to pass in columns, bank and correct assignments
 * Note: Keep ids the same across objects
 *
 * const initialColumns = {
 *   column1: { id: "column1", title: "Column 1", cards: [] },
 *   column2: { id: "column2", title: "Column 2", cards: [] },
 * };
 *
 * const initialBank = [
 *   { id: "card1", content: "Card 1" },
 *   { id: "card2", content: "Card 2" },
 *   { id: "card3", content: "Card 3" },
 * ];
 *
 * const correctAssignments = {
 *   column1: ["card1"],
 *   column2: ["card2", "card3"],
 * };
 */

const arrayToObject = (array, key) => {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, {});
};

const DragDropGame = ({
  containerStyle,
  colStyle,
  bankStyle,
  cardStyle,
  msgStyle,
  cols,
  initial_bank,
  correct_assignments,
}) => {
  const [columns, setColumns] = useState(arrayToObject(cols, "id"));
  const [bank, setBank] = useState(initial_bank);
  const [message, setMessage] = useState("");
  const correctAssignments = arrayToObject(correct_assignments, "id");

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
    for (const [columnId, currentCol] of Object.entries(correctAssignments)) {
      const placedCards = columns[columnId].cards.map((card) => card.id);
      if (
        placedCards.sort().toString() !== currentCol.cards.sort().toString()
      ) {
        setMessage("Incorrect placement. Try again!");
        return;
      }
    }
    setMessage("Correct placement! Well done!");
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className={containerStyle}>
        {Object.keys(columns).map((colId) => (
          <DroppableColumn
            key={colId}
            column={columns[colId]}
            cards={columns[colId].cards}
            colStyle={colStyle}
            cardStyle={cardStyle}
          />
        ))}
      </div>
      <DroppableBank bank={bank} bankStyle={bankStyle} cardStyle={cardStyle} />
      <button onClick={verifyPlacement} className="submit-button">
        Submit
      </button>
      {message && <p className={msgStyle}>{message}</p>}
    </DndContext>
  );
};

DragDropGame.propTypes = {
  containerStyle: PropTypes.string.isRequired,
  colStyle: PropTypes.string.isRequired,
  bankStyle: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
  msgStyle: PropTypes.string.isRequired,
  cols: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    }),
  ),
  initial_bank: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  correct_assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    }),
  ),
};

export default DragDropGame;
