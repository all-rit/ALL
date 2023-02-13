/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Simulation from "../../components/Simulation";
import { ALTERATION_START } from "../../../../../constants/lab7";

class ImprovedAISimulation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateRedirectURL(ALTERATION_START);
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
