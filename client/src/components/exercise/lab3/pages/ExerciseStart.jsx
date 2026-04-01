import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as mainActions } from '@/reducers/MainReducer';
import { actions as exerciseActions } from '@/reducers/lab5/ExerciseReducer';
import AppInstructions from '../components/AppInstructions';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    // General
    user: state.main.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...mainActions, ...exerciseActions },
      dispatch,
    ),
  };
};

const navigate = useNavigate();

class ExerciseStart extends Component {

  handleSubmit() {
    navigate('/Lab3/Exercise/BeginnerExercise');
  }
  handleSubmitAdv() {
    navigate('/Lab3/Exercise/AdvancedExercise');
  }
  render() {
    return (
      <Fragment>
        <div className="center-div">
          <h2 className={'tw-title'}> Select Exercise Difficulty</h2>
          <AppInstructions />
          <button
            onClick={this.handleSubmit}
            className={
              'btn btn-xl tw-shadow-lg tw-bg-secondary-gray tw-mx-2 hover:tw-bg-primary-yellow'
            }
          >
            Beginner Exercise
          </button>
          <button
            onClick={this.handleSubmitAdv}
            className={
              'btn btn-xl tw-shadow-lg tw-bg-secondary-gray tw-mx-2 hover:tw-bg-primary-yellow'
            }
          >
            Advanced Exercise
          </button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseStart);
