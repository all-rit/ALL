/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Simulation from "../../components/Simulation";
import "../../../../../assets/stylesheets/components/Simulation.scss";
import { EXERCISE_PLAYING } from "../../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";

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
    return (
      <div>
        <Simulation />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AISimulation);
