import React, { useRef } from "react";
import { PropTypes } from "prop-types";

const EntanglementQubit = ({ colorChange, text, time, bgColor, fontColor }) => {
  const timeoutIdRef = useRef(null);

  const handleMouseEnter = () => {
    timeoutIdRef.current = setTimeout(() => {
      colorChange();
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
      clearTimeout(time);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`tw-bg-${bgColor} tw-cursor-pointer`}
      style={{
        color: fontColor,
        width: "250px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text}
    </div>
  );
};

EntanglementQubit.propTypes = {
  colorChange: PropTypes.func,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  time: PropTypes.number,
  text: PropTypes.string,
};

export default EntanglementQubit;
