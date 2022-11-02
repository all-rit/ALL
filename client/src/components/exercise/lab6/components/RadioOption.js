import React from "react";
import PropTypes from "prop-types";

function RadioOption(props) {
    return (
        <li className = "answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="answerGroup"
            id={props.answerType}
            value={props.answerType}
            onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
        </label>
        </li>
    )
}

RadioOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
};

export default RadioOption;