import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    if(props.multiChoice === true){
        return (
            <li className="answerOption">
                <input
                    type="checkbox"
                    className="checkboxCustomButton"
                    name="checkboxGroup"
                    id={props.answerType}
                    value={props.answerType}
                    onChange={props.onAnswerSelected}
                />
                <label className="checkboxCustomLabel" htmlFor={props.answerType}>
                    {props.answerContent}
                </label>
            </li>
        );
    }
    else {
        return (
            <li className="answerOption">
                <input
                    type="radio"
                    className="radioCustomButton"
                    name="checkboxGroup"
                    //checked={props.answerType === props.answer}
                    id={props.answerType}
                    value={props.answerType}
                    onChange={props.onAnswerSelected}
                />
                <label className="radioCustomLabel" htmlFor={props.answerType}>
                    {props.answerContent}
                </label>
            </li>
        );
    }
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    multiChoice: PropTypes.bool.isRequired
};

export default AnswerOption;
