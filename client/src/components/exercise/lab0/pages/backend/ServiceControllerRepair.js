import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import ControllerRepair from "../../DevelopLabSection/ServiceController/ControllerRepair";
import ServiceRepair from "../../DevelopLabSection/ServiceController/ServiceRepair";

export const ServiceControllerRepair = () => {
  return (
    <Page nextPage={ROUTES.SECTION_ROUTING} completed>
      <Page.Header>
        <Page.Header.Title>
          Service Layer &amp; Controllers Repair
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <ControllerRepair />
        <ServiceRepair />
      </Page.Body>
    </Page>
  );
};
