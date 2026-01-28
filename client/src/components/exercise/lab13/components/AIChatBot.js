import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BlobLoader from "./BlobLoader";
import robotImage from "./robot.png";

// Example prop
// const questions = [
//   { id: 1, text: "What is the weather today?" },
//   { id: 2, text: "How do I reset my password?" },
//   { id: 3, text: "Tell me a fun fact." },
// ];

// const answers = [
//   { id: 1, text: "The weather today is sunny with a high of 75°F." },
//   { id: 2, text: "To reset your password, click 'Forgot Password' on the login page." },
//   { id: 3, text: "Did you know honey never spoils?" },
// ];

/**
 * Typewriter animation component effect for bot responses
 * that displays text character by character
 * @param {*} text : Text string to display with the typing effect
 * @param {*} onUpdate : Functon to flag after each character is written
 * @returns
 */
const TypingMessage = ({ text, onUpdate, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Adds character from currentIndex to displayedText
   * one at a time everytime the currentIndex, text, or onUpdate changes
   */
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);

        // Scroll to bottom when onUpdate is called by component
        if (onUpdate) onUpdate();
        // Typing speed, one character every 15ms
      }, 15);

      return () => clearTimeout(timeout);
      // onComplete becomes true when finished typing
    } else if (currentIndex === text.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onUpdate, onComplete]);

  return <>{displayedText}</>;
};

/**
 * Chatbot component that displays user-ai messages
 * and responds to user interactions
 * @param {*} userQuestions : Array of question objects to show on dropdown menu
 * @param {*} fixedAIResponse : Array of response objects corresponding to user questions
 * @returns
 */
const AIChatBot = ({ userQuestions, fixedAIResponse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const dropdownRef = useRef(null);
  const messagesContainerRef = useRef(null);

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
  }, [messages]);

  /**
   * Function handling when user clicks on a question in
   * the dropdown creating a user and corresponding bot message
   * and adding it in the chat
   * @param {} question : Question object from questions array
   */
  const handleQuestionClick = (question) => {
    const userMsg = { sender: "user", text: question.text };

    // Find the corresponding AI response by the matching ID
    const botObj = fixedAIResponse.find((resp) => resp.id === question.id);
    const botMsg = {
      sender: "bot",
      text: botObj ? botObj.text : "No response found.",
    };

    setMessages((prev) => [...prev, userMsg]);
    // AI begins processing before they type
    // Start pulsing animation
    setIsThinking(true);

    // Add message display delay proportional to the AI output size
    const delay = Math.ceil(botMsg.text.length / 100) * 500 + 500;

    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
      // Stop pulsing animation
      setIsThinking(false);
      // Start spinning animation
      setIsTyping(true);
    }, delay);
    // Delay before the AI begins typing

    // Close dropdown menu after question is selected
    setIsOpen(false);
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

  const handleToggleClick = () => {
    if (!isTyping) {
      setIsOpen(!isOpen);
      // Hide overlay on first click
      if (showOverlay) {
        setShowOverlay(false);
      }
    }
  };

  return (
    <div
      className="tw-w-full tw-h-[400px] tw-rounded-lg tw-border-solid tw-border-primary-blue tw-flex tw-flex-col tw-overflow-hidden tw-font-sans"
      style={{ backgroundColor: "#faf9f6", fontFamily: "Calibri, sans-serif" }}
    >
      {/* Scrollable container that displays the chat messages */}
      <div
        ref={messagesContainerRef}
        className="tw-flex-1 tw-overflow-y-auto tw-rounded-lg tw-p-4 tw-pb-16 tw-space-y-3 tw-relative tw-z-0"
      >
        <div
          className="tw-absolute tw-inset-0 tw-m-auto tw-z-0 tw-pointer-events-none tw-transition-opacity tw-duration-500 tw-ease-in-out"
          style={{
            backgroundImage: `url(${robotImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "255px",
            height: "255px",
            padding: "none",
            opacity: showOverlay ? 0.3 : 0,
          }}
        />
        {/* Container for indvidual messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`tw-flex tw-flex-col tw-relative tw-z-10 ${
              msg.sender === "user" ? "tw-items-end" : "tw-items-start"
            }`}
            style={{
              animation: "fadeIn 0.5s ease-in",
            }}
          >
            <div
              className={`tw-text-black tw-text-left tw-p-3 tw-rounded-lg tw-break-words ${
                msg.sender === "bot"
                  ? "tw-max-w-[90%] tw-bg-transparent tw-shadow-none"
                  : "tw-max-w-[45%] tw-bg-white tw-shadow"
              }`}
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {/* Scroll to the bottom each time a new chaarcter is generated */}
              {msg.sender === "bot" ? (
                // Add animation to the latest bot message
                index === messages.length - 1 ? (
                  <TypingMessage
                    text={msg.text}
                    onUpdate={scrollToBottom}
                    // Set typing to false when done
                    onComplete={() => setIsTyping(false)}
                  />
                ) : (
                  msg.text
                )
              ) : (
                msg.text
              )}
            </div>
            {/* Show blob for most recent AI messages */}
            {msg.sender === "bot" && index === messages.length - 1 && (
              <div className="tw-flex tw-items-start tw-border-none">
                <BlobLoader animationMode={getBlobMode()} />
              </div>
            )}
          </div>
        ))}
        {/* Show thinking blob when AI is thinking (before message appears) */}
        {isThinking && (
          <div
            className="tw-flex tw-justify-start"
            style={{ animation: "fadeIn 0.5s ease-in", border: "none" }}
          >
            <div className="tw-flex tw-items-start tw-border-none">
              <BlobLoader animationMode="pulsing" />
            </div>
          </div>
        )}
      </div>

      <div className="tw-relative tw-w-full tw-flex tw-justify-center tw-z-20">
        {/* Upside down triangle on dropdown menu box */}
        <div
          className={`tw-absolute tw-pointer-events-none tw-transition-all tw-duration-300 ${
            isOpen ? "tw-opacity-100" : "tw-opacity-0"
          }`}
          style={{
            width: 0,
            height: 0,
            bottom: "38px",
            right: "8%",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid white",
            zIndex: 21,
            transition: "opacity 0.3s ease-out, bottom 0.3s ease-out",
          }}
        />

        {/* Container with list of question buttons */}
        <div
          ref={dropdownRef}
          className={`tw-absolute tw-bottom-[48px] tw-w-[95%] tw-bg-white tw-shadow-lg tw-transition-all tw-duration-300 tw-border-2 tw-overflow-y-auto tw-border-black tw-rounded-lg tw-z-20 tw-ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen
              ? "tw-opacity-100 tw-pointer-events-auto"
              : "tw-opacity-0 tw-pointer-events-none"
          }`}
          style={{
            maxHeight: isOpen ? "400px" : "0px",
            fontFamily: "Calibri, sans-serif",
            overflowY: isOpen ? "auto" : "hidden",
          }}
        >
          {/* Container for indvidual questions */}
          <div className="tw-py-2">
            {userQuestions.map((question, index) => (
              <button
                key={question.id}
                onClick={() => handleQuestionClick(question)}
                className="tw-relative tw-w-full tw-text-center tw-text-black tw-border-none tw-text-sm tw-bg-white tw-transition tw-flex tw-flex-col tw-items-center tw-p-0"
              >
                <span className="tw-w-[90%] hover:tw-bg-bgwhite  tw-py-2 tw-rounded tw-transition">
                  {question.text}
                </span>
                {/* Add seperator lines for all questions except the last */}
                {index < userQuestions.length - 1 && (
                  <span className="tw-h-[1px] tw-w-[90%] tw-bg-black"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI search bottom panel */}
      <div className="tw-w-full tw-bg-white tw-border-0 tw-border-t-4 tw-border-solid tw-border-primary-blue tw-rounded-b-lg tw-flex">
        {/* Toggle button for dropdown menu */}
        <button
          className="tw-w-full tw-bg-white tw-border-0 tw-py-2 tw-px-4 tw-justify-end tw-cursor-pointer tw-flex tw-items-center disabled:tw-cursor-not-allowed tw-group"
          // Disable if typing
          onClick={handleToggleClick}
          disabled={isTyping || isThinking}
          style={{
            opacity: isTyping || isThinking ? 0.5 : 1,
          }}
        >
          <div className="tw-bg-primary-blue tw-rounded-lg tw-p-0 tw-flex tw-items-center tw-justify-center group-hover:tw-bg-labBlue group-disabled:group-hover:tw-bg-primary-blue tw-transition-colors tw-duration-200">
            {isOpen ? (
              <ArrowDropUpIcon className="tw-text-white" fontSize="large" />
            ) : (
              <ArrowDropDownIcon className="tw-text-white" fontSize="large" />
            )}
          </div>
        </button>
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
      // Fade animation for upside down triangle on dropdown menu
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

TypingMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  onComplete: PropTypes.func,
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
    }),
  ),
};

export default AIChatBot;
