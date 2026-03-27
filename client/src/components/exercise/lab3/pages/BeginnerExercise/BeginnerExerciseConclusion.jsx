/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { navigate } from 'react-router-dom';
import { EXERCISE_IDLE, LAB_ID } from '../../../../../constants/lab3';
import UserLabService from '../../../../../services/UserLabService';
class BeginnerExerciseConclusion extends Component {
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
      <div className={'tw-p-10 tw-text-left'}>
        <h2 className={'tw-title'}>Conclusion</h2>
        <br />
        <p className={'tw-body-text tw-font-medium'}>
          You have successfully completed the activity!
          <br />
          Click <strong>Return to Start</strong> return to the start of the lab,
          or scroll down and click the <strong> Next </strong> button to move on
          to the Reinforcement section.
        </p>
        <br />
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={this.handleSubmit}
            className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
          >
            Return to Start
          </button>
        </div>
      </div>
    );
  }
}

export default BeginnerExerciseConclusion;
