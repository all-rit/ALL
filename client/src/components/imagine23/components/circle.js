import React from "react";
import Countdown from "react-countdown";
import "./exerciseStyle.css";
import PropTypes from "prop-types";

// Object for holding the current background color of the Circle
// Used to fade to black on each circle
const style = {
  backgroundColor: "",
};

/*
Function for controlling the circles on the screen. Controls both the
instruction circles and the center circle clicked by the user in the exercise
*/
const Circle = ({ color, clickable, onClick }) => {
  // Fades circle to black if the circle is the center one
  const toDark = ({ milliseconds }) => {
    style.backgroundColor = color;
    if (milliseconds < 100) {
      style.backgroundColor = "black";
    }
    return (
      <span
        className="circle clickable"
        style={{ backgroundColor: style.backgroundColor }}
        onClick={onClick}
        label={"circle"}
      />
    );
  };

  // Controls the circle the user clicks
  if (clickable) {
    return (
      <div>
        <Countdown
          date={Date.now() + 10000}
          intervalDelay={0}
          precision={3}
          renderer={toDark}
        />
      </div>
    );
  }

  // Controls the circles the user doesn't click (instruction circles)
  else {
    return (
      <span className="circle" style={{ backgroundColor: `${color}` }}></span>
    );
  }
};

Circle.propTypes = {
  color: PropTypes.string,
  clickable: PropTypes.boolean,
  onClick: PropTypes.func,
};

export default Circle;
