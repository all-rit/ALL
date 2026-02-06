import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BlobLoader from './BlobLoader';
import robotImage from './robot.png';

/**
 * Typewriter animation component effect for bot responses
 * that displays text character by character
 * @param {*} text : Text string to display with the typing effect
 * @param {*} onUpdate : Functon to flag after each character is written
 * @returns
 */
const TypingMessage = ({ text, onUpdate, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
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
 * @param {*} onAnswerSelected : Callback function when an answer is displayed
 * @returns
 */
const AIChatBot = ({ userQuestions, fixedAIResponse, onAnswerDataChange, onTypingChange, onThinkingChange, onQuestionAnswered, triggerLoadQuestions }) => {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);
    // Variable for the intro message
    const [initalized, setInitialized] = useState(false);
    const messagesContainerRef = useRef(null);
    const loadedQuestionSetRef = useRef(null);

    // Helper function to create prompt messages
    const createPrompts = (questions) =>
        questions.map((q, i) => ({
            type: 'prompt',
            id: q.id,
            text: q.text,
            delayIndex: i,
        }));

    // Initialize with intro message on mount
    useEffect(() => {
        if (!initalized) {
            const introMsg = {
                sender: 'bot',
                text: 'Hello! I\'m ALL-IE! I\'m here to assist you with your questions. Please select one of the questions at the right to get started!',
            };
            setMessages([introMsg]);
            // The intro message should only be shown once at the start of the exercise
            setInitialized(true);
            setShowOverlay(false);
            // Scroll to top to show intro message
            setTimeout(() => {
                if (messagesContainerRef.current) {
                    messagesContainerRef.current.scrollTop = 0;
                }
            }, 0);
        }
    }, [initalized]);

    // Load initial prompts when component initializes
    useEffect(() => {
        if (!initalized || !userQuestions?.length) return;

        const nonPromptMessages = messages.filter((msg) => msg.type !== 'prompt');
        // Only load initial prompts if we just have the intro
        if (nonPromptMessages.length !== 1 || loadedQuestionSetRef.current) return;

        const delay = nonPromptMessages[0].text.length * 15 + 300;
        const prompts = createPrompts(userQuestions);
        const questionSetId = userQuestions.map((q) => q.id).join(',');

        const timer = setTimeout(() => {
            loadedQuestionSetRef.current = questionSetId;
            setMessages((prev) => {
                const filtered = prev.filter((msg) => msg.type !== 'prompt');
                return [...filtered, ...prompts];
            });
        }, delay);

        return () => clearTimeout(timer);
    }, [initalized, userQuestions]);

    // Load new prompts when parent triggers (after modal closes)
    useEffect(() => {
        if (!triggerLoadQuestions || !userQuestions?.length) return;

        // Reset question set ref to allow loading
        loadedQuestionSetRef.current = null;

        // Replace old prompts with new ones
        setMessages((prev) => {
            const filtered = prev.filter((msg) => msg.type !== 'prompt');
            return [...filtered, ...createPrompts(userQuestions)];
        });
    }, [triggerLoadQuestions, userQuestions]);


    // Notify parent of completion and state changes
    useEffect(() => {
        onQuestionAnswered?.();
        onTypingChange?.(isTyping);
        onThinkingChange?.(isThinking);
    }, [isTyping, isThinking, messages.length, onQuestionAnswered, onTypingChange, onThinkingChange, initalized]);

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

    // Helper to find bot response by question ID
    const findBotResponse = (questionId) =>
        fixedAIResponse.find((resp) => resp.id === questionId);

    const handleQuestionClick = (question) => {
        const botObj = findBotResponse(question.id);
        const userMsg = { sender: 'user', text: question.text };
        const botMsg = {
            sender: 'bot',
            text: botObj?.text || 'No response found.',
        };

        onAnswerDataChange?.({
            biasType: botObj?.biasType,
            biasDefinition: botObj?.biasDefinition,
            explanation: botObj?.explanation,
        });

        loadedQuestionSetRef.current = null;
        setMessages((prev) => [...prev.filter((msg) => msg.type !== 'prompt'), userMsg]);
        setIsThinking(true);

        const delay = Math.ceil(botMsg.text.length / 100) * 500 + 500;
        setTimeout(() => {
            setMessages((prev) => [...prev, botMsg]);
            setIsThinking(false);
            setIsTyping(true);
        }, delay);
    };

    /**
     * Decide which animation the blob should use based
     * on the AI state
     * @returns {string} "pulsing" | "spinning" | "static"
     */
    const getBlobMode = () => {
        if (isThinking) return 'pulsing';
        if (isTyping) return 'spinning';
        return 'static';
    };

    const getLastBotMessageIndex = () => {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].type !== 'prompt') return i;
        }
        return -1;
    };



    return (
        <div
            className="tw-w-full tw-h-[400px] tw-rounded-lg tw-border-solid tw-border-primary-blue tw-flex tw-flex-col tw-overflow-hidden tw-font-calibri tw-bg-[#faf9f6]"
        >
            {/* Scrollable container that displays the chat messages */}
            <div
                ref={messagesContainerRef}
                className="tw-flex-1 tw-overflow-y-auto tw-rounded-lg tw-p-4 tw-pb-16 tw-space-y-3 tw-relative tw-z-0"
            >
                <div
                    className="tw-absolute tw-inset-0 tw-m-auto tw-z-0 tw-pointer-events-none tw-transition-opacity tw-duration-500 tw-ease-in-out tw-w-[255px] tw-h-[255px] tw-bg-cover tw-bg-center tw-bg-no-repeat"
                    style={{
                        backgroundImage: `url(${robotImage})`,
                        opacity: showOverlay ? 0.3 : 0,
                    }}
                />
                {/* Container for individual messages */}
                {messages.map((msg, index) => (
                    msg.type === 'prompt' ? (
                        // Render prompt as user bubble
                        <div
                            key={msg.id}
                            className="tw-w-full tw-flex tw-flex-col tw-items-end tw-gap-2"
                            style={{
                                animation: `slideIn 0.5s ease-out ${msg.delayIndex * 0.1}s both`,
                            }}
                        >
                            <div className="tw-flex tw-items-end tw-gap-3 tw-w-full tw-justify-end">
                                <button
                                    onClick={() => handleQuestionClick({ id: msg.id, text: msg.text })}
                                    className="tw-max-w-[45%] tw-bg-white tw-text-black tw-shadow-md tw-p-3 tw-rounded-lg tw-border-none tw-cursor-pointer tw-transition-all tw-duration-200 tw-text-left hover:tw-shadow-lg hover:tw-scale-105 active:tw-scale-95 tw-ml-auto tw-font-calibri tw-body-text"
                                >
                                    {msg.text}
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Render regular chat messages
                        <div
                            key={index}
                            className={`tw-flex tw-flex-col tw-relative tw-z-10 ${msg.sender === 'user' ? 'tw-items-end' : 'tw-items-start'
                                }`}
                            style={{
                                animation: 'fadeIn 0.5s ease-in',
                            }}
                        >
                            <div
                                className={`tw-text-black tw-text-left tw-p-3 tw-rounded-lg tw-break-words tw-font-calibri tw-body-text ${msg.sender === 'bot'
                                    ? 'tw-max-w-[90%] tw-bg-transparent tw-shadow-none'
                                    : 'tw-max-w-[45%] tw-bg-white tw-shadow'
                                    }`}
                            >
                                {/* Scroll to the bottom each time a new character is generated */}
                                {msg.sender === 'bot' ? (
                                    // Add animation to the latest bot message
                                    index === getLastBotMessageIndex() ? (
                                        <TypingMessage
                                            text={msg.text}
                                            onUpdate={scrollToBottom}
                                            onComplete={() => {
                                                setIsTyping(false);
                                            }}
                                        />
                                    ) : (
                                        msg.text
                                    )
                                ) : (
                                    msg.text
                                )}
                            </div>
                            {/* Show blob for most recent AI messages */}
                            {msg.sender === 'bot' && index === getLastBotMessageIndex() && (
                                <div className="tw-flex tw-items-start tw-border-none">
                                    <BlobLoader animationMode={getBlobMode()} />
                                </div>
                            )}
                        </div>
                    )
                ))}
                {/* Show thinking blob when AI is thinking (before message appears) */}
                {isThinking && (
                    <div
                        className="tw-flex tw-justify-start tw-border-none"
                        style={{ animation: 'fadeIn 0.5s ease-in' }}
                    >
                        <div className="tw-flex tw-items-start tw-border-none">
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
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
        })
    ),
    fixedAIResponse: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
    onAnswerDataChange: PropTypes.func,
    onTypingChange: PropTypes.func,
    onThinkingChange: PropTypes.func,
    onQuestionAnswered: PropTypes.func,
    triggerLoadQuestions: PropTypes.number,
};

export default AIChatBot;
