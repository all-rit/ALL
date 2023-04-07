import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SimulationCover = (props) => {
  const handleClick = () => {
    props.actions.uncoverSimulation();
    props.actions.startSimulation();
  };

  useEffect(() => {
    props.simulationCovered
      ? props.actions.disableUserInput()
      : props.actions.enableUserInput();
  }, [props.simulationCovered]);

  return (
    props.simulationCovered && (
      <div
        className={
          "tw-absolute tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded tw-bg-[#000000] tw-bg-opacity-70"
        }
      >
        <div>
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={handleClick}
          >
            Start
          </button>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  const { simulationCovered } = state.exercise10;
  return { simulationCovered };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

SimulationCover.propTypes = {
  simulationCovered: PropTypes.bool,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimulationCover);
