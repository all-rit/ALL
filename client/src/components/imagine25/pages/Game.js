import React from "react";

const Game = () => {
  const widthStyling = "tw-w-[800px]";
  return (
    <div
      className={
        "tw-flex tw-justify-left tw-items-center tw-h-[600px]  " + widthStyling
      }
    >
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-h-[400px] " + widthStyling}
      />
    </div>
  );
};

export default Game;
