import { useDraggable } from "@dnd-kit/core";
import React from "react";

const DraggableCard = (card) => {
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
      className="card"
    >
      {card.content}
    </div>
  );
};

export default DraggableCard;
