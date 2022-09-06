/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import {actions as exerciseActions} from '../../../reducers/lab3/ExerciseReducer';
import {actions as repairActions} from '../../../reducers/lab3/RepairReducer';
import {actions as appActions} from '../../../reducers/lab3/AppReducer';
import ExerciseStart from './pages/ExerciseStart';
import FullExercise from '../../exercise/lab3/pages/BeginnerExercise/Exercise';
import UserUpdatedExercise from '../../exercise/lab3/pages/BeginnerExercise/UserUpdatedExercise';
import ExerciseInstructions from '../../exercise/lab3/pages/BeginnerExercise/ExerciseInstructions';
import AccessibleInstructions from '../../exercise/lab3/pages/BeginnerExercise/AccessibleInstructions';
import CodeChange from '../../exercise/lab3/pages/BeginnerExercise/CodeChange';
import AdvancedExercise from '../../exercise/lab3/pages/AdvancedExercise/AdvancedExercise';
import AdvancedInstructions from '../../exercise/lab3/pages/AdvancedExercise/AdvancedInstructions';
import ProblemDiscovery from '../../exercise/lab3/pages/AdvancedExercise/ProblemDiscovery';
import ProblemExplanation from '../../exercise/lab3/pages/AdvancedExercise/ProblemExplanation';
import ProblemFix from '../../exercise/lab3/pages/AdvancedExercise/ProblemFix';
import BeginnerExerciseConclusion from '../../exercise/lab3/pages/BeginnerExercise/BeginnerExerciseConclusion';
import AdvancedExerciseConclusion from '../../exercise/lab3/pages/AdvancedExercise/AdvancedExerciseConclusion';
import ViewFix from '../../exercise/lab3/pages/AdvancedExercise/ViewFix';
import ProblemDiscoveryFixedExperience from '../../exercise/lab3/pages/AdvancedExercise/ProblemDiscoveryFixedExperience';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
        {...exerciseActions, ...repairActions, ...appActions},
        dispatch,
    ),
  };
};

class Main extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    const {actions, state, user} = this.props;
    return (
      <div className="container bottomSpace">
        <Router className="app">
          <ExerciseStart default path="/" />
          <FullExercise path="/BeginnerExercise" actions={actions} />
          <ExerciseInstructions
            path={'/ExerciseInstructions'}
            actions={actions}
          />
          <UserUpdatedExercise
            path={'/UserUpdatedExercise'}
            actions={actions}
            data={state}
          />
          <AccessibleInstructions
            path={'/AccessibleInstructions'}
            actions={actions}
          />
          <CodeChange path={'/CodeChange'} actions={actions} data={state} />
          <AdvancedExercise path={'/AdvancedExercise'} actions={actions} />
          <AdvancedInstructions
            path={'/AdvancedInstructions'}
            actions={actions}
          />
          <ProblemDiscovery path={'/ProblemDiscovery'} actions={actions} />
          <ProblemExplanation path={'/ProblemExplanation'} actions={actions} />
          <ProblemDiscoveryFixedExperience
            path={'/ProblemDiscoveryFixedExperience'}
            actions={actions}
          />
          <ProblemFix path={'/ProblemFix'} actions={actions} />
          <BeginnerExerciseConclusion
            path={'/BeginnerExerciseConclusion'}
            actions={actions}
            user={user}
          />
          <AdvancedExerciseConclusion
            path={'/AdvancedExerciseConclusion'}
            actions={actions}
            user={user}
          />
          <ViewFix path={'/ViewFix'} actions={actions} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
