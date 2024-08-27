import React, { useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";

const BypassBlocksGuideline = () => {
  const { actions } = useMainStateContext();

  const buttonStyle = { marginRight: "10px", marginLeft: "10px" };

  const handleSubmit = () => {
    navigate("/Lab4/Exercise/CodeChangeBlocks");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Fragment>
      <div>
        <h2 className="playthrough__title">Was That Difficult?</h2>
        <p className="playthrough__sentence">
          People with mobile dexterity disabilities sometimes use a keyboard to
          navigate the page. This can be cumbersome if there is no way to skip
          to the main section. Software should follow the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            WGAC 2.4.1: Bypass Blocks Guideline
          </a>
          . Go ahead and make the changes to the code by clicking “continue”.
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
      <br />
    </Fragment>
  );
};

export default BypassBlocksGuideline;
