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
            You will be playing against your selected opponent to see who can
            score the most points in 1 minute. Your teammate will be playing
            against their selected opponent in the same manner. The team with
            the highest combined scores wins!
          </p>
          <br />
          {/*&apos; is just a apostrophe --> " ' "*/}
          <p className="tw-body-text">
            Move left and right using the arrows and press space to shoot down
            enemy space ships! Don&apos;t get hit by one or you&apos;ll lose
            points!
          </p>
        </div>,
        () => navigate("/Imagine2025/Galaga"),
        () => navigate("/Imagine2025/OpponentSelection"),
      )}
    </>
  );
};

export default GalagaInstructions;
