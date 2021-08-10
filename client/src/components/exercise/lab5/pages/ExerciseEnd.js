import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import {LAB_ID} from "../../../../constants/lab5";
import {Forum, EmojiObjects, Timer} from "@material-ui/icons";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab5/Exercise/ExerciseStart");
  }

  componentDidMount(){
    const {user}=this.props;
    UserLabService.complete_exercise(LAB_ID);
    if(user?.firstname !== null && user!==null){
      UserLabService.user_complete_exercise(user.userid,LAB_ID)
    }
  }
  render() {
    // const { user, state, plays } = this.props;
    return (
      
      <Fragment>
        <div className="center-div">
          <div className="cognitive_instructions">
            <h4 className="margin-bottom">
              Congratulations! You've finished the Cognitive Learning Module.
            </h4>
            <h4 className="margin-bottom">Here are some key takeaways:</h4>
            <div className="flex-boxes">
            <div>
              <div className="icon">
                <EmojiObjects fontSize="large"/>
              </div>
                Use proper headings and subheadings to reduce cognitive load
            </div>
            <div>
              <div className="icon">
                <Timer fontSize="large"/>
              </div>
                Allow users to have enough time to read
            </div>
            <div>
              <div className="icon">
                <Forum fontSize="large"/>
              </div>
                Provide clear descriptive feedback on forms
            </div>
            </div>
          </div>
          <button
              className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
              onClick = {this.handleHome}
              key="start"
          >
            Home
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseEnd;
