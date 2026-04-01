/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

class ExerciseButtons extends Component {
  render() {
    const { openRepairHandler, endEnabled } = this.props;
    const startMessage = 'Play';
    const repairButton = (
      <button
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
        onClick={openRepairHandler}
        key="repair"
      >
        Repair
      </button>
    );
    const startButton = (
      <button
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
        onClick={() => navigate('/Lab3/Exercise/UserUpdatedExercise')}
        key="start"
        disabled={this.props.disabled}
      >
        {startMessage}
      </button>
    );
    const endButton = (
      <button
        className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
        onClick={() => navigate('/Lab3/Exercise/BeginnerExerciseConclusion')}
        key="start"
        disabled={this.props.disabled}
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
