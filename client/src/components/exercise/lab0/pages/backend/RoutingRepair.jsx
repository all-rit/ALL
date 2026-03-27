import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import RESTQueryMock from "../../Mocks/RESTQueryMock";

export const RoutingRepair = () => {
  const [incorrectRequestComplete, setIncorrectRequestComplete] =
    useState(false);

  const [correctRequestComplete, setCorrectRequestComplete] = useState(false);

  return (
    <Page
      nextPage={ROUTES.SECTION_BACKEND_TIPS_TRICKS}
      completed={correctRequestComplete}
      exercise
    >
      <Page.Header>
        <Page.Header.Title>
          API Endpoints &amp; Routing Repair
        </Page.Header.Title>
      </Page.Header>
      <RESTQueryMock
        correctRequestComplete={correctRequestComplete}
        setCorrectRequestComplete={setCorrectRequestComplete}
        incorrectRequestComplete={incorrectRequestComplete}
        setIncorrectRequestComplete={setIncorrectRequestComplete}
      />
    </Page>
  );
};
