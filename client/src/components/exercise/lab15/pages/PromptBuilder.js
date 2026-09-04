import { navigate } from "@reach/router";
import React, { useMemo } from "react";
import LabButton from "src/components/all-components/LabButton";
import Quiz from "src/components/quiz/components/Quiz";
import { GCSE_SECTIONS } from "src/constants/lab15";
import {
  PROMPT_BUILDER_DESCRIPTION,
  PROMPT_BUILDER_HEADING,
  PROMPT_COMPLETE_MESSAGE,
  PROMPT_QUESTION_TEMPLATE,
  STAGE_OPTIONS,
  WORST_PROMPT_BUILDER_DESCRIPTION,
  WORST_PROMPT_BUILDER_HEADING,
  WORST_PROMPT_COMPLETE_MESSAGE,
} from "src/constants/lab15/PromptBuilderConfig";
import { ANIM_POP_DURATION_MS } from "src/constants/lab15/PromptViewer";
import { useLab15 } from "../Lab15Context";
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
    canMoveToNextStage,
    allStagesAnswered,
    selectStageOption,
    lockCurrentStage,
    clearJustLockedKey,
    nextStage,
    previousStage,
  } = usePromptBuilderStageManager();
  const { setPromptScore, setPromptText, isWorstPromptLoop } = useLab15();

  const activeOptions = useMemo(
    () =>
      [...(STAGE_OPTIONS[currentStage] || [])].sort(() => Math.random() - 0.5),
    [currentStage],
  );

  const isFinalStage = currentStageIndex === stages.length - 1;

  const handleNext = () => {
    if (!canMoveToNextStage) return;
    lockCurrentStage();

    setTimeout(() => {
      if (!isFinalStage) {
        nextStage();
      }
      clearJustLockedKey();
    }, ANIM_POP_DURATION_MS);
  };

  const handleBack = () => {
    if (currentStageIndex === 0) return;
    previousStage();
  };

  const fullPromptText = GCSE_SECTIONS.map(({ key }) => selections[key] || "")
    .filter(Boolean)
    .join(" ");

  const handleViewModelResponse = () => {
    setPromptScore(totalScore);
    setPromptText(fullPromptText);
    navigate("/Lab15/Exercise/model-with-grades");
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
        <h1 className="tw-title tw-text-left">
          {isWorstPromptLoop
            ? WORST_PROMPT_BUILDER_HEADING
            : PROMPT_BUILDER_HEADING}
        </h1>
        <p className="tw-body-text tw-text-left tw-py-6">
          {isWorstPromptLoop
            ? WORST_PROMPT_BUILDER_DESCRIPTION
            : PROMPT_BUILDER_DESCRIPTION}
        </p>
      </div>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-flex-1 tw-min-h-0 tw-overflow-hidden">
        <div className="tw-flex-1 tw-overflow-y-auto tw-p-6">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-4 tw-gap-3">
            <h2 className="tw-text-xl tw-font-bold tw-text-darkGray tw-capitalize">
              {currentStage}
            </h2>
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
              lockCurrentStage();
              setTimeout(() => {
                clearJustLockedKey();
              }, ANIM_POP_DURATION_MS);
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
                {isWorstPromptLoop
                  ? WORST_PROMPT_COMPLETE_MESSAGE
                  : PROMPT_COMPLETE_MESSAGE}
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
            className="tw-flex-1"
          />
        </div>
      </div>

      <div className="tw-mt-5">
        <LabButton
          label="Next"
          disabled={!allStagesAnswered}
          onClick={handleViewModelResponse}
        />
      </div>
    </div>
  );
};

export default PromptBuilder;
