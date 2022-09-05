import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../../constants/lab3/index";
import { PageService } from "../../../../../services/PageService";
class ViewFix extends Component {
  constructor(props) {
    super(props);
    ViewFix.navOnClick = ViewFix.navOnClick.bind(this);
    this.state = {
      aria1: "Ok button",
      aria2: "Cancel button",
      render: "",
      secondsElapsed: 0,
    };
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static navOnClick() {
    const name = "ViewFix";
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate("/Lab3/Exercise/ProblemFix");
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    if (window.location.state) {
      this.setState({
        aria1: window.location.state.aria1.replace(/<[^>]*>?/gm, ""),
        aria2: window.location.state.aria2.replace(/<[^>]*>?/gm, ""),
      });
    }
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );
  }

  render() {
    const textToSpeech = (e, text) => {
      let synth = window.speechSynthesis;
      synth.cancel();
      let utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  aria-label={"Title"}
                  gutterBottom
                  tabindex={"0"}
                  onFocus={(e) => textToSpeech(e, "Test Fix")}
                >
                  Test Repair
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"h6"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) => textToSpeech(e, "Is your page now more accessible?")}
        >
          Is your page now more accessible?
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) =>
            textToSpeech(
              e,
              "If you have updated the buttons with the appropriate " +
                "aria-labels then you have succeeded. They can now be effectively described by screenreaders."
            )
          }
        >
          If you have updated the buttons with the appropriate aria-labels then
          you have succeeded. They can now be effectively described by
          screenreaders.
        </Typography>
        <br />
        <Button
          variant={"text"}
          aria-label={this.state.aria1}
          onFocus={(e) => textToSpeech(e, this.state.aria1)}
        >
          Ok
        </Button>
        <Button
          variant={"text"}
          aria-label={this.state.aria2}
          onFocus={(e) => textToSpeech(e, this.state.aria2)}
        >
          Cancel
        </Button>
        <br />
        <br />
        <Button
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={ViewFix.navOnClick}
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default ViewFix;
