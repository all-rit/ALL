import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import { Button } from "reactstrap";

export const IntegrationRepair = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <Page nextPage={ROUTES.SECTION_COMPONENT_LIBRARY} completed={completed}>
      <Page.Header>
        <Page.Header.Title>Backend Integration Repair</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Button onClick={() => setCompleted(true)}>Set Complete</Button>
      </Page.Body>
    </Page>
  );
};
