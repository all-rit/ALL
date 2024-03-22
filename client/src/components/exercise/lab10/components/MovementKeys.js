import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

/**
 * MovementKeys component for buttons that can be pressed to play simulation
 * Required for keyboard accessibility
 */
const MovementKeys = (props) => {
  return (
    <Fragment>
      <button
        onClick={props.handleShiftLeft}
        className={"btn btn-primary tw-w-32 tw-h-12"}
      >
        <KeyboardArrowLeft />
      </button>
      <button
        onClick={props.handleShiftRight}
        className={"btn btn-primary tw-w-32 tw-h-12"}
      >
        <KeyboardArrowRight />
      </button>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

MovementKeys.propTypes = {
  handleShiftRight: PropTypes.func,
  handleShiftLeft: PropTypes.func,
  actions: PropTypes.object,
};

export default connect(null, mapDispatchToProps)(MovementKeys);
