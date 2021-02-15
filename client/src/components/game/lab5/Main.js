import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import {actions as gameActions } from "../../../reducers/lab5/GameReducer";
import {actions as repairActions } from '../../../reducers/lab5/RepairReducer';
import {actions as appActions } from '../../../reducers/lab5/AppReducer';
import GameStart from './pages/GameStart';
import DyslexiaAccessible from './pages/PageLayoutActivity/DyslexiaAccessible';
import DyslexiaAccessibleKnowledgeCheck from './pages/PageLayoutActivity/DyslexiaAccessibleKnowledgeCheck';
import DementiaInaccessible from './pages/PageLayoutActivity/DementiaInaccessible';
import DementiaInaccessibleKnowledgeCheck from './pages/PageLayoutActivity/DementiaInaccessibleKnowledgeCheck';
import PageLayoutGuidance from "./pages/PageLayoutActivity/PageLayoutGuidance";
import PageLayoutRepair from "./pages/PageLayoutActivity/PageLayoutRepair";
import DementiaAccessible from './pages/PageLayoutActivity/DementiaAccessible';
import DementiaAccessibleKnowledgeCheck from './pages/PageLayoutActivity/DementiaAccessibleKnowledgeCheck';

import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...gameActions, ...repairActions, ...appActions }, dispatch),
  };
};


class Main extends Component {

  render() {
    const {actions, state} = this.props;
    return (
      <div className="bottomSpace" >
        <Router className="app">
          <GameStart default path="/"/>
          <DyslexiaAccessible path="/DyslexiaAccessible" actions={actions} state={state}/>
          <DyslexiaAccessibleKnowledgeCheck path="/DyslexiaAccessibleKnowledgeCheck" actions={actions} state={state} />
          <DementiaInaccessible path="/DementiaInaccessible" actions={actions} state={state}/>
          <DementiaInaccessibleKnowledgeCheck path="/DementiaInaccessibleKnowledgeCheck" actions={actions} state={state} />
          <PageLayoutGuidance  path="/PageLayoutGuidance" actions={actions}/>
          <PageLayoutRepair path ="/PageLayoutRepair" visible={state.repair5.repairVisible} data={state.repair5}
                            handlers={actions} state ={state} actions={actions}/>
          <DementiaAccessible path="/DementiaAccessible" actions={actions} state={state}/>
          <DementiaAccessibleKnowledgeCheck path="/DementiaAccessibleKnowledgeCheck" actions={actions} state={state} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
