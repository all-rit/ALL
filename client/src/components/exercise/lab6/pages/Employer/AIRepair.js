import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import RepairService from "../../../../../services/lab6/RepairService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";
import {
  ERROR,
  REPAIR_ERROR,
  REPAIR_SUCCESS,
  SUCCESS,
} from "../../../../../constants/notifications";
import LabButton from "../../../../all-components/LabButton";
import RepairUpdateButton from "../../../../all-components/RepairUpdateButton";

const AIRepair = () => {
  const { actions, state } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const [repairOpen, setRepairOpen] = useState(false);
  const [appearanceValue, setAppearanceValue] = useState(8);
  const [experienceValue, setExperienceValue] = useState(5);
  const [availabilityValue, setAvailabilityValue] = useState(4);
  const [payValue, setPayValue] = useState(3);
  const [userError, setUserError] = useState(true);
  const [genderValue, setGenderValue] = useState(0);
  const [appearanceValueError, setAppearanceValueError] = useState(false);
  const [genderValueError, setGenderValueError] = useState(false);
  const [experienceValueError, setExperienceValueError] = useState(false);
  const [availabilityValueError, setAvailabilityValueError] = useState(false);
  const [payValueError, setPayValueError] = useState(false);
  const [weightedValueError, setWeightedValueError] = useState(false);
  const [repairVisible, setRepairVisible] = useState(false);

  const handleOpenRepair = () => {
    setRepairOpen(true);
    setTimeout(() => setRepairVisible(true), 0); // Allow animation to trigger
  };

  const handleCloseRepair = () => {
    setRepairVisible(false);
    setTimeout(() => setRepairOpen(false), 500); // Match animation duration
  };

  const validateRepair = () => {
    let error = false;
    let weightedValues =
      parseInt(appearanceValue) +
      parseInt(experienceValue) +
      parseInt(payValue) +
      parseInt(availabilityValue);
    if (weightedValues !== 20) {
      setWeightedValueError(true);
      error = true;
    }
    if (parseInt(genderValue) !== 0) {
      setGenderValueError(true);
      error = true;
    } else {
      setGenderValueError(false);
    }
    if (parseInt(appearanceValue) !== 0) {
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
    if (parseInt(availabilityValue) <= 0) {
      setAvailabilityValueError(true);
      error = true;
    } else {
      setAvailabilityValueError(false);
    }
    if (!error) {
      setUserError(false);
      actions.showSnackbar(REPAIR_SUCCESS, SUCCESS);
      RepairService.submitRepair(
        state.main.user?.userid,
        appearanceValue,
        experienceValue,
        availabilityValue,
        payValue,
      );
      handleCloseRepair();
    } else {
      setUserError(true);
      actions.showSnackbar(REPAIR_ERROR, ERROR);
    }
  };

  const handleContine = () => {
    navigate("/Lab6/Exercise/FixedHiringCandidate");
  };

  return (
    <div>
      <h2
        className={
          "tw-title tw-font-bold tw-text-[2.5rem] tw-text-left tw-my-6"
        }
      >
        {" "}
        Repair{" "}
      </h2>
      <div className="tw-body-text tw-text-left tw-my-6">
        Let&apos;s adjust the AI&apos;s configuration to allow for a fair hiring
        process.
        <br />
        <br />
        Click &rsquo;Repair&rsquo; to make the appropriate changes.
      </div>
      <div className={"tw-flex tw-gap-x-3 tw-justify-center"}>
        <LabButton onClick={handleOpenRepair} key="repair" label={"Repair"} />
        <LabButton
          onClick={handleContine}
          key="Next"
          disabled={userError}
          label={"Next"}
        />
      </div>

      {repairOpen && (
        <div
          className={`code_editor ${repairVisible ? "tw-opacity-100" : "tw-opacity-0"} tw-transition-opacity tw-duration-500 tw-ease-in`}
        >
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
                  to ignore appearance when making decisions.
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; When the AI is analyzing a candidate each attribute
                  is weighted differently.
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; When a criteria from an atribute is met its weight
                  is added to a total.
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; When the weighted values add up to 75% (15) of its
                  total (20), the AI makes a recommendation
                </span>
              </div>
              <div className="code_editor__line">
                <span className="code_editor__line--darkgreen">
                  &#47;&#47; Note: the weighted values must add up to 20
                </span>
              </div>
              {weightedValueError && (
                <div className="code_editor__line">
                  <span className="form-error">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {"Weighted values must add up to 20"}
                  </span>
                </div>
              )}
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
                    &#47;&#47; genderWeight should always be 0 otherwise it is
                    unfair
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>genderWeight:&nbsp;</span>
                  <span>
                    <input
                      name="genderweight"
                      type="text"
                      defaultValue={0}
                      onChange={(e) => {
                        setGenderValue(e.target.value);
                      }}
                      title={`gender weight`}
                      className={genderValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {genderValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"genderWeight must be 0 to be fair"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Make changes to appearanceWeight, it is unfair
                    unless it is 0
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>appearanceWeight:&nbsp;</span>
                  <span>
                    <input
                      name="appearanceweight"
                      type="text"
                      defaultValue={7}
                      onChange={(e) => {
                        setAppearanceValue(e.target.value);
                      }}
                      title={`appearance weight`}
                      className={appearanceValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {appearanceValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"appearanceWeight must be 0 to be fair"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Adjust the experienceWeight to change the way the
                    AI evaluates candidates
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>experienceWeight:&nbsp;</span>
                  <span>
                    <input
                      name="experienceweight"
                      type="text"
                      defaultValue={6}
                      onChange={(e) => {
                        setExperienceValue(e.target.value);
                      }}
                      title={`experience weight`}
                      className={experienceValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {experienceValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"experienceWeight must be greater than 0"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Adjust the availabilityWeight to change the way
                    the AI evaluates candidates
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>availabilityWeight:&nbsp;</span>
                  <span>
                    <input
                      name="availabilityweight"
                      type="text"
                      defaultValue={4}
                      onChange={(e) => {
                        setAvailabilityValue(e.target.value);
                      }}
                      title={`availability weight`}
                      className={
                        availabilityValueError ? "form-error-input" : ""
                      }
                    />
                  </span>
                  {availabilityValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"availabilityWeight must be greater than 0"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="code_editor__form">
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; Adjust the expectedpayWeight to change the way
                    the AI evaluates candidates
                  </span>
                </div>
                <div className="code_editor__json_value code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span>expectedpayWeight:&nbsp;</span>
                  <span>
                    <input
                      name="expectedpayweight"
                      type="text"
                      defaultValue={3}
                      onChange={(e) => {
                        setPayValue(e.target.value);
                      }}
                      title={`expected pay weight`}
                      className={payValueError ? "form-error-input" : ""}
                    />
                  </span>
                  {payValueError && (
                    <div className="code_editor__line">
                      <span className="form-error">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {"expectedpayWeight must be greater than 0"}
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
          <RepairUpdateButton onClick={validateRepair} type="submit" />
        </div>
      )}
    </div>
  );
};

export default AIRepair;
