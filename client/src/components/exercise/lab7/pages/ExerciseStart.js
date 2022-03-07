import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_IDLE} from "../../../../constants/lab7";

class ExerciseStart extends Component {
    componentDidMount() {
      const {actions} = this.props;
      actions.updateState(EXERCISE_IDLE);
    }
  
    handleStart() {
      navigate("/Lab7/Exercise");
    }

    render() {
        return(
            <Fragment>
                
            </Fragment>
        );
    }
}

export default ExerciseStart;