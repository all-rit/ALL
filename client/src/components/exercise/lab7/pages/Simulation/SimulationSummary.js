import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import Collapsible from "../../components/Collapsible";
import PropTypes from "prop-types";
import { useLab7StateContext } from "src/reducers/lab7/Lab7Context";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";

/**
 * Renders the Simulation Summary component.
 *
 * @returns {JSX.Element} The rendered Simulation Summary component.
 */
const SimulationSummary = () => {
  const { state: mainState } = useMainStateContext();
  const { state } = useLab7StateContext();

  useEffect(() => {
    if (mainState.userState === EXERCISE_IDLE)
      setTimeout(() => navigate("/Lab7/Exercise/BadAIExplanation"));
  }, []);

  const handleContinue = () => {
    navigate(`/Lab7/Exercise/${state.redirectURL}`);
  };

  const handleBack = () => {
    navigate(`/Lab7/Exercise/AICodeRepair`);
  };

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
            <p className={"tw-font-bold tw-text-2xl"}>
              Total Score: {state.score}
            </p>
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
              <li className={"tw-text-[#e31c3d]"}>{state.intrusions}</li>
              <li className={"tw-text-[#e31c3d]"}>{state.incorrect}</li>
              <li>{state.protectedNum}</li>
            </ul>
          </div>
        </div>
        <div className={"tw-mt-12 tw-space-y-6"}>
          {state.results.map((result, index) => (
            <Collapsible key={index} result={result} index={index} />
          ))}
        </div>
      </div>
      <div className={"tw-mt-12"}>
        {state.changesApplied && (
          <button
            className="btn btn-second text-black btn-xl text-uppercase leftButton"
            onClick={handleBack}
            key="repair"
          >
            Try a new equation
          </button>
        )}
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

SimulationSummary.propTypes = {
  score: PropTypes.number.isRequired,
  intrusions: PropTypes.number.isRequired,
  protect: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  changesApplied: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default SimulationSummary;
