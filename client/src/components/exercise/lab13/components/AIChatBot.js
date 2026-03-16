import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import BlobLoader from "./BlobLoader";
import Avatar from "./Avatar";
import { AvatarType } from "src/constants/lab13/AvatarType";
import HyperLinkImage from "src/assets/images/lab13/HyperLink.png";
import TypingMessage from "./TypingMessage";

/**
 * Chatbot component that displays user-ai messages
 * and responds to user interactions
 * @param {*} userQuestions : Array of question objects to show on dropdown menu
 * @param {*} fixedAIResponse : Array of response objects corresponding to user questions
 * @param {*} onAnswerSelected : Callback function when an answer is displayed
 * @returns
 */
const AIChatBot = ({
  userQuestions,
  fixedAIResponse,
  onAnswerDataChange,
  onTypingChange,
  onThinkingChange,
  messages = [],
  setMessages,
  canSelectQuestion = true,
  showConfidenceScore = false,
  showCitations = false,
  disclaimerMessage = "",
  onCitationClick = null,
  onQuestionAsked = null,
}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showQuestionOptions, setShowQuestionOptions] = useState(false);
  const messagesContainerRef = useRef(null);

  // Auto-trigger typing animation for any new bot message flagged as isNew
  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === "bot" && lastMessage.isNew) {
        setIsTyping(true);
      }
    }
  }, [messages]);

  useEffect(() => {
    if (onTypingChange) {
      onTypingChange(isTyping);
    }
  }, [isTyping, onTypingChange]);

  useEffect(() => {
    if (onThinkingChange) {
      onThinkingChange(isThinking);
    }
  }, [isThinking, onThinkingChange]);

  // Show question options when messages end with a bot message
  useEffect(() => {
    if (messages.length > 0 && canSelectQuestion) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === "bot" && !isTyping && !isThinking) {
        // Small delay to show questions after bot finishes typing
        const timer = setTimeout(() => {
          setShowQuestionOptions(true);
        }, 500);
        return () => clearTimeout(timer);
      } else {
        // Last message is a user message, or bot is still typing/thinking — hide immediately
        setShowQuestionOptions(false);
      }
    } else {
      setShowQuestionOptions(false);
    }
  }, [messages, isTyping, isThinking, canSelectQuestion]);

  // Scroll function to show the most recent message
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };
  /** Scroll to bottom when message array is updated
   *  to enable message visibility
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking, showQuestionOptions]);

  /**
   * Function handling when user clicks on a question in
   * the dropdown creating a user and corresponding bot message
   * and adding it in the chat
   * @param {} question : Question object from questions array
   */
  const handleQuestionClick = (question) => {
    if (!canSelectQuestion) return;

    setShowQuestionOptions(false);

    // Track question before adding to messages
    if (onQuestionAsked && question.originalIndex !== undefined) {
      onQuestionAsked(question.originalIndex);
    }

    // Add user message after small delay
    setTimeout(() => {
      const userMsg = {
        sender: AvatarType.User,
        text: question.text,
        id: `user-${question.id}-${Date.now()}`,
        timestamp: new Date(),
      };
      // Add new user message to message history
      setMessages((prev) => [...prev, userMsg]);

      // Find the corresponding AI response by the matching ID
      const botObj = fixedAIResponse.find((resp) => resp.id === question.id);

      // Store the answer data and notify parent
      const answerData = {
        biasType: botObj?.biasType,
        biasDefinition: botObj?.biasDefinition,
        explanation: botObj?.explanation,
        aiResponseText: botObj?.text,
      };

      // Calculate delay based on response length
      const delay = Math.ceil((botObj?.text.length || 100) / 100) * 500 + 500;

      setTimeout(() => {
        const botMsg = {
          sender: "bot",
          text: botObj ? botObj.text : "No response found.",
          id: `bot-${question.id}-${Date.now()}`,
          timestamp: new Date(),
          confidence: botObj?.confidence,
          isPhase4: showConfidenceScore || showCitations || disclaimerMessage,
          isNew: true,
        };

        // Add bot response to message history
        setMessages((prev) => [...prev, botMsg]);
        setIsThinking(false);
        setIsTyping(true);

        if (onAnswerDataChange) {
          onAnswerDataChange(answerData);
        }
      }, delay);
    }, 300); // delay for question fade
  };

  /**
   * Decide which animation the blob should use based
   * on the AI state
   * @returns {string} "pulsing" | "spinning" | "static"
   */
  const getBlobMode = () => {
    if (isThinking) return "pulsing";
    if (isTyping) return "spinning";
    return "static";
  };

  return (
    <div
      className="tw-w-full tw-h-[350px] tw-rounded-lg tw-border-solid tw-border-primary-blue tw-flex tw-flex-col tw-overflow-hidden tw-font-sans"
      style={{ backgroundColor: "#faf9f6", fontFamily: "Calibri, sans-serif" }}
    >
      {/* Scrollable container that displays the chat messages */}
      <div
        ref={messagesContainerRef}
        className="tw-flex-1 tw-overflow-y-auto tw-rounded-lg tw-p-4 tw-pb-16 tw-space-y-3 tw-relative tw-z-0"
      >
        {/* Container for indvidual messages */}
        {messages && messages.length > 0
          ? messages.map((msg, index) => (
              <div
                key={msg.id || index}
                className={`tw-flex tw-items-start tw-gap-3 ${
                  msg.sender === AvatarType.User
                    ? "tw-flex-row-reverse"
                    : "tw-flex-row"
                }`}
                style={{
                  animation: "fadeIn 0.5s ease-in",
                }}
              >
                {/* Avatar circle */}
                <Avatar
                  type={
                    msg.sender === AvatarType.User
                      ? AvatarType.User
                      : AvatarType.AI
                  }
                  size={40}
                />
                {/* Message box adjacent to user message */}
                <div
                  className={`tw-flex tw-flex-col ${msg.sender === AvatarType.User ? "tw-items-end" : "tw-items-start"}`}
                >
                  <div
                    className={`tw-text-black tw-text-left tw-p-3 tw-rounded-lg tw-break-words tw-body-text tw-bg-white tw-shadow ${
                      msg.sender === "bot"
                        ? "tw-max-w-[50vw]"
                        : "tw-max-w-[45vw]"
                    }`}
                  >
                    {/* User messages - just display text */}
                    {msg.sender === AvatarType.User ? (
                      msg.text
                    ) : (
                      // Bot messages - use renderAIMessage for additional features
                      <>
                        {index === messages.length - 1 && isTyping ? (
                          // Typing animation for latest message
                          <TypingMessage
                            text={msg.text}
                            onUpdate={scrollToBottom}
                            onComplete={() => {
                              setMessages((prev) =>
                                prev.map((m) =>
                                  m.id === msg.id ? { ...m, isNew: false } : m,
                                ),
                              );
                              setIsTyping(false);
                            }}
                          />
                        ) : (
                          // Display message text
                          msg.text
                        )}

                        {/* Show confidence, disclaimer, citations AFTER typing completes */}
                        {(!isTyping || index !== messages.length - 1) &&
                          msg.confidence &&
                          msg.isPhase4 && (
                            <div className="tw-grid tw-space-y-2 tw-mt-2 tw-text-sm">
                              {showConfidenceScore && (
                                <div className="tw-text-gray-600">
                                  <strong>Confidence Score: </strong>
                                  {msg.confidence}
                                </div>
                              )}

                              {disclaimerMessage && (
                                <div className="tw-text-gray-500">
                                  <strong>Disclaimer: </strong>
                                  <em>{disclaimerMessage}</em>
                                </div>
                              )}

                              {showCitations && (
                                <div className="tw-flex tw-items-center tw-gap-1">
                                  <strong>Source: </strong>
                                  <div
                                    className="tw-flex tw-items-center tw-text-lightBlue hover:tw-text-mediumBlue hover:tw-underline tw-cursor-pointer"
                                    onClick={onCitationClick}
                                  >
                                    <p>ALLpedia</p>
                                    <img
                                      src={HyperLinkImage}
                                      alt="Hyper Link Image"
                                      className="tw-w-5 tw-h-5 mb-1"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                      </>
                    )}
                  </div>
                  {/* Show blob for most recent AI messages while its typing */}
                  {msg.sender === "bot" &&
                    index === messages.length - 1 &&
                    isTyping && (
                      <div className="tw-flex tw-items-start tw-border-none">
                        <BlobLoader animationMode={getBlobMode()} />
                      </div>
                    )}
                </div>
              </div>
            ))
          : null}

        {/*  Question options after greeting */}
        {showQuestionOptions && messages.length > 0 && !isTyping && (
          <div
            className="tw-flex tw-items-start tw-gap-3 tw-flex-row-reverse"
            style={{
              animation: "fadeIn 0.5 ease-in",
            }}
          >
            <Avatar type="user" size={40} />

            <div
              className="tw-max-w-[70%] tw-bg-white tw-rounded-lg tw-shadow-lg tw-border-2 tw-border-gray-200 tw-overflow-hidden"
              style={{
                animation: showQuestionOptions
                  ? "fadeIn 0.5s ease-in"
                  : "fadeOut 0.3s ease-out",
              }}
            >
              <div className="tw-p-2">
                {userQuestions.map((question, index) => (
                  <React.Fragment key={question.id}>
                    <button
                      onClick={() => handleQuestionClick(question)}
                      disabled={!canSelectQuestion}
                      className={`tw-w-full tw-text-left tw-p-3 tw-text-black tw-transition-all tw-duration-200 tw-rounded tw-border-none tw-body-text ${
                        canSelectQuestion
                          ? "tw-bg-transparent hover:!tw-bg-bgwhite tw-cursor-pointer"
                          : "tw-cursor-not-allowed tw-opacity-50 tw-bg-transparent"
                      }`}
                    >
                      {question.text}
                    </button>
                    {index < userQuestions.length - 1 && (
                      <div className="tw-h-[1px] tw-bg-gray-200 tw-mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Show thinking blob when AI is thinking (before message appears) */}
        {isThinking && (
          <div
            className="tw-flex tw-justify-start"
            style={{ animation: "fadeIn 0.5s ease-in", border: "none" }}
          >
            <Avatar type="ai" size={40} />
            <div className="tw-flex tw-items-start tw-ml-3 tw-border-none">
              <BlobLoader animationMode="pulsing" />
            </div>
          </div>
        )}
      </div>

      {/* Message fade in keyframe animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }
      `}</style>
    </div>
  );
};
AIChatBot.propTypes = {
  userQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  fixedAIResponse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      biasType: PropTypes.string,
      biasDefinition: PropTypes.object,
      explanation: PropTypes.string,
    }),
  ),
  onAnswerDataChange: PropTypes.func,
  onTypingChange: PropTypes.func,
  onThinkingChange: PropTypes.func,
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  canSelectQuestion: PropTypes.bool,
  showConfidenceScore: PropTypes.bool,
  showCitations: PropTypes.bool,
  disclaimerMessage: PropTypes.string,
  onCitationClick: PropTypes.func,
  onQuestionAsked: PropTypes.func,
};

export default AIChatBot;
