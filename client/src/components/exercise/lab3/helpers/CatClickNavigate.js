/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { navigate } from "@reach/router";
import Typography from "@mui/material/Typography";

class CatClickNavigate extends Component {
  constructor(props) {
    super(props);
    const { path } = this.props;
    CatClickNavigate.handleOnclick = CatClickNavigate.handleOnclick.bind(
      this,
      path,
    );
  }

  static handleOnclick(path) {
    navigate(path);
  }

  render() {
    const textToSpeech = (e, text) => {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    const typographyStyle = { color: "white" };

    return (
      <div id={"catClickMessage"}>
        <Typography
          variant={"h6"}
          aria-label={
            "Cat clicked! Please click the 'next' button to continue."
          }
          tabIndex={"0"}
          style={typographyStyle}
          onFocus={(e) =>
            textToSpeech(
              e,
              "Cat clicked! Please click the next button to continue.",
            )
          }
        >
          Cat clicked! Please click the 'next' button to continue.
        </Typography>
        <br />
        <Button
          component={Link}
          onClick={CatClickNavigate.handleOnclick}
          variant="contained"
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default CatClickNavigate;
