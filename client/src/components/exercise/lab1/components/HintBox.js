/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import classNames from "classnames/bind";

import {
  HINT_BOX_CLOSED,
  HINT_BOX_OPEN,
  HINT_BOX_THINKING,
} from "../../../../constants/lab1";

class ClosedHintBox extends Component {
  render() {
    const { visible, message, backgroundColor } = this.props;

    if (!visible) return null;

    return (
      <div
        className="hint_box__background hover:tw-shadow-md tw-rounded-2xl tw-border-none tw-body-text tw-h-[6rem] tw-my-6"
        style={{ backgroundColor: backgroundColor }}
      >
        <span className="hint_box__warning tw-title tw-text-2xl">Hint Box</span>
        {message}
      </div>
    );
  }
}

class ThinkingHintBox extends Component {
  render() {
    const { visible } = this.props;

    if (!visible) return null;

    return <BeatLoader sizeunit={"px"} size={10} />;
  }
}

class OpenHintBox extends Component {
  render() {
    const { visible, boxRevealed } = this.props;
    const message = boxRevealed
      ? "The location of the treasure has been revealed!"
      : "No hint";

    if (!visible) return null;

    return message;
  }
}

class HintBox extends Component {
  render() {
    const {
      visible,
      state,
      boxRevealed,
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor,
      clickHandler,
    } = this.props;
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
        className={`${classes} tw-rounded-2xl`}
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
  }
}

export default HintBox;
