import React from "react";
import PropTypes from "prop-types";

const ALLCardRow = (props) => {
  const {
    title,
    imageURL,
    circlesLabel,
    circles,
    circlesFilled,
    buttonLabel,
    buttonStyle,
    onClick,
  } = props;

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-my-3">
      <div className="tw-shadow-lg tw-w-full tw-h-[5rem] tw-flex tw-flex-row tw-rounded-lg tw-relative">
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
            {new Array({ length: circles }).map((_, i) => {
              return (
                <div
                  key={i}
                  className={`tw-m-0.5 ${i < circlesFilled ? "module__lab_difficulty_filled" : "module__lab_difficulty"}`}
                />
              );
            })}
          </div>
          <p className={"tw-font-poppins tw-font-bold tw-text-md"}> {title}</p>
        </div>
        {/* Right */}
        <div className="tw-absolute tw-right-0 tw-top-5">
          <button type="button" className={buttonStyle} onClick={onClick}>
            {buttonLabel}
          </button>
        </div>
      </div>
      {/* Child Components */}
      <div className="tw-w-full tw-bg-white tw-shadow-lg tw-shadow-t-none tw-overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};

ALLCardRow.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  imageURL: PropTypes.string,
  circlesLabel: PropTypes.string,
  circles: PropTypes.number,
  circlesFilled: PropTypes.number,
  buttonLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  onClick: PropTypes.func,
};

export default ALLCardRow;
