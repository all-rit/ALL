import React, { Fragment, useEffect } from "react";
import Button from "@mui/material/Button";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const AccessibleGuideline = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleSubmit = () => {
    navigate("/Lab4/Exercise/CodeChangeAccessible");
  };
  const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
  return (
    <Fragment>
      <div>
        <h2 className="playthrough__title">Was That Difficult?</h2>
        <p className="playthrough__sentence">
          People with mobile dexterity disabilities sometimes use a keyboard to
          navigate the page. It is imperative that elements that are accessible
          through mouse are also navigable by keyboard. Software should follow
          the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            WGAC Guideline 2.1.1 Keyboard Accessible
          </a>
          : Make all functionality available from a keyboard. Go ahead and make
          the changes to the code by clicking “continue”.
        </p>

        <Button
          href="#"
          onClick={handleSubmit}
          variant={"contained"}
          color={"primary"}
          style={buttonStyle}
        >
          Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default AccessibleGuideline;
