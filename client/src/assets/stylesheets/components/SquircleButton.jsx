import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "reactstrap";

const SquircleButton = (props) => {
  const { onClick, disabled, children } = props;

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={"tw-relative tw-bg-transparent tw-border-none tw-p-0 tw-z-40"}
    >
      <div
        className={
          "tw-absolute tw-bg-transparent tw-border-none tw-inset-1 tw-bottom-4 tw-rounded-[50%] tw-shadow-xl tw-pointer-events-none"
        }
      />
      <div className={"squircle-left tw-pointer-events-none"} />
      <div
        className={
          "tw-absolute tw-inset-5 tw-top-7 tw-z-1 tw-pointer-events-none"
        }
      >
        {children}
      </div>
      <div className={"squircle-right tw-pointer-events-none"} />
    </Button>
  );
};

SquircleButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export default SquircleButton;
