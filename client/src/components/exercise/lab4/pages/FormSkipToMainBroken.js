/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component, Fragment } from "react";
import AppInstructions from "../components/AppInstructions";
import ExtraNav from "../components/ExtraNav";
import FormComp from "../components/FormComp";
import { EXERCISE_PLAYING } from "../../../../constants/lab4";

class FormSkipToMainBroken extends Component {
  constructor(props) {
    super(props);
    this.btn = React.createRef();
  }

  state = { class: "app__instructions2" };

  callbackFunction = (childData) => {
    this.setState({ class: "app__instructions3" });
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  render() {
    const instructions =
      "Complete the form below. Use tab to go next, and shift+tab to go back.";
    const instructions2 = "Do not use the mouse!";
    const url = "/Lab4/Exercise/BypassBlocksGuideline";
    const name = "FormSkipToMainBroken";
    return (
      <Fragment>
        <ExtraNav />
        <AppInstructions
          className={this.state.class}
          instructions2={instructions2}
          instructions={instructions}
        />
        <FormComp
          url={url}
          parentCallback={this.callbackFunction}
          name={name}
        />
      </Fragment>
    );
  }
}

export default FormSkipToMainBroken;
