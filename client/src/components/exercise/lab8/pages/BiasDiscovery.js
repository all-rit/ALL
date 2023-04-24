/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";

const BiasDiscovery = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    // TODO: update this to go to the repair section
    // https://github.com/all-rit/ALL/issues/320
    // link fix to the issue above
    navigate("/Lab8/Exercise/SentimentAnalysisInfo");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <h2 className="playthrough__title">Did You Notice?</h2>

        <div className="playthrough__sentence">
          You may have noticed that some chat messages appeared to be{" "}
          <b>appropriate</b>, but the AI thought they were inappropriate and
          recommended them to be <b>removed</b>! The AI was trained on a set of
          data that contained both appropriate and inappropriate messages, so
          why did the AI make these mistakes?
        </div>
        <div className="playthrough__sentence">
          When the data used to train AI is not equitable, selection bias can
          occur. Selection bias is a result of datasets that are “not reflective
          of their real-world distribution” and are not accurately
          representative. (
          <a
            href="https://developers.google.com/machine-learning/crash-course/fairness/types-of-bias"
            rel="noreferrer"
            target="_blank"
          >
            Fairness: Types of Bias
          </a>
          )
        </div>
        <div className="playthrough__sentence">
          In this situation, the AI was trained on a general dataset that did
          not contain data specific to MineALL, which is not accurately
          representative. Due to the lack of data specific to MineALL, the AI
          recommended messages that are inappropriate in a general context to be
          removed, even though they are considered appropriate in the context of
          MineALL.
        </div>
      </div>
      <div className="playthrough__sentence">
        To learn more about sentiment analysis and the format of datasets 
        used for sentiment analysis, click &quot;
        <b>Continue</b>&quot;.
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="continue"
      >
        Continue
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(BiasDiscovery);
