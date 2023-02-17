/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Simulation from "../../components/Simulation";
import "../../../../../assets/stylesheets/components/Simulation.scss";
import { EXERCISE_PLAYING } from "../../../../../constants/lab7";

class AISimulation extends Component {
  constructor(props) {
    super(props);
    this.state = { componentName: "AISimulation" };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Simulation
          data={state.exercise7}
          handlers={actions}
          user={state.main.user}
        />
      </div>
    );
  }
}
export default AISimulation;
