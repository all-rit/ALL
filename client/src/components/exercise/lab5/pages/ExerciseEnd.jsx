/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { navigate } from 'react-router-dom';
import UserLabService from '../../../../services/UserLabService';
import { LAB_ID } from '../../../../constants/lab5';
import { Forum, EmojiObjects, Timer } from '@mui/icons-material';

class ExerciseEnd extends Component {
  handleHome() {
    navigate('/Lab5/Exercise/ExerciseStart');
  }

  componentDidMount() {
    const { user } = this.props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
  }
  render() {
    // const { user, state, plays } = this.props;
    return (
      <div>
        <h2 className={'tw-title tw-text-left tw-px-5'}>Exercise Complete</h2>
        <div className="center-div">
          <div className="cognitive_instructions tw-body-text">
            <div>
              <h4 className="tw-sub-title tw-text-left">
                Congratulations! You have successfully completed the Cognitive
                Impairment Exercise!
              </h4>
            </div>
            <h4 className="tw-sub-title">Here are some key takeaways:</h4>
            <div className="flex-boxes">
              <div>
                <div className="icon">
                  <EmojiObjects fontSize="large" />
                </div>
                Use proper headings and subheadings to reduce cognitive load
              </div>
              <div>
                <div className="icon">
                  <Timer fontSize="large" />
                </div>
                Allow users to have enough time to read
              </div>
              <div>
                <div className="icon">
                  <Forum fontSize="large" />
                </div>
                Provide clear descriptive feedback on forms
              </div>
            </div>
          </div>
          <h4 className="tw-sub-title">
            To start the exercise again, clicked the{' '}
            <strong>Return to Exercise Start</strong> button below. To move on
            to the reinforcement section, scroll to down and click the{' '}
            <strong>Next</strong> button.
          </h4>
          <button
            className="btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-xl btn-xl text-uppercase"
            onClick={this.handleHome}
            key="start"
          >
            Return to Exercise Start
          </button>
        </div>
      </div>
    );
  }
}

export default ExerciseEnd;
