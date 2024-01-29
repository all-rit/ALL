import React from "react";
import "../title.css";
import PropTypes from "prop-types";

/*
Component for creating a generic button for the system
*/
const Button = ({ clickMethod, message }) => {
  // Handles a click by the user
  const onClick = () => {
    clickMethod();
  };

  return (
    <button
      onClick={onClick}
      className="Button btn btn-primary btn-xl text-uppercase "
    >
      {message}
    </button>
  );
};

Button.propTypes = {
  clickMethod: PropTypes.func,
  message: PropTypes.string,
}

export default Button;
