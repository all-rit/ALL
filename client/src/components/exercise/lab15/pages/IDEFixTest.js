import { navigate } from "@reach/router";
import { useMemo, useState, useEffect } from "react";
import { BAD_PROMPTS } from "src/constants/lab15/BadPrompts";
import { Tabs } from "src/components/all-components/Tab/Tabs";
import { Tab } from "src/components/all-components/Tab/Tab";
import AIChatBot from "src/components/all-components/AIChatBot";
import LabButton from "src/components/all-components/LabButton";
import { useLab15 } from "../Lab15Context";

const IDEFixTest = () => {
  const { chatMessages, setChatMessages } = useLab15();

  const selectedPrompt = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * BAD_PROMPTS.length);
    return BAD_PROMPTS[randomIndex];
  }, []);

  const [isBotTyping, setIsBotTyping] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [promptUsed, setPromptUsed] = useState(false);

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

  const canSelectQuestion = !promptUsed && !isBotTyping && !isBotThinking;

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
                    : [{ id: selectedPrompt.id, text: selectedPrompt.text }]
                }
                fixedAIResponse={[
                  {
                    id: selectedPrompt.id,
                    text: selectedPrompt.aiResponse,
                    fakeCitation: selectedPrompt.fakeCitation,
                    confidence: selectedPrompt.fakeCitation ? 1 : null,
                  },
                ]}
                messages={chatMessages}
                setMessages={setChatMessages}
                onAnswerDataChange={() => setPromptUsed(true)}
                onTypingChange={(typing) => setIsBotTyping(typing)}
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

            <div className="tw-bg-white tw-flex tw-flex-col tw-items-center tw-gap-3 tw-py-4 tw-px-2">
              {!promptUsed && (
                <div className="tw-bg-white tw-text-sm tw-text-center tw-w-full">
                  Send the prompt to ALL-IE to see how it performs with the IDE
                  fix applied.
                </div>
              )}

              <LabButton
                label="Build a better prompt"
                onClick={() => navigate("/Lab15/Exercise/prompt-builder")}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default IDEFixTest;
