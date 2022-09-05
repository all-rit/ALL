import React, {Component, Fragment} from 'react';
import {navigate} from '@reach/router';
import {EXERCISE_IDLE} from '../../../../constants/lab5';

class ExerciseStart extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.updateState(EXERCISE_IDLE);
  }

  handleStart() {
    navigate('/Lab5/Exercise/DyslexiaAccessible');
  }

  render() {
    // const { user, state, plays } = this.props;
    return (
      <Fragment>
        <div className="center-div">
          <div className="guidance margin-bottom-2">
            We will explore a series of cognitive antipatterns that especially
            challenge cognitively impaired individuals. After each antipattern
            we will learn and correct our code to make it more accessible.
            Finally, we will view the updated experience. Click "Start" to
            begin!
          </div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            onClick={this.handleStart}
            key="start"
          >
            Start
          </button>
        </div>
      </Fragment>
    );
  }
}

export default ExerciseStart;
