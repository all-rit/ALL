import React, { useState, useEffect } from "react";
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
import { LAB_ID } from "../../../../../constants/lab3/index";
import { PageService } from "../../../../../services/PageService";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Renders the ProblemDiscovery component.
 * This component allows users to discover accessibility issues on a page.
 * It includes instructions, images, and buttons for interaction.
 */
const ProblemDiscovery = () => {
  const { actions } = useMainStateContext();
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    actions.updateUserState("EXERCISE_PLAYING");
    const interval = setInterval(() => {
      setSecondsElapsed((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /**
   * Handles the form submission for the ProblemDiscovery component.
   * Creates a new page using PageService.createPage() with the given name, secondsElapsed, and LAB_ID.
   * Navigates to the "/Lab3/Exercise/ProblemDiscoveryFixedExperience" route.
   */
  const handleSubmit = () => {
    const name = "ProblemDiscovery";
    PageService.createPage(name, secondsElapsed, LAB_ID);
    navigate("/Lab3/Exercise/ProblemDiscoveryFixedExperience");
  };

  /**
   * Converts text to speech using the Web Speech API.
   * @param {Event} e - The event object.
   * @param {string} text - The text to be converted to speech.
   */
  const textToSpeech = (e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };

  /**
   * Style object for the image.
   *
   * @type {Object}
   */
  const imgStyle = {
    width: "128px",
    height: "128px",
    border: "1px solid black",
    tabIndex: "0",
    backgroundColor: "#EFEFEF",
    verticalAlign: "middle",
    padding: "5px",
  };

  /**
   * Style object for the table.
   * @type {Object}
   */
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
                gutterBottom
                tabIndex={"0"}
                onFocus={(e) => textToSpeech(e, "Discover the problem")}
              >
                Discover the Problem
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
        tabIndex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "Can you find the accessibility issues with this page? Try using your screenreader."
          )
        }
      >
        Can you find the accessibility issues with this page? Try using your
        screenreader.
      </Typography>
      <br />
      <Typography
        variant={"body1"}
        aria-label={"Body Instructions"}
        gutterBottom
        tabIndex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "Write down the problems on a notepad or any other text editor. Go ahead take a guess. Don't actually click on the Ok and Cancel buttons. They are there for the example."
          )
        }
      >
        Write down the problems on a notepad or any other text editor. Go ahead
        take a guess. Don&apos;t actually click on the Ok and Cancel buttons.
        They are there for the example.
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
                onFocus={(e) => textToSpeech(e, "image of cat")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                style={imgStyle}
                type={"image"}
                src={carImage}
                alt={"image of car"}
                tabIndex={"0"}
                onFocus={(e) => textToSpeech(e, "image of car")}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                style={imgStyle}
                type={"image"}
                src={burgerImage}
                alt={"image of burger"}
                tabIndex={"0"}
                onFocus={(e) => textToSpeech(e, "image of burger")}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Button variant={"text"} onFocus={(e) => textToSpeech(e, "ok button")}>
        Ok
      </Button>
      <Button
        variant={"text"}
        onFocus={(e) => textToSpeech(e, "cancel button")}
      >
        Cancel
      </Button>
      <br />
      <Button
        href="#"
        onClick={handleSubmit}
        variant={"contained"}
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onFocus={(e) => textToSpeech(e, "Next")}
      >
        Next
      </Button>
    </div>
  );
};

export default ProblemDiscovery;
