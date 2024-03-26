import React from "react";
import PropTypes from "prop-types";

const AppInstructions = ({ visible }) => {
  if (!visible) return null;

  return (
    <p className="app__instructions">
      Goal: Find the box with the treasure.
      <ul className="app__instructions">
        <li>Opening the hint box costs 25 points.</li>
        <li>
          The quicker you find the box with the treasure, the more points you
          get.
        </li>
      </ul>
    </p>
  );
};

AppInstructions.propTypes = {
  visible: PropTypes.bool,
};

export default AppInstructions;
