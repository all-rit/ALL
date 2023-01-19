/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import Certificate from "./Certificate";

function Result(props) {
  function checkIfCorrect(answerIndex, questionIndex) {
    let isCorrect;
    props.quizQuestions[questionIndex].answers[answerIndex].val === 1
      ? (isCorrect = true)
      : (isCorrect = false);
    return isCorrect;
  }

  function getMultiCorrectNumCount(questionIndex) {
    let multiCount = 0;
    props.quizQuestions[questionIndex].answers.map((answer) => {
      if (answer.val === 1) {
        multiCount++;
      }
    });
    return multiCount;
  }

  function renderTableData() {
    let counter = 0;
    let isCorrect = false;
    return props.quizQuestions.map((quizQuestion, index) => {
      const { question, answers } = quizQuestion; // destructuring
      counter += 1;
      if (props.quizQuestions[counter - 1].multiChoice) {
        let isMultiCorrect = Array.from(props.selectedAnswers[counter - 1]).map(
          (element) => {
            return checkIfCorrect(element, counter - 1);
          }
        );
        isMultiCorrect.every((value) => value === true)
          ? (isCorrect = true)
          : (isCorrect = false);
        if (isCorrect) {
          isCorrect =
            getMultiCorrectNumCount(counter - 1) === isMultiCorrect.length
              ? true
              : false;
        }
      } else {
        isCorrect = checkIfCorrect(
          props.selectedAnswers[counter - 1].type,
          index
        );
      }
      return (
        <tr
          key={index}
          className={isCorrect ? "answer-correct" : "answer-wrong"}
        >
          <td className={"column-width"}>{question}</td>
          <td className={"column-width"}>{renderTableAnswersData(answers)}</td>
          <td className={"column-width"}>
            {renderTableSelectedAnswersData(
              props.selectedAnswers[counter - 1],
              answers
            )}
          </td>
          <td className={"column-width"}>
            {isCorrect ? "Correct" : "Not Correct"}
          </td>
        </tr>
      );
    });
  }

  function renderTableAnswersData(answers) {
    let counter = 0;
    return (
      <ul>
        {answers.map(function (answer, index) {
          counter += 1;
          if (answer["val"] === 1) {
            return (
              <li key={index}>
                {counter}. {answer["content"]}
                <hr />
              </li>
            );
          } else {
            return <div />;
          }
        })}
      </ul>
    );
  }

  function renderTableSelectedAnswersData(selectedAnswers, answers) {
    if (selectedAnswers instanceof Set) {
      return Array.from(selectedAnswers).map((answer) => {
        let questionNumber = parseInt(answer) + 1;
        return (
          <ul>
            <li key={questionNumber}>
              {questionNumber}. {answers[answer]["content"]}
              <hr />
            </li>
          </ul>
        );
      });
    } else {
      let questionNumber = parseInt(selectedAnswers.type) + 1;
      return (
        <ul>
          <li key={questionNumber}>
            {questionNumber}. {answers[selectedAnswers.type]["content"]}
            <hr />
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="quiz container shadow">
      <div className="result">
        Results <strong>Score: {props.quizResult}</strong>
        <br />
        <div>
          <table id="quizResults">
            <tbody>
              <tr>
                {/* {renderTableHeader()}*/}
                <th>QUESTION</th>
                <th>CORRECT ANSWERS</th>
                <th>SELECTED ANSWERS</th>
                <th>RESULTS</th>
              </tr>
              {renderTableData()}
            </tbody>
          </table>
          <div style={{ marginTop: "50px" }}>
            <Certificate quizResult={props.quizResult} lab={props.lab} />
          </div>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  selectedAnswers: PropTypes.array.isRequired,
};

export default Result;
