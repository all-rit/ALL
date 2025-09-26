import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { PARAMS, USER_ID } from "../../pages/backend/ServiceControllerRepair";

const ControllerRepair = (props) => {
  const { setControllerFix } = props;

  const BODY = "body";
  const QUERY = "query";
  const REQ = "req";
  const USER_ID_INCORRECT = "user_id";
  const SELECT_ARGS_LABEL = "Select Argument";
  const SELECT_REQUEST_LABEL = "Select Request Type";

  const REQ_OPTIONS = [BODY, PARAMS, QUERY];
  const ARGS_OPTIONS = [REQ, USER_ID_INCORRECT, USER_ID];

  const [argsDropdownOpen, setArgsDropdownOpen] = useState(false);
  const [requestDropdownOpen, setRequestDropdownOpen] = useState(false);
  const [argsDropdownLabel, setArgsDropdownLabel] = useState(SELECT_ARGS_LABEL);
  const [requestDropdownLabel, setRequestDropdownLabel] =
    useState(SELECT_REQUEST_LABEL);

  const toggleArgsDropdown = () => {
    setArgsDropdownOpen(!argsDropdownOpen);
  };

  const toggleRequestDropdown = () => {
    setRequestDropdownOpen(!requestDropdownOpen);
  };

  const updateRequest = (req) => {
    setControllerFix((prev) => ({
      ...prev,
      request: req,
    }));
    setRequestDropdownLabel(req);
  };

  const updateArgs = (arg) => {
    setControllerFix((prev) => ({
      ...prev,
      argument: arg,
    }));
    setArgsDropdownLabel(arg);
  };

  return (
    <div
      className={
        "code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg tw-text-[14px]"
      }
    >
      <ReactText>
        const ExerciseService =
        require(&apos;../../services/lab0/ExerciseService);
      </ReactText>
      <br />
      <ReactText>async function getExercise(req) &#123;</ReactText>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </div>
      <div className={"tw-flex tw-items-center tw-mb-3"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>const &#123; userID &#125; = req.</ReactText>
        <ButtonDropdown
          toggle={toggleRequestDropdown}
          isOpen={requestDropdownOpen}
        >
          <DropdownToggle
            style={{ fontFamily: "monospace", backgroundColor: "#333" }}
            caret
          >
            {requestDropdownLabel}
          </DropdownToggle>
          <DropdownMenu>
            {REQ_OPTIONS.map((option) => {
              return (
                <DropdownItem
                  key={option}
                  onClick={() => updateRequest(option)}
                >
                  {option}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </ButtonDropdown>
        <ReactText>;</ReactText>
      </div>
      <div className={"tw-flex tw-items-center"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>return await ExerciseService.getExercise(</ReactText>
        <ButtonDropdown toggle={toggleArgsDropdown} isOpen={argsDropdownOpen}>
          <DropdownToggle
            style={{ fontFamily: "monospace", backgroundColor: "#333" }}
            caret
          >
            {argsDropdownLabel}
          </DropdownToggle>
          <DropdownMenu>
            {ARGS_OPTIONS.map((option) => {
              return (
                <DropdownItem key={option} onClick={() => updateArgs(option)}>
                  {option}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </ButtonDropdown>
        <ReactText>);</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125; catch (error) &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>
          console.error(&apos;Error: Could not Find Exercise&apos;, error);
        </ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125;</ReactText>
      </div>
      <ReactText>&#125;</ReactText>
      <br />
      <div className={"tw-flex"}>
        <ReactText>module.exports = &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>getExercise</ReactText>
      </div>
      <ReactText>&#125;;</ReactText>
    </div>
  );
};

ControllerRepair.propTypes = {
  setControllerFix: PropTypes.func,
};
export default ControllerRepair;
