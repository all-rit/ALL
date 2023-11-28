import React from "react";
import PropTypes from "prop-types";
import check_mark from "../../../../assets/images/lab11/checkmark.png";
import exclamation_mark from "../../../../assets/images/lab11/exclamationmark.png";

/**
 * Renders the Fog Index Overlay component.
 * 
 * @param {Object} props - The component props.
 * @param {number} props.fogIndex - The fog index value.
 * @param {number} props.totalWords - The total number of words.
 * @param {number} props.totalSentences - The total number of sentences.
 * @param {number} props.totalComplexWords - The total number of complex words.
 * @returns {JSX.Element} The rendered Fog Index Overlay component.
 */
const FogIndexOverlay = ({ fogIndex, totalWords, totalSentences, totalComplexWords }) => {
    return (
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
              Words: {totalWords ? totalWords : 0}
            </div>
            <div className={`tw-text-2xl tw-font-medium tw-self-start`}>
              Sentences: {totalSentences ? totalSentences : 0}
            </div>
            <div className={`tw-text-2xl tw-font-medium tw-self-start`}>
              Complex Words: {totalComplexWords ? totalComplexWords : 0}
            </div>
            <div
              className={`tw-text-3xl tw-font-bold tw-self-start tw-py-2`}
            >
              Fog Index: {fogIndex}
            </div>
          </div>
        </div>
      </div>
    );
  };

  FogIndexOverlay.propTypes = {
    fogIndex: PropTypes.number.isRequired,
    totalWords: PropTypes.number,
    totalSentences: PropTypes.number,
    totalComplexWords: PropTypes.number,
  };

  export default FogIndexOverlay;