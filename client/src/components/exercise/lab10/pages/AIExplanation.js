import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import AIExplanationCodeBlock from "../components/code/AIExplanationCodeBlock";
import useScroll from "../../../../use-hooks/useScroll";
import ExerciseService from "../../../../services/lab10/ExerciseService";
import { twMerge } from "tailwind-merge";
import _ from "lodash";
import { EXERCISE_PLAYING } from "../../../../constants/lab10";

const AIExplanation = (props) => {
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
  const handleNav = () => {
    return navigate("/Lab10/Exercise/SecondTrainingAI");
  };

  return (
    <div>
      <Fragment>
        <div className={"center-div"}>
          <div className={"guidance margin-bottom-2"}>
            <p className={"playthrough__sentence tw-text-center"}>
              Did you notice something different about how the AI responded
              during the simulation?
            </p>
            <p className={"playthrough__sentence tw-text-center tw-mb-0"}>
              Whenever there was an empty hole, the AI knew to move towards it
              to make sure it does not get hit by any of the falling shapes.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-mt-0"}>
              On the other hand, when the AI was unable to find an empty hole,
              it would move to ensure it does not get hit by a specific color.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-mb-0"}>
              Based on the data <strong>you</strong> generated from playing the
              game, the AI avoided the color that <strong>you</strong> most
              frequently hit.
            </p>
            <p className={"playthrough__sentence tw-text-center tw-mt-0"}>
              Below is <strong>your</strong> generated data that the AI utilized
              for the simulation.
            </p>
          </div>
          <div className={"tw-flex tw-items-center tw-justify-center tw-mb-6"}>
            <p className={"playthrough__sentence tw-my-0 tw-font-bold"}>
              Heaviest Color / Most Frequently Hit :
            </p>
            <div className={"tw-ml-3"}>
              <div
                className={twMerge(
                  "tw-border-black tw-border-solid tw-border-[2px] tw-w-9 tw-h-9 tw-rounded",
                  !_.isEmpty(keys) && keys[0],
                )}
              />
            </div>
          </div>
        </div>
      </Fragment>
      <AIExplanationCodeBlock />
      <div className={"tw-mt-6 tw-flex tw-justify-end"}>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleNav}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.main;
  const { weights } = state.exercise10;
  return { user, weights };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

AIExplanation.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  weights: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AIExplanation);
