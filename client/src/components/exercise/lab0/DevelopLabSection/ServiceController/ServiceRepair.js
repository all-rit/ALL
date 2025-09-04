import React, { useState } from "react";
import ReactText from "../../../../all-components/CodeBlock/StyleComponents/ReactText";
import MultiTab from "../../../../all-components/CodeBlock/Components/MultiTab";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import PropTypes from "prop-types";
import {
  USER_ID,
  ATTEMPT_TIME,
  FIND_ONE,
} from "../../pages/backend/ServiceControllerRepair";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ServiceRepair = (props) => {
  const { setServiceFix } = props;

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
      className={"code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg"}
    >
      <ReactText>const db = require(&apos;../../database&apos;);</ReactText>
      <br />
      <ReactText>async function getExercise(data) &#123;</ReactText>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>try &#123;</ReactText>
      </div>
      <div className={"tw-flex tw-items-center"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>const exerciseResponse = await db.ExerciseLab0.</ReactText>
        <ButtonDropdown
          toggle={toggleOperationDropdown}
          isOpen={operationDropdownOpen}
        >
          <DropdownToggle
            style={{ fontFamily: "monospace", backgroundColor: "#333" }}
            caret
          >
            {operationDropdownLabel}
          </DropdownToggle>
          <DropdownMenu>
            {OPERATION_OPTIONS.map((option) => {
              return (
                <DropdownItem
                  key={option}
                  onClick={() => updateOperation(option)}
                >
                  {option}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </ButtonDropdown>
        <ReactText>(</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#123;</ReactText>
      </div>
      <div className={"tw-flex tw-items-center"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>order: [(&apos;</ReactText>
        <ButtonDropdown toggle={toggleOrderDropdown} isOpen={orderDropdownOpen}>
          <DropdownToggle
            style={{ fontFamily: "monospace", backgroundColor: "#333" }}
            caret
          >
            {orderDropdownLabel}
          </DropdownToggle>
          <DropdownMenu>
            {ORDER_OPTIONS.map((option) => {
              return (
                <DropdownItem key={option} onClick={() => updateOrder(option)}>
                  {option}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </ButtonDropdown>
        <ReactText>&apos;, &apos;DESC&apos;)],</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>where: &#123;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={5} />
        <ReactText>userid: data,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>&#125;,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={4} />
        <ReactText>raw: true,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={3} />
        <ReactText>&#125;,</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>);</ReactText>
      </div>
      <div className={"tw-flex"}>
        <MultiTab numberOfTabs={2} />
        <ReactText>return exerciseResponse;</ReactText>
      </div>
      <div className={"tw-flex"}>
        <Tab />
        <ReactText>&#125; catch(error) &#123;</ReactText>
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

ServiceRepair.propTypes = {
  setServiceFix: PropTypes.func,
};

export default ServiceRepair;
