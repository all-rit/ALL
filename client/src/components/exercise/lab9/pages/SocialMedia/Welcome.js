import React, { Component } from "react";
import Logo from "../../../../../assets/images/Lab9/welcomeToPawPrint.png";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
import "../../../../../assets/stylesheets/components/WelcomeToPawPrint.scss";
class Welcome extends Component {
  constructor(props) {
    super(props);
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
