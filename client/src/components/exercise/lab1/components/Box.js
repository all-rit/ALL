import React, { useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import {
  BOX_UNOPENED,
  BOX_INCORRECT,
  BOX_CORRECT,
  BOX_REVEALED,
  BOX_LOCKED,
} from "../../../../constants/lab1";

/**
 * Represents a Box component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.number - The number to display inside the box.
 * @param {string} props.state - The state of the box.
 * @param {Function} props.clickHandler - The click handler function.
 * @returns {JSX.Element} The rendered Box component.
 */
const Box = ({ number, state, clickHandler }) => {
  const [classes] = useState({
    box: true,
    "box--green": state === BOX_CORRECT,
    "box--red": state === BOX_INCORRECT,
    "box--glow": state === BOX_REVEALED,
    "box--locked": state === BOX_LOCKED,
  });

  const handleClick = () => {
    if (state === BOX_UNOPENED || state === BOX_REVEALED) {
      clickHandler();
    }
  };

  return (
    <button className={classNames(classes)} onClick={handleClick}>
      {number}
    </button>
  );
};

Box.propTypes = {
  number: PropTypes.number.isRequired,
  state: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Box;
