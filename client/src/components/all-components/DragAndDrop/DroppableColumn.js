import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableCard from "./DraggableCard";

const DroppableColumn = (column, cards) => {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div ref={setNodeRef} className="column">
      <h2 className="column-title">{column.title}</h2>
      {cards.map((card) => (
        <DraggableCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DroppableColumn;
