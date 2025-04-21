import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const RoutingRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_BACKEND_TIPS_TRICKS} completed>
      <Page.Header>
        <Page.Header.Title>
          API Endpoints &amp; Routing Repair
        </Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
