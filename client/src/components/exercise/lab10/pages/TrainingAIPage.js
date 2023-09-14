import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import TrainingAICodeBlock from "../components/code/TrainingAICodeBlock";
import Popup from "../../shared/Popup";
import { bindActionCreators } from "redux";
import {
  actions as repairActions,
  initialState,
} from "../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TrainingAIPage = (props) => {
  const { actions, repairError, timeValue, popupMessage, repairVisible } =
    props;

  const handleNext = () => {
    return !(repairError === null && timeValue !== initialState.timeValue);
  };

  const handleNav = () => {
    return navigate("/Lab10/Exercise/TrainingAI");
  };

  return (
    <div>
      <Fragment>
        <div className={"center-div"}>
          <div className={"guidance margin-bottom-2"}>
            <p className={"playthrough__sentence tw-text-center"}>
              That was very quick. The duration of the simulation needs to be
              increased to allow the neural network to collect more data, which
              will improve its decision-making.
            </p>
            <p className={"playthrough__sentence tw-text-center"}>
              Click the &lsquo;
              <span className={"tw-font-bold"}>Repair</span>
              &lsquo; button to view and edit the code so that the simulation
              runs for a longer duration.
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
        className="btn btn-second btn-xl text-uppercase leftButton"
        onClick={actions.openRepair}
        key="repair"
      >
        Repair
      </button>

      <button
        className="btn btn-primary text-black btn-xl text-uppercase  "
        key="Next"
        onClick={handleNav}
        disabled={handleNext()}
      >
        Next
      </button>

      {repairVisible && <TrainingAICodeBlock />}
    </div>
  );
};

TrainingAIPage.propTypes = {
  actions: PropTypes.object,
  repairError: PropTypes.string,
  timeValue: PropTypes.string,
  popupMessage: PropTypes.string,
  repairVisible: PropTypes.bool,
};

const mapStateToProps = (state) => {
  const { repairError, timeValue, popupMessage, repairVisible } =
    state.repair10;
  return {
    repairError,
    timeValue,
    popupMessage,
    repairVisible,
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainingAIPage);
