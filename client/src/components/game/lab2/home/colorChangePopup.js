import React from "react";
import { PhotoshopPicker } from "react-color";
import { Dialog } from "@reach/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./popup.css";

/*
Class for the adjustment of the colors for the system
*/
class ColorChangePopup extends React.Component {
  //constructor that establishes the state of the system
  constructor(props) {
    super(props);
    this.state = {
      background: "",
      correctColor: "",
      incorrectColorOne: "",
      incorrectColorTwo: "",
      message: "",
      errorEqual: false,
      errorHex: false,
      errorLength: false,
      errorDarkBackground: false,
      backgroundPopup: false,
      correctColorPopup: false,
      incorrectColorOnePopup: false,
      incorrectColorTwoPopup: false,
      confirmPopup: false,
      numberChanged: 0,
      backgroundHelp: false,
      correctHelp: false,
      incorrectOneHelp: false,
      incorrectTwoHelp: false
    };
  }

  //Handles changes to the background color (updates state)
  onBackgroundChange = (color, event) => {
    this.setState({ background: color.hex });
  };

  //Handles the popup for changning the background color (updates state)
  onControlBackgroundPopup = event => {
    this.setState({ backgroundPopup: event });
  };

  //Handles changes to the correct circle color (updates state)
  onCorrectColorChange = (color, event) => {
    this.setState({ correctColor: color.hex });
  };

  //Handles the popup for changning the correct circle color (updates state)
  onControlCorrectPopup = event => {
    this.setState({ correctColorPopup: event });
  };

  //Handles changes to the first incorrect circle color (updates state)
  onIncorrectColorOne = (color, event) => {
    this.setState({ incorrectColorOne: color.hex });
  };

  //Handles the popup for changning the first incorrect circle color (updates state)
  onControlIncorrectPopupOne = event => {
    this.setState({ incorrectColorOnePopup: event });
  };

  //Handles changes to the second incorrect circle color (updates state)
  onIncorrectColorTwo = (color, event) => {
    this.setState({ incorrectColorTwo: color.hex });
  };

  //Handles the popup for changning second incorrect circle color (updates state)
  onControlIncorrectPopupTwo = event => {
    this.setState({ incorrectColorTwoPopup: event });
  };

  //Ensures none of the values entered are equal to one another
  ensureNotEqual = () => {
    const {
      background,
      correctColor,
      incorrectColorOne,
      incorrectColorTwo
    } = this.state;
    if (
      background.toUpperCase() !== correctColor.toUpperCase() &&
      background.toUpperCase() !== incorrectColorOne.toUpperCase() &&
      background.toUpperCase() !== incorrectColorTwo.toUpperCase()
    ) {
      if (
        correctColor.toUpperCase() !== incorrectColorOne.toUpperCase() &&
        correctColor.toUpperCase() !== incorrectColorTwo.toUpperCase()
      ) {
        if (
          incorrectColorOne.toUpperCase() !== incorrectColorTwo.toUpperCase()
        ) {
          return true;
        }
      }
    }
    return false;
  };

  checkAlert = () => {
    const {
      background,
      correctColor,
      incorrectColorOne,
      incorrectColorTwo
    } = this.state;
    let changed = 0;
    if (background !== this.props.colors[0]) {
      changed++;
    }
    if (correctColor !== this.props.colors[1]) {
      changed++;
    }
    if (incorrectColorOne !== this.props.colors[2]) {
      changed++;
    }
    if (incorrectColorTwo !== this.props.colors[3]) {
      changed++;
    }
    if (changed !== 4) {
      this.setState({ confirmPopup: true, numberChanged: changed });
      // return window.confirm(`You have only changed ${changed} of the four colors.
      //   Are you sure you would like to submit?`)
    } else {
      this.onFinalSubmit();
    }
  };

  //Ensures none of the colors entered are black to too close to black
  ensureNotBlack = () => {
    const {
      background,
      correctColor,
      incorrectColorOne,
      incorrectColorTwo
    } = this.state;
    var check = [
      background,
      correctColor,
      incorrectColorOne,
      incorrectColorTwo
    ];
    for (var i = 0; i < check.length; i++) {
      var color = check[i];
      color = color.slice(1, 8).toLowerCase();
      var total = 0;
      var conversion = [];
      for (var j = 0; j < color.length; j++) {
        if (48 <= color.charCodeAt(j) && color.charCodeAt(j) <= 57) {
          conversion.push(Number(color[j]));
        } else if (color.charCodeAt(j) === 97) {
          conversion.push(10);
        } else if (color.charCodeAt(j) === 98) {
          conversion.push(11);
        } else if (color.charCodeAt(j) === 99) {
          conversion.push(12);
        } else if (color.charCodeAt(j) === 100) {
          conversion.push(13);
        } else if (color.charCodeAt(j) === 101) {
          conversion.push(14);
        } else {
          conversion.push(15);
        }
      }
      var values = [];
      values.push((conversion[0] + conversion[1] / 16) * 16);
      values.push((conversion[2] + conversion[3] / 16) * 16);
      values.push((conversion[4] + conversion[5] / 16) * 16);
      total = values[0] + values[1] + values[2];
      if (total < 30) {
        return false;
      }
    }
    return true;
  };

  //Verifies the input by the user
  verifyInput = () => {
    if (!this.ensureNotEqual()) {
      this.setState({ errorEqual: true });
    } else if (!this.ensureNotBlack()) {
      this.setState({ errorDarkBackground: true });
    } else {
      this.checkAlert();
    }
  };

  onFinalSubmit = () => {
    let colors = [
      this.state.background,
      this.state.correctColor,
      this.state.incorrectColorOne,
      this.state.incorrectColorTwo
    ];
    this.props.changeDefaultColors(colors);
    this.props.changeGameColors(colors);
    this.props.closeColorChange();
  };

  //Submits the colors for the system
  onButtonSubmit = () => {
    this.setState({ errorLength: false });
    this.setState({ errorEqual: false });
    this.setState({ errorHex: false });
    this.setState({ errorDarkBackground: false });
    this.verifyInput();
  };

  //Renderer for the system
  render() {
    if (this.props.background !== "rgba(38,38,38,1)") {
      this.props.toGreyBackground();
    }

    const whiteColor = {
      color: "white",
      paddingLeft: "5px"
    };

    //Opens the background color change popup
    const changeBackground = () => {
      this.onControlBackgroundPopup(true);
    };

    //Closes the background color change popup
    const closeBackground = () => {
      this.onControlBackgroundPopup(false);
    };

    ///Revers the background color to the default color
    const revertBackground = () => {
      this.setState({ background: this.state.background });
      this.onControlBackgroundPopup(false);
    };

    //Opens the correct circle color change popup
    const changeCorrectColor = () => {
      this.onControlCorrectPopup(true);
    };

    //Closes the correct circle color change popup
    const closeCorrectColor = () => {
      this.onControlCorrectPopup(false);
    };

    ///Revers the correct circle color to the default color
    const revertCorrectColor = () => {
      this.setState({ correctColor: this.state.correctCircle });
      this.onControlCorrectPopup(false);
    };

    //Opens the first incorrect circle color change popup
    const changeIncorrectColorOne = () => {
      this.onControlIncorrectPopupOne(true);
    };

    //Closes the first incorrect color change popup
    const closeIncorrectColorOne = () => {
      this.onControlIncorrectPopupOne(false);
    };

    ///Revers the first incorrect circle color to the default color
    const revertIncorrectColorOne = () => {
      this.setState({ incorrectColorOne: this.state.incorrectColorOne });
      this.onControlIncorrectPopupOne(false);
    };

    //Opens the second incorrect circle color change popup
    const changeIncorrectColorTwo = () => {
      this.onControlIncorrectPopupTwo(true);
    };

    //Closes the second incorrect color change popup
    const closeIncorrectColorTwo = () => {
      this.onControlIncorrectPopupTwo(false);
    };

    ///Revers the second incorrect circle color to the default color
    const revertIncorrectColorTwo = () => {
      this.setState({ incorrectColorTwo: this.state.incorrectColorTwo });
      this.onControlIncorrectPopupTwo(false);
    };

    const openHelpBackgroundDialog = () => {
      this.setState({ backgroundHelp: true });
    };

    const openHelpCorrectColorDialog = () => {
      this.setState({ correctHelp: true });
    };

    const openHelpIncorrectColorOneDialog = () => {
      this.setState({ incorrectOneHelp: true });
    };

    const openHelpIncorrectColorTwoDialog = () => {
      this.setState({ incorrectTwoHelp: true });
    };

    if (this.state.background === "") {
      this.setState({
        background: this.props.colors[0],
        correctColor: this.props.colors[1],
        incorrectColorOne: this.props.colors[2],
        incorrectColorTwo: this.props.colors[3]
      });
    }

    return (
      <div>
        <div>
          {this.state.confirmPopup ? (
            <Dialog>
              <p className="center fourthTitle">
                You've changed {this.state.numberChanged} out of the 4 colors.
                Are you sure you would like to submit?
              </p>
              <div className="center">
                <button
                  onClick={() => this.onFinalSubmit()}
                  className="buttonPopup"
                >
                  Yes
                </button>
                <button
                  onClick={() => this.setState({ confirmPopup: false })}
                  className="buttonPopup"
                >
                  No
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.errorEqual ? (
            <Dialog>
              <p className="fourthTitle center">
                Two of your entered colors are equal to one another. Please make
                adjustments and submit again.
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ errorEqual: false })}
                  className="buttonPopup"
                >
                  Make changes
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.errorDarkBackground ? (
            <Dialog>
              <p className="fourthTitle center">
                One or more of the colors you entered are too dark. Please make
                adjustments and submit again.
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ errorDarkBackground: false })}
                  className="buttonPopup"
                >
                  Make changes
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.backgroundHelp ? (
            <Dialog>
              <p className="mainInstructionsItem">
                Tips for completing the activity:
              </p>
              <p className="mainInstructionsItem">
                This line changes the color of the background of the screen.
              </p>
              <p className="mainInstructionsItem">
                Click on the colored box and move the color to anything you
                want!
              </p>
              <p className="mainInstructionsItem">
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Suggestion:
                </span>
                Make this color very light so the other circles can be darker to
                fit within the color contrast standards
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ backgroundHelp: false })}
                  className="buttonPopup"
                >
                  Close Help
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.correctHelp ? (
            <Dialog>
              <p className="mainInstructionsItem">
                Tips for completing the activity:
              </p>
              <p className="mainInstructionsItem">
                This line changes the color of the circle you are supposed to
                click.
              </p>
              <p className="mainInstructionsItem">
                Click on the colored box and move the color to anything that
                follows the proper 7:1 color contrast ratio.
              </p>
              <p className="mainInstructionsItem">
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Suggestion:
                </span>
                If you made the background a light color, make this a dark
                color.
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ correctHelp: false })}
                  className="buttonPopup"
                >
                  Close Help
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.incorrectOneHelp ? (
            <Dialog>
              <p className="mainInstructionsItem">
                Tips for completing the activity:
              </p>
              <p className="mainInstructionsItem">
                This line changes the color of one the circles you are not
                supposed to click.
              </p>
              <p className="mainInstructionsItem">
                Click on the colored box and move the color to anything that
                follows the proper 7:1 color contrast ratio.
              </p>
              <p className="mainInstructionsItem">
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Suggestion:
                </span>
                If you made the background a light color, make this a dark
                color.
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ incorrectOneHelp: false })}
                  className="buttonPopup"
                >
                  Close Help
                </button>
              </div>
            </Dialog>
          ) : null}
          {this.state.incorrectTwoHelp ? (
            <Dialog>
              <p className="mainInstructionsItem">
                Tips for completing the activity:
              </p>
              <p className="mainInstructionsItem">
                This line changes the color of one the circles you are not
                supposed to click.
              </p>
              <p className="mainInstructionsItem">
                Click on the colored box and move the color to anything that
                follows the proper 7:1 color contrast ratio.
              </p>
              <p className="mainInstructionsItem">
                <span style={{ fontWeight: "bold", marginRight: "5px" }}>
                  Suggestion:
                </span>
                If you made the background a light color, make this a dark
                color.
              </p>
              <div className="center">
                <button
                  onClick={() => this.setState({ incorrectTwoHelp: false })}
                  className="buttonPopup"
                >
                  Close Help
                </button>
              </div>
            </Dialog>
          ) : null}
          <div className="mainColor tab">
            <pre className="code">
              <code>
                <p
                  className="boarder"
                  style={{ width: "90%", marginLeft: "12px" }}
                >
                  .home &#123;
                </p>
                <div className="inlineForm">
                  <code>
                    <p className="tab boarder" style={{ marginLeft: "12px" }}>
                      background:
                    </p>
                    {this.state.backgroundPopup ? (
                      <div className="colorSelector">
                        <PhotoshopPicker
                          onChangeComplete={this.onBackgroundChange}
                          onAccept={closeBackground}
                          onCancel={revertBackground}
                          color={this.state.background}
                        />
                      </div>
                    ) : (
                      <button
                        onClick={changeBackground}
                        style={{ backgroundColor: this.state.background }}
                        className="form"
                      ></button>
                    )}
                    <p className="popupArrow">&#8690;</p>
                    <p className="boarder">
                      ; &#47;&#47;Adjust this to change the background of the
                      page
                    </p>
                    <FontAwesomeIcon
                      icon="question-circle"
                      size={"1x"}
                      style={{ marginTop: "5px", marginLeft: "5px" }}
                      onClick={() => openHelpBackgroundDialog()}
                    />
                  </code>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <code style={{ width: "90%" }}>
                    <p className="boarder" style={{ marginLeft: "12px" }}>
                      {" "}
                      &#125;
                    </p>
                  </code>
                  <code>
                    <p className="boarder" style={{ marginLeft: "12px" }}>
                      .correctCircle &#123;
                    </p>
                  </code>
                </div>
                <div className="inlineForm">
                  <code>
                    <p className="tab boarder" style={{ marginLeft: "12px" }}>
                      color:
                    </p>
                    {this.state.correctColorPopup ? (
                      <div className="colorSelector">
                        <PhotoshopPicker
                          onChangeComplete={this.onCorrectColorChange}
                          onAccept={closeCorrectColor}
                          onCancel={revertCorrectColor}
                          color={this.state.correctColor}
                        />
                      </div>
                    ) : (
                      <button
                        onClick={changeCorrectColor}
                        style={{ backgroundColor: this.state.correctColor }}
                        className="form"
                      ></button>
                    )}
                    <p className="popupArrow">&#8690;</p>
                    <p className="boarder">
                      ; &#47;&#47;Adjust this to change the correct color option
                    </p>
                    <FontAwesomeIcon
                      icon="question-circle"
                      size={"1x"}
                      style={{ marginTop: "5px", marginLeft: "5px" }}
                      onClick={() => openHelpCorrectColorDialog()}
                    />
                  </code>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <code style={{ width: "100%" }}>
                    <p className="boarder" style={{ marginLeft: "12px" }}>
                      &#125;
                    </p>
                  </code>
                  <code>
                    <p className="boarder" style={{ marginLeft: "12px" }}>
                      .incorrectCircleOne &#123;
                    </p>
                  </code>
                </div>
                <div className="inlineForm">
                  <code>
                    <p className="tab boarder" style={{ marginLeft: "12px" }}>
                      color:
                    </p>
                    {this.state.incorrectColorOnePopup ? (
                      <div className="colorSelector">
                        <PhotoshopPicker
                          onChangeComplete={this.onIncorrectColorOne}
                          onAccept={closeIncorrectColorOne}
                          onCancel={revertIncorrectColorOne}
                          color={this.state.incorrectColorOne}
                        />
                      </div>
                    ) : (
                      <button
                        onClick={changeIncorrectColorOne}
                        style={{
                          backgroundColor: this.state.incorrectColorOne
                        }}
                        className="form"
                      ></button>
                    )}
                    <p className="popupArrow">&#8690;</p>
                    <p className="boarder">
                      ; &#47;&#47;Adjust this to change the first incorrect
                      color option
                    </p>
                    <FontAwesomeIcon
                      icon="question-circle"
                      size={"1x"}
                      style={{ marginTop: "5px", marginLeft: "5px" }}
                      onClick={() => openHelpIncorrectColorOneDialog()}
                    />
                  </code>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <code style={{ width: "100%" }}>
                    <p className="boarder" style={{ marginLeft: "10px" }}>
                      {" "}
                      &#125;
                    </p>
                  </code>
                  <code>
                    <p className="boarder">.incorrectCircleTwo &#123;</p>
                  </code>
                </div>
                <div className="inlineForm">
                  <code>
                    <p className="tab boarder">color: </p>
                    {this.state.incorrectColorTwoPopup ? (
                      <div className="colorSelector">
                        <PhotoshopPicker
                          onChangeComplete={this.onIncorrectColorTwo}
                          onAccept={closeIncorrectColorTwo}
                          onCancel={revertIncorrectColorTwo}
                          color={this.state.incorrectColorTwo}
                        />
                      </div>
                    ) : (
                      <button
                        onClick={changeIncorrectColorTwo}
                        style={{
                          backgroundColor: this.state.incorrectColorTwo
                        }}
                        className="form"
                      ></button>
                    )}
                    <p className="popupArrow">&#8690;</p>
                    <p className="boarder">
                      ; &#47;&#47;Adjust this to change the other incorrect
                      color option
                    </p>
                    <FontAwesomeIcon
                      icon="question-circle"
                      size={"1x"}
                      style={{ marginTop: "5px", marginLeft: "5px" }}
                      onClick={() => openHelpIncorrectColorTwoDialog()}
                    />
                  </code>
                </div>

                <code style={{ width: "100%" }}>
                  <p className="boarder"> &#125;</p>
                </code>
                <code style={{ width: "100%" }}>
                  <p className="boarder"> .center &#123;</p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="tab boarder inlineForm">
                    display: <span style={whiteColor}> flex; </span>
                  </p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="tab boarder inlineForm">
                    <span style={whiteColor}>justify-</span>content: center;
                  </p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="boarder"> &#125;</p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="boarder"> .header &#123;</p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="tab boarder inlineForm"> font-size: 30px;</p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="tab boarder inlineForm">
                    display: <span style={whiteColor}> flex; </span>
                  </p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="tab boarder inlineForm">
                    <span style={whiteColor}>justify-</span>content: center;
                  </p>
                </code>
                <code style={{ width: "100%", flexWrap: "nowrap" }}>
                  <p className="boarder"> &#125;</p>
                </code>
              </code>
            </pre>
          </div>
          <button
            type="submit"
            name="submitButton"
            className="submitColorPopup"
            onClick={this.onButtonSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default ColorChangePopup;
