import { React, useState } from "react";
import { PropTypes } from "prop-types";
import Survey from "./Survey";
import { navigate } from "@reach/router";
import PreSurveyQuestions23 from "../../imagine23/data/preSurveyQuestions";
import PostSurveyQuestions23 from "../../imagine23/data/postSurveyQuestions";
import ImagineService from "../../../services/ImagineService";
import Spinner from "../../../common/Spinner/Spinner";
import PreSurveyQuestions25 from "../../../constants/imagine25/preSurveyQuestions";
import PostSurveyQuestions25 from "../../../constants/imagine25/postSurveyQuestions";
import PreSurveyQuestions26 from "../../../constants/imagine26/preSurveyQuestions";
import PostSurveyQuestions26 from "../../../constants/imagine26/postSurveyQuestions";

/**
 * assignQuizQuestions is a function that returns a given set
 * of quiz questions dependent on the labId passed
 * @param {integer} labId is passed to the function to determine
 * what questions to grab
 */
function assignQuizQuestions(surveyType, year) {
  switch (surveyType) {
    case "pre":
      if (year == 23) {
        return PreSurveyQuestions23;
      } else if (year == 25) {
        return PreSurveyQuestions25;
      } else if (year == 26) {
        return PreSurveyQuestions26;
      } else {
        return;
      }

    case "post":
      if (year == 23) {
        return PostSurveyQuestions23;
      } else if (year == 25) {
        return PostSurveyQuestions25;
      } else if (year == 26) {
        return PostSurveyQuestions26;
      } else {
        return;
      }
    default:
      return [
        {
          question: "Default",
          answers: [
            {
              val: 0,
              type: "0",
              content: "Default",
            },
          ],
          multiChoice: false,
        },
      ];
  }
}

/**
 * SurveyHandler is react component responsible for tracking users responses
 * this will be the main handler to manage the state and logic for the new quiz component
 * @param {Object} props will be the injectable fields that will populate and provide the
 * component with information.
 */
const SurveyHandler = (props) => {
  const { userID, type, year } = props;
  let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
  const [questions] = useState(assignQuizQuestions(props.type, props.year));
  const [answerOption, setAnswerOption] = useState(
    questions[currentQuestionCursor].answers,
  );
  let [isUnderAge, setIsUnderAge] = useState(false);

  // initialized to a empty array to house recorded answers
  let [selectedAnswers, setSelectedAnswers] = useState([]);
  let [disableNext, setDisableNext] = useState(true);
  let [surveyComplete, setSurveyComplete] = useState(false);
  //track the amount of time per question in seconds
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  /**
   * HandleNext() is a function that is responsible for allowing the user to
   * iterate to the next question. this will then update the disabling for the
   * selection on on the next question as it iterates to the next option
   */
  function handleNext() {
    if (currentQuestionCursor < questions.length) {
      let updateCursor = currentQuestionCursor + 1;
      setCurrentQuestionCursor(updateCursor);
      setAnswerOption(questions[updateCursor].answers);
      setDisableNext(true);
      setQuestionStartTime(Date.now());
    }
  }
  /**
   * onComplete(): is a function that is responsible for preparing and running the
   * calculations to grade a users responses to the quiz. This will then prepare the data
   * to display to the user for the result portion of the quiz.
   */
  async function onComplete(surveyType) {
    try {
      setSurveyComplete(true);
      if (surveyType === "pre") {
        // will need to be changed with next logic story
        const response = await activitySelector();

        return response;
        // This will handle navigation
      } else if (surveyType === "post") {
        await ImagineService.postSurvey(userID, selectedAnswers, year);
        if (year === 25) {
          navigate("/Imagine2025/Done");
        } else if (year === 26) {
          navigate("/Imagine2026/Done");
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * activitySelector(): is a function that is responsible for determining
   * what activity the user will be directed to based on the responses given
   * in the pre-survey.
   */
  async function activitySelector() {
    if (year === 23) {
      const response = await ImagineService.preSurvey(
        props.userID,
        selectedAnswers,
        year,
      );
      const section = (await response.text()).replace(/['"]+/g, "");

      if (section === "experiential" || section === "control") {
        navigate("/Imagine2023/ExperientialStart");
      } else if (
        section === "discomfortCountNonPOC" ||
        section === "discomfortCountPOC"
      ) {
        navigate("/Imagine2023/ExpressionStart");
      } else {
        console.log(section);
        console.error("Navigating to None");
      }
    } else if (year == 25) {
      sessionStorage.setItem("isUnderAge", isUnderAge);

      if (isUnderAge) {
        //will be changed to point to avatarCreation when merged
        navigate("/Imagine2025/AvatarCreation");
      } else {
        await ImagineService.preSurvey(props.userID, selectedAnswers, year);
        //will be changed to point to avatarCreation when merged
        navigate("/Imagine2025/AvatarCreation");
      }
    } else if (year == 26) {
      sessionStorage.setItem("isUnderAge", isUnderAge);
      if (isUnderAge) {
        navigate("/Imagine2026/GalagaInstructions");
      } else {
        await ImagineService.preSurvey(props.userID, selectedAnswers, year);
        navigate("/Imagine2026/UserProfilePicture");
      }
    } else {
      console.error("invalid year");
    }
  }
  /**
   * selectAnswer() is a function responsible for recording the
   * behavior in which a user enters in their answer. This function once
   * called will record the responses index and update the state of the
   * component.
   * @param {*} e event containing the index of the selected answer response.
   */
  function selectAnswer(e) {
    const answerValue = e?.target?.value;
    const timeSpent = (Date.now() - questionStartTime) / 1000;
    // text input case
    if (
      answerValue &&
      typeof answerValue === "object" &&
      !Array.isArray(answerValue)
    ) {
      setSelectedAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionCursor] = {
          question: questions[currentQuestionCursor].question,
          answer: answerValue,
          timeSpent: timeSpent,
        };
        return updatedAnswers;
      });

      setDisableNext(false); //Put so it goes next
      return;
    }

    // normal single choice / likert case
    const answer =
      questions[currentQuestionCursor].type == "likert"
        ? answerValue
        : questions[currentQuestionCursor].answers[answerValue].content;
    setIsUnderAge(
      answer == "Under 18 years old" && (props.year == 25 || props.year == 26),
    );

    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = prevAnswers.filter(
        (a) => a.answer !== "Under 18 years old",
      );

      return [
        ...updatedAnswers,
        {
          question: questions[currentQuestionCursor].question,
          answer: answer,
          timeSpent: timeSpent,
        },
      ];
    });

    setDisableNext(false);
  }

  /**
   * selectMulti is a function that is responsible for handling
   * behavior of a multi-answer question by recording the given input to
   * a set. this allowing for no duplicates and to easily remove entries when we
   * want to change what data is being recorded.
   * @param {*} e event holding the index of the selected answer
   */
  function selectMulti(e) {
    const timeSpent = (Date.now() - questionStartTime) / 1000;
    const answerValue =
      questions[currentQuestionCursor].answers[e.target.value].content;
    let tempAnswers = selectedAnswers;
    let storageSet;
    // ensures that there is a value stored there
    if (typeof tempAnswers[currentQuestionCursor] !== "undefined") {
      // copies over the set
      storageSet = new Set(tempAnswers[currentQuestionCursor].answer);
      // checks to see if the set has the value in it
      !storageSet.has(answerValue)
        ? storageSet.add(answerValue)
        : storageSet.delete(answerValue);
      // disable next if the set is empty
      setDisableNext(storageSet.size === 0 ? true : false);
      // assigns the updated set to the array
      tempAnswers[currentQuestionCursor] = storageSet;
    } else {
      // creates an empty set because does not exist in that spot
      setDisableNext(false);
      storageSet = new Set();
      // adds the value
      storageSet.add(answerValue);
      // assigns it to the array
      tempAnswers[currentQuestionCursor] = storageSet;
    }
    tempAnswers[currentQuestionCursor] = {
      question: questions[currentQuestionCursor].question,
      answer: Array.from(storageSet),
      timeSpent: timeSpent,
    };
    setSelectedAnswers(tempAnswers);
  }

  function rankingUpdate(updatedRankingAnswers) {
    setSelectedAnswers((prevState) => {
      const updatedState = [...prevState];
      const timeSpent = (Date.now() - questionStartTime) / 1000;
      updatedState[currentQuestionCursor] = {
        question: questions[currentQuestionCursor].question,
        answer: updatedRankingAnswers,
        timeSpent: timeSpent,
      };

      //don't allow next if there is a unused ranking
      setDisableNext(Object.values(updatedRankingAnswers).includes(0));

      return updatedState;
    });
  }

  return (
    <>
      {!surveyComplete ? (
        <Survey
          answer={""}
          answerOptions={answerOption}
          question={questions[currentQuestionCursor].question}
          questionId={currentQuestionCursor + 1}
          questionTotal={questions.length}
          questionType={questions[currentQuestionCursor].type}
          disable={disableNext}
          onAnswerSelected={selectAnswer}
          onMultiSelected={selectMulti}
          nextQuestion={handleNext}
          onComplete={() => onComplete(type)}
          isUnderAge={isUnderAge}
          avatar={questions[currentQuestionCursor].avatar}
          rankingUpdate={rankingUpdate}
        ></Survey>
      ) : (
        <div className="flex !tw-justify-center items-center">
          <Spinner className="m-auto" />
        </div>
      )}
    </>
  );
};
SurveyHandler.propTypes = {
  path: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleGroupAssignment: PropTypes.func, // optional
  year: PropTypes.number.isRequired,
};
export default SurveyHandler;
