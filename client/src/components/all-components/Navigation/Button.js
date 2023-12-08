import React from "react";
import PropTypes from "prop-types";
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
    disabled,
    isPrimary = true,
  } = props;
  let style = "btn btn-primary text-black btn-xl text-uppercase";
  if (!isPrimary) {
    style = "btn btn-second btn-xl text-uppercase";
  }

  return (
    <button className={style} onClick={onClick} key={key} disabled={disabled}>
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
