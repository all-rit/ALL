import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ALLModal from 'src/components/all-components/ALLModal';
import Likert from 'src/components/all-components/Likert';

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
                        width="56rem"
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
                            <div className="tw-px-2 quiz">
                                <div className="tw-mb-8">
                                    <div className="tw-mb-4 tw-text-sm">Tone:</div>
                                    <Likert name="tone" options={optionsList} onAnswerSelected={(e) => setToneRating(e.target.value.toLowerCase().replace(/ /g, '-'))} />
                                </div>

                                <div className="tw-mb-8">
                                    <div className="tw-mb-4 tw-text-sm">Confidence:</div>
                                    <Likert name="confidence" options={optionsList} onAnswerSelected={(e) => setConfidenceRating(e.target.value.toLowerCase().replace(/ /g, '-'))} />
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
