import React, { useState } from "react";
import PropTypes from "prop-types";

const ALLCardRow = (props) => {
  const {
    title,
    imageURL,
    circlesLabel,
    circles,
    circlesFilled,
    mode,
    buttonLabels,
    buttonStyle,
    onClick,
  } = props;

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

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
        <div className="tw-absolute tw-right-0 tw-top-5">
          {mode === "open" && (
            <div className={buttonStyle} onClick={() => toggleOpen()}>
              <div>{open ? buttonLabels[1] : buttonLabels[0]}</div>
            </div>
          )}
          {mode === "custom" && (
            <button className={buttonStyle} onClick={onClick}>
              {buttonLabels[0]}
            </button>
          )}
        </div>
      </div>
      {/* Opened Component */}
      {mode === "open" && open && (
        <div className="tw-w-full tw-bg-white tw-shadow-lg tw-shadow-t-none tw-overflow-hidden">
          {React.cloneElement(props.children, {
            open: open,
            toggleOpen: toggleOpen,
          })}
        </div>
      )}
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
  buttonLabels: PropTypes.array,
  buttonStyle: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func,
};

export default ALLCardRow;
