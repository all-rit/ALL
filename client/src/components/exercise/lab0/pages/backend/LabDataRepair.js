import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import DataRepair from "../../DevelopLabSection/LabData/LabDataRepair";

export const LabDataRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_SCHEMA_DESIGN} completed>
      <Page.Header>
        <Page.Header.Title>Basic Lab Data Repair</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <DataRepair />
      </Page.Body>
    </Page>
  );
};
