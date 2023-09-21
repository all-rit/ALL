import React, { Component, Fragment } from "react";
import { EXERCISE_PLAYING } from "../../../../constants";
import { actions as repairActions } from "../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Popup from "../../shared/Popup";
import BuildingAICodeBlock from "../components/code/BuildingAICodeBlock";
import { navigate } from "@reach/router";
class BuildingAIPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "BuildingAIPage",
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.reset();
  }

  handleNav() {
    return navigate("/Lab10/Exercise/TrainingAI");
  }

  reset() {
    const { actions } = this.props;
    actions.updatePopup("");
  }

  render() {
    const {
      repairVisible,
      popupMessage,
      actions,
      repairError,
      changesApplied,
    } = this.props;

    return (
      <div>
        <Fragment>
          <div className={"center-div"}>
            <div className={"guidance margin-bottom-2"}>
              <p className={"playthrough__sentence tw-text-center"}>
                Now that we have described how neural-network based AI work,
                let&lsquo;s create our own AI using a simple exercise where you
                will move a person left and right across your screen and attempt
                to avoid different colored falling balls.
              </p>
              <p className={"playthrough__sentence tw-text-center"}>
                First, in order to gather data, we need our person to be able to
                move. Click the &lsquo;
                <span className={"tw-font-bold"}>Repair</span>
                &lsquo; button to view and edit the code so that our character
                can move left and right using the keyboard arrows.
              </p>
            </div>
          </div>
        </Fragment>
        <Popup
          message={popupMessage}
          handler={actions.updatePopup}
          error={repairError}
        />
        <button
          className={"btn btn-second btn-xl text-uppercase leftButton"}
          onClick={actions.openRepair}
          key="repair"
        >
          Repair
        </button>
        <button
          className={"btn btn-primary btn-xl text-uppercase rightButton"}
          onClick={this.handleNav.bind(this)}
          disabled={!changesApplied}
        >
          Next
        </button>
        {repairVisible && <BuildingAICodeBlock />}
      </div>
    );
  }
}

BuildingAIPage.propTypes = {
  actions: PropTypes.object,
  leftValue: PropTypes.string,
  rightValue: PropTypes.string,
  repairError: PropTypes.bool,
  repairVisible: PropTypes.bool,
  changesApplied: PropTypes.bool,
  popupMessage: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { popupMessage } = state.repair10;
  const { repairError, repairVisible, leftValue, rightValue, changesApplied } =
    state.repair10;
  return {
    popupMessage,
    repairError,
    repairVisible,
    leftValue,
    rightValue,
    changesApplied,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...repairActions, ...exerciseActions },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingAIPage);
