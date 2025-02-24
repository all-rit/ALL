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
      className={cardStyle}
    >
      {card.content}
      <p className={"tw-font-bold"}>{card.title}</p>
      <p className={"tw-text-sm tw-leading-snug"}>{card.body}</p>
    </div>
  );
};

DraggableCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    body: PropTypes.string,
  }).isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default DraggableCard;
