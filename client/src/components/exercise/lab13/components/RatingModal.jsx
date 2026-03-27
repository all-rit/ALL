import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ALLModal from "src/components/all-components/ALLModal";
import Likert from "src/components/all-components/Likert";
import LabButton from "src/components/all-components/LabButton";

const optionsList = ["Very Low", "Low", "Medium", "High", "Very High"];

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show, showTextModal]);

  const handleSubmit = () => {
    if (!toneRating || !confidenceRating) {
      alert("Please rate both factors before submitting.");
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
            canDismiss={false}
            width="56rem"
            customHeader={
              <div className="tw-flex tw-items-center tw-justify-between tw-p-4">
                <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
                  Rate how much each part of the AI response impacted your
                  trust.
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
              <div className="tw-px-2 quiz">
                <div className="tw-mb-8">
                  <div className="tw-mb-4 tw-body-text tw-text-center tw-border">
                    <p>
                      How much did the <em>tone</em> of the AI response impact
                      your trust in it?
                    </p>
                  </div>
                  <Likert
                    name="tone"
                    options={optionsList}
                    onAnswerSelected={(e) =>
                      setToneRating(
                        e.target.value.toLowerCase().replace(/ /g, "-"),
                      )
                    }
                  />
                </div>

                <div className="tw-mb-8">
                  <div className="tw-mb-4 tw-body-text tw-text-center tw-border">
                    <p>
                      How much did the AI sounding <em>confident</em> impact
                      your trust in it?
                    </p>
                  </div>
                  <Likert
                    name="confidence"
                    options={optionsList}
                    onAnswerSelected={(e) =>
                      setConfidenceRating(
                        e.target.value.toLowerCase().replace(/ /g, "-"),
                      )
                    }
                  />
                </div>
                <div className="tw-mt-8 tw-flex tw-justify-center">
                  <LabButton label="Submit" onClick={handleSubmit} />
                </div>
              </div>
            }
          />
          <ALLModal
            show={showTextModal}
            setShow={setShowTextModal}
            showHeader={true}
            canClose={true}
            canDismiss={false}
            customHeader={
              <div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-px-6 tw-py-4">
                {textModalHeader}
              </div>
            }
            showFooter={false}
            customBody={
              <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
                {textModalBody}
                <LabButton label="Done Reading" onClick={onCloseTextModal} />
              </div>
            }
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
