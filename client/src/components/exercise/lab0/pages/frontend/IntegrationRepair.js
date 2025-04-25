import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const IntegrationRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_COMPONENT_LIBRARY} completed>
      <Page.Header>
        <Page.Header.Title>Backend Integration Repair</Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
