import React from "react";
import { POPUP_MESSAGES } from "../../../../../constants/lab10";
import { actions as repairActions } from "../../../../../reducers/lab10/RepairReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export const TrainingAICodeBlock = (props) => {
  const { actions, timeValue, timeError } = props;

  function validateTimeValue() {
    let error = null;
    let upperBound = 45;
    let lowerBound = 30;
    let numericTimeValue = parseInt(timeValue, 10);

    if (isNaN(numericTimeValue) || !Number.isInteger(numericTimeValue)) {
      error = POPUP_MESSAGES.INVALID_INTEGER;
      actions.updateTimeError(error);
      return false;
    } else if (numericTimeValue > upperBound || numericTimeValue < lowerBound) {
      error = POPUP_MESSAGES.OUTSIDE_RANGE;
      actions.updateTimeError(error);
      return false;
    } else {
      return true
    }

  }

  function validateRepair() {
    if (!validateTimeValue()) {
      actions.undoRepairChanges();
      actions.updateRepairError(timeError)
      actions.updatePopup("Errors in repair please fix.");
    } else {
      actions.updateTimeError(null);
      actions.closeRepair();
      actions.updatePopup(POPUP_MESSAGES.SUCCESS);
    }
  }

  function handleTimeValueChange(e) {
    actions.updateTimeValue(e.target.value);
  }

  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* TrainingAI.js */}
          <div className="code_editor__file code_editor__file--active">
            TrainingAI.js
          </div>
        </div>

        {/* Description Comments */}
        <div className="code_editor__code">
          {/*Begining of lab comments */}
          <div className="code_editor__line">
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Here is the config file that tells the Neural Network
            </span>
            <br></br>
            <span className="code_editor__line--darkgreen">
              &#47;&#47; how long to gather data
            </span>
            <br></br>
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Edit the time value so that the network collects more
              data
            </span>
            <br></br>
          </div>

          {/*TrainingAIConfig ={values} */}
          <div className="code_editor__line">
            <span className="code_editor__const">const&nbsp;</span>
            <span className="code_editor__json">trainingAIConfig</span>
            <span> &#61; </span>
            <span className="code_editor__class">&#123;</span>
            <br></br>
            <div className="code_editor__line-background--light code__editor__json_value">
              <span className="code_editor__line--blue">
                &nbsp; moveLeft&#58;&nbsp;
              </span>
              <span className="">12</span>
            </div>
            <br></br>
            <div className="code_editor__line-background--light code__editor__json_value">
              <span className="code_editor__line--blue">
                &nbsp; moveRight&#58;&nbsp;
              </span>
              <span className="code_editor__line-darkgold">12</span>
            </div>
            <br></br>
            {/* Enter Value comment */}
            <span className="code_editor__line--darkgreen">
              &nbsp;&nbsp;&#47;&#47; Enter a value between 30-45 seconds into
              the input below
            </span>

            {/*User input for time value */}
          </div>
          <div className="code_editor__line-background--light code__editor__json_value">
            <span className="code_editor__line--blue">
              &nbsp; timeValue&#58;{" "}
            </span>
            <input
              type="text"
              className={`${timeError ? "form-error-input" : ""} `}
              value={timeValue}
              onChange={handleTimeValueChange}
            ></input>
          </div>

          {/*Popup for if input is incorrect */}
          {timeError && (
            <div className="code_editor__line">
              <span className={"form-error"}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {timeError}
              </span>
            </div>
          )}

          {/*End of file */}
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="code_editor__line"></div>

          <div className="code_editor__line">
            <span className="code_editor__class">&#125;</span>
            <span>&#59;</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="button button--green button--block"
        onClick={validateRepair}
      >
        Update
      </button>
    </div>
  );
};

TrainingAICodeBlock.propTypes = {
  actions: PropTypes.object,
  timeValue: PropTypes.string,
  timeError: PropTypes.string,
  popupMessage: PropTypes.string,
  repairError: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...repairActions }, dispatch),
  };
};


const mapStateToProps = (state) => {
  const { timeValue, timeError, repairError } =
    state.repair10;
  return { timeValue, timeError, repairError };
};


export default connect(mapStateToProps, mapDispatchToProps)(TrainingAICodeBlock);
