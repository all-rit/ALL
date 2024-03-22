import React from "react";
import PropTypes from "prop-types";

const AppInstructions = (props) => {
  return (
    <div>
      <p className="app__instructions">{props.instructions}</p>
      <p className={props.class}>{props.instructions2}</p>
    </div>
  );
};

AppInstructions.propTypes = {
  instructions: PropTypes.string,
  class: PropTypes.string,
  instructions2: PropTypes.string,
};

export default AppInstructions;
