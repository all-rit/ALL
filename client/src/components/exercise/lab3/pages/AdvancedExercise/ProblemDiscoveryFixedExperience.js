import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// link to image: https://pixabay.com/vectors/cat-pet-animal-kitty-kitten-cute-6484941/
// license: https://pixabay.com/service/license/
import catImage from "../../../../../assets/images/lab3/exercise/cat.svg";
// link to image: https://pixabay.com/vectors/taxi-cab-car-vehicle-47204/
// license: https://pixabay.com/service/license/
import carImage from "../../../../../assets/images/lab3/exercise/car.svg";
// link to image: https://pixabay.com/vectors/hamburger-cheeseburger-fast-food-31775/
// license: https://pixabay.com/service/license/
import burgerImage from "../../../../../assets/images/lab3/exercise/hamburger.svg";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../../constants/lab3/index";
import { PageService } from "../../../../../services/PageService";

class ProblemDiscoveryFixedExperience extends Component {
  handleSubmit() {
    const name = "ProblemDiscoveryFixed";
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate("/Lab3/Exercise/ProblemExplanation");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );
  }
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const textToSpeech = (e, text) => {
      let synth = window.speechSynthesis;
      synth.cancel();
      let utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };

    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      tabIndex: "0",
      backgroundColor: "#EFEFEF",
      verticalAlign: "middle",
      padding: "5px",
    };

    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      marginBottom: "1rem",
    };

    return (
      <div>
        <AppBar position="static" className="appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  aria-label={"Discover the problem"}
                  tabIndex={"0"}
                  gutterBottom
                  onFocus={(e) =>
                    textToSpeech(e, "Repaired version of previous page.")
                  }
                >
                  Repaired Version of Previous Page
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"subtitle1"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
          tabindex={"0"}
          onFocus={(e) =>
            textToSpeech(
              e,
              "The accessibility issues have been repaired here. All images say what their contents are as such like 'cat', 'burger' and 'car' etc. and not 'image of cat', 'image of burger', 'image of car' etc. . Try using your screenreader now."
            )
          }
        >
          The accessibility issues have been repaired here. All images say what
          their contents are as such like 'cat', 'burger' and 'car' etc. and not
          'image of cat', 'image of burger', 'image of car' etc. . Try using
          your screenreader now.
        </Typography>
        <br />
        <table style={tableStyle} className={"center"}>
          <tbody>
            <tr>
              <td>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={catImage}
                  alt={"cat"}
                  tabIndex={"0"}
                  onFocus={(e) => textToSpeech(e, "cat")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={carImage}
                  alt={"car"}
                  tabIndex={"0"}
                  onFocus={(e) => textToSpeech(e, "car")}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={burgerImage}
                  alt={"burger"}
                  tabIndex={"0"}
                  onFocus={(e) => textToSpeech(e, "burger")}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          variant={"text"}
          aria-label={"Ok"}
          onFocus={(e) => textToSpeech(e, "ok")}
        >
          Ok
        </Button>
        <Button
          variant={"text"}
          aria-label={"Cancel"}
          onFocus={(e) => textToSpeech(e, "cancel")}
        >
          Cancel
        </Button>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit.bind(this)}
          variant={"contained"}
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onFocus={(e) => textToSpeech(e, "Next")}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default ProblemDiscoveryFixedExperience;
