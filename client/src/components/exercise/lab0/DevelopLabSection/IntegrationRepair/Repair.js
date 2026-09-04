import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  CodeDropdown,
  CodeLine,
  MultiTab,
} from "../../../../all-components/CodeBlock/Components";
import {
  ImportText,
  JSONText,
  ReactText,
} from "../../../../all-components/CodeBlock/StyleComponents";
import { DARK } from "../../../../../constants/themes";

const Repair = (props) => {
  const POST = "post";
  const POST_WITH_BODY = "postWithBody";
  const GET = "get";
  const PUT_WITH_BODY = "putWithBody";
  const INITIAL_METHOD_LABEL = "Select the Correct Method";

  const SUBMIT_EXERCISE = "SUBMIT_EXERCISE";
  const GET_EXERCISE = "GET_EXERCISE";
  const INITIAL_ENDPOINT_LABEL = "Select the Correct Endpoint";

  const METHOD_OPTIONS = [POST, POST_WITH_BODY, GET, PUT_WITH_BODY];

  const ENDPOINT_OPTIONS = [SUBMIT_EXERCISE, GET_EXERCISE];

  const { setCompleted } = props;

  const [methodDropdownOpen, setMethodDropdownOpen] = useState(false);
  const [method, selectMethod] = useState("");

  const [endpointDropdownOpen, setEndpointDropdownOpen] = useState(false);
  const [endpoint, selectEndpoint] = useState("");

  const toggleMethodDropdown = () => {
    setMethodDropdownOpen(!methodDropdownOpen);
  };

  const toggleEndpointDropdown = () => {
    setEndpointDropdownOpen(!endpointDropdownOpen);
  };

  const methodCorrect = method === POST_WITH_BODY;
  const endpointCorrect = endpoint === SUBMIT_EXERCISE;

  useEffect(() => {
    if (methodCorrect && endpointCorrect) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [method, endpoint]);

  return (
    <div
      className={
        "code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg tw-text-[14px]"
      }
    >
      {/* Import Statement */}
      <CodeLine>
        <ImportText>import API from &ldquo;../API&rdquo;;</ImportText>
      </CodeLine>
      <br />
      {/* Endpoint Constants*/}
      <CodeLine>
        <ReactText>const endpoints = &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>
          const SUBMIT_EXERCISE = &apos;submitExercise&apos;;
        </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>const GET_EXERCISE = &apos;getExercise&apos;;</ReactText>
      </CodeLine>
      <CodeLine>
        <ReactText>&#125;;</ReactText>
      </CodeLine>
      <br />

      {/* Service Function */}
      <CodeLine>
        <ReactText> const LabXService = &#123; </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>
          submitExercise: (userID, exerciseData) =&gt; &#123;
        </ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>return API.</ReactText>
        <CodeDropdown
          isOpen={methodDropdownOpen}
          toggle={toggleMethodDropdown}
          options={METHOD_OPTIONS}
          initialLabel={INITIAL_METHOD_LABEL}
          setSelection={selectMethod}
          theme={DARK}
          selectionCorrect={methodCorrect}
        />
        <ReactText>(</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <div className={"tw-bg-[#444] tw-text-[#777] tw-px-1 tw-rounded-md"}>
          path:
        </div>
        <ReactText>
          &#96;$&#123;import.meta.env.VITE_SERVER_URL&#125;$&#123;endpoints.
        </ReactText>
        <CodeDropdown
          isOpen={endpointDropdownOpen}
          toggle={toggleEndpointDropdown}
          options={ENDPOINT_OPTIONS}
          initialLabel={INITIAL_ENDPOINT_LABEL}
          setSelection={selectEndpoint}
          theme={DARK}
          selectionCorrect={endpointCorrect}
        />
        <ReactText>&#125;&#96;,</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <div className={"tw-bg-[#444] tw-text-[#777] tw-px-1 tw-rounded-md"}>
          body:
        </div>
        <ReactText>&#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <JSONText>userID: userID</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <JSONText>exerciseData: exerciseData</JSONText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <ReactText>&#125;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={1} />
        <ReactText>);</ReactText>
      </CodeLine>
      <CodeLine>
        <ReactText>&#125;</ReactText>
      </CodeLine>
    </div>
  );
};

Repair.propTypes = {
  setCompleted: PropTypes.func,
};

export default Repair;
