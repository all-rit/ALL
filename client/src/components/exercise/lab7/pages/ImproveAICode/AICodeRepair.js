import React, { Component, Fragment } from "react";
import Popup from "../../../shared/Popup";
import { navigate } from "@reach/router";
import Code from "../../components/Code";
import {
  EXERCISE_PLAYING,
  LOCKED_FILE,
  OPEN_FILE,
} from "../../../../../constants/lab7";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../../reducers/lab7/RepairReducer";
import { actions as appActions } from "../../../../../reducers/lab7/AppReducer";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { evaluate } from "mathjs";
import PropTypes from "prop-types";
import { MathComponent } from "mathjax-react";

class AICodeRepair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "AICodeRepair",
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.reset();
  }

  reset() {
    const { actions } = this.props;
    actions.resetRepair();
    actions.updatePopup("");
  }

  handleNav() {
    const { actions } = this.props;
    actions.updateMakeDecision(this.updateMakeDecision.bind(this));
    actions.reset();
    navigate("/Lab7/Exercise/ImprovedAISimulation");
  }

  updateMakeDecision(threatLvl, file) {
    const { rewardValue, costValue } = this.props;
    const utility = evaluate(`(${rewardValue}) / (${costValue})`, {
      file,
      threatLvl,
    });
    return utility >= 1 ? LOCKED_FILE : OPEN_FILE;
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
          <div className="center-div">
            <div className="guidance margin-bottom-2">
              <p className="playthrough__sentence">
                We have identified the component of the AI that is impacting its
                decision-making, let&lsquo;s take a look into the AI and see how
                it can be improved.
              </p>
              <p className="playthrough__sentence">
                In this part of the exercise, you will have the opportunity to
                improve the accuracy of the autonomous file access system.
              </p>
              <p className={"playthrough__sentence"}>
                Your goal should be to implement a utility equation into the
                autonomous system. The utility equation is calculated by
                weighing the reward of a decision and the cost of making said
                decision.
              </p>
              <MathComponent
                tex={String.raw`Utility=\frac{Reward\;Value}{Cost\;Value}`}
              />
            </div>
            <p className="playthrough__sentence">
              Click the &lsquo;<span className={"tw-font-bold"}>Repair</span>
              &lsquo; button to view and edit the code of the autonomous system.
            </p>
          </div>
        </Fragment>
        <Popup
          message={popupMessage}
          handler={actions.updatePopup}
          error={repairError}
        />
        <button
          className="btn btn-second btn-xl text-uppercase leftButton"
          onClick={actions.openRepair}
          key="repair"
        >
          Repair
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={this.handleNav.bind(this)}
          key="Next"
          disabled={!changesApplied}
        >
          Next
        </button>
        {repairVisible && <Code />}
      </div>
    );
  }
}

AICodeRepair.propTypes = {
  actions: PropTypes.object,
  rewardValue: PropTypes.string,
  costValue: PropTypes.string,
  popupMessage: PropTypes.string,
  repairError: PropTypes.string,
  changesApplied: PropTypes.bool,
  repairVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { popupMessage } = state.app7;
  const { repairError, repairVisible, rewardValue, costValue, changesApplied } =
    state.repair7;
  return {
    popupMessage,
    repairError,
    repairVisible,
    rewardValue,
    costValue,
    changesApplied,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...repairActions, ...exerciseActions, ...appActions },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AICodeRepair);
