/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_IDLE } from '../../../../constants/lab5';

class ExerciseStart extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_IDLE);
  }

  handleStart() {
    navigate('/Lab5/Exercise/DyslexiaAccessible');
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      <div className="tw-p-6">
        <h2 className={'tw-title tw-text-left tw-my-6'}> Exercise Start </h2>
        <div className="tw-body-text tw-text-left tw-my-6">
          We will explore a series of cognitive antipatterns that especially
          challenge cognitively impaired individuals. After each antipattern we
          will learn and correct our code to make it more accessible. Finally,
          we will view the updated experience. Click "Start" to begin!
        </div>
        <button
          className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
          onClick={this.handleStart}
          key="start"
        >
          Start
        </button>
      </div>
    );
  }
}

export default ExerciseStart;
