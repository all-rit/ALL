import React from "react";
import PropTypes from "prop-types";

const Likert = (props) => {
  return (
    <div className="tw-flex">
      <input
        className="tw-w-[80%]"
        type="range"
        min="0"
        max="100"
        value={props.sliderValue}
        onInput={(e) => {
          props.setSliderValue(e.target.value);
        }}
      />
      <div className="tw-mx-auto">{props.sliderValue}</div>
    </div>
  );
};

Likert.propTypes = {
  sliderValue: PropTypes.number.isRequired,
  setSliderValue: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default Likert;
