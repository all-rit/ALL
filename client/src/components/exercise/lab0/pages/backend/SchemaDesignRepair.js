import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const SchemaDesignRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_SERVICE_CONTROLLER} completed>
      <Page.Header>
        <Page.Header.Title>
          Database Design &amp; Schema Models Repair
        </Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
