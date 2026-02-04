import React, { useRef } from "react";
import PropTypes from "prop-types";
import ALLModal from "src/components/all-components/ALLModal";

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
        textModalHeader: PropTypes.node.isRequired,
        textModalBody: PropTypes.node.isRequired,
        onCloseTextModal: PropTypes.func.isRequired,
    };

    return (
        <div ref={firstModalRef}>
            <ALLModal
                show={show}
                setShow={setShow}
                showHeader={true}
                customHeader={
                    <div className="tw-text-xl tw-font-bold tw-text-textGray tw-m-3">
                        Rate each factor by its influence on your trust.
                    </div>
                }
                showFooter={false}
                customBody={
                    <div>
                        <div className="tw-mb-4 tw-text-sm">Tone:</div>
                        <div className="tw-flex tw-items-center tw-gap-4 tw-mb-2 tw-flex-wrap tw-justify-center">
                            <span className="tw-text-xs tw-text-gray-500 tw-mr-2">
                                Low influence
                            </span>
                            {optionsList.map((option) => {
                                const value = option.toLowerCase().replace(/ /g, "-");
                                const selected = toneRating === value;
                                return (
                                    <button
                                        key={value}
                                        type="button"
                                        className={`tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-400 tw-transition tw-duration-150 tw-ease-in-out ${selected ? "tw-bg-primary-blue" : "tw-bg-white"}`}
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
                                Tone selected:{" "}
                                <b>
                                    {optionsList.find(
                                        (o) => o.toLowerCase().replace(/ /g, "-") === toneRating,
                                    )}
                                </b>
                            </div>
                        )}
                        <div className="tw-mb-4 tw-mt-6 tw-text-sm">Confidence:</div>
                        <div className="tw-flex tw-items-center tw-gap-4 tw-mb-2 tw-flex-wrap tw-justify-center">
                            <span className="tw-text-xs tw-text-gray-500 tw-mr-2">
                                Low influence
                            </span>
                            {optionsList.map((option) => {
                                const value = option.toLowerCase().replace(/ /g, "-");
                                const selected = confidenceRating === value;
                                return (
                                    <button
                                        key={value}
                                        type="button"
                                        className={`tw-w-10 tw-h-10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-border tw-border-gray-400 tw-transition tw-duration-150 tw-ease-in-out ${selected ? "tw-bg-primary-blue" : "tw-bg-white"}`}
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
                                Confidence selected:{" "}
                                <b>
                                    {optionsList.find(
                                        (o) =>
                                            o.toLowerCase().replace(/ /g, "-") === confidenceRating,
                                    )}
                                </b>
                            </div>
                        )}
                        <div className="tw-mt-8 tw-flex tw-justify-center">
                            <button
                                type="button"
                                className="btn btn-primary text-black btn-xl text-uppercase"
                                onClick={onSubmit}
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
    );
};

export default RatingModal;
