import React, { useState } from "react";
import PropTypes from "prop-types";
import FlipIcon from "@mui/icons-material/Flip";

/**
 * A standard ALL component that displays a tile of flippable cards.
 * The width and height of the entire bento box and each card's width
 * can be fine-tuned. Each card can have its backface customized with
 * varying content like top text, text, bottom text, or an image. When
 * all cards have been flipped, the {@link props.onAllFlipped} function is called.
 * @param {number} props.width The width of the entire bento box (in units).
 * @param {number} props.height The height of the entire bento box (in units).
 * @param {boolean} props.flipBack Whether each card can be flipped back after being turned over.
 * @param {function} props.onAllFlipped The function called when all cards are flipped.
 * @param {string} props.frontImgURL A custom image shown on the front of every card. If omitted, default styling is applied.
 * @param {string} props.gridStyle Custom styling to apply to the bento box container in addition to the default styling.
 * @param {string} props.cardStyle Custom styling to apply to each card's container in addition to the default styling.
 * @param {Array.<Object>} props.cards An array of objects where each object represents a card, in row-insertion order.
 * @param {number} props.cards[i].id Required field which uniquely identifies the card. Should be in ascending order starting at 0.
 * @param {number} props.cards[i].width Required field indicating the width of a card on a row (in units). Either 1 or 2.
 * @param {string} props.cards[i].topText Optional text to be shown at the top of the backface of a card.
 * @param {string} props.cards[i].imageURL Optional image to be shown between the top and bottom text on the backface of a card.
 * @param {string} props.cards[i].text Optional text to be shown between top text and bottom text but below the image, if present.
 * @param {string} props.cards[i].bottomText Optional text to be shown at the bottom of the backface of a card.
 * @param {string} props.cards[i].content Optional component that completely overrides the backface of the card for extra control.
 */
const ALLCardFlip = (props) => {
  const {
    width,
    height,
    flipBack = false,
    onAllFlipped,
    frontImgURL,
    gridStyle,
    cardStyle,
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

  const colSpans = {
    1: "tw-col-span-1",
    2: "tw-col-span-2",
    3: "tw-col-span-3",
    4: "tw-col-span-4",
    5: "tw-col-span-5",
  };

  return (
    <div
      className={`tw-w-full tw-grid tw-grid-cols-${width} tw-grid-rows-${height} tw-gap-8 ${gridStyle}`}
    >
      {cards.map((card) => {
        return (
          <div
            className={`${colSpans[card.width]} tw-row-span-1 tw-perspective-distant ${flipBack || !flipped[card.id] ? "tw-cursor-pointer" : ""}`}
            key={card.id}
            onClick={() => flipCard(card.id)}
          >
            <div
              className={`tw-relative tw-w-full tw-h-[15rem] tw-p-[0.2rem] tw-duration-[0.5s] tw-transform-3d ${flipped[card.id] ? "tw-rotate-y-180" : ""} ${cardStyle}`}
            >
              {/* Blue Border */}
              <div
                className={`tw-absolute tw-border-solid tw-border-primary-blue
                  tw-border-[0.4rem] tw-right-[-0.5rem] tw-top-[-0.5rem] tw-h-full tw-w-full tw-z-1
                  tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg`}
              />
              {/* Yellow Border */}
              <div
                className={`tw-absolute tw-border-solid tw-border-primary-yellow
                  tw-border-[0.4rem] tw-left-[-0.5rem] tw-bottom-[-0.5rem]
                  tw-w-full tw-h-full tw-z-1 tw-border-t-0 tw-border-r-0 tw-rounded-bl-lg`}
              />
              {/* Front */}
              <div className="tw-absolute tw-w-[calc(100%-0.4rem)] tw-h-[calc(100%-0.4rem)] tw-bg-white tw-backface-hidden tw-flex tw-justify-center tw-items-center">
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
                  <p className="tw-grow tw-text-xs xl:tw-text-lg tw-font-bold tw-italic">
                    {card.topText}
                  </p>
                )}
                {card.imageURL && (
                  <img
                    src={card.imageURL}
                    className="tw-shrink tw-object-contain tw-max-h-[5rem] md:tw-max-h-[10rem]"
                  />
                )}
                {card.text && (
                  <p className="tw-text-xs lg:tw-text-sm">{card.text}</p>
                )}
                {card.bottomText && (
                  <p className="tw-grow tw-text-xs xl:tw-text-lg tw-font-bold tw-italic tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-labYellow tw-from-40% tw-to-60% tw-to-labBlue">
                    {card.bottomText}
                  </p>
                )}
                {card.content && <>{card.content}</>}
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
  gridStyle: PropTypes.string,
  cardStyle: PropTypes.string,
  cards: PropTypes.array,
};

export default ALLCardFlip;
