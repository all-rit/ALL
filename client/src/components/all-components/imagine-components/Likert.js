import React from "react";
import PropTypes from "prop-types";

const Likert = (props) => {
  return (
    <div className="tw-my-4">
      <div className="tw-flex tw-w-[80%] tw-mx-auto tw-justify-center tw-justify-between">
        <p className="tw-body-text tw-text-center">
          Strongly
          <br /> Disagree
        </p>
        <p className="tw-body-text tw-text-center">
          Strongly
          <br /> Agree
        </p>
      </div>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-5 lg:tw-grid-cols-10 tw-mx-auto tw-w-[80%] ">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="tw-flex tw-flex-col tw-items-center">
            <input
              type="radio"
              className="radioCustomButton"
              id={index}
              value={index + 1}
              name="likert"
              onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={index}>
              {index + 1}
            </label>
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
