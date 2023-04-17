/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { POPUP_MESSAGES } from "../../../../constants/lab10";
import { actions } from "../../../../reducers/lab10/RepairReducer";
export const TrainingAICodeBlock = () => {

    const [timeValue, setTimeValue] = useState("");
    const [timeError, setTimeError] = useState(null);

    function validateTimeValue() {
        let error = null;
        let upperBound = 45;
        let lowerBound = 30;
        const numericTimeValue = parseInt(timeValue, 10);

        if (isNaN(numericTimeValue) || !Number.isInteger(numericTimeValue)) {
            error = POPUP_MESSAGES.INVALID_INTEGER;
        } else if (timeValue > upperBound || timeValue < lowerBound) {
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
        validateTimeValue();
    }

    function handleTimeValueChange(e) {
        setTimeValue(e.target.value);
        actions.updateTimeValue(e.target.value);
    }

    return (
        <div className="code_editor">
            <div className="code_editor__content">
                <div className="code_editor__files">
                    {/* AutoSysAI.js */}
                    <div className="code_editor__file code_editor__file--active">
                        TrainingAI.js
                    </div>
                </div>

                {/* import React, Component from react */}
                <div className="code_editor__code">
                    <div className="code_editor__line">
                        <span className="code_editor__line--purple">import&nbsp;</span>
                        <span className="code_editor__line--blue">React&nbsp;</span>
                        <span className="code_editor__line--purple">from&nbsp;</span>
                        <span className="code_editor__line--orange">
                            &lsquo;react&lsquo;
                        </span>
                        <span className="code_editor__line--gold">;</span>
                    </div>

                    <div className="code_editor__line">&nbsp;</div>

                    {/* class AutoSysAI extends Component*/}
                    <div className="code_editor__line">
                        <span className="code_editor__line--purple">export&nbsp;</span>
                        <span className="code_editor__line--purple">default&nbsp;</span>
                        <span className="code_editor__line--blue">function&nbsp;</span>
                        <span className="code_editor__line--green">TrainingAI&nbsp;</span>
                        <span className="code_editor__line--purple">&#40;</span>
                        <span className="code_editor__line--blue">props</span>
                        <span className="code_editor__line--purple">&#41;&nbsp;</span>
                        <span className="code_editor__line--gold">&#123;</span>
                    </div>

                    {/* makeDecision(){ */}
                    <div className="code_editor__line">
                        {/* AI function comment */}
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; Here is where you will update the time it take the
                            training to run so that more data can be gathered
                        </span>
                    </div>
                    <div className="code_editor__line">
                        {/* AI function comment */}
                        <span className="code_editor__line--darkgreen">
                            &#47;&#47; Enter a value between 30 and 45 seconds into the input
                            below
                        </span>
                    </div>
                    <div className="code_editor__line">
                        <span>&nbsp;&nbsp;</span>
                        <span className="code_editor__line--purple">const</span>
                        <span className=""> timeValue</span>
                        <span className="code_editor__line--purple"> = </span>
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

                    {/* return() */}
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
