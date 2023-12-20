import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import AppInstructions from "../components/AppInstructions";
import Button from "@material-ui/core/Button";

const ExerciseStart = () => {
  const handleSubmit = () => {
    navigate("/Lab4/Exercise/SmallTarget");
  };

  const instructions = "The next page will begin the exercise.";
  const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
  return (
    <Fragment>
      <div>
        <AppInstructions instructions={instructions} />
        <Button
          href="#"
          onClick={handleSubmit}
          variant={"contained"}
          color={"primary"}
          style={buttonStyle}
        >
          Start
        </Button>
      </div>
    </Fragment>
  );
};

export default ExerciseStart;
