import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const CoreLabPagesRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_INTEGRATION}>
      <Page.Header>
        <Page.Header.Title>Core Lab Pages Repair</Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
