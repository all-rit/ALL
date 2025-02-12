import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";
import PropTypes from "prop-types";

const DroppableColumn = ({
  column,
  cards,
  colStyle,
  cardStyle,
  colHeaderStyle,
}) => {
  const { setNodeRef } = useDroppable({ id: column.id });

  return (
    <div>
      <h4 className={colHeaderStyle}>{column.title}</h4>
      <div ref={setNodeRef} className={colStyle}>
        {cards.map((card) => (
          <DraggableCard key={card.id} card={card} cardStyle={cardStyle} />
        ))}
      </div>
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
  colHeaderStyle: PropTypes.string.isRequired,
};

export default DroppableColumn;
