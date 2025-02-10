import { useDraggable } from "@dnd-kit/core";
import React from "react";
import PropTypes from "prop-types";

const DraggableCard = ({ card }) => {
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
      className="tw-bg-labYellow tw-p-2 tw-my-1 tw-rounded tw-shadow-sm tw-cursor-grab tw-h-10 tw-w-40 tw-text-black"
    >
      {card.content}
    </div>
  );
};

DraggableCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default DraggableCard;
