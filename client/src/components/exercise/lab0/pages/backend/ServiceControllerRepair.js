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
    <Page
      nextPage={ROUTES.SECTION_ROUTING}
      completed={repairsComplete}
      exercise
    >
      <Page.Header>
        <Page.Header.Title>
          Service Layer &amp; Controllers Repair
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <p>
          Below, you will have the opportunity to set up a controller and
          service for Lab X. To do so, we need to ensure that we are pulling in
          the necessary data from the request and using the correct operation to
          store the data.
          <br />
          <br />
          Let&apos;s start with the controller layer. We have received a REST
          request from our API to get an exercise for a specified user using the
          following URL:
          <br />
          <p className={"tw-text-center"}>
            <code>https://all.rit.edu/labX/getExercise/&#123;userID&#125;</code>
          </p>
          <br />
          Based on this URL, select where in the request we are looking for the
          user&apos;s ID, and then send that ID to the service.
        </p>
        <ControllerRepair
          controllerFix={controllerFix}
          setControllerFix={setControllerFix}
        />
        <br />
        <p>
          Next, we work on the service layer. At ALL, we use{" "}
          <code>Sequelize</code>, a Javascript ORM that simplifies the database
          querying process. It has multiple built-in functions, such as{" "}
          <code>.create()</code>,<code>.findOne()</code> and{" "}
          <code>.findAll()</code> that work with our DB models to manipulate,
          retrieve, and create data. Below, choose the correct Sequelize method
          and order pattern to find the most recent exercise in the database for
          the userId that was retrieved and passed from the controller.
        </p>
        <ServiceRepair serviceFix={serviceFix} setServiceFix={setServiceFix} />
      </Page.Body>
    </Page>
  );
};
