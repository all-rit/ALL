import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import {actions as mainActions} from '../../../../reducers/MainReducer';
import {actions as exerciseActions} from '../../../../reducers/lab5/ExerciseReducer';
import AppInstructions from '../components/AppInstructions';
import {navigate} from '@reach/router';

const mapStateToProps = (state) => {
  return {
    // General
    user: state.main.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
        {...mainActions, ...exerciseActions},
        dispatch,
    ),
  };
};

class ExerciseStart extends Component {
  handleSubmit() {
    navigate('/Lab3/Exercise/BeginnerExercise');
  }
  handleSubmitAdv() {
    navigate('/Lab3/Exercise/AdvancedExercise');
  }
  render() {
    // const { user, state, plays } = this.props;
    const buttonStyleLeft = {
      marginTop: 10,
      marginRight: 2,
    };
    const buttonStyleRight = {
      marginTop: 10,
      marginLeft: 2,
    };
    return (
      <Fragment>
        <div className="center-div">
          <AppInstructions />

          <Button
            href="#"
            onClick={this.handleSubmit}
            variant={'contained'}
            color={'primary'}
            style={buttonStyleLeft}
          >
            Beginner Exercise
          </Button>
          <Button
            href="#"
            onClick={this.handleSubmitAdv}
            variant={'contained'}
            color={'secondary'}
            style={buttonStyleRight}
          >
            Advanced Exercise
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseStart);
