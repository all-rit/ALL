/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { POPUP_MESSAGES } from "../../../../../constants/lab10";
import { actions } from "../../../../../reducers/lab10/RepairReducer";
export const TrainingAICodeBlock = () => {
    const [timeValue, setTimeValue] = useState("");
    const [timeError, setTimeError] = useState(null);

    function validateTimeValue() {
        let error = null;
        let upperBound = 45;
        let lowerBound = 30;
        let numericTimeValue = parseInt(timeValue, 10);

        if (isNaN(numericTimeValue) || !Number.isInteger(numericTimeValue)) {
            error = POPUP_MESSAGES.INVALID_INTEGER;
        } else if (numericTimeValue > upperBound || numericTimeValue < lowerBound) {
            error = POPUP_MESSAGES.OUTSIDE_RANGE;
        }

        if (error !== null) {
            setTimeError(error);
            actions.updateTimeError(error);
            actions.updatePopup(error);
            return false;
        }

        setTimeError(null);
        actions.updateTimeError(null);
        actions.updatePopup(null);
        return true;
    }
    function validateRepair() {
        if (!validateTimeValue()) {
            actions.updateTimeError(timeError);
            actions.updatePopup("Errors in repair, please fix.")
            actions.undoRepairChanges();
        } else {
            actions.updateRepairError(null);
            actions.updateTimeError(null);
            actions.closeRepair();
            actions.updatePopup(POPUP_MESSAGES.SUCCESS);
        }

    }

    function handleTimeValueChange(e) {
        setTimeValue(e.target.value);
        actions.updateTimeValue(e.target.value);
    }

    return (
        <div className="code_editor">
            <div className="code_editor__content">
                <div className="code_editor__files">
                    {/* TrainingAI.js */}
                    <div className="code_editor__file code_editor__file--active">
                        TrainingAI.js
                    </div>
                </div>

                {/* Description Comments */}
                <div className="code_editor__code">
                    <div className="code_editor__line">
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; Here is the config file that tells the Neural Network how long to collect data
                        </span>
                        <br></br>
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; There are also fields for how far the smiley face should move left or right
                        </span>
                        <br></br>
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; Edit the time value so that the network collects data for 30-45 seconds
                        </span>
                        <br></br>
                    </div>
                    <div className="code_editor__line">
                        <span className="code_editor__line--darkblue">const trainingAIConfig &#61; &#123;&nbsp;</span>
                        <br></br>
                        <span className="code_editor__line--blue">&nbsp; moveLeft&#58; 12 </span>
                        <br></br>
                        <span className="code_editor__line--blue">&nbsp; moveRigh&#58; 12</span>
                        <br></br>
                        {/* Enter Value comment */}
                        <span className="code_editor__line--darkgreen">
                            &nbsp;&nbsp;&#47;&#47; Enter a value between 30 and 45 seconds into the input
                            below
                        </span>
                    </div>
                    <div className="code_editor__line">
                        <span className="code_editor__line--blue">&nbsp; timeValue&#58; </span>
                        <input
                            type="text"
                            className={`${timeError ? "form-error-input" : ""} tw-w-96`}
                            value={timeValue}
                            onChange={handleTimeValueChange}
                        ></input>
                    </div>
                    {timeError && (
                        <div className="code_editor__line">
                            <span className={"form-error"}>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                {timeError}
                            </span>
                        </div>
                    )}

                    <div className="code_editor__line">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="code_editor__line"></div>

                    <div className="code_editor__line">
                        <span className="code_editor__line--gold">&#125;</span>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className="button button--green button--block"
                onClick={validateRepair}
            >
                Update
            </button>
        </div>
    );
};

export default TrainingAICodeBlock;
