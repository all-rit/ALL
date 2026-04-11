import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import QuestionCount from "../../quiz/components/QuestionCount";
import AnswerOption from "./AnswerOption";
import Likert from "./Likert";
import TextInput from "./TextInput";
import Avatar from "avataaars";
import ImagineService from "src/services/ImagineService";
import RankingQuestion from "./Ranking";


function Survey(props) {
  //any niche questions can be placed here, match the key with the question type in whatever data file you are using
  const questionTypes = {
    likert: <Likert onAnswerSelected={props.onAnswerSelected} />,
    TextInput: (
      <TextInput
        options={props.answerOptions || []}
        updatedSelectedAnswers={props.onAnswerSelected}
        questionId={props.questionId}
      />
    ),
    ranking: (
      <RankingQuestion
        options={props.answerOptions || []}
        updatedSelectedAnswers={props.rankingUpdate}
      />
    ),
  };

  //If you need to display an avatar check below ;)
  const [displayedAvatar, setDisplayedAvatar] = useState(<></>);

  //checks the avatar prop set through
  useEffect(() => {
    //if no avatar prop, skip and wait until one does exist
    if (!props.avatar) {
      setDisplayedAvatar(<></>);
      return;
    }
    const getUser = async () => {
      const user = await ImagineService.getUserByID(
        sessionStorage.getItem("userID"),
        25,
      );
      const avatar = user[props.avatar.toLowerCase() + "Avatar"];

      setDisplayedAvatar(
        <>
          <Avatar
            topType={avatar?.hairStyle || "Default"}
            hairColor={avatar?.hairColor || "Default"}
            clotheColor={avatar?.clotheColor || "Default"}
            skinColor={avatar?.skinColor || "Default"}
            clotheType="ShirtCrewNeck"
            className="xs:tw-h-[125px] xs:tw-w-[125px] md:tw-h-[125px] md:tw-w-[125px] xl:tw-h-[175px] xl:tw-w-[175px]"
          />
          <div className="tw-pt-3 tw-body-text tw-text-center tw-text-[2rem]">
            {props.avatar}
          </div>
        </>,
      );
    };
    getUser();
  }, [props.avatar]);

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
      {questionTypes[props.questionType] || (
        <ul className="answerOptions tw-grid tw-grid-cols-2 tw-body-text">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      )}
      {displayedAvatar}
      <div className="align-right">
        {props.questionId !== props.questionTotal && !props.isUnderAge ? (
          <button
            className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[7rem] tw-h-[3rem]
                      tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl"
            onClick={props.nextQuestion}
            disabled={props.disable}
          >
            Next
          </button>
        ) : (
          <button
            className="tw-body-text tw-text-center tw-border-solid tw-border-primary-blue tw-pt-[0.3rem] tw-pr-[0.5rem] tw-w-[7rem] tw-h-[3rem]
                      tw-border-[0.4rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow tw-bg-[white] tw-text-xl"
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
  rankingUpdate: PropTypes.func.isRequired,
};

export default Survey;
