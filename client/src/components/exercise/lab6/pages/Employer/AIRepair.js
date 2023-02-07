/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import RepairService from "../../../../../services/lab6/RepairService";
import CodeUpdateHeader from "../../../lab3/components/CodeUpdateHeader";
import Popup from "../../../shared/Popup";

const AIRepair = (props) => {
  const { actions, user } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
    popUpHandler("");
  }, [actions]);

  const [repairOpen, setRepairOpen] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(false);
  const [appearanceValue, setAppearanceValue] = useState("true");
  const [experienceValue, setExperienceValue] = useState(4);
  const [availabilityValue, setAvailabilityValue] = useState("Full-Time");
  const [payValue, setPayValue] = useState(45000);
  const [userError, setUserError] = useState(true);
  const [appearanceValueError, setAppearanceValueError] = useState(false);
  const [experienceValueError, setExperienceValueError] = useState(false);
  const [availabilityValueError, setAvailabilityValueError] = useState(false);
  const [payValueError, setPayValueError] = useState(false);

  const popUpHandler = (message) => {
    setPopUpMessage(message);
  };

  const validateRepair = () => {
    let error = false;
    if (appearanceValue !== "false") {
      setAppearanceValueError(true);
      error = true;
    } else {
      setAppearanceValueError(false);
    }
    if (parseInt(experienceValue) <= 0) {
      setExperienceValueError(true);
      error = true;
    } else {
      setExperienceValueError(false);
    }
    if (parseInt(payValue) <= 0) {
      setPayValueError(true);
      error = true;
    } else {
      setPayValueError(false);
    }
    if (
      availabilityValue !== "Any" &&
      availabilityValue !== "Full-Time" &&
      availabilityValue !== "Part-Time"
    ) {
      setAvailabilityValueError(true);
      error = true;
    } else {
      setAvailabilityValueError(false);
    }
    if (!error) {
      setUserError(false);
      RepairService.submitRepair(
        user?.userid,
        appearanceValue,
        experienceValue,
        availabilityValue,
        payValue
      );
      setRepairOpen(false);
      popUpHandler("The repairs have been made.");
    } else {
      setUserError(true);
      popUpHandler("Errors in Repair. Please fix");
    }
  };

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
        Let&apos;s adjust the AI&apos;s configuration to allow for a more
        equitable hiring process.
        <br />
        Click &rsquo;Repair&rsquo; to make the appropriate changes.
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
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; to ignore appearance when making decisions
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
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Change the number of years of expected work
                    experience
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>experience:&nbsp;</span>
                  <span>
                    <input
                      name="appearancevalue"
                      type="text"
                      defaultValue={1}
                      onChange={(e) => {
                        setExperienceValue(e.target.value);
                      }}
                      title={`number of years of expected work experience`}
                      className={experienceValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {experienceValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Experience value must be greater than 0"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Change the expected candidates availability (ie.
                    &rsquo;Any&rsquo;, &rsquo;Full-Time&rsquo;,
                    &rsquo;Part-Time&rsquo;)
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>availability:&nbsp;</span>
                  <span>
                    <input
                      name="appearancevalue"
                      type="text"
                      defaultValue={"Full-Time"}
                      onChange={(e) => {
                        setAvailabilityValue(e.target.value);
                      }}
                      title={`expected candidate availability`}
                      className={
                        availabilityValueError ? "form-error-input" : ""
                      }
                    />
                  </span>
                  {availabilityValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {
                          "Availability must be the following: 'Any', 'Full-Time', 'Part-Time'"
                        }
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Change the expected candidates pay
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>expectedpay:&nbsp;</span>
                  <span>
                    <input
                      name="appearancevalue"
                      type="text"
                      defaultValue={45000}
                      onChange={(e) => {
                        setPayValue(e.target.value);
                      }}
                      title={`expected canidates pay`}
                      className={payValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {payValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"Pay value must be greater than 0"}
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
