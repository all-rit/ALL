import React from "react";
import PropTypes from "prop-types";
import { twMerge } from 'tailwind-merge'

/**
 * Button is a component that is responsible for being the universally styles ALL
 * navigation button. This component is to be used as a single source of truth for button
 * implementation.
 */
const Button = (props) => {
  const {
    buttonText,
    onClick,
    key,
    disabled = false,
    isPrimary = true,
  } = props;

  return (
    <button className={twMerge("btn btn-xl text-uppercase", isPrimary ? "btn-primary text-black" : "btn-second")} onClick={onClick} key={key} disabled={disabled}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  key: PropTypes.number,
  disabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

export default Button;
