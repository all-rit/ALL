import React from 'react';
import PropTypes from 'prop-types';

// generic number line component ALL colored, only shows one value with avatar
// min, max, step, value, label
const NumberLine = ({
  value,
  min,
  max,
  label = ""
}) => {
  // make value a percentage
  const percentage = ((value - min) / (max - min) * 100);

  return (
    <div
      role="img"
      aria-label={`Number line showing ${value} on a scale from ${min} to ${max}`}
      className='tw-w-2/3 tw-mx-auto tw-py-4 tw-px-10'
    >

      {/* colored number line with circles at the ends */}
      <div className="tw-relative tw-my-12 tw-h-2 tw-bg-result_number_line tw-flex tw-items-center tw-justify-between">
        {/* left circle */}
        <div className="tw-relative tw-w-6 tw-h-6 -tw-ml-3 tw-rounded-full tw-bg-brightRed tw-flex tw-justify-center">
          <span className="tw-absolute -tw-top-8 tw-body-text tw-font-bold">
            {min}
          </span>
          <span className="tw-absolute tw-top-10 tw-whitespace-nowrap tw-body-text">
            Least Efficient
          </span>
        </div>

        {/* value circle */}
        <div
          className="tw-absolute -tw-ml-10 tw-w-20 tw-h-20 tw-rounded-full tw-bg-result_number_line tw-bg-[length:1200%_100%] tw-flex tw-items-center tw-justify-center tw-text-black tw-font-bold"
          style={{
            left: `${percentage}%`,
            backgroundPosition: `${percentage}% 0%`,
          }}
        >
          {value}
        </div>

        {/* right circle */}
        <div className="tw-relative tw-w-6 tw-h-6 -tw-mr-3 tw-rounded-full tw-bg-lightGreen tw-flex tw-justify-center">
          <span className="tw-absolute -tw-top-8 tw-body-text tw-font-bold">
            {max}
          </span>
          <span className="tw-absolute tw-top-10 tw-whitespace-nowrap tw-body-text">
            Most Efficient
          </span>
        </div>
      </div>

      {/* label for what the number line is */}
      <div className="tw-text-center tw-mt-16">{label}</div>

    </div>
  );
};

NumberLine.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string
};

export default NumberLine;
