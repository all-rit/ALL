import { navigate } from "@reach/router";

import LabButton from "src/components/all-components/LabButton";
import Quiz from "src/components/quiz/components/Quiz";
import { GCSE_SECTIONS } from "src/constants/lab15";
import {
  PROMPT_BUILDER_DESCRIPTION,
  PROMPT_BUILDER_HEADING,
  PROMPT_COMPLETE_FAILED_MESSAGE,
  PROMPT_COMPLETE_PASSED_MESSAGE,
  PROMPT_QUESTION_TEMPLATE,
  STAGE_OPTIONS,
} from "src/constants/lab15/PromptBuilderConfig";
import PromptViewer from "../components/PromptViewer";
import usePromptBuilderStageManager from "../components/PromptStateManager";

const PromptBuilder = () => {
  const {
    stages,
    currentStage,
    currentStageIndex,
    selections,
    lockedKeys,
    justLockedKey,
    totalScore,
    passingScore,
    canMoveToNextStage,
    allStagesAnswered,
    hasMetPassingScore,
    selectStageOption,
    lockCurrentStage,
    clearJustLockedKey,
    nextStage,
    previousStage,
  } = usePromptBuilderStageManager();

  const activeOptions = STAGE_OPTIONS[currentStage] || [];
  const isFinalStage = currentStageIndex === stages.length - 1;

  const handleNext = () => {
    if (!canMoveToNextStage) return;
    clearJustLockedKey();
    requestAnimationFrame(() => {
      lockCurrentStage();
    });

    if (!isFinalStage) {
      nextStage();
    }
  };

  const handleBack = () => {
    if (currentStageIndex === 0) return;
    previousStage();
  };

  const handleAnswerSelected = (event) => {
    const optionIndex = Number(event.target.value);
    const selectedOption = activeOptions[optionIndex];
    if (!selectedOption) return;

    selectStageOption(currentStage, selectedOption.text, selectedOption.score);
  };

  const quizAnswerOptions = activeOptions.map((option, index) => ({
    type: String(index),
    content: option.text,
  }));

  const questionLabel =
    GCSE_SECTIONS[currentStageIndex]?.label || GCSE_SECTIONS[0].label;

  const sectionValues = {
    values: selections,
    lockedKeys,
    justLockedKey,
  };
  const activeKey = currentStage;

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-h-full tw-min-h-0 tw-overflow-hidden">
      <div className="tw-px-6 tw-pt-6 tw-pb-4 tw-shrink-0 md:tw-px-0 md:tw-pt-0 md:tw-pb-0">
        <h1 className="tw-title tw-text-left">{PROMPT_BUILDER_HEADING}</h1>
        <p className="tw-body-text tw-text-left tw-py-6">
          {PROMPT_BUILDER_DESCRIPTION}
        </p>
      </div>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-1 tw-min-h-0 tw-overflow-hidden">
        <div className="tw-flex-1 tw-overflow-y-auto tw-p-6">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-4 tw-gap-3">
            <h2 className="tw-text-xl tw-font-bold tw-text-darkGray tw-capitalize">
              {currentStage}
            </h2>
            <div className="tw-text-sm tw-font-semibold tw-text-darkGray">
              Score: {totalScore}/{passingScore}
            </div>
          </div>

          <Quiz
            isFinalQuiz
            answer={""}
            answerOptions={quizAnswerOptions}
            disable={!canMoveToNextStage}
            multiChoice={false}
            multiSelectedEntry={() => {}}
            nextQuestion={handleNext}
            lastQuestion={handleBack}
            onAnswerSelected={handleAnswerSelected}
            onComplete={() => {
              clearJustLockedKey();
              requestAnimationFrame(() => {
                lockCurrentStage();
              });
            }}
            questionId={currentStageIndex + 1}
            question={PROMPT_QUESTION_TEMPLATE.replace(
              "{label}",
              questionLabel,
            )}
            questionTotal={stages.length}
          />

          {allStagesAnswered && (
            <div className="tw-mt-6 tw-p-4 tw-rounded-lg tw-border tw-border-darkLine tw-bg-secondary-gray/60">
              <div className="tw-font-semibold tw-text-darkGray">
                {hasMetPassingScore
                  ? PROMPT_COMPLETE_PASSED_MESSAGE
                  : PROMPT_COMPLETE_FAILED_MESSAGE}
              </div>
            </div>
          )}
        </div>

        <div
          aria-hidden="true"
          className="tw-h-px md:tw-h-auto md:tw-w-px tw-w-full tw-bg-bgdark tw-shrink-0"
        />

        <div className="tw-flex-1 tw-overflow-y-auto tw-p-6 tw-bg-white">
          <PromptViewer
            sections={GCSE_SECTIONS}
            values={sectionValues.values}
            activeKey={activeKey}
            lockedKeys={sectionValues.lockedKeys}
            justLockedKey={sectionValues.justLockedKey}
          />
        </div>
      </div>

      <div className="tw-mt-5">
        <LabButton
          label="Next"
          onClick={() => navigate("/Lab15/Exercise/model-with-grades")}
        />
      </div>
    </div>
  );
};

export default PromptBuilder;
