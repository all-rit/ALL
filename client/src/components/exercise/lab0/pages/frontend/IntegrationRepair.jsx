import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import Repair from "../../DevelopLabSection/IntegrationRepair/Repair";

export const IntegrationRepair = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <Page
      nextPage={ROUTES.SECTION_COMPONENT_LIBRARY}
      completed={completed}
      exercise
    >
      <Page.Header>
        <Page.Header.Title>Backend Integration Repair</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <div>
          <p>
            In this exercise, you will be hitting the similar endpoint as you
            did in the backend section of the lab where we want to get a users
            exercise data, but this time from the perspective of the frontend.
          </p>
          <br />
          <div className={"tw-text-center"}>
            <p>Below is the URL we want to hit:</p>
            <code>http://localhost:3000/labX/submitExercise</code>
          </div>
          <br />
          <p>
            At ALL, we have a suite of pre-built functions using
            Javascript&apos;s built-in <code>fetch()</code> capabilities, such
            as <code>get()</code>, <code>postWithBody()</code>, and more,
            simplifying the integration process. In above request, we want to
            send the <code>userId</code> and <code>exerciseData</code> for
            submitExercise in the <code>body</code> of the request.
          </p>
        </div>
        <Repair setCompleted={setCompleted} />
      </Page.Body>
    </Page>
  );
};
