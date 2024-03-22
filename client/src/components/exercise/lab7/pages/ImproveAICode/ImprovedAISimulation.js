import { navigate } from "@reach/router";
import React, { Component } from "react";
import Simulation from "../../components/Simulation";
import {
  ALTERATION_START,
  EXERCISE_PLAYING,
} from "../../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ImprovedAISimulation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { actions, state } = this.props;
    if (state === EXERCISE_PLAYING) actions.updateRedirectURL(ALTERATION_START);
    else setTimeout(() => navigate("/Lab7/Exercise/AICodeRepair"));
  }

  render() {
    return (
      <div>
        <p className="playthrough__sentence">Improved AI Simulation</p>
        <Simulation />
      </div>
    );
  }
}

ImprovedAISimulation.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { state: state.exercise7.state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImprovedAISimulation);
