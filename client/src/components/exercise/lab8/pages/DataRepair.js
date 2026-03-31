import { navigate } from "@reach/router";
import React, { useState, useEffect, useContext } from "react";
import Popup from "../../../all-components/Popup";
import { CHAT_MESSAGES } from "../../../../constants/lab8/messages";
import ExerciseService from "../../../../services/lab8/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";
import RepairUpdateButton from "../../../all-components/RepairUpdateButton";
import LabButton from "../../../all-components/LabButton";
import ExerciseStateContext from "../Lab8Context";

// the only acceptable values that a user can enter
// for their repairs
const repairAllowList = [0, 1, 2];

const DataRepair = () => {
  const { actions, state } = useMainStateContext();
  const [isCorrect, setIsCorrect] = useState(false);
  const [repairCount, setRepairCount] = useState(0);
  const {
    setRepairState,
    currentMessages,
    setCurrentMessages,
    setPolaritiesCorrect,
  } = useContext(ExerciseStateContext);
  /* 
    To-Do this would require rewriting this context.
    Polarity can never be NaN
  */

  /*
    state variables to contain the user's inputted repair values
    */
  const [messageError, setMessageError] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  /*
    state variables to track state of repair section
    */
  const [repairOpen, setRepairOpen] = useState(false);
  const [userError, setUserError] = useState(true);
  const [popUpMessage, setPopUpMessage] = useState("");

  const handleAiPolarityChange = (messageId, newValue) => {
    setCurrentMessages((prevState) =>
      prevState.map((message) =>
        message.id === messageId
          ? { ...message, ai_polarity: newValue }
          : message,
      ),
    );
  };
  /*
    make sure that users cannot click "previous" or "continue buttons"
    while they are playing the exercise
    */
  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

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
    const localMessageError = [...messageError];

    currentMessages.forEach((message, index) => {
      if (!(message.ai_polarity in repairAllowList)) {
        // we need to display an error message
        error = true;
        localMessageError.splice(index, 1, true);
      } else {
        // clear the error message
        localMessageError.splice(index, 1, false);
      }
    });
    if (!error) {
      setRepairOpen(false);
      setUserError(false);
      popUpHandler("Repair successful!");
      setRepairState(true);
      setIsCorrect(validateCorrectAI());
    } else {
      setUserError(true);
      popUpHandler(
        "There are errors in your repair. Please correct the errors.",
      );
    }
    setMessageError(localMessageError);
  };

  /**
   * fetchDataRepair(): is a function responsible for handling retrieval of data to
   * populate data repair sections.
   * @returns returns object containing user lab information
   */
  const fetchDataRepair = async () => {
    try {
      const { userid } = state.main.user;
      return await ExerciseService.getUserRepair(userid);
    } catch (error) {
      console.error(error);
    }
  };
  /**
   * postDataRepair(): is a function responsible for handling posting of data to
   * populate data repair sections.
   * @returns returns object containing user lab information
   */
  const postExerciseChange = async (data) => {
    try {
      return await ExerciseService.submitRepair(data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * handleRepair(): is a helper function that is responsible for the
   * opening and closing of the repair window in this view.
   */
  const handleRepair = async () => {
    if (!repairOpen) {
      setRepairOpen(true);
    }
    const dataRepair = await fetchDataRepair();
    if (dataRepair?.userid) {
      const { numRepair, isComplete } = dataRepair;
      setCurrentMessages(isComplete ? CHAT_MESSAGES.messages : currentMessages);
      setRepairCount(numRepair);
    }
  };

  /**
   * validateCorrectAI(): is a helper function that is responsible for checking
   * to see if the ai polarity of all of the messages matches the value of the
   * intended polarity value.
   */
  const validateCorrectAI = () => {
    const localMessages = currentMessages;
    let isCorrectLocal = true;
    const validateEnteredVsPolarity = (message) => {
      return message?.ai_polarity === message?.intended_polarity;
    };

    const messagesOutput = [];
    localMessages.forEach((message) => {
      if (validateEnteredVsPolarity(message)) {
        messagesOutput.push(true);
      } else {
        messagesOutput.push(false);
        isCorrectLocal = false;
      }
    });
    return isCorrectLocal;
  };
  /**
   * handleContinue() is a helper function that is responsible for
   * handling Continue behavior as it sends the request to send user data
   * then navigates them to the simulation.
   */
  const handleContinue = async () => {
    // go back to the biased simulation
    const { userid } = state.main.user;
    const body = {
      userId: userid,
      repair: { currentMessages },
      isComplete: isCorrect,
      numRepair: repairCount,
    };
    if (isCorrect) {
      setPolaritiesCorrect(true);
    } else {
      setPolaritiesCorrect(false);
    }
    await postExerciseChange(body);
    navigate("/Lab8/Exercise/BiasedSimulation");
  };

  return (
    <div className={"tw-p-6"}>
      <h1 className={"tw-title tw-text-left tw-my-6"}> Repair </h1>
      <p className="tw-body-text">
        {/* instructions for the user */}
        Repair the dataset by assigning the correct polarity to each message.
        Each message should be assigned a sentiment score of either 0, 1, or 2.
      </p>
      <p className={"tw-body-text tw-mb-3"}>
        Click &lsquo;Repair&rsquo; to make the appropriate changes.
      </p>
      <Popup message={popUpMessage} handler={popUpHandler} error={userError} />
      <div className={"tw-flex tw-gap-x-3 tw-justify-center tw-w-full"}>
        <LabButton
          onClick={() => handleRepair()}
          key={"repair"}
          label={"Repair"}
        />
        <LabButton
          onClick={handleContinue}
          key={"Next"}
          disabled={userError}
          label={"Next"}
        />
      </div>
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
              {/* Going to map all of the messages instead of one by one */}
              {currentMessages.map((message, index) => (
                <div className="code_editor__form" key={message.id}>
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
                      &quot;{message.content}&quot;
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
                          name="message"
                          type="number"
                          placeholder={0}
                          value={message.ai_polarity}
                          onChange={(e) => {
                            handleAiPolarityChange(
                              message.id,
                              parseInt(e.target.value),
                            );
                          }}
                          title={
                            isNaN(message.ai_polarity)
                              ? -1
                              : message.ai_polarity
                          }
                          className={
                            messageError[index] ? "form-error-input" : ""
                          }
                        />
                      </span>
                    </div>
                    {messageError[index] && (
                      <div className="code_editor__line">
                        {/* one tab indent */}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="form-error">
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {"Please enter either 0, 1, or 2."}
                        </span>
                      </div>
                    )}
                    {/* if this is the user's third (or higher) time doing the repair section */}
                    {/* then display a hint */}
                    {repairCount >= 3 && (
                      <div className="code_editor__line">
                        {/* one tab indent */}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span className="form-error">
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {"Hint: try entering " + message.intended_polarity}
                        </span>
                      </div>
                    )}
                    {/* one tab indent */}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    {/* closing bracket */}
                    &#125;,
                  </div>
                </div>
              ))}

              {/* closing - end object */}
              <div className="code_editor__line">
                <span className="code_editor__class">{"}"}</span>
                <span>{";"}</span>
              </div>
            </div>
          </div>
          <RepairUpdateButton onClick={validateRepair} />
        </div>
      )}
    </div>
  );
};
export default DataRepair;
