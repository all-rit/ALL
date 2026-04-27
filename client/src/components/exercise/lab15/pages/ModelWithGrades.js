import { navigate } from "@reach/router";
import { useEffect, useState } from "react";
import AIChatBot from "src/components/all-components/AIChatBot";
import LabButton from "src/components/all-components/LabButton";
import StatusBanner from "src/components/all-components/StatusBanner";
import { Tab } from "src/components/all-components/Tab/Tab";
import { Tabs } from "src/components/all-components/Tab/Tabs";
import {
  PASSING_SCORE,
  SCORE_REVEAL_DELAY_MS,
} from "src/constants/lab15/IDEFixTest";
import { MODEL_WITH_GRADES_RESPONSES } from "src/constants/lab15/ModelWithGradesConfig";
import { useLab15 } from "../Lab15Context";

const MAX_PROMPT_POINTS = 16;

// Different response for the different levels of prompts based on percentage
const getModelResponse = (gradePercentage) => {
  if (gradePercentage >= 90) {
    return MODEL_WITH_GRADES_RESPONSES.high;
  }

  if (gradePercentage >= 70) {
    return MODEL_WITH_GRADES_RESPONSES.medium;
  }

  return MODEL_WITH_GRADES_RESPONSES.low;
};

const ModelWithGrades = () => {
  const { chatMessages, setChatMessages, promptScore, promptText } = useLab15();

  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [promptUsed, setPromptUsed] = useState(false);
  const [aiResponseDone, setAiResponseDone] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const totalEarnedPoints = promptScore;
  const gradePercentage = Math.round((promptScore / MAX_PROMPT_POINTS) * 100);
  const modelResponseText = getModelResponse(gradePercentage);

  useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: "greeting-model-grade",
          sender: "bot",
          text: "Let's continue. Select another prompt.",
          timestamp: new Date(),
          isNew: true,
        },
      ]);
    }
    setPromptUsed(false);
    setAiResponseDone(false);
    setShowScore(false);
  }, []);

  useEffect(() => {
    if (!aiResponseDone) return undefined;

    const timer = setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `score-${Date.now()}`,
          sender: "bot",
          text: "",
          isScore: true,
          score: gradePercentage,
          totalEarnedPoints,
          isPassing: gradePercentage >= PASSING_SCORE,
          timestamp: new Date(),
          isNew: false,
        },
      ]);
      setShowScore(true);
    }, SCORE_REVEAL_DELAY_MS);

    return () => clearTimeout(timer);
  }, [aiResponseDone, gradePercentage, totalEarnedPoints, setChatMessages]);

  const canSelectQuestion = !promptUsed && !isBotTyping && !isBotThinking;

  const renderScoreMessage = (msg) => {
    if (!msg.isScore) return null;

    return (
      <div className="tw-flex tw-items-start tw-gap-3 tw-mt-[-25px]">
        <div className="tw-w-10 tw-shrink-0" />
        <StatusBanner
          style={`${msg.isPassing ? "tw-bg-success" : "tw-bg-error/80 tw-border-[1px] !tw-p-3 tw-border-black tw-border-solid"} !tw-w-fit !tw-ml-0 !tw-mr-auto`}
        >
          {`Grade: ${msg.score}%`}
        </StatusBanner>
      </div>
    );
  };

  return (
    <div className="tw-relative tw-h-full">
      <Tabs>
        <Tab label="AIChatBot">
          <div className="tw-h-full tw-flex tw-flex-col">
            <div className="tw-flex-1 tw-overflow-auto">
              <AIChatBot
                autoSend={!promptUsed}
                userQuestions={
                  promptUsed
                    ? []
                    : [{ id: "prompt-builder-user-prompt", text: promptText }]
                }
                fixedAIResponse={[
                  {
                    id: "prompt-builder-user-prompt",
                    text: modelResponseText,
                  },
                ]}
                messages={chatMessages}
                setMessages={setChatMessages}
                onAnswerDataChange={() => setPromptUsed(true)}
                onTypingChange={(typing) => {
                  setIsBotTyping(typing);
                  if (!typing && promptUsed) {
                    setAiResponseDone(true);
                  }
                }}
                onThinkingChange={setIsBotThinking}
                canSelectQuestion={canSelectQuestion}
                showCitations={true}
                onCitationClick={() => {
                  window.open("/source-not-found", "_blank");
                }}
                showConfidenceScore={false}
                disclaimerMessage=""
                renderCustomMessage={renderScoreMessage}
              />
            </div>

            <div className="tw-bg-white tw-flex tw-flex-col tw-items-center tw-gap-3 tw-py-4 tw-px-2">
              {!promptUsed && (
                <div className="tw-bg-white tw-text-sm tw-text-center tw-w-full">
                  Send your completed prompt to ALL-IE to view the response and
                  grade.
                </div>
              )}

              {showScore && gradePercentage >= PASSING_SCORE && (
                <>
                  <div className="tw-bg-white tw-text-sm tw-text-center tw-w-full">
                    Great prompt! Notice how your response from ALL-IE is much
                    more detailed and complete with a better prompt.
                  </div>
                  <LabButton
                    label="Next"
                    onClick={() => navigate("/Lab15/Exercise/conclusion")}
                  />
                </>
              )}

              {showScore && gradePercentage < PASSING_SCORE && (
                <>
                  <div className="tw-bg-white tw-text-sm tw-text-center tw-w-full">
                    Try again! Build a better prompt by going back to the prompt
                    builder and revising your prompt using GCSE.
                  </div>
                  <LabButton
                    label="Back to Prompt Builder"
                    onClick={() => navigate("/Lab15/Exercise/prompt-builder")}
                  />
                </>
              )}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ModelWithGrades;
