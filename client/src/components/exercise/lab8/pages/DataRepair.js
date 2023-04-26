/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { navigate } from "@reach/router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import React, { useState, useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import Popup from "../../shared/Popup";

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
  const [messageOneValue, setMessageOneValue] = useState(0);
  const [messageTwoValue, setMessageTwoValue] = useState(0);
  const [messageThreeValue, setMessageThreeValue] = useState(0);
  const [messageFourValue, setMessageFourValue] = useState(0);
  const [messageFiveValue, setMessageFiveValue] = useState(0);
  const [messageSixValue, setMessageSixValue] = useState(0);
  const [messageOneValueError, setMessageOneValueError] = useState(false);
  const [messageTwoValueError, setMessageTwoValueError] = useState(false);
  const [messageThreeValueError, setMessageThreeValueError] = useState(false);
  const [messageFourValueError, setMessageFourValueError] = useState(false);
  const [messageFiveValueError, setMessageFiveValueError] = useState(false);
  const [messageSixValueError, setMessageSixValueError] = useState(false);

  /*
    state variables to track state of repair section
    */
  const [repairOpen, setRepairOpen] = useState(false);
  const [userError, setUserError] = useState(true);
  const [popUpMessage, setPopUpMessage] = useState("");

  // the only acceptable values that a user can enter
  // for their repairs
  const repairAllowList = [0, 1, 2];

  /*
    set the message to be displayed in the popup
  */
  const popUpHandler = (message) => {
    setPopUpMessage(message);
  };

  /*
    confirm that the user entered a value for every message
    confirm that the user entered either 0, 1, or 2 for every message
    i.e. they cannot enter a string, boolean, etc.
    use the allow list to compare user entered value to acceptable values
    */
  const validateRepair = () => {
    // track if the user made an error in their repairs
    let error = false;

    // check that each repair value is in the list of acceptable values
    // message one
    if (!(messageOneValue in repairAllowList) || messageOneValue == "") {
      // we need to display an error message
      setMessageOneValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageOneValueError(false);
    }
    // message two
    if (!(messageTwoValue in repairAllowList) || messageTwoValue == "") {
      // we need to display an error message
      setMessageTwoValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageTwoValueError(false);
    }
    // message three
    if (!(messageThreeValue in repairAllowList) || messageThreeValue == "") {
      // we need to display an error message
      setMessageThreeValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageThreeValueError(false);
    }
    // message four
    if (!(messageFourValue in repairAllowList) || messageFourValue == "") {
      // we need to display an error message
      setMessageFourValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageFourValueError(false);
    }
    // message five
    if (!(messageFiveValue in repairAllowList) || messageFiveValue == "") {
      // we need to display an error message
      setMessageFiveValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageFiveValueError(false);
    }
    // message six
    if (!(messageSixValue in repairAllowList) || messageSixValue == "") {
      // we need to display an error message
      setMessageSixValueError(true);
      error = true;
    } else {
      // clear the error message
      setMessageSixValueError(false);
    }

    if (!error) {
      // eventually need to send repair data to the backend
      console.log("Repairs made with no errors");
      setRepairOpen(false);
      popUpHandler("The repairs have been made.");
    } else {
      setUserError(true);
      popUpHandler(
        "There are errors in your repair. Please correct the errors."
      );
    }
  };

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
      <Popup message={popUpMessage} handler={popUpHandler} error={userError} />

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

              {/* 6 messages total to repair */}
              {/* first message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;watching your streams always puts me in a good
                    mood&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
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
                  </div>
                  {messageOneValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* second message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;mom here, this game is so bad for our children. STOP
                    THE STREAM!!!!!!&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
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
                  </div>
                  {messageTwoValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* third message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;u r the w0r$t streamer ive ever seen&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
                    <span>
                      <input
                        name="messageThree"
                        type="text"
                        placeholder={0}
                        onChange={(e) => {
                          setMessageThreeValue(e.target.value);
                        }}
                        title={`message three`}
                      />
                    </span>
                  </div>
                  {messageThreeValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* fourth message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;seen more skill from someone playing with their
                    feet&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
                    <span>
                      <input
                        name="messageFour"
                        type="text"
                        placeholder={0}
                        onChange={(e) => {
                          setMessageFourValue(e.target.value);
                        }}
                        title={`message four`}
                      />
                    </span>
                  </div>
                  {messageFourValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* fifth message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;sweet usage of that potion to poison that playa.&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
                    <span>
                      <input
                        name="messageFive"
                        type="text"
                        placeholder={0}
                        onChange={(e) => {
                          setMessageFiveValue(e.target.value);
                        }}
                        title={`message five`}
                      />
                    </span>
                  </div>
                  {messageFiveValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* sixth message */}
              <div className="code_editor__form">
                <div className="code_editor__line">
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* opening bracket */}
                  &#123;
                  <br />
                  {/* two tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* message */}
                  <span className="code_editor__json_property_key">
                    &quot;message&quot;
                  </span>{" "}
                  :&nbsp;
                  <span className="code_editor__json_property_value">
                    &quot;bro, your stream is straight up fire&quot;
                  </span>
                  ,
                  <br />
                  {/* sentiment score */}
                  <div className="code_editor__line-background--light">
                    {/* two tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__json_property_key">
                      &quot;ai_sentiment_score&quot;
                    </span>{" "}
                    :&nbsp;
                    <span>
                      <input
                        name="messageSix"
                        type="text"
                        placeholder={0}
                        onChange={(e) => {
                          setMessageSixValue(e.target.value);
                        }}
                        title={`message six`}
                      />
                    </span>
                  </div>
                  {messageSixValueError && (
                    <div className="code_editor__line">
                      {/* one tab indent */}
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Please enter either 0, 1, or 2."}
                      </span>
                    </div>
                  )}
                  {/* one tab indent */}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  {/* closing bracket */}
                  &#125;,
                </div>
              </div>

              {/* closing - end object */}
              <div className="code_editor__line">
                <span className="code_editor__class">{"}"}</span>
                <span>{";"}</span>
              </div>
            </div>
          </div>
          <button
            onClick={validateRepair}
            type="submit"
            className="button button--green button--block"
          >
            Update
          </button>
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
