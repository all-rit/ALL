import React, { useEffect, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const TargetGuideline = () => {
  const { actions } = useMainStateContext();

  const buttonStyle = { marginRight: "10px", marginLeft: "10px" };

  const handleSubmit = () => {
    navigate("/Lab4/Exercise/CodeChangeTarget");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Fragment>
      <div>
        <h2 className="playthrough__title">Was That Difficult?</h2>
        <p className="playthrough__sentence">
          People with mobile dexterity disabilities have a hard time clicking
          small buttons. To make sure your software is accessible by everyone,
          ensure that buttons follow the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            WGAC 2.55 Target Guideline
          </a>
          . Buttons must be a minimum of 44 x 44 px. Go ahead and make the
          changes to the code by clicking “continue”.
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

export default TargetGuideline;
