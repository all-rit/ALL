import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const ServiceControllerRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_ROUTING} completed>
      <Page.Header>
        <Page.Header.Title>
          Service Layer &amp; Controllers Repair
        </Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
