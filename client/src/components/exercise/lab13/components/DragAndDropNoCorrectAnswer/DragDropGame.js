import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DroppableColumn from "./DroppableColumn";
import DroppableBank from "./DroppableBank";
import PropTypes from "prop-types";
import LabButton from "../../../../all-components/LabButton";
import StatusBanner from "../../../../all-components/StatusBanner";

/**
 * Example usage:
 * const initialColumns = [
 *   { id: "column1", title: "Column 1", cards: [] },
 *   { id: "column2", title: "Column 2", cards: [] },
 * ];
 * const initialBank = [
 *   { id: "card1", content: "Card 1" },
 *   { id: "card2", content: "Card 2" },
 * ];
 * const correctAssignments = [
 *   { id: "column1", cards: ["card1"] },
 *   { id: "column2", cards: ["card2"] },
 * ];
 */

const arrayToObject = (array, key) => {
  return array.reduce((obj, item) => ({ ...obj, [item[key]]: item }), {});
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
  const [correct, setCorrect] = useState(success);

  const correct_assignments = arrayToObject(correctAssignments, "id");

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceId = active.id;
    const destinationId = over.id;

    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      let movedCard;

      if (sourceId === destinationId) return prevColumns;

      // Prevent placing more than one card in a column
      if (
        destinationId !== "bank" &&
        newColumns[destinationId].cards.length >= 1
      ) {
        const existingCard = newColumns[destinationId].cards[0];
        setBank((prevBank) =>
          prevBank.some((card) => card.id === existingCard.id)
            ? prevBank
            : [...prevBank, existingCard],
        );
        newColumns[destinationId].cards = [];
      }

      // Remove the card from its source
      for (const key in newColumns) {
        const sourceCards = newColumns[key].cards;
        if (sourceCards.some((card) => card.id === sourceId)) {
          movedCard = sourceCards.find((card) => card.id === sourceId);
          newColumns[key].cards = sourceCards.filter(
            (card) => card.id !== sourceId,
          );
          break;
        }
      }

      // If not found in columns, get from bank
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
          setBank((prevBank) =>
            prevBank.some((card) => card.id === movedCard.id)
              ? prevBank
              : [...prevBank, movedCard],
          );
        } else {
          newColumns[destinationId].cards = [movedCard];
        }
      }

      return newColumns;
    });
  };

  const verifyPlacement = () => {
    if (bank.length !== 0) {
      setMessage("Please place all cards before submitting.");
      return;
    }

    const updatedColumns = { ...columns };
    let incorrectCards = [];

    for (const [columnId, correctCol] of Object.entries(correct_assignments)) {
      const placedCards = updatedColumns[columnId].cards;
      const correctCards = correctCol.cards;

      const misplaced = placedCards.filter(
        (card) => !correctCards.includes(card.id),
      );

      placedCards.forEach((card) => {
        card.isCorrect = correctCards.includes(card.id);
      });

      if (misplaced.length > 0) {
        incorrectCards = [...incorrectCards, ...misplaced];
      }
    }

    if (incorrectCards.length > 0) {
      setMessage("Incorrect placement. Try again!");
      setColumns(updatedColumns);
      return;
    }

    setMessage("Success! All cards are placed.");
    setSuccess(true);
    setCorrect(true);
    setColumns(updatedColumns);
  };

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div
        className={
          gameStyle ||
          "tw-grid tw-gap-8 tw-max-w-4xl tw-mx-auto tw-items-center"
        }
      >
        <div className="tw-flex tw-justify-center tw-items-center tw-h-full">
          <DroppableBank
            bank={bank}
            bankStyle={bankStyle}
            cardStyle={bankCardStyle}
            cardIcon={cardIcon}
          />
        </div>

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
              cardIcon={cardIcon}
            />
          ))}
        </div>
      </div>

      <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-mt-4">
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
      id: PropTypes.string,
      content: PropTypes.string,
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
