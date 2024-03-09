import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { twMerge } from "tailwind-merge";
import _ from "lodash";
import AIExplanationCodeBlock from "../components/code/AIExplanationCodeBlock";
import useScroll from "../../../../use-hooks/useScroll";
import { EXERCISE_PLAYING } from "../../../../constants/lab10";
import ExerciseService from "../../../../services/lab10/ExerciseService";
import { navigate } from "@reach/router";
import UserLabService from "../../../../services/UserLabService";
import { LAB_ID } from "../../../../constants/lab10";

const GeneratedData = (props) => {
  useScroll();

  /**
   * Update lab state onMount
   */
  useEffect(() => {
    props.actions.updateState(EXERCISE_PLAYING);
  }, []);

  /**
   * Retrieve user weights, from db, when user data has loaded
   */
  useEffect(() => {
    if (props.user?.userid) {
      ExerciseService.retrieveWeights(props.user.userid).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            props.actions.setWeights(json.weights);
            props.actions.setSessionCounters(json.session);
          });
        }
      });
    }
  }, [props.user]);

  /**
   * Sorts the colors based on their weight in descending order
   */
  const keys = Object.keys(props.weights ?? {}).sort((a, b) => {
    const weightA = props.weights[a],
      weightB = props.weights[b];

    if (weightA === weightB) {
      return 0;
    }

    return weightA < weightB ? 1 : -1;
  });

  /**
   * Redirect the user to the following page
   */
  const trainAINav = () => {
    props.actions.incrementTrainingCounter();
    return navigate("/Lab10/Exercise/SecondTrainingAI");
  };

  /**
   * Redirect the user to the following page
   */
  const experienceAINav = () => {
    props.actions.incrementExperienceCounter();
    return navigate("/Lab10/Exercise/SecondAISimulation");
  };

  /**
   * Redirect the user to the following page
   */
  const continueNav = () => {
    const { user } = props;
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
    return navigate("/Lab10/Reinforcement");
  };

  return (
    <div>
      <Fragment>
        <div className={"center-div"}>
          <div className={"guidance margin-bottom-2"}>
            <p className={"playthrough__sentence tw-text-center tw-mb-0"}>
              Below is the data you have generated for your AI. As noted
              earlier, your goal is to hit each colored shape an equal number of
              times. In doing so, you eliminate the bias that the AI has towards
              a specific shape.
            </p>
            <p
              className={
                "playthrough__sentence tw-text-center tw-mb-0 tw-font-bold"
              }
            >
              Note: While complete elimination of bias is nearly impossible, it
              is crucial to minimize unwanted bias in AI to ensure fair,
              equitable outcomes and maintain trust in decision-making.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-mb-0"}>
              If you would like to continue with the lab, click on the{" "}
              <b>Continue</b> button.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-my-0"}>
              If you would like to generate more data for the AI, click on the{" "}
              <b>Train AI</b> button.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-my-0"}>
              If you would like to experience the AI simulation, click on the{" "}
              <b>Experience AI</b> button.
            </p>
          </div>
          <div className={"tw-flex tw-items-center tw-justify-center tw-mb-0"}>
            <p className={"playthrough__sentence tw-my-0 tw-font-bold"}>
              Heaviest Color / Most Frequently Hit :
            </p>
            <div className={"tw-ml-3"}>
              <div
                className={twMerge(
                  "tw-border-black tw-border-solid tw-border-[2px] tw-w-9 tw-h-9 tw-rounded",
                  !_.isEmpty(keys) && keys[0]
                )}
              />
            </div>
          </div>
          <div className={"tw-flex tw-items-center tw-justify-center  tw-mb-6"}>
            <p className={"playthrough__sentence tw-my-0 tw-font-bold"}>
              Session Counter :{" "}
              {props.trainingCounter + props.experienceCounter}
            </p>
          </div>
        </div>
      </Fragment>
      <AIExplanationCodeBlock />
      <div className={"tw-mt-6 tw-flex tw-justify-evenly"}>
        <button
          className="btn btn-second btn-xl text-uppercase"
          onClick={trainAINav}
        >
          Train AI
        </button>
        <button
          className="btn btn-second btn-xl text-uppercase"
          onClick={experienceAINav}
        >
          Experience AI
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={continueNav}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.main;
  const { weights, trainingCounter, experienceCounter } = state.exercise10;
  return { user, weights, trainingCounter, experienceCounter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

GeneratedData.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  weights: PropTypes.object,
  trainingCounter: PropTypes.number,
  experienceCounter: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneratedData);
