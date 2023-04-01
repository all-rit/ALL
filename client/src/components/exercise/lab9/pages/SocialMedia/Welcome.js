import React, { Component } from "react";
/* eslint-disable react/prop-types */

import Logo from "../../../../../assets/images/lab9/welcomeToPawPrint.png";

import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import "../../../../../assets/stylesheets/components/WelcomeToPawPrint.scss";
import { EXERCISE_PLAYING } from "../../../../../constants/lab9";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  handleStart() {
    navigate("/Lab9/Exercise/Profile");
  }

  render() {
    return (
      <div className={"tw-flex tw-flex-col tw-items-center"}>
        <img
          src={Logo}
          alt="welcome logo"
          className="tw-mb-10 paw-print-logo"
        />
        <span className="tw-w-full tw-h-20 tw-justify-items-center">
          <Button
            className="view-profile-btn"
            onClick={this.handleStart}
            key="start"
          >
            View Profile
          </Button>
        </span>
      </div>
    );
  }
}

export default Welcome;
