import useScroll from "../../../../use-hooks/useScroll";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SecondAISimulation = () => {
  useScroll();
};

const mapStateToProps = (state) => {
  const { simulationStatus } = state.exercise10;
  return {
    simulationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

SecondAISimulation.propTypes = {
  simulationStatus: PropTypes.string,
  actions: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondAISimulation);
