import { useDraggable } from "@dnd-kit/core";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";

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
      setBorderColor(
        "tw-border-solid !tw-shadow-lg !tw-border-brightRed tw-shadow-brightRed tw-font-bold tw-text-brightRed",
      );
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
      className={twMerge(
        `${card.color}`,
        !card.isCorrect
          ? `${cardStyle.replaceAll(/tw-border-\w*/g, "")} ${borderColor}`
          : cardStyle,
      )}
    >
      {card.content}
      <p className={"tw-font-bold"}>
        <DragIndicatorRoundedIcon /> {card.title}
      </p>
      <pre className="tw-body-text tw-text-sm tw-leading-snug tw-p-0 tw-m-0 tw-whitespace-pre-wrap tw-tab-0">
        {card.body}
      </pre>
    </div>
  );
};

DraggableCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    body: PropTypes.string,
    color: PropTypes.string,
    isCorrect: PropTypes.bool,
  }).isRequired,
  cardStyle: PropTypes.string.isRequired,
};

export default DraggableCard;
