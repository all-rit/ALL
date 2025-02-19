import React, { useState } from "react";
import PropTypes from "prop-types";

const ALLCardRow = (props) => {
  const {
    title,
    imageURL,
    circlesLabel,
    circles,
    circlesFilled,
    buttonLabel,
    mode,
    onClick,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-my-3">
      <div className="tw-shadow-lg tw-w-full tw-h-[5rem] tw-flex tw-flex-row tw-rounded-lg tw-relative">
        <p>
          {buttonLabel}
          {mode}
          {onClick}
        </p>
        {/* Left */}
        <div
          className="tw-w-1/12 tw-object-cover tw-rounded-l-lg tw-align-middle"
          style={{
            backgroundImage: `url(${imageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Middle */}
        <div className="tw-p-5">
          <div className="tw-flex tw-flex-row tw-items-center">
            <p className="tw-font-calibri">{circlesLabel}: </p>
            {new Array(circles)
              .fill(false)
              .fill(true, 0, circlesFilled)
              .map((filled, i) => {
                return (
                  <div
                    key={i}
                    className={`tw-m-0.5 ${filled ? "module__lab_difficulty_filled" : "module__lab_difficulty"}`}
                  />
                );
              })}
          </div>
          <p className={"tw-font-poppins tw-font-bold tw-text-md"}> {title}</p>
        </div>
        {/* Right */}
        {mode === "expand" && (
          <div
            className="tw-absolute tw-right-0 tw-top-[20%] tw-cursor-pointer tw-bg-primary-yellow tw-text-darkGray tw-font-poppins tw-px-3"
            onClick={() => toggleExpanded()}
          >
            <div>{expanded ? "Close List" : "Open List"}</div>
          </div>
        )}
      </div>
    </div>
  );
};

ALLCardRow.propTypes = {
  title: PropTypes.string,
  imageURL: PropTypes.string,
  circlesLabel: PropTypes.string,
  circles: PropTypes.number,
  circlesFilled: PropTypes.number,
  buttonLabel: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func,
};

export default ALLCardRow;
