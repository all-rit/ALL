import { navigate } from "@reach/router";
import { useState, useEffect } from "react";
import { BAD_PROMPTS } from "src/constants/lab15/BadPrompts";
import { Tabs } from "src/components/all-components/Tab/Tabs";
import { Tab } from "src/components/all-components/Tab/Tab";
import AIChatBot from "src/components/all-components/AIChatBot";
import LabButton from "src/components/all-components/LabButton";
import StatusBanner from "src/components/all-components/StatusBanner";
import { useLab15 } from "../Lab15Context";
import {
  PASSING_SCORE,
  BAD_PROMPT_SCORE,
  SCORE_REVEAL_DELAY_MS,
} from "../../../../constants/lab15/IDEFixTest";

const IDEFixTest = () => {
  const { chatMessages, setChatMessages } = useLab15();

  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [promptUsed, setPromptUsed] = useState(false);
  const [aiResponseDone, setAiResponseDone] = useState(false);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: "greeting",
          sender: "bot",
          text: "Let's continue. Select another prompt.",
          timestamp: new Date(),
          isNew: true,
        },
      ]);
    }
  }, [chatMessages.length, setChatMessages]);

  // Display score message into chat after AI finishes typing
  useEffect(() => {
    if (aiResponseDone) {
      const timer = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: `score-${Date.now()}`,
            sender: "bot",
            text: "",
            isScore: true,
            score: BAD_PROMPT_SCORE,
            isPassing: BAD_PROMPT_SCORE >= PASSING_SCORE,
            timestamp: new Date(),
            isNew: false,
          },
        ]);
        setShowScore(true);
      }, SCORE_REVEAL_DELAY_MS);
      return () => clearTimeout(timer);
    }
  }, [aiResponseDone, setChatMessages]);

  const canSelectQuestion = !promptUsed && !isBotTyping && !isBotThinking;

  // Called for every message and retruns score card for score messages
  const renderScoreMessage = (msg) => {
    if (!msg.isScore) return null;
    return (
      <div className="tw-flex tw-items-start tw-gap-3 tw-mt-[-25px]">
        <div className="tw-w-10 tw-shrink-0" />
        <StatusBanner
          style={`${msg.isPassing ? "tw-bg-success" : "tw-bg-error/80 tw-border-[1px] !tw-p-3 tw-border-black tw-border-solid"} !tw-w-fit !tw-ml-0 !tw-mr-auto`}
        >
          {`Prompt Score: ${msg.score}%`}
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
                userQuestions={
                  promptUsed
                    ? []
                    : BAD_PROMPTS.map((p) => ({ id: p.id, text: p.text }))
                }
                fixedAIResponse={BAD_PROMPTS.map((p) => ({
                  id: p.id,
                  text: p.aiResponse,
                  fakeCitation: p.fakeCitation,
                  confidence: p.fakeCitation ? 1 : null,
                }))}
                messages={chatMessages}
                setMessages={setChatMessages}
                onAnswerDataChange={() => {
                  setPromptUsed(true);
                }}
                onTypingChange={(typing) => {
                  setIsBotTyping(typing);
                  if (!typing && promptUsed) {
                    setAiResponseDone(true);
                  }
                }}
                onThinkingChange={setIsBotThinking}
                canSelectQuestion={canSelectQuestion}
                showCitations={true}
                onCitationClick={(message) => {
                  if (message?.citationLabel) {
                    window.open("/source-not-found", "_blank");
                  }
                }}
                showConfidenceScore={false}
                disclaimerMessage=""
                renderCustomMessage={renderScoreMessage}
              />
            </div>

            <div className="tw-bg-white tw-flex tw-flex-col tw-items-center tw-gap-3 tw-py-4 tw-px-2">
              {!promptUsed && (
                <div className="tw-bg-white tw-text-sm tw-text-center tw-w-full">
                  Send the prompt to ALL-IE to see how it performs with the IDE
                  fix applied.
                </div>
              )}

              {showScore && (
                <LabButton
                  label="Build a better prompt"
                  onClick={() => navigate("/Lab15/Exercise/prompt-builder")}
                />
              )}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default IDEFixTest;
