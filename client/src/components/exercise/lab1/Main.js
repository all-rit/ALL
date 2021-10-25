import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "./components/Content";
import ExerciseInstructions from "./components/ExerciseInstructions";
import Popup from "../shared/Popup";

import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { actions as exerciseActions } from "../../../reducers/lab1/ExerciseReducer";
import { actions as repairActions } from "../../../reducers/lab1/RepairReducer";
import { EXERCISE_IDLE } from "../../../constants/lab1";
import SoundHeader from "./components/SoundHeader";

const mapStateToProps = (state) => {
  return {
    // General
    popupMessage: state.app1.popupMessage,
    instructionsVisible: state.app1.instructionsVisible,

    // Exercise specific
    state: state.exercise1.state,
    plays: state.exercise1.plays,
    results: state.exercise1.results,
    time: state.exercise1.time,
    roundTime: state.exercise1.roundTime,
    countdownTime: state.exercise1.countdownTime,
    score: state.exercise1.score,
    roundNumber: state.exercise1.roundNumber,
    correctAnswers: state.exercise1.correctAnswers,
    incorrectAnswers: state.exercise1.incorrectAnswers,
    boxes: state.exercise1.boxes,
    correctBoxNumber: state.exercise1.correctBoxNumber,
    boxRevealed: state.exercise1.boxRevealed,
    hintBoxStatus: state.exercise1.hintBoxStatus,
    hintUsed: state.exercise1.hintUsed,
    soundEnabled: state.exercise1.soundEnabled,
    congratulationMessage: state.exercise1.congratulationMessage,

    // Repair specific
    availableMessage: state.repair1.availableMessage,
    unavailableMessage: state.repair1.unavailableMessage,
    availableBackgroundColor: state.repair1.availableBackgroundColor,
    unavailableBackgroundColor: state.repair1.unavailableBackgroundColor,
    currentTab: state.repair1.currentTab,
    repairVisible: state.repair1.repairVisible,
    changesApplied: state.repair1.changesApplied,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...appActions, ...exerciseActions, ...repairActions },
      dispatch
    ),
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.scrollFn = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFn);
  }

  // componentWillUnmount() {
  //   return window.removeEventListener("scroll", this.scrollFn);
  // }

  handleScroll() {
    window.scrollTo(0, 0);
    console.log("called once");
    return window.removeEventListener("scroll", this.scrollFn);
  }
  render() {
    const {
      popupMessage,
      instructionsVisible,

      state,
      plays,
      results,
      time,
      roundTime,
      countdownTime,
      score,
      roundNumber,
      correctAnswers,
      incorrectAnswers,
      boxes,
      correctBoxNumber,
      boxRevealed,
      hintBoxStatus,
      hintUsed,
      soundEnabled,
      congratulationMessage,

      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor,
      currentTab,
      repairVisible,
      changesApplied,

      actions,
    } = this.props;

    return (
      <Fragment>
        <SoundHeader
          state={state}
          plays={plays}
          soundEnabled={soundEnabled}
          toggleSoundHandler={actions.toggleSound}
        />
        <Content
          data={{
            state,
            plays,
            results,
            time,
            roundTime,
            countdownTime,
            score,
            roundNumber,
            correctAnswers,
            incorrectAnswers,
            boxes,
            correctBoxNumber,
            boxRevealed,
            hintBoxStatus,
            hintUsed,
            soundEnabled,
            congratulationMessage,
            availableMessage,
            unavailableMessage,
            availableBackgroundColor,
            unavailableBackgroundColor,
            currentTab,
            repairVisible,
            changesApplied,
          }}
          handlers={actions}
        />

        <ExerciseInstructions
          visible={instructionsVisible && state === EXERCISE_IDLE}
          closeHandler={actions.closeInstructions}
        />

        <Popup message={popupMessage} handler={actions.updatePopup} />
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
