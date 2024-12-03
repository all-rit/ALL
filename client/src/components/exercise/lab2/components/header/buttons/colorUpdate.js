/* eslint-disable react/prop-types */
import React from "react";
import "../title.css";
import LabButton from "../../../../../all-components/LabButton";

/*
Component for the color update button on the color change popup
*/
const ColorUpdate = ({ openColorChange }) => {
  return (
    <div>
      <LabButton
        type="button"
        label={"Update Colors"}
        onClick={openColorChange}
      >
        Update Colors
      </LabButton>
    </div>
  );
};

export default ColorUpdate;
