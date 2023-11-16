import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import PropTypes from "prop-types";

const SentimentAnalysisInfo = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    // navigate to the repair section
    navigate("/Lab8/Exercise/DataRepair");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <h2 className="playthrough__title">Sentiment Analysis Background</h2>

        <div className="playthrough__sentence">
          Sentiment analysis, also referred to as opinion mining, is a natural
          language processing technique that uses machine learning to determine
          the polarity of a given word or sentence. In order to train the
          sentiment analysis model, a large dataset of text needs to be
          collected. Then, the text must be manually processed to assign each
          text sample with a sentiment score.
        </div>
        <div className="playthrough__sentence">
          This data can then be used to train the machine learning model. Next,
          the data needs to be preprocessed, which involves tokenization,
          lemmatization, and stop-word removal. Tokenization is the process of
          breaking each sentence into different elements of the sentence.
          Lemmatization is the process of converting words from their conjugated
          form, into their root form. For example, the word “changing” would be
          converted into the word “change”. Stop-word removal involves filtering
          out words that do not contribute to sentence polarity. After
          preprocessing, the machine learning algorithm learns from the patterns
          of the data and adjusts how the model scales polarity from the
          dataset.
        </div>
        <div className="playthrough__sentence">
          Once the model is trained, it is important to evaluate the accuracy of
          the polarity. The scale used in this exercise is a fine-grained,
          three-point scale where “0” indicates negative sentiment, “1”
          indicates neutral sentiment, and “2” indicates positive sentiment.
        </div>
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

SentimentAnalysisInfo.propTypes = {
  actions: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SentimentAnalysisInfo);
