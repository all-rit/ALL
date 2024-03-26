import React from "react";
import { BeatLoader } from "react-spinners";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import {
  HINT_BOX_CLOSED,
  HINT_BOX_OPEN,
  HINT_BOX_THINKING,
} from "../../../../constants/lab1";

/**
 * Renders a closed hint box component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the hint box is visible.
 * @param {string} props.message - The message to be displayed in the hint box.
 * @param {string} props.backgroundColor - The background color of the hint box.
 * @returns {JSX.Element|null} The closed hint box component.
 */
const ClosedHintBox = ({ visible, message, backgroundColor }) => {
  if (!visible) return null;

  return (
    <div
      className="hint_box__background"
      style={{ backgroundColor: backgroundColor }}
    >
      <span className="hint_box__warning">Hint Box</span>

      {message}
    </div>
  );
};

ClosedHintBox.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

/**
 * Renders a hint box component that displays a loading spinner when `visible` is true.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines whether the hint box should be visible or not.
 * @returns {JSX.Element|null} The rendered hint box component or null if `visible` is false.
 */
const ThinkingHintBox = ({ visible }) => {
  if (!visible) return null;

  return <BeatLoader sizeUnit={"px"} size={10} />;
};

ThinkingHintBox.propTypes = {
  visible: PropTypes.bool.isRequired,
};

/**
 * Renders the hint box component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the hint box is visible.
 * @param {boolean} props.boxRevealed - Determines if the box is revealed.
 * @returns {string|null} - The message to be displayed in the hint box or null if the hint box is not visible.
 */
const OpenHintBox = ({ visible, boxRevealed }) => {
  const message = boxRevealed
    ? "The location of the treasure has been revealed!"
    : "No hint";

  if (!visible) return null;

  return message;
};

OpenHintBox.propTypes = {
  visible: PropTypes.bool.isRequired,
  boxRevealed: PropTypes.bool.isRequired,
};

/**
 * Renders a hint box component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.visible - Determines if the hint box is visible.
 * @param {string} props.state - The state of the hint box.
 * @param {boolean} props.boxRevealed - Determines if the box is revealed.
 * @param {string} props.availableMessage - The message to display when the box is available.
 * @param {string} props.unavailableMessage - The message to display when the box is unavailable.
 * @param {string} props.availableBackgroundColor - The background color when the box is available.
 * @param {string} props.unavailableBackgroundColor - The background color when the box is unavailable.
 * @param {function} props.clickHandler - The click handler function.
 * @returns {JSX.Element|null} The rendered HintBox component.
 */
const HintBox = ({
  visible,
  state,
  boxRevealed,
  availableMessage,
  unavailableMessage,
  availableBackgroundColor,
  unavailableBackgroundColor,
  clickHandler,
}) => {
  const classes = classNames({
    hint_box: true,
    "hint_box--open": state === HINT_BOX_OPEN,
  });
  const message = boxRevealed ? availableMessage : unavailableMessage;
  const backgroundColor = boxRevealed
    ? availableBackgroundColor
    : unavailableBackgroundColor;

  if (!visible) return null;

  return (
    <div
      className={classes}
      onClick={state === HINT_BOX_CLOSED ? clickHandler : null}
    >
      <ClosedHintBox
        visible={state === HINT_BOX_CLOSED}
        message={message}
        backgroundColor={backgroundColor}
      />
      <ThinkingHintBox visible={state === HINT_BOX_THINKING} />
      <OpenHintBox
        visible={state === HINT_BOX_OPEN}
        boxRevealed={boxRevealed}
      />
    </div>
  );
};

HintBox.propTypes = {
  visible: PropTypes.bool.isRequired,
  state: PropTypes.string.isRequired,
  boxRevealed: PropTypes.bool.isRequired,
  availableMessage: PropTypes.string.isRequired,
  unavailableMessage: PropTypes.string.isRequired,
  availableBackgroundColor: PropTypes.string.isRequired,
  unavailableBackgroundColor: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default HintBox;
