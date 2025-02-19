import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import PropTypes from "prop-types";

const DroppableColumn = ({ column, cards, colStyle, cardStyle }) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div ref={setNodeRef} className={colStyle}>
      <h2 className="tw-body-text">{column.title}</h2>
      {cards.map((card) => (
        <DraggableCard key={card.id} card={card} cardStyle={cardStyle} />
      ))}
    </div>
  );
};

DroppableColumn.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  colStyle: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default DroppableColumn;
