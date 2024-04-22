/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import Certificate from "./Certificate";
import RedX from "../../../assets/images/RedX.png";
import GreenCheck from "../../../assets/images/GreenCheck.webp";

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
        const isMultiCorrect = Array.from(
          props.selectedAnswers[counter - 1],
        ).map((element) => {
          return checkIfCorrect(element, counter - 1);
        });
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
          index,
        );
      }
      return (
        <tr
          key={index}
          className={isCorrect ? "answer-correct" : "answer-wrong"}
        >
          <td className={"column-width p-3"}>{question}</td>
          <td className={"column-width p-3"}>
            {renderTableAnswersData(answers)}
          </td>
          <td className={"column-width p-3"}>
            {renderTableSelectedAnswersData(
              props.selectedAnswers[counter - 1],
              answers,
            )}
          </td>
          <td className={"column-width p-3"}>
            {isCorrect ? (
              <img src={GreenCheck} alt={"Correct"} />
            ) : (
              <img src={RedX} alt="Incorrect" />
            )}
          </td>
        </tr>
      );
    });
  }

  function renderTableAnswersData(answers) {
    let counter = 0;
    return (
      <ul className="tw-rounded-3xl">
        {answers.map(function (answer, index) {
          counter += 1;
          if (answer["val"] === 1) {
            return (
              <li key={index}>
                {counter}. {answer["content"]}
              </li>
            );
          } else {
            return <div key={index} />;
          }
        })}
      </ul>
    );
  }

  function renderTableSelectedAnswersData(selectedAnswers, answers) {
    if (selectedAnswers instanceof Set) {
      return Array.from(selectedAnswers).map((answer) => {
        const questionNumber = parseInt(answer) + 1;
        return (
          <ul>
            <li key={questionNumber}>
              {questionNumber}. {answers[answer]["content"]}
            </li>
          </ul>
        );
      });
    } else {
      const questionNumber = parseInt(selectedAnswers.type) + 1;
      return (
        <ul>
          <li key={questionNumber}>
            {questionNumber}. {answers[selectedAnswers.type]["content"]}
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="tw-relative">
      <div className="quiz container shadow p-3 tw-bg-labYellow tw-rounded-3xl shadow">
        <div className=" w-100 result tw-bg-labLightGray tw-rounded-2xl poppins mb-3 shadow">
          <h1>
            <strong>RESULTS</strong>
          </h1>
          <strong>Score: {props.quizResult}</strong>
        </div>
        <div className="result tw-bg-labLightGray p-3 tw-rounded-2xl poppins shadow">
          <div>
            <table id="quizResults" className="tw-bg-white tw-rounded-3xl">
              <tbody>
                <tr>
                  {/* {renderTableHeader()}*/}
                  <th className="resultTopLeft">QUESTION</th>
                  <th>CORRECT ANSWERS</th>
                  <th>SELECTED ANSWERS</th>
                  <th className="resultTopRight p-3">RESULTS</th>
                </tr>
                {renderTableData()}
              </tbody>
            </table>
            {props.hideCertificate === false && (
              <div style={{ marginTop: "50px" }}>
                <Certificate quizResult={props.quizResult} lab={props.lab} />
              </div>
            )}
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
