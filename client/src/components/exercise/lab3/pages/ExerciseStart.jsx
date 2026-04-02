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

const ExerciseStart = (props) => {
  const navigate = useNavigate(); // This is allowed here!
  const { actions } = props;

  const handleSubmit = () => navigate('/Lab3/Exercise/BeginnerExercise');
  const handleSubmitAdv = () => navigate('/Lab3/Exercise/AdvancedExercise');

  return (
    <Fragment>
      <div className="center-div">
        <h2 className={'tw-title'}> Select Exercise Difficulty</h2>
        <AppInstructions />
        <button onClick={handleSubmit} className={'btn btn-xl tw-shadow-lg ...'}>
          Beginner Exercise
        </button>
        <button onClick={handleSubmitAdv} className={'btn btn-xl tw-shadow-lg ...'}>
          Advanced Exercise
        </button>
      </div>
    </Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseStart);
