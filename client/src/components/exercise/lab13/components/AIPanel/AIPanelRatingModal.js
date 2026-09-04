import React from "react";
import { BIAS_DEFINITIONS } from "src/constants/lab13/BiasQuestionsConfig";
import RatingModal from "../RatingModal";
import PropTypes from "prop-types";
const AIPanelRatingModal = ({
  showRatingModal,
  setShowRatingModal,
  showBiasExplanation,
  setShowBiasExplanation,
  selectedBiasData,
  handleBiasExplanationClose,
  setToneRating,
  setConfidenceRating,
  toneRating,
  confidenceRating,
}) => {
  const biasDefinition = selectedBiasData
    ? BIAS_DEFINITIONS[selectedBiasData.biasType]
    : null;

  const handleRatingSubmit = () => {
    setShowRatingModal(false);
    setShowBiasExplanation(true);
  };

  return (
    <RatingModal
      show={showRatingModal}
      setShow={setShowRatingModal}
      toneRating={toneRating}
      setToneRating={setToneRating}
      confidenceRating={confidenceRating}
      setConfidenceRating={setConfidenceRating}
      onSubmit={handleRatingSubmit}
      showTextModal={showBiasExplanation}
      setShowTextModal={setShowBiasExplanation}
      textModalHeader={
        biasDefinition ? (
          <div className="tw-text-xl tw-font-bold tw-text-textGray tw-pb-0 tw-mb-0 tw-body-text">
            {biasDefinition.name}
          </div>
        ) : null
      }
      textModalBody={
        selectedBiasData && biasDefinition ? (
          <div className="tw-p-4 tw-pt-0 tw-text-sm tw-text-gray-700">
            {selectedBiasData.aiResponseText && (
              <div className="tw-mb-2 tw-p-1 tw-bg-gray-50 tw-rounded tw-border tw-border-gray-200">
                <p className=" tw-text-left tw-text-gray-700 tw-body-text">
                  <strong>Given AI Response: </strong>
                  <em>&quot;{selectedBiasData.aiResponseText}&quot;</em>
                </p>
              </div>
            )}
            <div className="tw-mb-2">
              <p className="tw-text-left tw-text-gray-600 tw-border-l-4 tw-border-primary-blue tw-pl-1 tw-pb-3 tw-body-text">
                {selectedBiasData.explanation}
              </p>
            </div>
            <div className="tw-bg-blue-50 tw-p-1 tw-rounded tw-mb-2">
              <h5 className="tw-font-bold tw-mb-2">
                What is {biasDefinition.name}?
              </h5>
              <p className="tw-body-text">{biasDefinition.definition}</p>
            </div>
          </div>
        ) : null
      }
      onCloseTextModal={handleBiasExplanationClose}
    />
  );
};

AIPanelRatingModal.propTypes = {
  showRatingModal: PropTypes.bool.isRequired,
  setShowRatingModal: PropTypes.func.isRequired,
  showBiasExplanation: PropTypes.bool.isRequired,
  setShowBiasExplanation: PropTypes.func.isRequired,
  selectedBiasData: PropTypes.object,
  handleBiasExplanationClose: PropTypes.func.isRequired,
  setToneRating: PropTypes.func.isRequired,
  setConfidenceRating: PropTypes.func.isRequired,
  toneRating: PropTypes.string.isRequired,
  confidenceRating: PropTypes.string.isRequired,
};

export default AIPanelRatingModal;
