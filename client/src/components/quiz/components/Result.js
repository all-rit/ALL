/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import GreenCheck from "../../../assets/images/GreenCheck.webp";
import RedX from "../../../assets/images/RedX.png";
import { navigate } from "@reach/router";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Certificate from "./Certificate";
import ViewCertificateButton from "../../exercise/lab1/components/ViewCertificateButton";

function Result(props) {
  const [detailsOpen, setDetailsOpen] = useState({});
  const [viewCertificate, setViewCertificate] = useState(false);
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
          className={`tw-rounded-lg tw-shadow-md tw-body-text tw-my-2 tw-w-10/12 tw-flex tw-flex-col tw-cursor-pointer tw-border-solid tw-border-[0.5px] tw-border-[#eee] ${detailsOpen === index + 1 && "tw-bg-primary-blue tw-text-white"}`}
        >
          <div
            className={"tw-text-left tw-px-6 tw-pt-3 tw-font-bold tw-body-text"}
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
                "tw-text-center tw-w-full tw-body-text tw-leading-snug tw-flex tw-flex-col tw-px-5"
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
                  <p className={"tw-font-bold tw-text-nowrap tw-body-text"}>
                    Correct Answer:&nbsp;
                  </p>
                  <p className={"tw-leading-snug tw-body-text"}>
                    {answer["content"]}
                  </p>
                </div>
                <div className={"tw-flex tw-flex-row tw-px-3 tw-text-left"}>
                  <p className={"tw-font-bold tw-leading-snug tw-body-text"}>
                    Explanation:&nbsp;
                  </p>
                  <p className={"tw-leading-snug tw-body-text"}>
                    {answer["explanation"]}
                  </p>
                </div>
                {answer["source"] && (
                  <div className={"tw-flex tw-flex-row tw-px-3 tw-text-left"}>
                    <p className={"tw-font-bold tw-leading-snug tw-body-text"}>
                      Source:&nbsp;
                    </p>
                    <p className={"tw-leading-snug tw-body-text"}>
                      {answer["source"]}
                    </p>
                  </div>
                )}
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
            <div key={questionNumber}>{answers[answer]["content"]}</div>
          </ul>
        );
      });
    } else {
      const questionNumber = parseInt(selectedAnswers.type) + 1;
      return (
        <ul>
          <div key={questionNumber}>
            {answers[selectedAnswers.type]["content"]}
          </div>
        </ul>
      );
    }
  }

  const handleImagineSurvey = () => {
    navigate("/Imagine/PostSurvey");
  };

  return (
    <div className="tw-flex tw-flex-col tw-align-middle tw-py-6">
      <div className={"tw-flex tw-justify-center tw-flex-col tw-items-center"}>
        <div className="tw-justify-between tw-items-center tw-flex tw-py-6 tw-w-3/4">
          <p className={"tw-rounded-lg tw-text-center tw-title"}>
            Score: {props.quizResult}
          </p>
          <ViewCertificateButton
            openCertificate={() => setViewCertificate(true)}
          />
        </div>
        <div
          className={`tw-w-full tw-flex tw-flex-col tw-items-center  tw-bg-white tw-rounded-xl tw-py-5 tw-my-5 tw-overflow-y-scroll `}
        >
          {renderTableData()}
        </div>
        <div className=" d-flex flex-column justify-content-center">
          {props.isImagine && (
            <button
              className="btn btn-primary btn-xl text-uppercase  next"
              onClick={handleImagineSurvey}
            >
              Continue to Post-Survey
            </button>
          )}
        </div>
        <Modal isOpen={viewCertificate} className={"tw-mx-[10%]"}>
          <ModalBody>
            <Certificate
              quizResult={props.quizResult}
              lab={props.lab}
              state={props.state}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setViewCertificate(false)}>Close</Button>
          </ModalFooter>
        </Modal>
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
  state: PropTypes.shape({
    main: PropTypes.shape({
      user: PropTypes.object,
    }),
  }),
};

export default Result;
