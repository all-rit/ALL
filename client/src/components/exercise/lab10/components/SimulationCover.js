import React from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SimulationCover = (props) => {
  const handleClick = () => {
    props.actions.startSimulation();
  };

  return (
    props.userInputDisabled && (
      <div
        className={
          "tw-absolute tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center tw-rounded tw-bg-[#000000] tw-bg-opacity-70 tw-z-20"
        }
      >
        <div>
          {props.displayStartButton && (
            <button
              className="btn btn-primary text-black btn-xl text-uppercase"
              onClick={handleClick}
            >
              Start
            </button>
          )}
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  const { userInputDisabled } = state.exercise10;
  return { userInputDisabled };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

SimulationCover.propTypes = {
  userInputDisabled: PropTypes.bool,
  displayStartButton: PropTypes.bool,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimulationCover);
