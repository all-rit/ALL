import React from 'react';
import PropTypes from 'prop-types';
import AnswerOption from "./AnswerOption";
import quizQuestions from "../api/quizQuestions";
import Certificate from "./Certificate";

function Result(props) {

    function renderTableHeader() {
        let header = Object.keys(quizQuestions[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    function isAnswerIncorrect(score) {
        if (score == 1) {
            return true;
        } else {
            return false;
        }

    }

    function renderTableData() {
        var counter = 0;
        var isIncorrect = false;
        return quizQuestions.map((quizQuestion, index) => {
            const {question, answers} = quizQuestion //destructuring
            counter += 1;
            isIncorrect = isAnswerIncorrect(props.quizScore[counter - 1]);
            return (
                <tr key={index} className={isIncorrect ? 'answer-correct' : 'answer-wrong'}>
                    <td className={'column-width'}>{question}</td>
                    <td className={'column-width'}>{renderTableAnswersData(answers)}</td>
                    <td className={'column-width'}>{renderTableSelectedAnswersData(props.selectedAnswers[counter - 1], answers)}</td>
                </tr>

            );

        })

    }

    function renderTableAnswersData(answers) {
        var counter = 0;
        return (
            <ul>
                {answers.map(function (answer, index) {
                    counter += 1;
                    if (answer['val'] == 1) {
                        return (
                            <li key={index}>{counter}. {answer['content']}
                                <hr/>
                            </li>
                        );
                    }

                })}
            </ul>
        )
    }


    function renderTableSelectedAnswersData(selectedAnswers, answers) {
        const choices = Object.values(selectedAnswers);
        var counter = 0;
        return (
            <ul>
                {choices.map(function (selectedAnswer, index) {
                    counter += 1;
                    if (selectedAnswer == 1) {
                        return (
                            <li key={index}>{counter}. {answers[counter - 1]['content']}
                                <hr/>
                            </li>

                        );
                    }


                })}
            </ul>
        )

    }



    return (

        <div className="quiz container shadow">
            <div className="result">
                Results <strong>Score: {props.quizResult}</strong>
                <br/>
                <div>
                    <table id='quizResults'>
                        <tbody>
                        <tr>
                            {/*{renderTableHeader()}*/}
                            <th>QUESTION</th>
                            <th>ANSWERS</th>
                            <th>SELECTED ANSWERS</th>
                        </tr>
                        {renderTableData()}
                        </tbody>
                    </table>
                    <div style={{marginTop:"50px"}}>
                        <Certificate  quizResult = {props.quizResult}/>
                    </div>
                </div>
                </div>
            </div>
    );
}


Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
    quizScore: PropTypes.string.isRequired,
    selectedAnswers: PropTypes.string.isRequired
};

export default Result;
