import React from "react";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";

const GalagaInstructions = () => {
  const fontSize = "xs:tw-text-md xl:tw-text-xl";
  return (
    <>
      <h3>Instructions</h3>
      {Frame(
        <div className="xs:tw-pt-5 md:tw-pt-8 lg:tw-pt-10">
          <p className={fontSize}>
            You will be playing against your selected opponent to see who can
            score the most points in 1 minute without dying. Your teammate will
            be playing against their selected opponent in the same manner. The
            team with the highest combined scores wins!
          </p>
          <br />
          {/*&apos; is just a apostrophe --> " ' "*/}
          <p className={fontSize}>
            Move left and right using the arrows and press space to shoot down
            enemy space ships! Don&apos;t get hit by one or it&apos;s game over!
          </p>
        </div>,
        () => navigate("/Imagine2025/Galaga"),
        () => navigate("/Imagine2025/OpponentSelection"),
      )}
    </>
  );
};

export default GalagaInstructions;
