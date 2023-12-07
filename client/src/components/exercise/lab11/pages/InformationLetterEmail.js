import React from "react";
import Letter from "../components/Letter";
import { useEffect } from "react";
import PropTypes from "prop-types";
import useScroll from "../../../../use-hooks/useScroll";
import { useContext } from "react";
import ExerciseStateContext from "../Lab11Context";
import { fogIndexCalculation } from "../helpers/FogIndexCalculation";
import FogIndexOverlay from "../components/FogIndexOverlay";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

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
    words,
    sentences,
    complexWords,
    sectionTitle,
    isEditable,
    handleContinue,
    descriptionText,
  } = props;

  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
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

  useEffect(() => {
    const { wordCount, sentenceCount, complexWordCount, fogIndex } =
      fogIndexCalculation(letterContent, words, sentences, complexWords);
    setTotalWords(wordCount);
    setTotalSentences(sentenceCount);
    setTotalComplexWords(complexWordCount);
    setFogIndex(fogIndex);
  }, [letterContent]);

  return (
    <div className="center-div">
      {sectionTitle && <h1 className="playthrough__title">{sectionTitle}</h1>}
      <div className="playthrough__sentence">{descriptionText}</div>

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
              {/* Letter Content */}
              <Letter isEditable={isEditable} />
              {/* Fog Index Overlay*/}
              <FogIndexOverlay
                fogIndex={fogIndex}
                totalWords={totalWords}
                totalSentences={totalSentences}
                totalComplexWords={totalComplexWords}
              />
            </div>
          </div>
        </div>
      </div>

      {fogIndex < 10 && (
        <button
        className="btn btn-primary text-black btn-xl text-uppercase tw-mt-14"
        onClick={handleContinue}
        key="start"
        >
          Next
        </button>
      )}
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
  descriptionText: PropTypes.string,
};
export default InformationLetterEmail;
