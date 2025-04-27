import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const BoilerplateRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_CORE_LAB_PAGES} completed>
      <Page.Header>
        <Page.Header.Title>Lab Boilerplate Repair</Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
