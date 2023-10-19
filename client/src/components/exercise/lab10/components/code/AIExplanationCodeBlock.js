import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { actions as repairActions } from "../../../../../reducers/lab10/RepairReducer";
import { actions as exerciseActions } from "../../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const AIExplanationCodeBlock = (props) => {
  /**
   * Sorts the colors based on their weight.
   */
  const keys = Object.keys(props.weights ?? {}).sort((a, b) => {
    const weightA = props.weights[a],
      weightB = props.weights[b];

    if (weightA === weightB) {
      return 0;
    }

    return weightA < weightB ? 1 : -1;
  });

  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* NeuralNetworkWeights.json */}
          <div className="code_editor__file code_editor__file--active">
            NeuralNetworkWeights.json
          </div>
        </div>
        <div className="code_editor__code">
          <div className="code_editor__line">{"{"}</div>
          {keys.map((weight, index) => {
            const hex = weight.match(/tw-bg-\[(#[0-9A-Fa-f]{6})\]/)[1];
            const isHeaviest = index === 0;

            return (
              <Fragment key={weight}>
                <div
                  className={twMerge(
                    "code_editor__line",
                    isHeaviest && "code_editor__line-background--light tw-m-0"
                  )}
                >
                  <div className={"tw-inline-flex"}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className={"code_editor__line--green"}>
                      {`"${hex}"`}
                    </span>
                    <span>{`: {`}&nbsp;</span>
                    <span>&nbsp;</span>
                    <div
                      className={
                        "code_editor__color_selector tw-flex tw-static tw-items-center"
                      }
                    >
                      <div
                        className={
                          "tw-border-black tw-border-solid tw-border-[2px] tw-h-4 tw-w-4 tw-rounded"
                        }
                        style={{ backgroundColor: hex }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={twMerge(
                    "code_editor__line",
                    isHeaviest && "code_editor__line-background--light tw-m-0"
                  )}
                >
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className={"code_editor__line--green"}>
                    {`"weight"`}
                  </span>
                  <span>{`:`}&nbsp;</span>
                  <span className={"code_editor__line--yellow"}>
                    {props.weights[weight]}
                  </span>
                  <span>{`,`}</span>
                </div>
                <div
                  className={twMerge(
                    "code_editor__line",
                    isHeaviest && "code_editor__line-background--light tw-m-0"
                  )}
                >
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>{`},`}</span>
                </div>
              </Fragment>
            );
          })}
          <div className="code_editor__line">{"}"}</div>
        </div>
      </div>
    </div>
  );
};

AIExplanationCodeBlock.propTypes = {
  actions: PropTypes.object,
  weights: PropTypes.object,
};

const mapStateToProps = (state) => {
  return state.exercise10;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...repairActions, ...exerciseActions },
      dispatch
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AIExplanationCodeBlock);
