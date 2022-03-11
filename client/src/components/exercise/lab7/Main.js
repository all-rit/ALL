import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import {actions as exerciseActions } from "../../../reducers/lab7/ExerciseReducer";
import {actions as repairActions } from '../../../reducers/lab7/RepairReducer';
import {actions as appActions } from '../../../reducers/lab7/AppReducer';
import ExerciseStart from './pages/ExerciseStart';
import ExerciseEnd from './pages/ExerciseEnd';
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
    state: state
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators({ ...exerciseActions, ...repairActions, ...appActions }, dispatch),
    };
  };

  class Main extends Component {

    render() {
      const {actions, state,user} = this.props;
      return (
        <div className="bottomSpace" >
        <Router className="app">
          <ExerciseStart default path="/" actions={actions}/>
          <ExerciseEnd path="/ExerciseEnd" actions={actions} state={state} user={user} />
        </Router>
      </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
