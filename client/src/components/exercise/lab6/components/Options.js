import React from "react";
import PropTypes from "prop-types";


/*Supposed to be the answer component to allow radio button functionality
*/
function Options(props) {
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

Options.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
};

export default Options;