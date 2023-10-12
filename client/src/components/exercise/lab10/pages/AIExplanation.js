import React from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "@/reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AIExplanation = () => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return state.exercise10;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

AIExplanation.propTypes = {
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AIExplanation);
