import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import {LAB_ID} from "../../../../constants/lab7";
import {Forum, EmojiObjects, Timer} from "@material-ui/icons";

class ExerciseEnd extends Component {
  handleHome() {
    navigate("/Lab7/Exercise/ExerciseStart");
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
              Congratulations! You've finished the AI Cybersecurity Module.
            </h4>
            <h4 className="margin-bottom">Here are some key takeaways:</h4>
            <div className="flex-boxes">
            <div>
              <div className="icon">
                <EmojiObjects fontSize="large"/>
              </div>
                A
            </div>
            <div>
              <div className="icon">
                <Timer fontSize="large"/>
              </div>
                B
            </div>
            <div>
              <div className="icon">
                <Forum fontSize="large"/>
              </div>
                C
            </div>
            </div>
          </div>
          <button
              className="btn btn-primary text-black btn-xl text-uppercase "
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
