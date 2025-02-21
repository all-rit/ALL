import { useDraggable } from "@dnd-kit/core";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const DraggableCard = ({ card, cardStyle }) => {
  const [borderColor, setBorderColor] = useState("");

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  useEffect(() => {
    if (!card.isCorrect) {
      setBorderColor("tw-border-[#d03c3c] tw-shadow-2xl tw-shadow-error");
    } else {
      setBorderColor("");
    }
  }, [card.isCorrect]);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className={twMerge(`${card.color} ${cardStyle}`, borderColor)}
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
    isCorrect: PropTypes.bool,
  }).isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default DraggableCard;
