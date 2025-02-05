import { React, useState } from "react";
import { PropTypes } from "prop-types";
import PreSurveyQuestions from "./preSurveyQuestions"
import { navigate } from "@reach/router";
import Survey from "./Survey"
// import Spinner from "../../../common/Spinner/Spinner";


function assignSurveyQuestions(surveyType) {
    switch (surveyType) {
      case "pre":
        return PreSurveyQuestions;
      case "post":
        return PostSurveyQuestions;
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

const SurveyHandler = (props) => {
    const { type, year } = props;
  const [questions] = useState(assignSurveyQuestions(props.type));
    let [currentQuestionCursor, setCurrentQuestionCursor] = useState(0);
    let [isUnderage, setIsUnderAge] = useState(false);
    const [answerOption, setAnswerOption] = useState(
        questions[currentQuestionCursor].answers,
    );
      // initialized to a empty array to house recorded answers
    let [selectedAnswers, setSelectedAnswers] = useState([]);
    let [disableNext, setDisableNext] = useState(true);
    let [surveyComplete, setSurveyComplete] = useState(false);

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
      }
    }

    function selectAnswer(e) {
      const answerValue = e.target.value;
      const answer = questions[currentQuestionCursor].answers[answerValue].content

      if(answer == "Under 18 years old"){
        setIsUnderAge(true)
      }

      setSelectedAnswers([
        ...selectedAnswers,
        {
          question: questions[currentQuestionCursor].question,
          answer: questions[currentQuestionCursor].answers[answerValue].content,
        },
      ]);
      setDisableNext(false);
    }

    function selectMulti(e) {
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
      };
      setSelectedAnswers(tempAnswers);
    }


    /**
   * onComplete(): is a function that is responsible for ending the survey portion of the Imagine 2025 study and navigating users to
   * their specified game
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
        navigate("/Imagine2023/ExerciseEnd");
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
    if (isUnderage){
      navigate("/Imagine2025")
      console.log("working")
    }

    const response = await ImagineService.preSurvey(
      props.userID,
      selectedAnswers,
      year,
    );
    const section = (await response.text()).replace(/['"]+/g, "");
    if (year === 25) {
      console.log("send users to game")
    }
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
          isUnderAge={isUnderage}
        ></Survey>
      ) : (
        <div className="flex !tw-justify-center items-center">
          {/* <Spinner className="m-auto" /> */}
         <h1>Hello</h1>
        </div>
      )}
    </>
  );
};
SurveyHandler.propTypes = {
  path: PropTypes.string.isRequired,
  // userID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // handleGroupAssignment: PropTypes.func, // optional
  year: PropTypes.number.isRequired,
};
export default SurveyHandler;