import React from "react";
import Button from "../header/buttons/button";
import MainInstructions from "./mainInstructions";

const LandingPage = ({
  endFirstGame,
  toWhiteBackground,
  background,
  loggedIn,
  startGame
}) => {
  const closePage = () => {
    endFirstGame();
  };

  if (background !== "white") {
    toWhiteBackground();
  }

  return (
    <div>
      <div id="Header">
        <p className="mainTitle">Welcome!</p>
      </div>
      <div id="Body">
        <MainInstructions />
        {!loggedIn ? (
          <div className="mainInstructionsContainer">
            <p
              className="mainInstructionList"
              style={{
                marginTop: "40px",
                marginBottom: "10px",
                textAlign: "left"
              }}
            >
              To help track your game history and to help ensure we are
              providing you with the best possible learning experience, please
              sign in with google.
            </p>
          </div>
        ) : null}
        <p
          className="mainInstructionList"
          style={{ marginTop: "40px", marginBottom: "10px" }}
        >
          Now that you've been familiarized with the instructions, click the
          button to continue onto the game!
        </p>
        <div className="center">
          <Button
            clickMethod={closePage}
            message={"Lets Get Started!"}
            fontSizing={"25px"}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPage;
