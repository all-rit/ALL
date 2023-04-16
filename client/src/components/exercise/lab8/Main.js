/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React from "react";
import { Router } from "@reach/router";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab6/ExerciseReducer";
import { connect } from "react-redux";

import ExerciseStart from "./pages/ExerciseStart";
import ExerciseFrame from "./components/ExerciseFrame";

// import ChatRoom from "./components/ChatRoom";

const Main = (props) => {
  const { actions, user } = props;

  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart path="/*" actions={actions} user={user} />
        <ExerciseFrame path="/StreamSimulation" actions={actions} user={user} />
        {/* <ChatRoom /> */}
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
