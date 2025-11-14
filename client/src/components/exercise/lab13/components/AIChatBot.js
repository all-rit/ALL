import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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

const AIChatBot = ({ userQuestions, fixedAIResponse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const dropdownRef = useRef(null);

  const handleQuestionClick = (question) => {
    const userMsg = { sender: "user", text: question.text };

    // Find the AI response with matching id
    const botObj = fixedAIResponse.find((resp) => resp.id === question.id);
    const botMsg = {
      sender: "bot",
      text: botObj ? botObj.text : "No response found.",
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setIsOpen(false);
  };

  return (
    <div
      className="tw-w-full tw-h-[400px] tw-rounded-lg tw-border-solid tw-border-primary-blue tw-bg-primary-blue/50 tw-flex tw-flex-col tw-overflow-hidden tw-font-sans"
      style={{ fontFamily: "Calibri, sans-serif" }}
    >
      <div className="tw-flex-1 tw-overflow-y-auto tw-rounded-lg tw-p-4 tw-space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`tw-flex ${
              msg.sender === "user" ? "tw-justify-end" : "tw-justify-start"
            }`}
          >
            <div
              className="tw-bg-white tw-text-black tw-p-3 tw-rounded-lg tw-shadow tw-max-w-[45%] tw-break-words"
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-px-4">
        <div
          ref={dropdownRef}
          className={`tw-w-11/12 tw-bg-white tw-overflow-hidden tw-transition-all tw-duration-300 tw-rounded-lg tw-mb-2`}
          style={{
            maxHeight: isOpen
              ? `${dropdownRef.current?.scrollHeight || 0}px`
              : "0px",
            fontFamily: "Calibri, sans-serif",
          }}
        >
          {userQuestions.map((question) => (
            <button
              key={question.id}
              onClick={() => handleQuestionClick(question)}
              className="tw-w-full tw-bg-white tw-text-black tw-p-4 tw-flex tw-items-center tw-justify-center tw-transition tw-border-0 tw-border-b tw-border-primary-blue"
              style={{ fontFamily: "Calibri, sans-serif" }}
            >
              {question.text}
            </button>
          ))}
        </div>
      </div>

      <div className="tw-w-full tw-bg-white tw-border-0 tw-border-t-4 tw-border-solid tw-border-primary-blue tw-rounded-b-lg tw-flex tw-justify-end">
        <button
          className="tw-bg-white tw-border-0 tw-p-0 tw-cursor-pointer tw-flex tw-items-center tw-justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ArrowDropUpIcon
              className="tw-text-primary-blue"
              fontSize="large"
            />
          ) : (
            <ArrowDropDownIcon
              className="tw-text-primary-blue"
              fontSize="large"
            />
          )}
        </button>
      </div>
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
    }),
  ),
};

export default AIChatBot;
