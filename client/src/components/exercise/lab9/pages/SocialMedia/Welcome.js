import React, { Component } from "react";
import Logo from "../../../../../assets/images/Lab9/welcomeToPawPrint.png";
import { navigate } from "@reach/router";
import { Button } from "reactstrap";
class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  handleStart() {
    navigate("/Lab9/Exercise/Profile");
  }

  render() {
    return (
      <div className={"tw-flex tw-flex-col"}>
        <img src={Logo} alt="welcome logo" className="tw-rounded-2xl" />
        <span className="tw-w-full tw-h-20 tw-justify-items-center tw-bg-blue-400">
          <Button
            className="btn btn-primary text-black btn-xl text-uppercase tw-rounded-3xl"
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
