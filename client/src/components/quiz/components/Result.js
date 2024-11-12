/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import GreenCheck from "../../../assets/images/GreenCheck.webp";
import RedX from "../../../assets/images/RedX.png";
import { navigate } from "@reach/router";
import ALLButton from "../../all-components/ALLButton";

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
          className={`tw-max-h-[5rem] tw-rounded-lg tw-shadow-md tw-my-2 tw-flex tw-flex-col tw-w-3/4 tw-font-calibri tw-cursor-pointer ${detailsOpen === index + 1 && "tw-bg-primary-blue tw-text-white tw-rounded-b-none"}`}
        >
          <div
            className={"tw-text-left tw-px-6 tw-pt-3 tw-font-bold tw-text-sm"}
          >
            Question {index + 1}
          </div>
          <div
            className={
              "tw-flex tw-flex-row tw-justify-between tw-pb-3 tw-px-3 tw-items-center"
            }
          >
            <div
              className={
                "tw-text-center tw-w-full tw-font-medium tw-text-sm tw-font-calibri tw-leading-snug tw-flex tw-flex-col tw-px-5"
              }
            >
              {renderTableSelectedAnswersData(
                props.selectedAnswers[counter - 1],
                answers,
              )}
            </div>
            <div className={"tw-min-w-[1rem] tw-max-w-[2rem]"}>
              {isCorrect ? (
                <img src={GreenCheck} alt={"Correct"} />
              ) : (
                <img src={RedX} alt="Incorrect" />
              )}
            </div>
          </div>
          {detailsOpen === index + 1 && (
            <div
              className={
                "tw-px-3 tw-pb-3 tw-bg-primary-blue tw-text-white tw-z-10 tw-shadow-lg tw-rounded-b-lg"
              }
            >
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
                <div
                  className={
                    "tw-flex tw-flex-row tw-px-3 tw-text-left tw-align-top tw-items-center"
                  }
                >
                  <p className={"tw-font-bold tw-text-nowrap tw-text-sm"}>
                    Correct Answer:&nbsp;
                  </p>
                  <p
                    className={
                      "tw-text-sm tw-leading-snug tw-body-styling-name"
                    }
                  >
                    {answer["content"]}
                  </p>
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
    <div className="tw-flex tw-flex-col tw-align-middle tw-h-[35rem]">
      <div className={"tw-overflow-y-scroll "}>
        <div className="tw-font-bold tw-text-[2rem] tw-mb-[5rem]">
          <strong className={"tw-shadow-lg tw-rounded-lg tw-p-6"}>
            Score: {props.quizResult}
          </strong>
        </div>
        <div
          className={`tw-w-full tw-max-h-[30rem] tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-white tw-rounded-xl tw-py-5 tw-my-5`}
        >
          {renderTableData()}
        </div>
        <div className=" d-flex flex-column justify-content-center tw-pt-12">
          {props.isImagine ? (
            <button
              className="btn btn-primary btn-xl text-uppercase  next"
              onClick={handleImagineSurvey}
            >
              Continue to Post-Survey
            </button>
          ) : (
            <ALLButton
              label={"View Certificate"}
              onClick={() => props.setViewCertificate(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  selectedAnswers: PropTypes.array.isRequired,
  isImagine: PropTypes.bool,
  lab: PropTypes.number,
  quizQuestions: PropTypes.array,
  setViewCertificate: PropTypes.func,
};

export default Result;
