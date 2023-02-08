/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/header/buttons/button";
import "./secondaryInstructions.css";

/*
Page containing the instructions for the second popup the user sees
this instructional popup covers color contrast
*/
const ThirdInstructions = ({
  closePage,
  activatePopup,
  toWhiteBackground,
  background,
  selectOption,
}) => {
  const alreadyCalled = false;
  if (!alreadyCalled) {
    selectOption("Protanopia");
  }

  const changeColors = () => {
    activatePopup();
  };

  if (background !== "white") {
    toWhiteBackground();
  }

  return (
    <div className="instructionsContainer">
      <p className="secondInstructionTitle">Wow that was tough!</p>
      <ul>
        <li className="instructionsItem">
          As you can see, this exercise can be very difficult for users who are
          colorblind. The exercise was not created in an accessible manner for
          these users. This is due to the colors being in contrast with both the
          background and the other circles.
        </li>
        <br />
        <br />

        <li className="instructionsItem">
          You can change the colors with the
          <strong style={{ marginLeft: "3px", marginRight: "3px" }}>
            Update Colors
          </strong>
          button in the upper left corner of the next screen.
        </li>
        <br />
        <li className="instructionsItem">
          You can use any online calculator or a calculator you've created for
          your lab! In order to fix the problem, the contrast must be above a
          ratio of <strong>7:1</strong>.{" "}
          <em>
            Black is not an applicable option, as the entire system relies upon
            black for text coloring (giving you zero contrast between the
            background and text).
          </em>
        </li>
        <br />
        <h2>Did you know?</h2>
        <br />
        <li className="instructionsItem">
          Color contrast is a measurement of how much two colors differ from one
          another. This measurement makes a huge difference to people color
          vision deficiencies.
        </li>
      </ul>
      <br></br>
      <div className="center">
        <Button
          clickMethod={changeColors}
          message={"I'm ready!"}
          fontSizing={"25px"}
        />
      </div>
    </div>
  );
};

export default ThirdInstructions;
