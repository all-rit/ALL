/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { EXERCISE_IDLE, LAB_ID } from '../../../../../constants/lab3/index';
import UserLabService from '../../../../../services/UserLabService';
class AdvancedExerciseConclusion extends Component {
  handleSubmit() {
    navigate('/Lab3/Exercise');
  }
  componentDidMount() {
    const { actions, user } = this.props;
    actions.updateState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  }
  render() {
    return (
      <div className={'tw-p-6'}>
        <h2 className="tw-title tw-text-left">Advanced Exercise Complete</h2>
        <br />
        <p className={'tw-body-text tw-font-medium tw-text-left'}>
          Congratulations! You have successfully completed the Screen Readers
          Exercise!
        </p>
        <br />
        <p className={'tw-body-text tw-font-medium tw-text-left'}>
          Click the <strong> Return to Exercise Start </strong> button below to
          restart the exercise, or click the <strong> Next</strong> button in
          the bottom right.
        </p>
        <br />
        <button
          className="btn tw-shadow-md tw-bg-secondary-gray tw-h-[4rem] text-uppercase hover:tw-bg-primary-yellow hover:tw-shadow-lg"
          onClick={this.handleSubmit}
          key="start"
        >
          Return to Exercise Start
        </button>
      </div>
    );
  }
}

export default AdvancedExerciseConclusion;
