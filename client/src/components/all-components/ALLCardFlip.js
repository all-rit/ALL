import React from "react";
import PropTypes from "prop-types";

const ALLCardFlip = (props) => {
  const { width, height, cards } = props;

  return (
    <div
      className={`tw-grid tw-grid-cols-${width} tw-grid-rows-${height} tw-gap-4 w-full`}
    >
      {cards.map((card, i) => {
        return (
          <div
            className={`tw-flex tw-flex-col tw-col-span-${card.width}`}
            key={i}
          >
            <p>{card.topText}</p>
            <img src={card.imageURL} />
            <p>{card.bottomText}</p>
          </div>
        );
      })}
    </div>
  );
};

ALLCardFlip.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cards: PropTypes.array,
};

export default ALLCardFlip;
