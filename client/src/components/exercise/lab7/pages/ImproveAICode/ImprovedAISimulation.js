/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { navigate } from "@reach/router";
import Simulation from "../../components/Simulation";

class ImprovedAISimulation extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        state: props.state,
        actions: props.actions,
      });
  }

  handleSubmit() {
    navigate("/Lab7/Exercise/AlterationStart");
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
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={this.handleSubmit}
          key="continue"
        >
          Continue
        </button>
      </div>
    );
  }
}

export default ImprovedAISimulation;
