import React, { useState, useEffect } from "react";
import { Button, Typography, Paper, AppBar, Toolbar } from "@material-ui/core";
import { navigate } from "@reach/router";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";
import useLab3StateContext from "src/reducers/lab3/Lab3Context";

/**
 * Renders the AccessibleInstructions component.
 * This component displays instructions for making a page more accessible to users.
 * It includes a text section, a note section, and a "Next" button.
 *
 * @returns {JSX.Element} The rendered AccessibleInstructions component.
 */
const AccessibleInstructions = () => {
  const { actions: mainActions } = useMainStateContext();
  const { state } = useLab3StateContext();

  const textToSpeech = (e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };


  const [text] = useState(
    state.changesApplied
      ? "By adding alt tags that specified what the image\n" +
          "contained, you have now seen how a screen reader allows the\n" +
          "the user to more easily identify the image of the cat despite being\n" +
          "unable to see it, therefore successfully improving the accessibility of the page."
      : "You clicked on an image. However, without the ability to see, it may\n" +
          "be difficult to decipher what these images represent. The previous\n" +
          "page demonstrated how difficult it was to use a page that was\n" +
          "inaccessible. In order to make the pages readable by a screenreader\n" +
          "we need to be add 'alt' attributes to content which will help\n" +
          "improve accessibility."
  );

  useEffect(() => {
    document.body.style = "background: white";
    mainActions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleSubmit = () => {
    navigate("/Lab3/Exercise/CodeChange");
  };

  const paperStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px",
  };

  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography
            variant={"h4"}
            aria-label={"Instructions"}
            tabIndex={"0"}
            color={"inherit"}
            onFocus={(e) => {
              textToSpeech(e, "Instructions")
            }}
          >
            Instructions
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper style={paperStyle}>
        <Typography
          variant={"h6"}
          aria-label={"Exercise Instructions"}
          tabIndex={"0"}
          paragraph={true}
          display={"block"}
          onFocus={(e) => textToSpeech(e, text)}
        >
          {text}
          <br />
        </Typography>
      </Paper>
      <Paper style={paperStyle}>
        <Typography display={"inline"} variant={"h5"} >
          Note:
        </Typography>
        <Typography
          variant={"h6"}
          aria-label={"Note:"}
          tabIndex={"0"}
          paragraph={true}
          display={"block"}
          onFocus={(e) => textToSpeech(e, `In the actual project we will show instructions on how to make the
          page more accessible to users. Participants will also be lead through
          the activity of repairing the code.`)}
        >
          In the actual project we will show instructions on how to make the
          page more accessible to users. Participants will also be lead through
          the activity of repairing the code.
        </Typography>
      </Paper>
      <Button
        href="#"
        onClick={handleSubmit}
        variant={"contained"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
      >
        Next
      </Button>
    </div>
  );
};

export default AccessibleInstructions;
