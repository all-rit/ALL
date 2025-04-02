import React from "react";
import PropTypes from "prop-types";

const Likert = (props) => {
  const options = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree",
  ];

  return (
    <div className="tw-my-4">
      <div className="tw-flex tw-w-[80%] tw-mx-auto tw-justify-center tw-justify-between">
        {options.map((value) => (
          <div key={value}>
            <p className="tw-text-center tw-pr-5">{value}</p>
            <input
              type="radio"
              className="radioCustomButton"
              id={value}
              value={value}
              name="likert"
              onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

Likert.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Likert;
