import React from 'react';
import PropTypes from 'prop-types';
import Certificate from "./Certificate";

function Result(props) {

    // function renderTableHeader() {
    //     let header = Object.keys(quizQuestions[0])
    //     return header.map((key, index) => {
    //         return <th key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    function isAnswerIncorrect(score) {
        return score === 1;
    }

    function renderTableData() {
        let counter = 0;
        let isIncorrect = false;
        return props.quizQuestions.map((quizQuestion, index) => {
            const {question, answers} = quizQuestion //destructuring
            counter += 1;
            isIncorrect = isAnswerIncorrect(props.quizScore[counter - 1]);

            return (
                
                <tr key={index} className={isIncorrect ? 'answer-correct' : 'answer-wrong'}>
                    <td className={'column-width'}>{question}</td>
                    <td className={'column-width'}>{renderTableAnswersData(answers)}</td>
                    <td className={'column-width'}>{renderTableSelectedAnswersData(props.selectedAnswers[counter - 1], answers)}</td>
                    <td className={'column-width'}>{isIncorrect ? 'Correct' : 'Not Correct'}</td>
                </tr>
            );
        })
    }

    function renderTableAnswersData(answers) {
        let counter = 0;
        return (
            <ul>
                {answers.map(function (answer, index) {
                    counter += 1;
                    if (answer['val'] === 1) {
                        return (
                            <li key={index}>{counter}. {answer['content']}
                                <hr/>
                            </li>
                        );
                    } else {
                        return <div/>
                    }
                })}
            </ul>
        )
    }


    function renderTableSelectedAnswersData(selectedAnswers, answers) {
        const choices = Object.values(selectedAnswers);
        let counter = 0;
        return (
            <ul>
                {choices.map(function (selectedAnswer, index) {
                    counter += 1;
                    if (selectedAnswer === 1) {
                        return (
                            <li key={index}>{counter}. {answers[counter - 1]['content']}
                                <hr/>
                            </li>

                        );
                    } else {
                        return <div/>
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
                            <th>CORRECT ANSWERS</th>
                            <th>SELECTED ANSWERS</th>
                            <th>RESULTS</th>
                        </tr>
                        {renderTableData()}
                        </tbody>
                    </table>
                    <div style={{marginTop:"50px"}}>
                        <Certificate quizResult={props.quizResult} lab={props.lab}/>
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
