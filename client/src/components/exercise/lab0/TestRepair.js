import React from "react";
import { navigate } from "@reach/router";
import Repair from "../../body/Repair/Repair";
import TestImplementation from "./TestImplementation";
import useLabRepairOffline from "../../body/Repair/hooks/useLabRepairOffline";

// This would normally be in a const file...
const DEFAULT_INPUTS = [
  {
    id: 0,
    fileId: 0,
    userInput: "",
    validate_expression: "123",
    correct_expression: "123",
  },
  {
    id: 1,
    fileId: 1,
    userInput: "",
    validate_expression: "456",
    correct_expression: "456",
  },
  {
    id: 2,
    fileId: 2,
    userInput: "",
    validate_expression: "789",
    correct_expression: "789",
  },
];

const TestRepair = () => {
  const { data, functions } = useLabRepairOffline(DEFAULT_INPUTS);

  return (
    <Repair
      data={data}
      functions={functions}
      headingText="Test Repair"
      repairText={["This is some repair text that can be changed!"]}
      files={[
        {
          fileId: 0,
          fileName: "File1.js",
          implementation: TestImplementation,
        },
        {
          fileId: 1,
          fileName: "File2.js",
          implementation: TestImplementation,
        },
        {
          fileId: 2,
          fileName: "File3.js",
          implementation: TestImplementation,
        },
      ]}
      navigateNext={() => {
        navigate("/Lab0/Exercise");
      }}
    />
  );
};

export default TestRepair;
