import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import { actions as exerciseActions } from "../../../reducers/lab7/ExerciseReducer";
import { actions as repairActions } from '../../../reducers/lab7/RepairReducer';
import { actions as appActions } from '../../../reducers/lab7/AppReducer';
import { bindActionCreators } from "redux";
import { EXERCISE_IDLE } from "../../../constants/lab7";

import ExerciseStart from './pages/ExerciseStart';
import AISimulation from './pages/Simulation/AISimulation';
import SimulationSummary from './pages/Simulation/SimulationSummary';
import BadAIExplanation from './pages/Simulation/BadAIExplanation';
import AICodeRepair from './pages/ImproveAICode/AICodeRepair';
import ImprovedAISimulation from './pages/ImproveAICode/ImprovedAISimulation';
import AlterationStart from './pages/AlterationActivity/AlterationStart';
import AlterationQuiz from './pages/AlterationActivity/AlterationQuiz';
import ExerciseEnd from './pages/ExerciseEnd';

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
    const { actions, state, user} = this.props;
    return (
      <div className="bottomSpace" >
        <Router className="app">
          <ExerciseStart default path="/*" actions={actions} />

          {/* Phase 1: Simulation */}
          <AISimulation path="/AISimulation" actions={actions} state={state} />
          <SimulationSummary path="/SimulationSummary" actions={actions} state={state} />
          <BadAIExplanation path="/BadAIExplanation" actions={actions} state={state}/>

          {/* Phase 2: Improve AI Code Repair */}
          <AICodeRepair path="/AICodeRepair" visible={state.repair7.repairVisible && state.exercise7.state === EXERCISE_IDLE} state={state} handlers={actions} />
          <ImprovedAISimulation path="/ImprovedAISimulation" action={actions} state={state} />

          {/* Phase 3: Alteration Activity */}
          <AlterationStart path="/AlterationStart" action={actions} />
          <AlterationQuiz path="/AlterationQuiz" action={actions} state={state}/>

          <ExerciseEnd path="/ExerciseEnd" actions={actions} state={state} user={user} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
