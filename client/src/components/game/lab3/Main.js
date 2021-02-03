import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import {actions as gameActions } from "../../../reducers/lab3/GameReducer";
import {actions as repairActions } from '../../../reducers/lab3/RepairReducer';
import GameStart from './GameStart';
import FullGame from '../../game/lab3/pages/BeginnerGame/Game';
import UserUpdatedGame from '../../game/lab3/pages/BeginnerGame/UserUpdatedGame';
import GameInstructions from '../../game/lab3/pages/BeginnerGame/GameInstructions';
import AccessibleInstructions from '../../game/lab3/pages/BeginnerGame/AccessibleInstructions';
import AccessibleGame from '../../game/lab3/pages/BeginnerGame//AccessibleGame';
import CodeChange from '../../game/lab3/pages/BeginnerGame/CodeChange';
import HelloWorld from '../../game/lab3/pages/BeginnerGame/HelloWorld';
import AdvancedGame from '../../game/lab3/pages/AdvancedGame/AdvancedGame';
import AdvancedInstructions from '../../game/lab3/pages/AdvancedGame//AdvancedInstructions';
import ProblemDiscovery from '../../game/lab3/pages/AdvancedGame/ProblemDiscovery';
import ProblemExplanation from '../../game/lab3/pages/AdvancedGame/ProblemExplanation';
import ProblemFix from '../../game/lab3/pages/AdvancedGame/ProblemFix';
import BeginnerGameConclusion from '../../game/lab3/pages/BeginnerGame/BeginnerGameConclusion';
import AdvancedGameConclusion from '../../game/lab3/pages/AdvancedGame/AdvancedGameConclusion';
import ViewFix from '../../game/lab3/pages/AdvancedGame/ViewFix';
import ProblemDiscoveryFixedExperience from '../../game/lab3/pages/AdvancedGame/ProblemDiscoveryFixedExperience';
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...gameActions, ...repairActions }, dispatch),
  };
};


class Main extends Component {
  // eslint-disable-next-line require-jsdoc

  // eslint-disable-next-line require-jsdoc
  render() {
    const {actions, state} = this.props;
    return (
      <div class="container bottomSpace" >
        <Router basepath={process.env.PUBLIC_URL + "/Lab3/Game"} className="app">
          <GameStart path="/"/>
          <FullGame path="/BeginnerGame" actions={actions}/>
          <GameInstructions path={'/GameInstructions'} actions={actions}/>
          <UserUpdatedGame path={'/UserUpdatedGame'} actions={actions} data={state}/>
          <AccessibleInstructions path={'/AccessibleInstructions'} actions={actions}/>
          <AccessibleGame path={'/AccessibleGame'} actions={actions}/>
          <CodeChange path={'/CodeChange'} actions={actions} data={state} />
          <HelloWorld path={'/HelloWorld'} actions={actions}/>
          <AdvancedGame path={'/AdvancedGame'} actions={actions}/>
          <AdvancedInstructions path={'/AdvancedInstructions'} actions={actions}/>
          <ProblemDiscovery path={'/ProblemDiscovery'} actions={actions}/>
          <ProblemExplanation path={'/ProblemExplanation'} actions={actions}/>
          <ProblemDiscoveryFixedExperience
            path={'/ProblemDiscoveryFixedExperience'}
            actions={actions}
          />
          <ProblemFix path={'/ProblemFix'} actions={actions}/>
          <BeginnerGameConclusion path={'/BeginnerGameConclusion'} actions={actions}/>
          <AdvancedGameConclusion path={'/AdvancedGameConclusion'} actions={actions}/>
          <ViewFix path={'/ViewFix'} actions={actions}/>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
