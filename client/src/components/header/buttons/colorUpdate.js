import React from 'react';
import './../title.css';

/*
Component for the color update button on the color change popup
*/
const ColorUpdate = ({openColorChange}) => {
  return (
    <div>
      <button
        type="button"
        className="updateColorButton"
        onClick={openColorChange}
      >
        Update Colors
      </button>
    </div>
  );
}

export default ColorUpdate;
