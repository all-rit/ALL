import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import '../../../assets/stylesheets/main.scss';
import {actions as gameActions } from "../../../reducers/lab5/GameReducer";
import {actions as repairActions } from '../../../reducers/lab5/RepairReducer';
import {actions as appActions } from '../../../reducers/lab5/AppReducer';
import GameStart from './pages/GameStart';
import DyslexiaAccessible from './pages/DyslexiaAccessible';

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
      <div class="bottomSpace" >
        <Router className="app">
          <GameStart default path="/"/>
          <DyslexiaAccessible path="/DyslexiaAccessible" actions={actions} state={state}/>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
