/* eslint-disable no-unused-vars */
import React from "react";
import Letter from "../components/Letter";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../constants/lab11";
import PropTypes from "prop-types";
import useScroll from "../../../../use-hooks/useScroll";
import { useContext } from "react";
import ExerciseStateContext from "../Lab11Context";
import check_mark from "../../../../assets/images/lab11/checkmark.png";
import exclamation_mark from "../../../../assets/images/lab11/exclamationmark.png";

/**
 * Renders the Information Letter Email page component.
 * @param {Object} props - The component props.
 * @param {Object} props.actions - The actions object.
 * @param {string} props.words - The words string.
 * @param {string} props.sentences - The sentences string.
 * @param {string} props.complexWords - The complex words string.
 * @param {boolean} props.isEditable - Whether the letter is editable.
 * @param {Function} props.handleContinue - The function to handle continue button click.
 * @returns {JSX.Element} The Information Letter Email page component.
 */
const InformationLetterEmail = (props) => {
  const {
    actions,
    words,
    sentences,
    complexWords,
    sectionTitle,
    isEditable,
    handleContinue,
  } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  useScroll();

  const {
    letterContent,
    totalWords,
    setTotalWords,
    totalSentences,
    setTotalSentences,
    totalComplexWords,
    setTotalComplexWords,
    fogIndex,
    setFogIndex,
  } = useContext(ExerciseStateContext);

  /**
   * Counts the number of syllables in a given word.
   * @param {string} word - The word to count syllables for.
   * @returns {number} The number of syllables in the word.
   */
  function countSyllables(word) {
    let syllableCount = 0;
    const vowels = new Set(["a", "e", "i", "o", "u", "y"]);

    if (vowels.has(word[0])) {
      syllableCount++;
    }

    for (let i = 1; i < word.length; i++) {
      if (vowels.has(word[i]) && !vowels.has(word[i - 1])) {
        syllableCount++;
      }
    }

    if (word.endsWith("e")) {
      syllableCount--;
    }

    if (
      word.endsWith("le") &&
      word.length > 2 &&
      !vowels.has(word[word.length - 3])
    ) {
      syllableCount++;
    }

    if (syllableCount === 0) {
      syllableCount++;
    }

    return syllableCount;
  }

  useEffect(() => {
    let words = letterContent.split(" ").length;
    let sentences = letterContent.split(".").length;
    let complex = letterContent
      .split(" ")
      .filter((word) => countSyllables(word) > 3).length;
    let fogIndex = (
      0.4 *
      (words / sentences + 100 * (complex / words))
    ).toFixed(4);
    setTotalWords(words);
    setTotalSentences(sentences);
    setTotalComplexWords(complex);
    setFogIndex(fogIndex);
  }, [letterContent]);

  return (
    <div className="center-div">
      {sectionTitle && <h1 className="playthrough__title">{sectionTitle}</h1>}
      <div className="playthrough__sentence">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
        tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
        tristique ex.
      </div>

      <div className="tw-flex flex-col tw-justify-center tw-relative">
        <div className="tw-w-full tw-h-auto tw-bg-[#E8EBED] tw-rounded-2xl tw-shadow tw-py-5 tw-flex tw-flex-col">
          <div className="tw-flex tw-justify-center">
            <div className={`tw-w-[90%] tw-flex tw-flex-col`}>
              <div
                className={`tw-text-xl tw-self-start tw-my-4 tw-mb-5 tw-font-bold`}
              >
                New Message
              </div>
            </div>
          </div>
          <div className="tw-bg-white tw-flex tw-justify-center tw-pt-4">
            <div className={`tw-w-[90%] tw-flex tw-flex-col `}>
              <div className={`tw-opacity-50 tw-text-xl tw-self-start`}>
                Recipents
              </div>
              <div className="tw-w-full tw-mx-auto tw-bg-[#B4B4B4] tw-h-[2px] tw-my-4 tw-opacity-40" />
              <div className={`tw-opacity-50 tw-text-xl tw-self-start`}>
                Subject
              </div>
              <div className="tw-w-full tw-mx-auto tw-bg-[#B4B4B4] tw-h-[2px] tw-my-4 tw-opacity-40" />
              <Letter isEditable={isEditable} />
              {/* Fog Index Overlay*/}
              <div className="tw-bg-white tw--mb-8 tw--mr-10 tw-w-full max-md:tw-left-0 md:tw-right-0 md:tw-w-[45%] lg:tw-w-[32%] tw-h-auto tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-absolute tw-bottom-0  tw-shadow-2xl tw-rounded-3xl">
                <div className="tw-relative">
                  {fogIndex > 12 ? (
                    <div className="tw-w-16 tw-h-16 tw-bg-[#FF0000] tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-6 tw--mt-4" />
                  ) : fogIndex > 9 ? (
                    <div className="tw-w-16 tw-h-16 tw-bg-[#FED136] tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-6 tw--mt-4" />
                  ) : (
                    <div className="tw-w-16 tw-h-16 tw-bg-[#14FF00] tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-6 tw--mt-4" />
                  )}
                  {fogIndex > 9 ? (
                    <img
                      className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-[20px] tw--mt-[12px]"
                      src={exclamation_mark}
                    />
                  ) : (
                    <img
                      className="tw-w-14 tw-h-14 tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-[20px] tw--mt-[12px]"
                      src={check_mark}
                    />
                  )}
                  <div className="tw-flex tw-flex-col tw-w-full tw-py-4 tw-text-2xl tw-px-6">
                    <div className={`tw-text-3xl tw-font-bold tw-py-2`}>
                      Total:
                    </div>
                    <div className={`tw-text-2xl tw-font-medium tw-self-start`}>
                      Words: {totalWords}
                    </div>
                    <div className={`tw-text-2xl tw-font-medium tw-self-start`}>
                      Sentences: {totalSentences}
                    </div>
                    <div className={`tw-text-2xl tw-font-medium tw-self-start`}>
                      Complex Words: {totalComplexWords}
                    </div>
                    <div
                      className={`tw-text-3xl tw-font-bold tw-self-start tw-py-2`}
                    >
                      Fog Index: {fogIndex}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase tw-mt-14"
        onClick={handleContinue}
        key="start"
      >
        Next
      </button>
    </div>
  );
};

InformationLetterEmail.propTypes = {
  actions: PropTypes.object,
  words: PropTypes.bool,
  sentences: PropTypes.bool,
  complexWords: PropTypes.bool,
  isEditable: PropTypes.bool,
  handleContinue: PropTypes.func.isRequired,
  sectionTitle: PropTypes.string,
};
export default InformationLetterEmail;
