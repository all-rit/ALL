import React from "react";

/*
Component for the home reset button
*/
const HomeReset = ({ gameEnded, changeGameColors, colors }) => {
  //Handles a click of the button
  const handleClick = () => {
    changeGameColors(colors);
    gameEnded();
  };

  return (
    <div>
      <button
        type="submit"
        className="backButton btn btn-second btn-xl text-uppercase js-scroll-trigger"
        onClick={handleClick}
      >
        Back
      </button>
    </div>
  );
};

export default HomeReset;
