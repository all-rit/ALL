import React from "react";
import PropTypes from "prop-types";

function RenderRadio(props) {
    return (
        <li className = "renderRadio">
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

RenderRadio.PropTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
};

export default RenderRadio;