/* eslint-disable react/prop-types */
import React from "react";
import "../title.css";
import { Button } from "reactstrap";

/*
Component for the color update button on the color change popup
*/
const ColorUpdate = ({ openColorChange }) => {
  return (
    <div>
      <Button
        type="button"
        className="updateColorButton btn btn-primary tw-text-nowrap tw-w-full"
        onClick={openColorChange}
      >
        Update Colors
      </Button>
    </div>
  );
};

export default ColorUpdate;
