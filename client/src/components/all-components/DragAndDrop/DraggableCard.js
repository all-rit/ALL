import { useDraggable } from "@dnd-kit/core";
import React from "react";
import PropTypes from "prop-types";

const DraggableCard = ({ card, cardStyle }) => {
  // const { id, content } = card;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={`${card.color} ${cardStyle}`}
    >
      {card.content}
    </div>
  );
};

DraggableCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default DraggableCard;
