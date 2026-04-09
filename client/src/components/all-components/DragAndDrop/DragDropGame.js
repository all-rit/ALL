import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DroppableColumn from "./DroppableColumn";
import DroppableBank from "./DroppableBank";
import PropTypes from "prop-types";
import LabButton from "../LabButton";
import StatusBanner from "../StatusBanner";

/**
 * Use this format to pass in columns, bank and correct assignments
 * Note: Keep ids the same across objects
 *
 * const initialColumns = [
 *   { id: "column1", title: "Column 1", cards: [] },
 *   { id: "column2", title: "Column 2", cards: [] },
 * ];
 *
 * const initialBank = [
 *   { id: "card1", content: "Card 1", isCorrect: true },
 *   { id: "card2", content: "Card 2", isCorrect: true },
 *   { id: "card3", content: "Card 3", isCorrect: true },
 * ];
 *
 * const correctAssignments = [
 *   { id: "column1", cards: ["card1"] },
 *   { id: "column2", cards: ["card2", "card3"] },
 * ];
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
  colCardStyle,
  bankCardStyle,
  msgStyle,
  cols,
  initialBank,
  correctAssignments,
  success,
  setSuccess,
  colHeaderStyle,
  handleNav,
  colContainerStyle,
  gameStyle,
  cardIcon,
}) => {
  const [columns, setColumns] = useState(arrayToObject(cols, "id"));
  const [bank, setBank] = useState(initialBank);
  const [message, setMessage] = useState("");
  const correct_assignments = arrayToObject(correctAssignments, "id");

  const [correct, setCorrect] = useState(success);

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
    let incorrectCards = [];
    let updatedColumns = { ...columns };

    // Don't let them submit without placing all the cards
    if (bank.length !== 0) {
      setMessage("Please place all cards before submitting.");
      return;
    }

    for (const [columnId, currentCol] of Object.entries(correct_assignments)) {
      const placedCards = updatedColumns[columnId].cards;
      const correctCards = currentCol.cards;

      // Find misplaced card objects
      const misplaced = placedCards.filter(
        (card) => !correctCards.includes(card.id),
      );

      placedCards.forEach((card) => {
        if (correctCards.includes(card.id)) {
          card.isCorrect = true;
        }
      });

      if (misplaced.length > 0) {
        incorrectCards = incorrectCards.concat(misplaced);
      }
    }
    if (incorrectCards.length > 0) {
      setMessage("Incorrect placement. Try again!");

      incorrectCards.forEach((card) => {
        card.isCorrect = false;
      });

      setColumns(updatedColumns);
      return;
    }

    for (const columnId in updatedColumns) {
      updatedColumns[columnId].cards.forEach((card) => {
        card.isCorrect = true; // Revert all cards to correct state
      });
    }

    setMessage("Correct placement! Well done!");
    setSuccess(true);
    setCorrect(true);
    setColumns(updatedColumns);
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className={gameStyle}>
        <div className={containerStyle}>
          {Object.keys(columns).map((colId) => (
            <DroppableColumn
              key={colId}
              column={columns[colId]}
              cards={columns[colId].cards}
              colStyle={colStyle}
              cardStyle={colCardStyle}
              colHeaderStyle={colHeaderStyle}
              colContainerStyle={colContainerStyle}
            />
          ))}
        </div>
        <div className={"tw-flex tw-justify-center tw-items-center tw-h-full"}>
          <DroppableBank
            bank={bank}
            bankStyle={bankStyle}
            cardStyle={bankCardStyle}
            cardIcon={cardIcon}
          />
        </div>
      </div>
      <div
        className={
          "tw-w-full tw-flex tw-justify-center tw-flex-col tw-items-center tw-p-6"
        }
      >
        {message && <StatusBanner style={msgStyle}>{message}</StatusBanner>}
        <LabButton
          onClick={correct ? handleNav : verifyPlacement}
          label={correct ? "Next" : "Submit"}
        />
      </div>
    </DndContext>
  );
};

DragDropGame.propTypes = {
  containerStyle: PropTypes.string.isRequired,
  colStyle: PropTypes.string.isRequired,
  bankStyle: PropTypes.string.isRequired,
  colCardStyle: PropTypes.string.isRequired,
  bankCardStyle: PropTypes.string.isRequired,
  msgStyle: PropTypes.string.isRequired,
  cols: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    }),
  ),
  initialBank: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
  correctAssignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    }),
  ),
  success: PropTypes.bool,
  setSuccess: PropTypes.func,
  colHeaderStyle: PropTypes.string,
  handleNav: PropTypes.func.isRequired,
  colContainerStyle: PropTypes.string,
  gameStyle: PropTypes.string,
  cardIcon: PropTypes.any,
};

export default DragDropGame;
