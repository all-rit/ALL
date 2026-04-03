import React from "react";
import PropTypes from "prop-types";

const defaultOptions = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

const Likert = ({
  options = defaultOptions,
  onAnswerSelected,
  name = "likert",
}) => {
  return (
    <div className="tw-my-4">
      <div className="tw-flex tw-w-[80%] tw-mx-auto tw-justify-center tw-justify-between tw-pb-3">
        {options.map((value) => (
          <div key={value}>
            <p className="tw-text-center tw-pr-5">{value}</p>
            <input
              type="radio"
              className="radioCustomButton"
              id={`${name}-${value}`}
              value={value}
              name={name}
              onChange={onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={`${name}-${value}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Likert.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onAnswerSelected: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Likert;
