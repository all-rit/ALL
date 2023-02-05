/* eslint-disable no-case-declarations */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import CodeUpdateHeader from "../../../lab3/components/CodeUpdateHeader";
import Popup from "../../../shared/Popup";

const AIRepair = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
    popUpHandler("");
  }, [actions]);

  const [repairOpen, setRepairOpen] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(false);
  const [appearanceValue, setAppearanceValue] = useState(false);
  const [userError, setUserError] = useState(true);
  const [appearanceValueError, setAppearanceValueError] = useState(false);

  const popUpHandler = (message) => {
    setPopUpMessage(message);
  };

  function validateRepair() {
    if (appearanceValue !== "false") {
      setAppearanceValueError(true);
      setUserError(true);
      userError;
      popUpHandler("Errors in Repair. Please fix");
    } else {
      setAppearanceValueError(false);
      setUserError(false);
      popUpHandler("The repairs have been made.");
    }
  }

  const handleContine = () => {
    navigate("/Lab6/Exercise/FixedHiringCandidate");
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={"Make Config Changes"}
        justifyAlignment={"space-between"}
      />
      <div className="cognitive_instructions margin-bottom-2">
        Let's adjust the AI's configuration to allow for a more equitable hiring
        process.
        <br />
        Click 'Repair' to make the appropriate changes.
      </div>
      <Popup message={popUpMessage} handler={popUpHandler} error={userError} />

      <button
        className="btn btn-second btn-xl text-uppercase  leftButton"
        onClick={() => {
          !repairOpen ? setRepairOpen(true) : "";
        }}
        key="repair"
      >
        Repair
      </button>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContine}
        key="Next"
        disabled={userError}
      >
        Next
      </button>
      {repairOpen && (
        <div className="code_editor">
          <div className="code_editor__content">
            <div className="code_editor__files">
              <div className="code_editor__file code_editor__file--active">
                hiringAIConfig.json
              </div>
            </div>
            <div className="code_editor__code">
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Now lets make changes to the config and tell the AI
                  to ignore appearance when making decisions
                </span>
              </div>
              <br />
              <div className="code_editor__line">
                <span className="code_editor__const">const </span>
                <span className="code_editor__json">hiringAIConfig </span>
                <span>= </span>
                <span className="code_editor__class">{"{"}</span>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Change appearance value from true to false
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>appearance:&nbsp;</span>
                  <span>
                    <input
                      name="appearancevalue"
                      type="text"
                      defaultValue={"true"}
                      onChange={(e) => {
                        setAppearanceValue(e.target.value);
                      }}
                      title={`appearance value from true to false`}
                      className={appearanceValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {appearanceValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Appearance value must be 'false'"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
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

export default AIRepair;
