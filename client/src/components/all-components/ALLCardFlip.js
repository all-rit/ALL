import React, { useState } from "react";
import PropTypes from "prop-types";
import FlipIcon from "@mui/icons-material/Flip";

const ALLCardFlip = (props) => {
  const {
    width,
    height,
    flipBack = false,
    onAllFlipped,
    frontImgURL,
    cards,
  } = props;
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const flipCard = (index) => {
    let newFlipped = flipped.slice();
    if (flipBack) {
      newFlipped[index] = !newFlipped[index];
    } else if (!newFlipped[index]) {
      newFlipped[index] = true;
    } else {
      return;
    }

    setFlipped(newFlipped);
    if (newFlipped.filter((value) => value).length === cards.length) {
      onAllFlipped();
    }
  };

  return (
    <div
      className={`tw-w-full tw-grid tw-grid-cols-${width} tw-grid-rows-${height} tw-gap-4`}
    >
      {cards.map((card, i) => {
        return (
          <div
            className={`${card.width == 2 ? "tw-col-span-2" : "tw-col-span-1"} tw-row-span-1 tw-perspective-distant`}
            key={i}
            onClick={() => flipCard(i)}
          >
            <div
              className={`tw-relative tw-w-full tw-h-[15rem] tw-p-[0.2rem] tw-rounded-[1.2rem] tw-bg-gradient-to-r tw-from-labYellow tw-from-0% tw-to-labBlue tw-to-100% tw-duration-[0.5s] tw-transform-3d ${flipped[i] ? "tw-rotate-y-180" : ""}`}
            >
              {/* Front */}
              <div className="tw-absolute tw-w-[calc(100%-0.4rem)] tw-h-[calc(100%-0.4rem)] tw-rounded-[1rem] tw-bg-white tw-backface-hidden tw-flex tw-justify-center tw-items-center">
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center">
                  {frontImgURL ? (
                    <img
                      src={frontImgURL}
                      className="tw-object-cover tw-h-[10rem]"
                    ></img>
                  ) : (
                    <>
                      <FlipIcon className="tw-mr-3" />
                      <p className="md:tw-text-xl tw-font-bold">
                        Click to reveal!
                      </p>
                    </>
                  )}
                </div>
              </div>
              {/* Back */}
              <div className="tw-absolute tw-w-[calc(100%-0.4rem)] tw-h-[calc(100%-0.4rem)] tw-rounded-[1rem] tw-bg-white tw-backface-hidden tw-rotate-y-180 tw-flex tw-flex-col tw-justify-center tw-gap-3">
                {card.topText && (
                  <p className="tw-text-xl tw-font-bold tw-italic">
                    {card.topText}
                  </p>
                )}
                {card.imageURL && (
                  <img
                    src={card.imageURL}
                    className="tw-object-contain tw-aspect-square tw-h-[6rem]"
                  />
                )}
                {card.text && <p>{card.text}</p>}
                {card.bottomText && (
                  <p className="tw-text-xl tw-font-bold tw-italic tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-labYellow tw-from-40% tw-to-60% tw-to-labBlue">
                    {card.bottomText}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ALLCardFlip.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  flipBack: PropTypes.bool,
  onAllFlipped: PropTypes.func,
  frontImgURL: PropTypes.string,
  cards: PropTypes.array,
};

export default ALLCardFlip;
