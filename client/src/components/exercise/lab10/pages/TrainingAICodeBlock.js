/* eslint-disable react/prop-types */
import React from "react";
import Highlight from "react-highlight";
import { actions } from "../../../../reducers/lab10/RepairReducer";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../../../../assets/stylesheets/components/CodeBlock.css";
import { POPUP_MESSAGES } from "../../../../constants/lab10";
export default function TrainingAICodeBlock() {
    const timeValue = "";

    const preInput = `
import React from "react"; 
export default function TrainNetwork() {
    //Here is where you will update the time it take the training to run
    //So that more data can be gathered

    //Enter a value between 30 and 45 seconds into the input below
    const time = 
`;
    const postInput = `
} 
`;
    function validateTimeValue() {
        let error = null;
        if (!Number.isInteger(timeValue)) {
            error = POPUP_MESSAGES.INVALID_INTEGER;
        } else {
            try {
                const upperBound = 45;
                const lowerBound = 30;
                if (timeValue < lowerBound && timeValue > upperBound) {
                    error = POPUP_MESSAGES.OUTSIDE_RANGE;
                }
            } catch (e) {
                switch (e.data?.category) {
                    case "wrongType":
                        error = POPUP_MESSAGES.INVALID_INTEGER;
                        break;
                    default:
                        error = e.message;
                }
            }
            const result = {
                timeValue,
                error,
                passed: !error,
            }

            if (!result.passed) {
                actions.updateRepairError(result.error);
            } else {
                actions.updateRepairError(null);
            }
            return result;
        }
    }


    function validateRepair() {
        const timeValue = validateTimeValue();
        alert(timeValue);
    }

    function handleTimeValueChange(e) {
        actions.updateTimeValue(e.target.value);
    }

    return (
        <div>
            <div className="filenameHeader">TrainingAICodeBlock.js</div>
            <div style={{ textAlign: "left" }}>
                <Highlight>
                    <pre>
                        <code className="language-jsx">{preInput.trim()}</code>
                        &nbsp;
                        <input
                            type="text"
                            value={timeValue}
                            onChange={handleTimeValueChange}
                        ></input>
                        &#59;
                        <br></br>
                        <code>{postInput.trim()}</code>
                    </pre>
                </Highlight>
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
}
