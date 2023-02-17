/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { navigate } from "@reach/router";
import React, { Component } from "react";
import Simulation from "../../components/Simulation";
import {
  ALTERATION_START,
  EXERCISE_PLAYING,
} from "../../../../../constants/lab7";

class ImprovedAISimulation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, state } = this.props;
    if (state.exercise7.state === EXERCISE_PLAYING)
      actions.updateRedirectURL(ALTERATION_START);
    else setTimeout(() => navigate("/Lab7/Exercise/AICodeRepair"));
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <p className="playthrough__sentence">Improved AI Simulation</p>
        <Simulation
          data={state.exercise7}
          handlers={actions}
          user={state.main.user}
        />
      </div>
    );
  }
}

export default ImprovedAISimulation;
