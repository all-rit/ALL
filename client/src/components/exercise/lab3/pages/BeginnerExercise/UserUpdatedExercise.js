import React, { useState, useEffect } from "react";
import CatClickNavigate from "../../helpers/CatClickNavigate";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { PageService } from "../../../../../services/PageService";
import { LAB_ID } from "../../../../../constants/lab3/index";
import { EXERCISE_PLAYING } from "src/constants/index";
import useLab3StateContext from "src/reducers/lab3/Lab3Context";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Represents a component for the User Updated Exercise.
 * @returns {JSX.Element} The User Updated Exercise component.
 */
const UserUpdatedExercise = () => {
  const { actions: mainActions } = useMainStateContext();
  const { state, actions } = useLab3StateContext();
  const [render, setRender] = useState("");
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [renderedButtons, setRenderedButtons] = useState([]);
  const tableStyle = {
    border: "1px solid black",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  };

  const textStyle = { color: "white", tabIndex: "0" };

  /**
   * Handles the event when focus is gained on an element.
   * @param {Event} event - The event object.
   * @param {string} id - The ID of the element.
   */
  const onFocusGain = (event, id) => {
    console.log("focus gained");
    const element = document.getElementById(id);
    for (let i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "red" };
    }
  };

  /**
   * Handles the event when the focus is lost from an input element.
   * @param {Event} event - The event object.
   * @param {string} id - The id of the input element.
   */
  const onFocusLoss = (event, id) => {
    console.log("focus lost");
    const element = document.getElementById(id);
    for (let i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "black" };
    }
  };

  useEffect(() => {
    document.body.style = "background: black";
    mainActions.updateUserState(EXERCISE_PLAYING);
    const interval = setInterval(() => {
      setSecondsElapsed(secondsElapsed + 1);
    }, 1000);

    if (state.changesApplied) {
      actions.enableEnd(true);
    }
    setRenderedButtons(setupButtons());

    return () => {
      clearInterval(interval);
    };
  }, []);

  /**
   * Shuffles the elements of an array in place.
   * @param {Array} array - The array to be shuffled.
   * @returns {Array} - The shuffled array.
   */
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  /**
   * Sets up the buttons for the exercise.
   * @returns {Array} The shuffled array of rendered buttons.
   */
  const setupButtons = () => {
    console.log("calling setup");
    const catClick = () => {
      console.log("Cat image clicked!");
      const name = state.changesApplied
        ? "UserUpdatedExercise"
        : "InaccessibleExercise";
      PageService.createPage(name, secondsElapsed, LAB_ID);
      setRender("CatClickNavigate");
    };
    const burgerClick = () => {
      console.log("Burger image clicked!");
    };
    const carClick = () => {
      console.log("Car image clicked!");
    };
    const cowClick = () => {
      console.log("Cow image clicked!");
    };
    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      backgroundColor: "black",
    };
    let buttons = [];
    if (state.changesApplied) {
      buttons = [
        <button
          key="cat"
          id="cat"
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, state.catAltValue);
            onFocusGain(e, "cat");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "cat");
          }}
        />,
        <button
          key="burger"
          id="burger"
          style={imgStyle}
          onClick={() => burgerClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, state.burgerAltValue);
            onFocusGain(e, "burger");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "burger");
          }}
        />,
        <button
          key="car"
          id="car"
          style={imgStyle}
          onClick={() => carClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, state.carAltValue);
            onFocusGain(e, "car");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "car");
          }}
        />,
        <button
          key="cow"
          id="cow"
          style={imgStyle}
          onClick={() => cowClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, state.cowAltValue);
            onFocusGain(e, "cow");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "cow");
          }}
        />,
      ];
    } else {
      buttons = [
        <button
          key="cat"
          id="cat"
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, "Image 1");
            onFocusGain(e, "cat");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "cat");
          }}
        />,
        <button
          key="burger"
          id="burger"
          style={imgStyle}
          onClick={() => burgerClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, "Image 2");
            onFocusGain(e, "burger");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "burger");
          }}
        />,
        <button
          key="car"
          id="car"
          style={imgStyle}
          onClick={() => carClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, "Image 3");
            onFocusGain(e, "car");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "car");
          }}
        />,
        <button
          key="cow"
          id="cow"
          style={imgStyle}
          onClick={() => cowClick()}
          tabIndex={"0"}
          onFocus={(e) => {
            textToSpeech(e, "Image 4");
            onFocusGain(e, "cow");
          }}
          onBlur={(e) => {
            onFocusLoss(e, "cow");
          }}
        />,
      ];
    }
    /**
     * Renders an array of buttons as table cells.
     *
     * @param {Array} buttons - The array of buttons to render.
     * @returns {Array} - An array of table cells containing the buttons.
     */
    const renderedButtons = buttons.map(function (button, index) {
      return (
        <td key={index} tabIndex={"1"}>
          {button}
        </td>
      );
    });

    return shuffleArray(renderedButtons);
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
   * Renders a subcomponent based on the value of the 'render' variable.
   * @param {string} path - The path to be passed to the subcomponent.
   * @returns {React.Component} - The rendered subcomponent.
   */
  const _renderSubComp = (path) => {
    if (render === "CatClickNavigate") {
      return <CatClickNavigate path={path} />;
    }
  };

  return (
    <div>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Grid
            justify="center"
            container
            spacing={10}
            aria-label={"Page Title Grid"}
          >
            <Grid item>
              <Typography
                variant={"h4"}
                color={"white"}
                aria-label={
                  state.changesApplied
                    ? "Accessible Exercise"
                    : "Inaccessible Exercise"
                }
                tabIndex={"0"}
                onFocus={(e) =>
                  textToSpeech(
                    e,
                    state.changesApplied
                      ? "Accessible Exercise"
                      : "Inaccessible Exercise"
                  )
                }
              >
                {state.changesApplied
                  ? "Accessible Exercise"
                  : "Inaccessible Exercise"}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography
        variant={"h6"}
        style={textStyle}
        tabIndex={"0"}
        onFocus={(e) =>
          textToSpeech(
            e,
            "Click on the image of a cat. You can use the keyboard to navigate by tabbing across the page. Press the enter key to select."
          )
        }
      >
        Click on the image of a cat. You can use the keyboard to navigate by
        tabbing across the page. Press the enter key to select.
      </Typography>
      <table style={tableStyle} tabIndex={"0"}>
        <tbody>
          <tr>
            {renderedButtons[0]}
            {renderedButtons[1]}
          </tr>
          <tr>
            {renderedButtons[2]}
            {renderedButtons[3]}
          </tr>
        </tbody>
      </table>
      {_renderSubComp(
        state.changesApplied
          ? "/Lab3/Exercise/CodeChange"
          : "/Lab3/Exercise/AccessibleInstructions"
      )}
    </div>
  );
};

export default UserUpdatedExercise;
