import { useDroppable } from "@dnd-kit/core";
import React from "react";
import DraggableCard from "./DraggableCard";
import PropTypes from "prop-types";

const DroppableBank = ({ bank }) => {
  const { setNodeRef } = useDroppable({ id: "bank" });

  return (
    <div
      ref={setNodeRef}
      className="tw-flex tw-gap-2 tw-p-4 tw-bg-blue tw-rounded-lg tw-mt-5"
    >
      {bank.map((card) => (
        <DraggableCard key={card.id} card={card} />
      ))}
    </div>
  );
};

DroppableBank.propTypes = {
  bank: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DroppableBank;
