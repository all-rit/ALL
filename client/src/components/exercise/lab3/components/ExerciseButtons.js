/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, {Component, Fragment} from 'react';
import {navigate} from '@reach/router';

class ExerciseButtons extends Component {
  render() {
    const {openRepairHandler, endEnabled} = this.props;
    const startMessage = 'Play';
    const repairButton = (
      <button
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onClick={openRepairHandler}
        key="repair"
      >
        Repair
      </button>
    );
    const startButton = (
      <button
        className="btn btn-primary btn-xl text-uppercase  rightButton"
        onClick={() => navigate('/Lab3/Exercise/UserUpdatedExercise')}
        key="start"
      >
        {startMessage}
      </button>
    );
    const endButton = (
      <button
        className="btn btn-success btn-xl text-uppercase  float-right"
        style={{marginRight: '15%'}}
        onClick={() => navigate('/Lab3/Exercise/BeginnerExerciseConclusion')}
        key="start"
      >
        End Activity
      </button>
    );

    const buttons = [];
    if (endEnabled) {
      buttons.push(endButton);
    }
    buttons.push(repairButton);
    buttons.push(startButton);

    return <Fragment>{buttons}</Fragment>;
  }
}

export default ExerciseButtons;
