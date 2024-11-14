/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import classNames from "classnames/bind";

import {
  BOX_UNOPENED,
  BOX_INCORRECT,
  BOX_CORRECT,
  BOX_REVEALED,
  BOX_LOCKED,
} from "../../../../constants/lab1";

class Box extends Component {
  render() {
    const { number, state, clickHandler } = this.props;
    const classes = classNames({
      box: true,
      "box--green": state === BOX_CORRECT,
      "box--red": state === BOX_INCORRECT,
      "box--glow": state === BOX_REVEALED,
      "box--locked": state === BOX_LOCKED,
    });

    return (
      <button
        className={`${classes} tw-rounded-2xl tw-border-0 tw-bg-primary-blue hover:tw-shadow-md hover:tw-bg-[#0035BCFF] tw-text-white tw-mt-6 tw-mb-16`}
        onClick={
          state === BOX_UNOPENED || state === BOX_REVEALED ? clickHandler : null
        }
      >
        {number}
      </button>
    );
  }
}

export default Box;
