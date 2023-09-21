import React from "react";
import { DURATION_RANGE, POPUP_MESSAGES } from "../../../../../constants/lab10";
import { actions as repairActions } from "../../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TrainingAICodeBlock = (props) => {
  const { actions, timeValue, repairError } = props;

  const handleChange = (e) => {
    actions.updateTimeValue(e.target.value.trim());
  };

  const handleSubmit = () => {
    const value = parseInt(timeValue, 10);
    actions.updateRepairError(true);
    if (isNaN(value) || !Number.isInteger(value)) {
      actions.updateRepairError("Try inputting a number.");
      actions.updatePopup(POPUP_MESSAGES.INVALID_INTEGER);
    } else {
      if (!(value >= DURATION_RANGE[0] && value <= DURATION_RANGE[1])) {
        actions.updateRepairError(
          `Input a number between ${DURATION_RANGE[0]} and ${DURATION_RANGE[1]}.`
        );
        actions.updatePopup(POPUP_MESSAGES.OUTSIDE_RANGE);
      } else {
        actions.closeRepair();
        actions.updateRepairError(false);
        actions.updatePopup(POPUP_MESSAGES.SUCCESS);
        actions.setTrainingDuration(value);
      }
    }
  };

  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* Simulation.js */}
          <div className="code_editor__file code_editor__file--active">
            Simulation.js
          </div>
        </div>

        <div className="code_editor__code">
          <div className="code_editor__line">
            <span className="code_editor__line--purple">import&nbsp;</span>
            <span className="code_editor__line--blue">React</span>
            <span className="code_editor__line--gold">&nbsp;</span>
            <span className="code_editor__line--purple">from&nbsp;</span>
            <span className="code_editor__line--orange">
              &lsquo;react&lsquo;
            </span>
            <span className="code_editor__line--gold">;</span>
          </div>

          <div className="code_editor__line">
            <span className="code_editor__line--purple">import&nbsp;</span>
            <span className="code_editor__line--gold">&#123;</span>
            <span className="code_editor__line--blue">
              {" convertMinutesToSeconds"}
            </span>
            <span>{", "}</span>
            <span className="code_editor__line--blue">{"handleShiftLeft"}</span>
            <span>{", "}</span>
            <span className="code_editor__line--blue">
              {"handleShiftRight"}
            </span>
            <span>{", "}</span>
            <span className="code_editor__line--blue">
              {"useCollectUserData "}
            </span>
            <span className="code_editor__line--gold">&#125;&nbsp;</span>
            <span className="code_editor__line--purple">from&nbsp;</span>
            <span className="code_editor__line--orange">
              &lsquo;../utils&lsquo;
            </span>
            <span className="code_editor__line--gold">;</span>
          </div>

          <div className="code_editor__line">
            <span className="code_editor__line--purple">import&nbsp;</span>
            <span className="code_editor__line--gold">&#123;</span>
            <span className="code_editor__line--blue">
              {" collectSimulationData "}
            </span>
            <span className="code_editor__line--gold">&#125;&nbsp;</span>
            <span className="code_editor__line--purple">from&nbsp;</span>
            <span className="code_editor__line--orange">
              &lsquo;../data/NeuralNetwork&lsquo;
            </span>
            <span className="code_editor__line--gold">;</span>
          </div>

          <div className="code_editor__line">&nbsp;</div>

          <div className="code_editor__line">
            <span className="code_editor__line--purple">const</span>
            <span className="code_editor__line--yellow">
              {" SIMULATION_DURATION_SECONDS "}
            </span>
            <span>{" = "}</span>
            <input
              type="string"
              name="timeValue"
              value={timeValue}
              maxLength={3}
              onChange={handleChange}
              className={`${
                repairError ? "form-error-input" : ""
              } tw-w-16 tw-text-center`}
              required
              title="Must enter a value between'"
            />
            <span>;</span>
          </div>
          {repairError && (
            <div className="code_editor__line">
              <span className={"form-error"}>{repairError}</span>
            </div>
          )}

          <div className="code_editor__line">&nbsp;</div>

          <div className="code_editor__line">{/* AI function comment */}</div>
          <div className="code_editor__line">
            <span className="code_editor__line--purple">const </span>
            <span className="code_editor__line--yellow">Simulation</span>
            <span>{" = "}</span>
            <span className="code_editor__line--purple">(</span>
            <span>props</span>
            <span className="code_editor__line--purple">)</span>
            <span>{" => "}</span>
            <span className="code_editor__line--purple">&#123;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--blue">
              collectSimulationData
            </span>
            <span className={"code_editor__line--purple"}>()</span>
            <span>;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const</span>
            <span> seconds = </span>
            <span className="code_editor__line--blue">
              convertMinutesToSeconds
            </span>
            <span className={"code_editor__line--purple"}>(</span>
            <span className="code_editor__line--yellow">
              SIMULATION_DURATION_SECONDS
            </span>
            <span className={"code_editor__line--purple"}>)</span>
            <span>;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>

          <div className={"code_editor__line"}>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>return (</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--orange"}>
                {"ProgressBar"}
              </span>
              <span className={"code_editor__line--gold"}>{" duration"}</span>
              <span>{"="}</span>
              <span className={"code_editor__line--purple"}>{"{"}</span>
              <span>{"seconds"}</span>
              <span className={"code_editor__line--purple"}>{"}"}</span>
              <span>{" />"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--orange"}>
                {"ShapeSpawner"}
              </span>
              <span>{" />"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--orange"}>
                {"MovingObject"}
              </span>
              <span>{" />"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"</"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--orange"}>
                {"MovementKeys"}
              </span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--gold"}>
                {"handleShiftLeft"}
              </span>
              <span>{"="}</span>
              <span className={"code_editor__line--purple"}>{"{"}</span>
              <span>{"handleShiftLeft"}</span>
              <span className={"code_editor__line--purple"}>{"}"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--gold"}>
                {"handleShiftRight"}
              </span>
              <span>{"="}</span>
              <span className={"code_editor__line--purple"}>{"{"}</span>
              <span>{"handleShiftRight"}</span>
              <span className={"code_editor__line--purple"}>{"}"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"/>"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"<"}</span>
              <span className={"code_editor__line--orange"}>
                {"KeyboardGuide"}
              </span>
              <span>{" />"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"</"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>{"</"}</span>
              <span className={"code_editor__line--red"}>{"div"}</span>
              <span>{">"}</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>)</span>
            </div>
          </div>

          <div className="code_editor__line">
            <span className="code_editor__line--purple">&#125;</span>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="button button--green button--block"
      >
        Update
      </button>
    </div>
  );
};

TrainingAICodeBlock.propTypes = {
  actions: PropTypes.object,
  timeValue: PropTypes.string,
  repairError: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => {
  const { setTrainingDuration } = exerciseActions;
  return {
    actions: bindActionCreators(
      { ...repairActions, setTrainingDuration },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  const { timeValue, repairError } = state.repair10;
  return { timeValue, repairError };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingAICodeBlock);
