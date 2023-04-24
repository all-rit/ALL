/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { navigate } from "@reach/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import React, { useState, useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
// import Popup from "../../shared/Popup";

const DataRepair = (props) => {
  const { actions } = props;

  /*
    make sure that users cannot click "previous" or "continue buttons"
    while they are playing the exercise
    */
  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  /*
    state variables to contain the user's inputted repair values
    */
  const [/*messageOneValue,*/ setMessageOneValue] = useState(0);
  const [/*messageOneValue,*/ setMessageTwoValue] = useState(0);

  /*
    state variables to track state of repair section
    */
  const [repairOpen, setRepairOpen] = useState(false);
  const [userError /*setUserError*/] = useState(true);

  // the only acceptable values that a user can enter
  // const repairAllowList = [0, 1, 2];

  /*
    confirm that the user entered a value for every message
    confirm that the user entered either 0, 1, or 2 for every message
    i.e. they cannot enter a string, boolean, etc.
    use the allow list to compare user entered value to acceptable values
    */
  // const validateRepair = () => {

  // }

  const handleContinue = () => {
    // TODO: navigate to the next page
    navigate("/Lab8/Exercise/DataRepair");
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={"Repair the Dataset"}
        justifyAlignment={"space-between"}
      />

      <div className="cognitive_instructions margin-bottom-2">
        {/* instructions for the user */}
        Repair the dataset by assigning the correct polarity to each message.
        <br />
        Each message should be assigned a sentiment score of either 0, 1, or 2.
        <br />
        <br />
        Click &lsquo;Repair&rsquo; to make the appropriate changes.
      </div>

      {/* add popup message */}

      {/* user must click this button to populate the fake IDE */}
      <button
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onClick={() => {
          !repairOpen ? setRepairOpen(true) : "";
        }}
        key="repair"
      >
        Repair
      </button>
      {/* disable this button until the user successfully enters repairs */}
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="Next"
        disabled={userError}
      >
        Next
      </button>
      {/* only display the repair section if it should be open */}
      {repairOpen && (
        <div className="code_editor">
          <div className="code_editor__content">
            {/* name of file in fake IDE */}
            <div className="code_editor__files">
              <div className="code_editor__file code_editor__file--active">
                SentimentAnalysisMessages.js
              </div>
            </div>
            <div className="code_editor__code">
              {/* top comments section */}
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Make changes to the dataset by assigning the
                  correct sentiment score to each message.
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; 0 - negative sentiment
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; 1 - neutral sentiment
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; 2 - positive sentiment
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Note: be sure to consider the context of the game
                </span>
              </div>

              {/* opening - messages variable */}
              {/* should be on one line */}
              <div className="code_editor__line">
                <span className="code_editor__const">const </span>
                <span className="code_editor__json">messages </span>
                <span>= </span>
                <span className="code_editor__class">{"{"}</span>
              </div>

              {/* pre-configured messages with correct sentiment score */}
              {/* first message */}
              <div className="code_editor__json_value code_editor__line">
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* opening bracket */}
                &#123;
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* message */}
                <span>
                  message: &quot;watching your streams always puts me in a good mood&quot;,
                </span>
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* sentiment score */}
                <span>ai_sentiment_score: 2&nbsp;</span>
                <br />
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* closing bracket */}
                &#125;,
              </div>

              {/* second message */}
              <div className="code_editor__json_value code_editor__line">
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* opening bracket */}
                &#123;
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* message */}
                <span>
                  message: &quot;seen more skill from someone playing with their feet&quot;,
                </span>
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* sentiment score */}
                <span>ai_sentiment_score: 0&nbsp;</span>
                <br />
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* closing bracket */}
                &#125;,
              </div>

              {/* 2 messages total to repair */}
              {/* first message */}
              <div className="code_editor__json_value code_editor__line-background--light">
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* opening bracket */}
                &#123;
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* message */}
                <span>
                  message: &quot;u r the w0r$t streamer ive ever seen&quot;,
                </span>
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* sentiment score */}
                <span>ai_sentiment_score:&nbsp;</span>
                <span>
                  <input
                    name="messageOne"
                    type="text"
                    placeholder={0}
                    onChange={(e) => {
                      setMessageOneValue(e.target.value);
                    }}
                    title={`message one`}
                  />
                </span>
                <br />
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* closing bracket */}
                &#125;,
              </div>
              {/* second message */}
              <div className="code_editor__json_value code_editor__line-background--light">
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* opening bracket */}
                &#123;
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* message */}
                <span>
                  message: &quot;sweet usage of that potion to poison that playa.&quot;,
                </span>
                <br />
                {/* two tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* sentiment score */}
                <span>ai_sentiment_score:&nbsp;</span>
                <span>
                  <input
                    name="messageTwo"
                    type="text"
                    placeholder={0}
                    onChange={(e) => {
                      setMessageTwoValue(e.target.value);
                    }}
                    title={`message two`}
                  />
                </span>
                <br />
                {/* one tab indent */}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {/* closing bracket */}
                &#125;,
              </div>

              {/* closing - end object */}
              <div className="code_editor__line">
                <span className="code_editor__class">{"}"}</span>
                <span>{";"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(DataRepair);
