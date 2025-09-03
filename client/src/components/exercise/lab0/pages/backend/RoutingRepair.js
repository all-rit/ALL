import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import APIRequestExercise from "../../DevelopLabSection/API-Endpoints/APIRequestExercise";

export const RoutingRepair = () => {
  const [incorrectRequestComplete, setIncorrectRequestComplete] =
    useState(false);

  const [correctRequestComplete, setCorrectRequestComplete] = useState(false);

  return (
    <Page
      nextPage={ROUTES.SECTION_BACKEND_TIPS_TRICKS}
      completed={correctRequestComplete}
    >
      <Page.Header>
        <Page.Header.Title>
          API Endpoints &amp; Routing Repair
        </Page.Header.Title>
      </Page.Header>
      <APIRequestExercise
        correctRequestComplete={correctRequestComplete}
        setCorrectRequestComplete={setCorrectRequestComplete}
        incorrectRequestComplete={incorrectRequestComplete}
        setIncorrectRequestComplete={setIncorrectRequestComplete}
      />
    </Page>
  );
};
