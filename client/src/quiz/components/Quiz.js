import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
                multiChoice={props.multiChoice}
            />
        );
    }


    return (
        <div className="quiz container shadow" key={props.questionId}>
            <QuestionCount counter={props.questionId} total={props.questionTotal}/>
            <Question content={props.question}/>
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <div className="align-right">
                <button class="btn btn-second text-uppercase js-scroll-trigger nextButton" onClick={props.nextQuestion}
                        disabled={props.disable}>Next Question
                </button>
            </div>
        </div>
    );
}


Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    multiChoice: PropTypes.func.isRequired
};

export default Quiz;