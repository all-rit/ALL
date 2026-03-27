import PropTypes from 'prop-types';
import check_mark from '../../../../assets/images/lab11/checkmark.png';
import exclamation_mark from '../../../../assets/images/lab11/exclamationmark.png';
import { twMerge } from 'tailwind-merge';

/**
 * Renders the Fog Index Overlay component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.fogIndex - The Fog Index value.
 * @param {number} props.totalWords - The total number of words.
 * @param {number} props.totalSentences - The total number of sentences.
 * @param {number} props.totalComplexWords - The total number of complex words.
 * @returns {JSX.Element} The rendered Fog Index Overlay component.
 */
const FogIndexOverlay = ({
  fogIndex,
  totalWords,
  totalSentences,
  totalComplexWords,
}) => {
  let className =
    'tw-w-12 tw-h-12 tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-6 tw--mt-4';
  if (fogIndex > 12) {
    className = twMerge(className, 'tw-bg-[#FF0000]');
  } else if (fogIndex > 9) {
    className = twMerge(className, 'tw-bg-[#FED136]');
  } else {
    className = twMerge(className, 'tw-bg-[#14FF00]');
  }

  return (
    <div className="tw-bg-white tw-bottom-[-2rem] tw-w-full max-md:tw-left-0 md:tw-right-0 md:tw-w-[45%] lg:tw-w-[25%] tw-border-solid tw-border-labLightGray tw-border-[.05rem] tw-h-auto tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-absolute tw-shadow-xl tw-rounded-xl">
      <div className="tw-relative">
        {fogIndex > 12 ? (
          <div className={className} />
        ) : fogIndex > 9 ? (
          <div className={className} />
        ) : (
          <div className={className} />
        )}
        {fogIndex > 9 ? (
          <img
            alt="exclamation mark"
            className="tw-w-10 tw-h-10 tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-[20px] tw--mt-[12px]"
            src={exclamation_mark}
          />
        ) : (
          <img
            alt="check mark"
            className="tw-w-10 tw-h-10 tw-rounded-full tw-shadow-xl tw-absolute tw-top-0 tw-right-0 tw--mr-[20px] tw--mt-[12px]"
            src={check_mark}
          />
        )}
        <div className="tw-flex tw-flex-col tw-w-full tw-py-4 tw-text-2xl tw-px-6">
          <div className={`tw-body-text tw-font-bold tw-py-2`}>Total:</div>
          <div className={`tw-body-text tw-font-medium tw-self-start`}>
            Words: {totalWords}
          </div>
          <div className={`tw-body-text tw-font-medium tw-self-start`}>
            Sentences: {totalSentences}
          </div>
          <div className={`tw-body-text tw-font-medium tw-self-start`}>
            Complex Words: {totalComplexWords}
          </div>
          <div className={`tw-body-text tw-font-bold tw-self-start tw-py-2`}>
            Fog Index: {fogIndex == Infinity ? 0 : fogIndex}
          </div>
        </div>
      </div>
    </div>
  );
};

FogIndexOverlay.propTypes = {
  fogIndex: PropTypes.number,
  totalWords: PropTypes.number,
  totalSentences: PropTypes.number,
  totalComplexWords: PropTypes.number,
};

export default FogIndexOverlay;
