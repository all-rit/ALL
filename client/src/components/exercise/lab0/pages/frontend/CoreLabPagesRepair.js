import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import { Button } from "reactstrap";

export const CoreLabPagesRepair = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <Page nextPage={ROUTES.SECTION_INTEGRATION} completed={completed}>
      <Page.Header>
        <Page.Header.Title>Core Lab Pages Repair</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <div>
          <Button onClick={() => setCompleted(!completed)}>
            Flip Completed
          </Button>
        </div>
      </Page.Body>
    </Page>
  );
};
