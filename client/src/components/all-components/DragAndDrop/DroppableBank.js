import { useDroppable } from "@dnd-kit/core";
import React from "react";
import DraggableCard from "./DraggableCard";

const DroppableBank = (bank) => {
  const { setNodeRef } = useDroppable({ id: "bank" });
  return (
    <div ref={setNodeRef} className="bank">
      {bank.map((card) => (
        <DraggableCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default DroppableBank;
