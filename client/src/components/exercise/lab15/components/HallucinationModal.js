import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LabButton from "src/components/all-components/LabButton";

const HallucinationModal = ({
  isOpen,
  onClose,
  hallucinationType,
  hallucinationDescription,
  aiResponse,
  whatWentWrong,
  whyPromptCausedThis,
  fakeCitation,
}) => {
  // Tracks whether the the fake citation link was clicked
  // to then display "It doesn't exist!" afterwards
  const [citationClicked, setCitationClicked] = useState(false);

  useEffect(() => {
    if (isOpen) setCitationClicked(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCitationClick = () => {
    setCitationClicked(true);
    window.open("/source-not-found", "_blank");
  };

  return (
    <>
      <div
        className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-z-[100]"
        onClick={onClose}
      />

      <div className="tw-fixed tw-inset-0 tw-z-[101] tw-flex tw-items-center tw-justify-center tw-pointer-events-none">
        <div className="tw-bg-white tw-mt-10 tw-p-3 tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-[56rem] tw-mx-4 tw-pointer-events-auto tw-max-h-[90vh] tw-overflow-y-auto">
          {/* Header */}
          <div className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-border-b tw-border-gray-200">
            <h2 className="tw-text-lg tw-font-bold">
              Why might this response be unreliable?
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="hover:tw-text-gray-600 tw-text-3xl tw-font-bold tw-bg-transparent tw-border-none tw-cursor-pointer tw-leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
            {/* AI response quote */}
            <div className="tw-text-left">
              <span className="tw-body-text tw-font-semibold">
                AI response:
              </span>
              <span className="tw-body-text tw-px-1 tw-italic">
                &quot;{aiResponse}&quot;
              </span>
            </div>

            {/* What went wrong */}
            <div>
              <p className="tw-body-text tw-font-semibold">What went wrong?</p>
              <p className="tw-body-text">{whatWentWrong}</p>
            </div>

            {/* Why did the prompt cause this */}
            <div>
              <p className="tw-body-text tw-font-semibold tw-mb-1">
                Why did the prompt cause this?
              </p>
              <p className="tw-body-text">{whyPromptCausedThis}</p>
            </div>

            {/* Hallucination type */}
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-border-solid tw-px-3">
              <span className="tw-body-text tw-underline tw-font-semibold tw-mt-1">
                Issue type: {hallucinationType}
              </span>
              <div>
                {hallucinationDescription && (
                  <p className="tw-body-text tw-mt-1">
                    {hallucinationDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Fake citation which is only shown when fakeCitation is non-empty */}
            {fakeCitation && (
              <div className="tw-rounded-lg">
                <p className="tw-text-base tw-mb-1">
                  The AI cited this source:
                </p>

                <button
                  onClick={handleCitationClick}
                  className="tw-text-labBlue tw-underline tw-text-base tw-text-left tw-bg-transparent tw-border-none tw-cursor-pointer"
                >
                  {fakeCitation}
                </button>

                {/* Before clicking citation */}
                {!citationClicked && (
                  <p className="tw-text-base tw-mt-1">
                    Does this source actually exist?
                  </p>
                )}

                {/* After clicking citation */}
                {citationClicked && (
                  <p className="tw-text-base tw-font-semibold tw-text-red-500 tw-mt-1">
                    It doesn&apos;t exist!
                  </p>
                )}
              </div>
            )}

            <div className="tw-flex tw-justify-center tw-mt-2">
              <LabButton label="Got it" onClick={onClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HallucinationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  hallucinationType: PropTypes.string.isRequired,
  hallucinationDescription: PropTypes.string,
  aiResponse: PropTypes.string.isRequired,
  whatWentWrong: PropTypes.string.isRequired,
  whyPromptCausedThis: PropTypes.string.isRequired,
  fakeCitation: PropTypes.string,
};

export default HallucinationModal;
