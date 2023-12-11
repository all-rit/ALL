import React, { Fragment, useState } from "react";
import grad_hat from "../../../../assets/images/lab11/grad_hat.png";
import signature from "../../../../assets/images/lab11/signature.png";
import { useContext } from "react";
import ExerciseStateContext from "../Lab11Context";

import PropTypes from "prop-types";

/**
 * React component for rendering a letter with editable content and displaying its total words, total sentences, total complex words, and Fog Index.
 * @param {Object} props - The props object containing the isEditable boolean value.
 * @param {boolean} props.isEditable - A boolean value indicating whether the letter content is editable or not.
 * @returns {JSX.Element} - The JSX element representing the Letter component.
 */
const Letter = ({ isEditable }) => {
  const {
    setLetterContent,
    letterContent,
    setLetterContentIndex,
    letterContentIndex,
    letterContentArray,
  } = useContext(ExerciseStateContext);

  const [currentLetterContent, setCurrentLetterContent] =
    useState(letterContent);

  const handleNextLetter = () => {
    if (letterContentIndex < letterContentArray.length - 1) {
      setLetterContentIndex(letterContentIndex + 1);
      setLetterContent(letterContentArray[letterContentIndex + 1]);
      setCurrentLetterContent(letterContentArray[letterContentIndex + 1]);
    } else {
      setLetterContentIndex(0);
      setLetterContent(letterContentArray[0]);
      setCurrentLetterContent(letterContentArray[0]);
    }
  };

  const handlePreviousLetter = () => {
    if (letterContentIndex > 0) {
      setLetterContentIndex(letterContentIndex - 1);
      setLetterContent(letterContentArray[letterContentIndex - 1]);
      setCurrentLetterContent(letterContentArray[letterContentIndex - 1]);
    } else {
      setLetterContentIndex(letterContentArray.length - 1);
      setLetterContent(letterContentArray[letterContentArray.length - 1]);
      setCurrentLetterContent(letterContentArray[letterContentArray.length - 1]);
    }
  };

  return (
    <div className={`tw-w-full tw-h-full`}>
      {/* Letter Header */}
      <div className={`tw-my-8 tw-flex tw-flex-row tw-w-full`}>
        <div
          className={`tw-w-full tw-h-full md:tw-w-1/2 sm:tw-px-5 tw-flex tw-flex-row sm:tw-space-x-6 tw-items-center`}
        >
          <div className={`tw-flex tw-flex-row tw-h-full tw-items-center`}>
            <div className={`tw-bg-[#431407] tw-w-3 tw-h-[76px]`} />
            <div className={`tw-flex tw-flex-col`}>
              <div className={`tw-bg-[#431407] tw-w-full tw-h-3`} />
              <img className={`tw-w-9 tw-h-9 tw-m-2`} src={grad_hat} />
              <div className={`tw-bg-[#431407] tw-h-3 tw-w-full`} />
            </div>
            <div className={`tw-w-3 tw-h-[76px]`} />
          </div>
          <div
            className={`tw-text-[#1c1917] tw-text-4xl tw-font-light tw-break-words`}
            style={{ fontFamily: "Kumbh Sans" }}
          >
            ALL University
          </div>
        </div>
        <div
          className={`tw-w-1/3 md:tw-w-1/2 tw-h-full tw-flex tw-flex-row max-sm:tw-hidden`}
        >
          <div className={`tw-flex tw-flex-col tw-w-2/3`}>
            <div className={`tw-h-[42.5%] `} />
            <div className={`tw-h-[15%] tw-bg-[#431407]`} />
            <div className={`tw-h-[42.5%] `} />
          </div>
          <div
            className={`tw-bg-[#431407] tw-w-1/3 tw-h-[65%] tw-self-center`}
          />
        </div>
      </div>
      {/* Letter Content */}
      <div className={`tw-flex tw-w-full tw-flex-row tw-h-auto tw-relative`}>
        {isEditable && (
          <Fragment>
            <div className="tw-absolute tw-top-[50%] tw-left-2 tw-shadow-2xl">
              <button
                tabIndex={0}
                onClick={handlePreviousLetter}
                aria-label="Previous letter text button"
                className="btn-md tw-w-full tw-mt-1 tw-p-2.5 tw-flex-1 tw-text-black tw-bg-[#fed136] tw-rounded-md tw-outline-none tw-ring-offset-2 tw-ring-[#fed136] focus:tw-ring-2 tw-font-medium tw-border-0"
              >
                Previous
              </button>
            </div>
            <div className="tw-absolute tw-top-[50%] tw-right-2 tw-shadow-2xl ">
              <button
                tabIndex={0}
                onClick={handleNextLetter}
                aria-label="Next letter text button"
                className="btn-md tw-w-full tw-mt-1 tw-p-2.5 tw-flex-1 tw-text-black tw-bg-[#fed136] tw-rounded-md tw-outline-none tw-ring-offset-2 tw-ring-[#fed136] focus:tw-ring-2 tw-font-medium tw-border-0"
              >
                Next
              </button>
            </div>
          </Fragment>
        )}
        <div className="tw-h-auto tw-flex tw-flex-col tw-w-[5%]">
          <div className="tw-h-1/3 " />
          <div className="tw-h-2/3 tw-bg-[#431407]" />
        </div>
        <div className="tw-w-[90%] tw-flex tw-justify-center">
          <div className={`tw-w-[85%] tw-h-auto tw-flex tw-flex-col tw-px-2`}>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-medium tw-self-start tw-text-start tw-word-breaks tw-mb-16`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Fake Name Here
              <br />
              111 Street Name Here,
              <br />
              City, State, 14626
            </div>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-bold tw-self-start tw-mb-10`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Dear Lorem,
            </div>
            <div
              id="editable-letter"
              aria-label="Please edit the letter below to change Fog Index."
              contentEditable={isEditable}
              suppressContentEditableWarning={true}
              tabIndex={0}
              className={`tw-px-2 tw-text-black tw-text-xl tw-font-medium tw-break-words tw-text-start`}
              style={{ fontFamily: "Kumbh Sans" }}
              onInput={(e) => {
                setLetterContent(e.target.innerText);
              }}
            >
              {currentLetterContent}
            </div>
            <div
              className={`tw-h-auto tw-text-xl tw-text-black tw-font-bold tw-break-words tw-self-start tw-text-start tw-mt-10`}
              style={{ fontFamily: "Kumbh Sans" }}
            >
              Sincerly,
              <br />
              Fake Name
            </div>
            <img
              className={`tw-w-[50px] tw-h-[50px] tw-mb-10 tw-self-start`}
              src={signature}
            />
          </div>
        </div>
        <div className="tw-h-auto tw-flex tw-flex-col tw-w-[5%]">
          <div className="tw-h-1/3 " />
          <div className="tw-h-2/3 tw-bg-[#431407]" />
        </div>
      </div>
      <div className="tw-w-full tw--mt-1 tw-h-10 tw-bg-[#431407]" />
    </div>
  );
};

Letter.propTypes = {
  isEditable: PropTypes.bool,
};

export default Letter;
