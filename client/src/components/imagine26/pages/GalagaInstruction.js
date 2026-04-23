import React from "react";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";
import ImagineHeader from "../components/ImagineHeader";

const GalagaInstructions = () => {
  // const fontSize = "xs:tw-text-md xl:tw-text-xl";
  return (
    <>
      <ImagineHeader title="Instructions" />
      {Frame(
        <div className="tw-grid tw-w-[20vw]">
          <p className="tw-body-text">
            You will have a teammate and together will compete against our
            AI-controlled Galaga. The team with the highest combined score wins!
          </p>
          <br />
          {/*&apos; is just a apostrophe --> " ' "*/}
          <p className="tw-body-text">
            You will be playing Galaga! Use arrow keys to move and space to
            shoot. Avoid enemy ships or lose points!
          </p>
        </div>,
        () => navigate("/Imagine2026/Galaga"),
      )}
    </>
  );
};

export default GalagaInstructions;
