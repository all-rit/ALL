import React from "react";
import { navigate } from "@reach/router";
import Repair from "src/components/body/Repair/Repair";
import { EXERCISE_PATH, EXERCISE_STATES } from "src/constants/lab15";
import ModelRepairData from "src/constants/lab15/ModelRepair";
import useModelRepairService from "../hooks/useModelRepairService";
import ModelRepairImplementation from "./repairs/ModelRepairImplementation";
import useMainStateContext from "src/reducers/MainContext";

const MODEL_REPAIR_HEADING = "Model Repair";

const ModelRepair = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;
  const { data, functions } = useModelRepairService(
    user,
    EXERCISE_STATES.MODEL_REPAIR,
    ModelRepairData.inputData,
  );

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={MODEL_REPAIR_HEADING}
      repairText={[
        "Make the change to ALLe to grade the user based on their prompting along with trying to answer their question.",
      ]}
      files={[
        {
          fileId: 0,
          fileName: "ALL_IE_Output_Config.js",
          implementation: ModelRepairImplementation,
        },
      ]}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/prompt-builder`);
      }}
      repairComplete
    />
  );
};

export default ModelRepair;
