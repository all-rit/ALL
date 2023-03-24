/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import { bindActionCreators } from "redux";
import LandingPage from "./pages/landingPage";
import MainInstructions from "./pages/mainInstructions";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

class Main extends Component {
  render() {
    const { actions, state, user } = this.props;
    return (
      <div className="bottomSpace">
        <Router className="app">
          <LandingPage
            default
            path="/"
            actions={actions}
            state={state}
            user={user}
          />
          <MainInstructions
            path="/MainInstructions"
            actions={actions}
            state={state}
            user={user}
          />
          {/* <ExerciseEnd
            path="/ExerciseEnd"
            actions={actions}
            state={state}
            user={user}
          /> */}
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
