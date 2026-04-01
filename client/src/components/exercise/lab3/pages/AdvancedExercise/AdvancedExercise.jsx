/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_PLAYING } from '../../../../../constants/lab3/index';

class AdvancedExercise extends Component {
  handleSubmit() {
    navigate('/Lab3/Exercise/AdvancedInstructions');
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }
  render() {
    return (
      <div className={'tw-p-10'}>
        <h2 className={'tw-title tw-text-left'}>Advanced Exercise</h2>
        <br />
        <p
          className={'tw-body-text tw-font-medium tw-text-left'}
          aria-label={'instructions'}
        >
          The learning objective of this lab is for students to learn and apply
          the Understandable accessibility principle. The exercise consists of
          performing some tasks. Click Start exercise to begin!
        </p>
        <br />
        <button
          onClick={this.handleSubmit}
          aria-label={'Start Exercise'}
          className={
            'btn btn-xl tw-shadow-md tw-bg-secondary-gray tw-mx-2 hover:tw-bg-primary-yellow hover:tw-shadow-lg'
          }
        >
          Start Exercise
        </button>
      </div>
    );
  }
}

export default AdvancedExercise;
