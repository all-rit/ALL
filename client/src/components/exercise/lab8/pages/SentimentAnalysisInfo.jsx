import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";
import LabButton from "../../../all-components/LabButton";

const SentimentAnalysisInfo = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    // navigate to the repair section
    navigate("/Lab8/Exercise/DataRepair");
  };

  return (
    <div className="center-div tw-p-6">
      <div className="guidance margin-bottom-2">
        <h2 className="tw-title tw-text-left tw-my-6">
          Sentiment Analysis Background
        </h2>

        <div className="tw-body-text">
          Sentiment analysis, also referred to as opinion mining, is a natural
          language processing technique that uses machine learning to determine
          the polarity of a given word or sentence. In order to train the
          sentiment analysis model, a large dataset of text needs to be
          collected. Then, the text must be manually processed to assign each
          text sample with a sentiment score.
        </div>
        <div className="tw-body-text tw-my-6">
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
        <div className="tw-body-text">
          Once the model is trained, it is important to evaluate the accuracy of
          the polarity. The scale used in this exercise is a fine-grained,
          three-point scale where “0” indicates negative sentiment, “1”
          indicates neutral sentiment, and “2” indicates positive sentiment.
        </div>
      </div>

      <LabButton onClick={handleContinue} key="continue" label={"Continue"} />
    </div>
  );
};

export default SentimentAnalysisInfo;
