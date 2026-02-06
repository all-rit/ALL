import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ALLModal from 'src/components/all-components/ALLModal';

const optionsList = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];

const RatingModal = ({
  show,
  setShow,
  toneRating,
  setToneRating,
  confidenceRating,
  setConfidenceRating,
  onSubmit,
  showTextModal,
  setShowTextModal,
  textModalHeader,
  textModalBody,
  onCloseTextModal,
}) => {
  const firstModalRef = useRef(null);
  // Control overlay when modals are shown
  useEffect(() => {
    if (show || showTextModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show, showTextModal]);

  const handleSubmit = () => {
    if (!toneRating || !confidenceRating) {
      alert('Please rate both factors before submitting.');
      return;
    }
    onSubmit();
  };

  return (
    <>
      <div className="tw-relative tw-z-50">
        <div ref={firstModalRef}>
          <ALLModal
            show={show}
            setShow={setShow}
            showHeader={true}
            canClose={true}
            canDismiss={true}
            customHeader={
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
                  Rate each factor by its influence on your trust.
                </div>
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="tw-text-gray-400 hover:tw-text-gray-600 tw-text-3xl tw-font-bold tw-bg-transparent tw-border-none tw-p-0 tw-leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            }
            showFooter={false}
            customBody={
              <div className="tw-px-2">
                <div className="tw-mb-8">
                  <div className="tw-mb-4 tw-text-sm">Tone:</div>
                  <div className="tw-flex tw-items-center tw-gap-4 tw-mb-2 tw-flex-wrap tw-justify-center">
                    <span className="tw-text-xs tw-text-gray-500 tw-mr-2">
                      Low influence
                    </span>
                    {optionsList.map((option) => {
                      const value = option.toLowerCase().replace(/ /g, '-');
                      const selected = toneRating === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          className={`tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border-2 tw-transition-all tw-duration-200 tw-ease-in-out ${
                            selected
                              ? 'tw-bg-blue-500 tw-border-blue-600 tw-scale-110 tw-shadow-lg'
                              : 'tw-bg-white tw-border-gray-300 hover:tw-border-blue-400 hover:tw-scale-105'
                          }`}
                          onClick={() => setToneRating(value)}
                          aria-label={option}
                        ></button>
                      );
                    })}
                    <span className="tw-text-xs tw-text-gray-500 tw-ml-2">
                      High influence
                    </span>
                  </div>
                  {toneRating && (
                    <div className="tw-mt-2 tw-text-xs tw-text-gray-600">
                      Tone selected:{' '}
                      <span className="tw-font-semibold tw-text-blue-600">
                        {optionsList.find(
                          (o) =>
                            o.toLowerCase().replace(/ /g, '-') === toneRating
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Confidence rating */}
                <div className="tw-mb-8">
                  <div className="tw-mb-4 tw-mt-6 tw-text-sm">Confidence:</div>

                  <div className="tw-flex tw-items-center tw-gap-4 tw-mb-2 tw-flex-wrap tw-justify-center">
                    <span className="tw-text-xs tw-text-gray-500 tw-mr-2">
                      Low influence
                    </span>
                    {optionsList.map((option) => {
                      const value = option.toLowerCase().replace(/ /g, '-');
                      const selected = confidenceRating === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          className={`tw-w-11 tw-h-11 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border-2 tw-transition-all tw-duration-200 tw-ease-in-out ${
                            selected
                              ? 'tw-bg-blue-500 tw-border-blue-600 tw-scale-110 tw-shadow-lg'
                              : 'tw-bg-white tw-border-gray-300 hover:tw-border-blue-400 hover:tw-scale-105'
                          }`}
                          onClick={() => setConfidenceRating(value)}
                          aria-label={option}
                        ></button>
                      );
                    })}
                    <span className="tw-text-xs tw-text-gray-500 tw-ml-2">
                      High influence
                    </span>
                  </div>
                  {confidenceRating && (
                    <div className="tw-mt-2 tw-text-xs tw-text-gray-600">
                      Confidence selected:{' '}
                      <span className="tw-font-semibold tw-text-blue-600">
                        {optionsList.find(
                          (o) =>
                            o.toLowerCase().replace(/ /g, '-') ===
                            confidenceRating
                        )}
                      </span>
                    </div>
                  )}
                </div>
                <div className="tw-mt-8 tw-flex tw-justify-center">
                  <button
                    type="button"
                    className="btn btn-primary text-black btn-xl text-uppercase"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            }
          />
          <ALLModal
            show={showTextModal}
            setShow={setShowTextModal}
            showHeader={true}
            canClose={true}
            canDismiss={true}
            customHeader={
              <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-px-6 tw-py-4">
                {textModalHeader}
                <button
                  type="button"
                  onClick={onCloseTextModal}
                  className="tw-text-black tw-text-2xl tw-font-bold tw-bg-transparent tw-border-none tw-p-0 hover:tw-opacity-75"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            }
            showFooter={false}
            customBody={textModalBody}
          />
        </div>
      </div>
    </>
  );
};

RatingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  toneRating: PropTypes.string.isRequired,
  setToneRating: PropTypes.func.isRequired,
  confidenceRating: PropTypes.string.isRequired,
  setConfidenceRating: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  showTextModal: PropTypes.bool.isRequired,
  setShowTextModal: PropTypes.func.isRequired,
  textModalHeader: PropTypes.node,
  textModalBody: PropTypes.node,
  onCloseTextModal: PropTypes.func.isRequired,
};

export default RatingModal;
