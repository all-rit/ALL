import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const FrontendTipsTricks = () => {
  return (
    <Page nextPage={ROUTES.SELECTION_ROUTE} completed>
      <Page.Header>
        <Page.Header.Title>Frontend Tips &amp; Tricks</Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
