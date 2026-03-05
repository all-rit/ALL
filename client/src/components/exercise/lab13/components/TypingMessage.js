import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
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

TypingMessage.propTypes = {
  text: PropTypes.string.isRequired,
  onUpdate: PropTypes.func,
  onComplete: PropTypes.func,
};

export default TypingMessage;
