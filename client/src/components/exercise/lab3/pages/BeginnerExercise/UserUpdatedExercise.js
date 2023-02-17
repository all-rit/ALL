/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import CatClickNavigate from "../../helpers/CatClickNavigate";
import { navigate } from "@reach/router";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { PageService } from "../../../../../services/PageService";
import { EXERCISE_PLAYING, LAB_ID } from "../../../../../constants/lab3/index";

class UserUpdatedExercise extends Component {
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0, renderedButtons: [] };
    document.body.style = "background: black";
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  _renderSubComp(path) {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickNavigate path={path} />;
    }
  }
  componentDidMount() {
    const { actions, data } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );

    if (data.repair3.changesApplied) {
      actions.enableEnd(true);
    }
    this.setState({ renderedButtons: this.setupButtons() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleKeyDown(event) {
    console.log("detected key code is: " + event.keyCode);
    if (event.keyCode === 27) {
      console.log("Enter key pressed!");
      navigate("/Lab3/Exercise/AccessibleInstructions");
    }
  }

  onFocusGain(event, className) {
    console.log("focus gained");
    const element = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "red" };
    }
  }

  onFocusLoss(event, className) {
    console.log("focus lost");
    const element = document.getElementsByClassName(className);
    for (let i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "black" };
    }
  }

  shuffleArray(array) {
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
  }
  setupButtons() {
    const { data } = this.props;
    console.log("calling setup");
    const catClick = () => {
      console.log("Cat image clicked!");
      const name = data.repair3.changesApplied
        ? "UserUpdatedExercise"
        : "InaccessibleExercise";
      PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
      this.setState({ render: "CatClickNavigate" });
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
    if (data.repair3.changesApplied) {
      buttons = [
        <button
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, data.repair3.catAltValue)}
        />,
        <button
          style={imgStyle}
          onClick={() => burgerClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, data.repair3.burgerAltValue)}
        />,
        <button
          style={imgStyle}
          onClick={() => carClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, data.repair3.carAltValue)}
        />,
        <button
          style={imgStyle}
          onClick={() => cowClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, data.repair3.cowAltValue)}
        />,
      ];
    } else {
      buttons = [
        <button
          style={imgStyle}
          onClick={() => catClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, "Image 1")}
        />,
        <button
          style={imgStyle}
          onClick={() => burgerClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, "Image 2")}
        />,
        <button
          style={imgStyle}
          onClick={() => carClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, "Image 3")}
        />,
        <button
          style={imgStyle}
          onClick={() => cowClick()}
          tabIndex={"0"}
          onFocus={(e) => this.textToSpeech(e, "Image 4")}
        />,
      ];
    }
    const renderedButtons = buttons.map(function (button, index) {
      return (
        <td key={index} tabIndex={"1"}>
          {button}
        </td>
      );
    });

    return this.shuffleArray(renderedButtons);
  }

  textToSpeech = (e, text) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };
  render() {
    const { data } = this.props;
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
    };

    const textStyle = { color: "white", tabIndex: "0" };
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
                  aria-label={data.repair3.changesApplied
                    ? "Accessible Exercise"
                    : "Inaccessible Exercise"}
                  tabIndex={"0"}
                  onFocus={(e) => this.textToSpeech(e, data.repair3.changesApplied
                    ? "Accessible Exercise"
                    : "Inaccessible Exercise")}
                >
                  {data.repair3.changesApplied
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
            this.textToSpeech(
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
              {this.state.renderedButtons[0]}
              {this.state.renderedButtons[1]}
            </tr>
            <tr>
              {this.state.renderedButtons[2]}
              {this.state.renderedButtons[3]}
            </tr>
          </tbody>
        </table>
        {this._renderSubComp(
          data.repair3.changesApplied
            ? "/Lab3/Exercise/CodeChange"
            : "/Lab3/Exercise/AccessibleInstructions"
        )}
      </div>
    );
  }
}

export default UserUpdatedExercise;
