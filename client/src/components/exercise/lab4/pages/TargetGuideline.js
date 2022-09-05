import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";
import { EXERCISE_PLAYING } from "../../../../constants/lab4";

class TargetGuideline extends Component {
  handleSubmit() {
    navigate("/Lab4/Exercise/CodeChangeTarget");
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  render() {
    const buttonStyle = { marginRight: "10px", marginLeft: "10px" };
    return (
      <Fragment>
        <div>
          <h2 className="playthrough__title">Was That Difficult?</h2>
          <p className="playthrough__sentence">
            People with mobile dexterity disabilities have a hard time clicking
            small buttons. To make sure your software is accessible by everyone,
            ensure that buttons follow the{" "}
            <a
              href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              WGAC 2.55 Target Guideline
            </a>
            . Buttons must be a minimum of 44 x 44 px. Go ahead and make the
            changes to the code by clicking “continue”.
          </p>

          <Button
            // component={Link}
            href="#"
            onClick={this.handleSubmit}
            variant={"contained"}
            color={"primary"}
            style={buttonStyle}
          >
            Continue
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default TargetGuideline;
