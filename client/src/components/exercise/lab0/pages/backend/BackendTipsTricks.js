import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";

export const BackendTipsTricks = () => {
  return (
    <Page nextPage={ROUTES.HOME}>
      <Page.Header>
        <Page.Header.Title>Backend Tips &amp; Tricks</Page.Header.Title>
      </Page.Header>
    </Page>
  );
};
