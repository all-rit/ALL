import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import ControllerRepair from "../../DevelopLabSection/ServiceController/ControllerRepair";
import ServiceRepair from "../../DevelopLabSection/ServiceController/ServiceRepair";

export const FIND_ONE = "findOne";
export const ATTEMPT_TIME = "attemptTime";
export const PARAMS = "params";
export const USER_ID = "userID";

export const ServiceControllerRepair = () => {
  const [controllerFix, setControllerFix] = useState({
    request: "",
    argument: "",
  });

  const [serviceFix, setServiceFix] = useState({
    operation: "",
    order: "",
  });

  const controllerRepairComplete =
    controllerFix.request === PARAMS && controllerFix.argument === USER_ID;

  const serviceRepairComplete =
    serviceFix.operation === FIND_ONE && serviceFix.order === ATTEMPT_TIME;

  const repairsComplete = controllerRepairComplete && serviceRepairComplete;

  return (
    <Page nextPage={ROUTES.SECTION_ROUTING} completed>
      <Page.Header>
        <Page.Header.Title>
          Service Layer &amp; Controllers Repair
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <ControllerRepair
          controllerFix={controllerFix}
          setControllerFix={setControllerFix}
        />
        <ServiceRepair serviceFix={serviceFix} setServiceFix={setServiceFix} />
      </Page.Body>
      {repairsComplete && (
        <div
          className={
            "tw-absolute tw-flex tw-top-5 tw-right-5 tw-h-28 tw-w-28 tw-bg-success tw-text-white tw-p-10 tw-rounded-full tw-text-5xl tw-text-center tw-items-center tw-justify-center"
          }
        >
          &#10003;
        </div>
      )}
    </Page>
  );
};
