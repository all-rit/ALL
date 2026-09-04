import React from "react";
import { useState, useRef } from "react";

const Qubit = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [collapseHex, setCollapseHex] = useState("");
  const [fontColor, setFontColor] = useState("white");
  const [time, setTime] = useState(0);
  const [text, setText] = useState("");
  const timeoutIdRef = useRef(null);

  const colorChange = () => {
    setIsHovering(true);
    // Gives random number either 0 or 1 to collapse to for qubit color
    const rng = Math.floor(Math.random() * 2);

    if (rng == 0) {
      setCollapseHex("tw-bg-labBlue");
      setFontColor("white");
      setText("0");
    } else {
      setCollapseHex("tw-bg-labYellow");
      setFontColor("black");
      setText("1");
    }
  };

  const handleMouseEnter = () => {
    timeoutIdRef.current = setTimeout(() => {
      colorChange();
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
      setIsHovering(false);
      clearTimeout(time);
      setTime(0);
      setFontColor("white");
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover:tw-cursor-pointer ${isHovering ? collapseHex : "tw-bg-qubit"}`}
      style={{
        color: fontColor,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isHovering ? text : "Qubit"}
    </div>
  );
};

export default Qubit;
