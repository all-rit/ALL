import React, { Component } from "react";
import '../../../../../../src/assets/stylesheets/components/PawPrintProfile.scss'
import profilepic from "../../../../../assets/images/Lab9/profilepic.png";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="profile-div">
        <div className="smaller-profile-div">
          <span className="smaller-profile-div">
              <img src={profilepic} alt="welcome logo" className="tw-rounded-2xl"/>
              <p className="profile-info guidance">
                You are from this point “User 812”. You are someone who has grown up on a farm,
                and has a diverse selection of animals that you continuously post about.
              </p>
          </span>
        </div>
      </div>
    )
  }
}
export default Profile;
