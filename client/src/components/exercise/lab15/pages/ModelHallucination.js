import { useMemo, useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { BAD_PROMPTS } from "src/constants/lab15/BadPrompts";

import { Tabs } from "src/components/all-components/Tab/Tabs";
import { Tab } from "src/components/all-components/Tab/Tab";

import AIChatBot from "src/components/all-components/AIChatBot";
import HallucinationModal from "../components/HallucinationModal";

import { useLab15 } from "../Lab15Context";

const ModelHallucination = () => {
  const { chatMessages, setChatMessages } = useLab15();

  /* Randomly choose 3 prompts */
  const displayedPrompts = useMemo(() => {
    return [...BAD_PROMPTS].sort(() => Math.random() - 0.5).slice(0, 3);
  }, []);

  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [promptsAnswered, setPromptsAnswered] = useState(0);
  const [aiResponseDone, setAiResponseDone] = useState(false);
  const [showInstructionBanner, setShowInstructionBanner] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [usedPromptIds, setUsedPromptIds] = useState([]);

  /* Greeting message from bot */
  useEffect(() => {
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          id: "greeting",
          sender: "bot",
          text: "Hi! I'm ALL-IE. Select a prompt below to get started.",
          timestamp: new Date(),
          isNew: true,
        },
      ]);
    }
  }, [chatMessages.length, setChatMessages]);

  /* Display instruction message after bot finishes responding */
  useEffect(() => {
    if (aiResponseDone && selectedPrompt) {
      setShowInstructionBanner(true);
    }
  }, [aiResponseDone, selectedPrompt]);

  const handleModalClose = () => {
    setModalOpen(false);

    const newCount = promptsAnswered + 1;
    setPromptsAnswered(newCount);
    if (newCount >= 3) {
      navigate("/Lab15/Exercise/good-prompting-guide");
    }

    setSelectedPrompt(null);
    setAiResponseDone(false);

    setShowInstructionBanner(false);

    setChatMessages((prev) => {
      // If final message, set text to "Select the final prompt."
      let text =
        newCount == 2
          ? "Select the final prompt."
          : "Let's continue. Select another prompt.";
      return [
        ...prev,
        {
          id: `transition-${newCount}`,
          sender: "bot",
          text: text,
          timestamp: new Date(),
          isNew: true,
        },
      ];
    });
  };

  const canReview =
    !!selectedPrompt && aiResponseDone && !isBotTyping && !isBotThinking;
  const canSelectQuestion = promptsAnswered < 3 && !selectedPrompt;

  return (
    <div className="tw-relative tw-h-full">
      <Tabs>
        <Tab label="AIChatBot">
          <div className="tw-h-full tw-flex tw-flex-col">
            <div className="tw-flex-1 tw-overflow-auto">
              <AIChatBot
                userQuestions={displayedPrompts
                  .filter((p) => !usedPromptIds.includes(p.id))
                  .map((p) => ({ id: p.id, text: p.text }))}
                fixedAIResponse={displayedPrompts.map((p) => ({
                  id: p.id,
                  text: p.aiResponse,
                  explanation: p.explanation,
                  fakeCitation: p.fakeCitation,
                  confidence: p.fakeCitation ? 1 : null,
                }))}
                messages={chatMessages}
                setMessages={setChatMessages}
                onAnswerDataChange={(data) => {
                  const match = displayedPrompts.find(
                    (p) => p.aiResponse === data.aiResponseText,
                  );
                  if (match) {
                    setSelectedPrompt(match);
                    setUsedPromptIds((prev) => [...prev, match.id]);
                  }
                }}
                onTypingChange={(typing) => {
                  setIsBotTyping(typing);
                  if (!typing && selectedPrompt) {
                    setAiResponseDone(true);
                  }
                }}
                onThinkingChange={setIsBotThinking}
                canSelectQuestion={canSelectQuestion}
                showCitations={true}
                onCitationClick={() => {
                  if (selectedPrompt?.fakeCitation) {
                    window.open("/source-not-found", "_blank");
                  }
                }}
                showConfidenceScore={false}
                disclaimerMessage=""
              />
            </div>

            <div className="tw-bg-white tw-flex tw-flex-col tw-items-center tw-gap-3 tw-py-1 tw-px-6 tw-border-t tw-border-gray-200">
              {!selectedPrompt && (
                <div className="tw-bg-blue-50 tw-border tw-border-blue-200 tw-rounded-lg tw-px-4 tw-py-2 tw-text-sm tw-text-blue-800 tw-text-center tw-w-full">
                  Choose one of the prompts above to see how a vague prompt can
                  lead to a misleading AI response.
                </div>
              )}

              {showInstructionBanner && !modalOpen && (
                <div className="tw-bg-yellow-50 tw-border tw-border-yellow-300 tw-rounded-lg tw-px-4 tw-py-2 tw-text-sm tw-text-yellow-800 tw-text-center tw-w-full">
                  Notice anything off? ALL-IE&apos;s response contains a
                  hallucination. Click &quot;What went wrong?&quot; to find out
                  what it got wrong and why.
                </div>
              )}

              {canReview && (
                <button
                  onClick={() => setModalOpen(true)}
                  className="tw-w-fit tw-bg-primary-blue hover:tw-bg-labBlue tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-colors tw-duration-200"
                >
                  What went wrong?
                </button>
              )}
            </div>
          </div>
        </Tab>
      </Tabs>

      {selectedPrompt && (
        <HallucinationModal
          isOpen={modalOpen}
          onClose={handleModalClose}
          hallucinationType={selectedPrompt.hallucinationType}
          aiResponse={selectedPrompt.aiResponse}
          whatWentWrong={selectedPrompt.whatWentWrong}
          whyPromptCausedThis={selectedPrompt.whyPromptCausedThis}
          fakeCitation={selectedPrompt.fakeCitation}
          hallucinationDescription={selectedPrompt.hallucinationDescription}
        />
      )}
    </div>
  );
};

export default ModelHallucination;
