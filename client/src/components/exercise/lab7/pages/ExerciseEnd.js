import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import {LAB_ID} from "../../../../constants/lab5";
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
      return (null);
  }
}

export default ExerciseEnd;