import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  USER_ID,
  ATTEMPT_TIME,
  FIND_ONE,
} from "../../pages/backend/ServiceControllerRepair";
import {
  ReactText,
  CommentText,
} from "../../../../all-components/CodeBlock/StyleComponents";
import { DARK } from "../../../../../constants/themes";
import {
  MultiTab,
  Tab,
  CodeLine,
  CodeDropdown,
} from "../../../../all-components/CodeBlock/Components";

const ServiceRepair = (props) => {
  const { serviceFix, setServiceFix } = props;

  const CREATE = "create";
  const DESTROY = "destroy";
  const SELECT_OPERATION_LABEL = "Select a Sequelize Operation";
  const SELECT_ORDER_LABEL = "Select an Order";
  const OPERATION_OPTIONS = [CREATE, FIND_ONE, DESTROY];
  const ORDER_OPTIONS = [ATTEMPT_TIME, USER_ID];

  const [operationDropdownOpen, setOperationDropdownOpen] = useState(false);
  const [orderDropdownOpen, setOrderDropdownOpen] = useState(false);

  const [operationDropdownLabel, setOperationDropdownLabel] = useState(
    SELECT_OPERATION_LABEL,
  );
  const [orderDropdownLabel, setOrderDropdownLabel] =
    useState(SELECT_ORDER_LABEL);

  const toggleOperationDropdown = () => {
    setOperationDropdownOpen(!operationDropdownOpen);
  };

  const toggleOrderDropdown = () => {
    setOrderDropdownOpen(!orderDropdownOpen);
  };

  const updateOperation = (operation) => {
    setServiceFix((prev) => ({
      ...prev,
      operation: operation,
    }));
    setOperationDropdownLabel(operation);
  };

  const updateOrder = (order) => {
    setServiceFix((prev) => ({
      ...prev,
      order: order,
    }));
    setOrderDropdownLabel(order);
  };

  return (
    <div
      className={
        "code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg tw-text-[14px]"
      }
    >
      <ReactText>const db = require(&apos;../../database&apos;);</ReactText>
      <br />
      <ReactText>async function getExercise(data) &#123;</ReactText>
      <CodeLine>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          &#x2f;&#x2f; In this function, we want to FIND or GET the exact
          exercise data.
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={2} />
        <CommentText>
          &#x2f;&#x2f; Which option would be the best function for that?
        </CommentText>
      </CodeLine>
      <div className={"tw-flex tw-items-center"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>const exerciseResponse = await db.ExerciseLab0.</ReactText>
        <CodeDropdown
          toggle={toggleOperationDropdown}
          isOpen={operationDropdownOpen}
          initialLabel={operationDropdownLabel}
          options={OPERATION_OPTIONS}
          setSelection={updateOperation}
          selectionCorrect={serviceFix.operation === FIND_ONE}
          theme={DARK}
        />
        <ReactText>(</ReactText>
      </div>
      <CodeLine className={"tw-flex"}>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <CommentText>
          &#x2f;&#x2f; Since we want to find the most recent entry, how should
          we order our results?
        </CommentText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <ReactText>order: [(&apos;</ReactText>
        <CodeDropdown
          toggle={toggleOrderDropdown}
          isOpen={orderDropdownOpen}
          initialLabel={orderDropdownLabel}
          options={ORDER_OPTIONS}
          setSelection={updateOrder}
          selectionCorrect={serviceFix.order === ATTEMPT_TIME}
          theme={DARK}
        />
        <ReactText>&apos;, &apos;DESC&apos;)],</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <ReactText>where: &#123;</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={5} />
        <ReactText>userid: data,</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <ReactText>&#125;,</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={4} />
        <ReactText>raw: true,</ReactText>
      </CodeLine>
      <CodeLine>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#125;,</ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>);</ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>return exerciseResponse;</ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <Tab />
        <ReactText>&#125; catch(error) &#123;</ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>
          console.error(&apos;Error: Could not Find Exercise&apos;, error);
        </ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <Tab />
        <ReactText>&#125;</ReactText>
      </CodeLine>
      <ReactText>&#125;</ReactText>
      <br />
      <CodeLine className={"tw-flex"}>
        <ReactText>module.exports = &#123;</ReactText>
      </CodeLine>
      <CodeLine className={"tw-flex"}>
        <Tab />
        <ReactText>getExercise</ReactText>
      </CodeLine>
      <ReactText>&#125;;</ReactText>
    </div>
  );
};

ServiceRepair.propTypes = {
  serviceFix: PropTypes.shape({
    operation: PropTypes.string,
    order: PropTypes.string,
  }),
  setServiceFix: PropTypes.func,
};

export default ServiceRepair;
