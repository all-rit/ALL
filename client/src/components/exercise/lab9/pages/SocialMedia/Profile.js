import React, { Component } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintProfile.scss";
import profilepic from "../../../../../assets/images/lab9/profilepic.png";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  handleNavigate() {
    navigate("/Lab9/Exercise/Feed");
  }

  render() {
    return (
      <div>
        <div className="profile-div">
          <div className="smaller-profile-div">
            <span className="inside-profile">
              <img
                src={profilepic}
                alt="welcome logo"
                className="profile-pic tw-rounded-3xl"
              />
              <div className="profile-info guidance">
                <h1 className="tw-font-bold tw">User Profile</h1>
                <p className="tw-font-semibold tw-mt-2 tw-text-xl">
                  You are from this point “User 812”. You are someone who has
                  grown up on a farm, and has a diverse selection of animals
                  that you continuously post about.
                </p>
              </div>
            </span>
          </div>
        </div>
        <div className="tw-mt-10">
          <span className="tw-w-full tw-h-20 tw-justify-items-center">
            <Button
              className="view-profile-btn"
              onClick={this.handleNavigate}
              key="start"
            >
              View Feed
            </Button>
          </span>
        </div>
      </div>
    );
  }
}
export default Profile;
