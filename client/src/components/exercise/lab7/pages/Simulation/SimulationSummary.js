import React, { Component } from "react";
import { navigate } from "@reach/router";
import Collapsible from "../../components/Collapsible";
import { EXERCISE_IDLE } from "../../../../../constants/lab7";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../../reducers/lab7/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SimulationSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "SimSummary",
    };
  }

  componentDidMount() {
    const { state } = this.props;
    if (state === EXERCISE_IDLE)
      setTimeout(() => navigate("/Lab7/Exercise/BadAIExplanation"));
  }

  handleContinue() {
    const { redirectURL } = this.props;
    navigate(`/Lab7/Exercise/${redirectURL}`);
  }

  handleBack() {
    navigate(`/Lab7/Exercise/AICodeRepair`);
  }

  render() {
    const { score, intrusions, protect, incorrect, results, changesApplied } =
      this.props;
    return (
      <div>
        <h2 className={"tw-font-bold"}>Simulation Summary</h2>
        <div>
          <div
            className={
              "tw-flex tw-items-center tw-justify-center tw-gap-32 tw-py-6 tw-bg-[#EBE8E8] tw-mt-6 tw-shadow-xl"
            }
          >
            <div>
              <p className={"tw-font-bold tw-text-2xl"}>Total Score: {score}</p>
            </div>
            <div className={"tw-border-l-0 tw-border-solid tw-h-[125px]"} />
            <div className={"tw-flex tw-text-left tw-text-2xl"}>
              <ul className={"tw-text-left tw-font-bold"}>
                <li className={"tw-text-[#e31c3d]"}>Intrusions:</li>
                <li className={"tw-text-[#e31c3d]"}>
                  Incorrect (False Positive):
                </li>
                <li>Protected (True Positive):</li>
              </ul>
              <ul className={"tw-text-right tw-font-bold tw-ml-6"}>
                <li className={"tw-text-[#e31c3d]"}>{intrusions}</li>
                <li className={"tw-text-[#e31c3d]"}>{incorrect}</li>
                <li>{protect}</li>
              </ul>
            </div>
          </div>
          <div className={"tw-mt-12 tw-space-y-6"}>
            {results.map((result, index) => (
              <Collapsible key={index} result={result} index={index} />
            ))}
          </div>
        </div>
        <div className={"tw-mt-12"}>
          {changesApplied && (
            <button
              className="btn btn-second text-black btn-xl text-uppercase leftButton"
              onClick={this.handleBack.bind(this)}
              key="repair"
            >
              Try a new equation
            </button>
          )}
          <button
            className="btn btn-primary text-black btn-xl text-uppercase"
            onClick={this.handleContinue.bind(this)}
            key="continue"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

SimulationSummary.propTypes = {
  redirectURL: PropTypes.string,
  intrusions: PropTypes.number,
  score: PropTypes.number,
  incorrect: PropTypes.number,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      fileName: PropTypes.string,
      content: PropTypes.string,
      sensitivityLevel: PropTypes.number,
      decision: PropTypes.string,
      result: PropTypes.string,
      report: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  changesApplied: PropTypes.bool,
  protect: PropTypes.number,
  state: PropTypes.string,
  handlers: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { redirectURL, intrusions, score, incorrect, results } =
    state.exercise7;
  const { changesApplied } = state.repair7;
  return {
    redirectURL,
    intrusions,
    score,
    incorrect,
    results,
    changesApplied,
    protect: state.exercise7.protected,
    state: state.exercise7.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlers: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimulationSummary);
