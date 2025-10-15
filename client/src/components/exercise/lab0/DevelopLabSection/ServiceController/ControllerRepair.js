import React, { useState } from "react";
import PropTypes from "prop-types";
import { PARAMS, USER_ID } from "../../pages/backend/ServiceControllerRepair";
import { DARK } from "../../../../../constants/themes";
import {
  MultiTab,
  Tab,
  CodeLine,
  CodeDropdown,
} from "../../../../all-components/CodeBlock/Components";
import {
  ReactText,
  CommentText,
} from "../../../../all-components/CodeBlock/StyleComponents";

const ControllerRepair = (props) => {
  const { controllerFix, setControllerFix } = props;

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
        require(&apos;../../services/lab0/ExerciseService&apos;);
      </ReactText>
      <br />
      <ReactText>async function getExercise(req) &#123;</ReactText>
      <CodeLine>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          &#x2f;&#x2f; We see that the above API endpoint has the user&apos;s ID
          in the URL.
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          &#x2f;&#x2f; Where would we want to pull the ID from?
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>const &#123; userID &#125; = req.</ReactText>
        <CodeDropdown
          toggle={toggleRequestDropdown}
          isOpen={requestDropdownOpen}
          initialLabel={requestDropdownLabel}
          options={REQ_OPTIONS}
          setSelection={updateRequest}
          selectionCorrect={controllerFix.request === PARAMS}
          theme={DARK}
        />
        <ReactText>;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          &#x2f;&#x2f; Make sure you use the exact value that was destructured
          from the URL.
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>return await ExerciseService.getExercise(</ReactText>
        <CodeDropdown
          toggle={toggleArgsDropdown}
          isOpen={argsDropdownOpen}
          initialLabel={argsDropdownLabel}
          options={ARGS_OPTIONS}
          setSelection={updateArgs}
          selectionCorrect={controllerFix.argument === USER_ID}
          theme={DARK}
        />
        <ReactText>);</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />
        <ReactText>&#125; catch (error) &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>
          console.error(&apos;Error: Could not Find Exercise&apos;, error);
        </ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />
        <ReactText>&#125;</ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <br />
      <CodeLine>
        <ReactText>module.exports = &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <Tab />
        <ReactText>getExercise</ReactText>
      </CodeLine>
      <ReactText>&#125;;</ReactText>
    </div>
  );
};

ControllerRepair.propTypes = {
  controllerFix: PropTypes.shape({
    request: PropTypes.string,
    argument: PropTypes.string,
  }),
  setControllerFix: PropTypes.func,
};
export default ControllerRepair;
