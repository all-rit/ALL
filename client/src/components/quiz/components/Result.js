/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import PropTypes from "prop-types";
// import Certificate from "./Certificate";
import GreenCheck from "../../../assets/images/GreenCheck.webp";
import RedX from "../../../assets/images/RedX.png";
import { navigate } from "@reach/router";

function Result(props) {
  const [detailsOpen, setDetailsOpen] = useState({});

  const openDetails = (questionId) => {
    setDetailsOpen(detailsOpen === questionId ? null : questionId);
    console.warn(questionId);
  };

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
      const { answers } = quizQuestion; // destructuring
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
        <a
          key={index}
          onClick={() => openDetails(index + 1)}
          className={
            "tw-rounded-lg tw-shadow-md tw-my-2 tw-flex tw-flex-col tw-w-3/4 tw-font-calibri tw-cursor-pointer"
          }
        >
          <div className={"tw-text-left tw-px-6 tw-font-bold tw-text-sm"}>
            Question {index + 1}
          </div>
          <div
            className={"tw-flex tw-flex-row tw-justify-between tw-items-center"}
          >
            <div
              className={
                "tw-px-6 tw-text-center tw-w-full tw-font-medium tw-text-sm tw-font-calibri"
              }
            >
              {renderTableSelectedAnswersData(
                props.selectedAnswers[counter - 1],
                answers,
              )}
            </div>
            <div className={"tw-w-1/12 tw-p-3"}>
              {isCorrect ? (
                <img src={GreenCheck} alt={"Correct"} />
              ) : (
                <img src={RedX} alt="Incorrect" />
              )}
            </div>
          </div>
          {detailsOpen === index + 1 && (
            <div className={"tw-px-3 tw-pb-3"}>
              {renderTableAnswersData(answers)}
            </div>
          )}
        </a>
      );
    });
  }

  function renderTableAnswersData(answers) {
    return (
      <ul className="tw-rounded-3xl">
        {answers.map(function (answer, index) {
          if (answer["val"] === 1) {
            return (
              <div key={index}>
                <div className={"tw-flex tw-flex-row tw-px-3 tw-text-left"}>
                  <p className={"tw-font-bold tw-text-nowrap tw-text-sm"}>
                    Correct Answer:&nbsp;
                  </p>
                  <p className={"tw-text-sm"}>{answer["content"]}</p>
                </div>
                <div className={"tw-flex tw-flex-row tw-px-3 tw-text-left"}>
                  <p className={"tw-font-bold tw-text-sm"}>
                    Explanation:&nbsp;
                  </p>
                  <p className={"tw-text-sm"}></p>
                </div>
              </div>
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
            <a key={questionNumber}>{answers[answer]["content"]}</a>
          </ul>
        );
      });
    } else {
      const questionNumber = parseInt(selectedAnswers.type) + 1;
      return (
        <ul>
          <a key={questionNumber}>{answers[selectedAnswers.type]["content"]}</a>
        </ul>
      );
    }
  }

  const handleImagineSurvey = () => {
    navigate("/Imagine/PostSurvey");
  };

  return (
    <div className="tw-flex tw-flex-row tw-align-middle tw-my-5">
      <div>
        <div className="tw-font-bold tw-text-[2rem] tw-font-calibri tw-py-6">
          <strong className={"tw-shadow-lg tw-rounded-lg tw-p-6"}>
            Score: {props.quizResult}
          </strong>
        </div>
        <div
          className={
            "tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-white tw-rounded-xl tw-py-5"
          }
        >
          {renderTableData()}
        </div>
      </div>
      <div className=" d-flex flex-column justify-content-center mt-3">
        {props.isImagine ? (
          <button
            className="btn btn-primary btn-xl text-uppercase  next"
            onClick={handleImagineSurvey}
          >
            Continue to Post-Survey
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  selectedAnswers: PropTypes.array.isRequired,
  isImagine: PropTypes.bool,
  lab: PropTypes.string,
  hideCertificate: PropTypes.bool,
  quizQuestions: PropTypes.array,
};

export default Result;
