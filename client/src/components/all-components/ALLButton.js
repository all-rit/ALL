import React from "react";
import PropTypes from "prop-types";

const ALLButton = (props) => {
  const { label, onClick, className, type, href, large = false } = props;

  return (
    <div className={`${className} tw-h-100`}>
      <button
        className={`tw-border-0 tw-relative tw-py-1 tw-bg-white tw-body-text tw-px-6 xs:tw-text-xs lg:tw-text-[1.125rem] tw-text-nowrap ${large && "tw-py-[1.5rem] tw-px-[3rem]"}`}
        onClick={onClick}
        type={type}
        href={href}
      >
        {label}
        <div
          className={`tw-absolute tw-border-solid tw-border-[0.4rem] ${large && "tw-border-[0.5rem]"} tw-h-full tw-w-full tw-z-1 
        tw-border-primary-blue tw-right-[-0.5rem] tw-top-[-0.5rem] tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg blue-drop-shadow`}
        />
        <div
          className={`tw-absolute tw-border-solid tw-border-[0.4rem] ${large && "tw-border-[0.5rem]"} tw-h-full tw-w-full tw-z-1 
         tw-border-primary-yellow tw-left-[-0.5rem] tw-bottom-[-0.5rem] tw-border-t-0 tw-border-r-0 tw-rounded-bl-lg yellow-drop-shadow`}
        />
      </button>
    </div>
  );
};

ALLButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  large: PropTypes.bool,
  href: PropTypes.string,
};

export default ALLButton;
