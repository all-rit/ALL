import React from "react";
import Circle from "../components/circle";
import "./landingpage.css";

const MainInstructions = () => {
  return (
    <div className="mainInstructionsContainer tw-text-left">
      <p className="tw-body-styling-name tw-font-medium">
        You are about to play a exercise involving three colored circles, the
        same size as this one:
      </p>
      <div className="center tw-py-4">
        <Circle color={"tw-bg-primary-blue"} clickable={false} />
      </div>
      <ul className="tw-body-styling-name tw-font-medium tw-flex tw-flex-col tw-gap-y-2 tw-text-left tw-px-6">
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          You will need to <strong>click the circle</strong> in the center of
          the screen.
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          The circle will be 1 of 3 colors.
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          The color you need to click will appear in the{" "}
          <strong>bottom left</strong> corner of the screen.
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          The colors you should <strong>avoid</strong> clicking will appear in
          the <strong>bottom right</strong> of the screen.
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          You will gain or lose points based on if you clicked the{" "}
          <strong>correct or incorrect</strong> circle and based on{" "}
          <strong>how fast you clicked</strong> the correct colored circle. So
          click as fast as you possibly can!
        </li>
        <li className="tw-body-styling-name tw-font-medium tw-list-disc">
          The color changes in the center of the screen every second for fifteen
          seconds.
        </li>
      </ul>
    </div>
  );
};

export default MainInstructions;
