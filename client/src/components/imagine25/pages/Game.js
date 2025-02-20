import React from "react";

const Game = () => {
  const sizeStyling = " tw-w-[800px] tw-h-[600px]";
  return (
    <div className={"tw-flex tw-justify-left tw-items-center" + sizeStyling}>
      <iframe
        src="https://microstudio.io/Nerozz/galaga/3E7A6TBT/"
        className={"tw-rounded-xl" + sizeStyling}
      />
    </div>
  );
};

export default Game;
