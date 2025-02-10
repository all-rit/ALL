import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import PropTypes from "prop-types";

const DroppableColumn = ({ column, cards }) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div
      ref={setNodeRef}
      className="tw-bg-gray-300 tw-p-4 tw-min-w-[200px] tw-min-h-[300px] tw-rounded-lg tw-shadow-md"
    >
      <h2 className="column-title">{column.title}</h2>
      {cards.map((card) => (
        <DraggableCard key={card.id} card={card} />
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
};

export default DroppableColumn;
