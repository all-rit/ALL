import React from "react";
import PropTypes from "prop-types";
import QuestionCount from "../../quiz/components/QuestionCount";
import AnswerOption from "./AnswerOption";
import Likert from "./Likert";
import Avatar from "avataaars";

function Survey(props) {
  console.log(props.avatar);
  console.log(sessionStorage.getItem("TeammateAvatar"));
  console.log(sessionStorage.getItem("OpponentAvatar"));
  const avatar =
    props.avatar == null ? (
      <></>
    ) : (
      () => {
        const avatarData = sessionStorage.getItem(props.avatar + "Avatar");
        return (
          <Avatar
            clotheType="ShirtCrewNeck"
            topType={avatarData.userAvatar?.hairStyle || "Default"}
            hairColor={avatarData.userAvatar?.hairColor || "Default"}
            clotheColor={avatarData.userAvatar?.clotheColor || "Default"}
            skinColor={avatarData.userAvatar?.skinColor || "Default"}
            className="xs:tw-h-[125px] xs:tw-w-[125px] md:tw-h-[125px] md:tw-w-[125px] xl:tw-h-[175px] xl:tw-w-[175px]"
          />
        );
      }
    );

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.index}
        answerContent={key.content}
        answerType={key.index}
        answer={props.answer}
        questionId={props.questionId}
        questionType={props.questionType}
        onAnswerSelected={props.onAnswerSelected}
        onMultiSelected={props.onMultiSelected}
      />
    );
  }

  return (
    <div className="quiz container tw-p-6" key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <h2 className="quiz tw-sub-title tw-text-[2rem]">
        {props.question} {props.multiChoice && " Select all that apply."}
      </h2>
      <div className={"tw-flex tw-justify-center tw-mt-0"}>
        <hr className={"tw-w-3/4"} />
      </div>
      {props.questionType == "likert" ? (
        <Likert onAnswerSelected={props.onAnswerSelected} />
      ) : (
        <ul className="answerOptions tw-grid tw-grid-cols-2 tw-body-text">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      )}
      {avatar}
      <div className="align-right">
        {props.questionId !== props.questionTotal && !props.isUnderAge ? (
          <button
            className="btn btn-second text-uppercase  nextButton  "
            onClick={props.nextQuestion}
            disabled={props.disable}
          >
            Next Question
          </button>
        ) : (
          <button
            className="btn btn-second text-uppercase  nextButton"
            onClick={props.onComplete}
            disabled={props.disable}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}

Survey.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  questionType: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onMultiSelected: PropTypes.func.isRequired,
  multiChoice: PropTypes.string,
  nextQuestion: PropTypes.func,
  disable: PropTypes.bool,
  onComplete: PropTypes.func,
  isUnderAge: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};

export default Survey;
