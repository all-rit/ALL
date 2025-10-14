import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import DataRepair from "../../DevelopLabSection/LabData/LabDataRepair";
import LabsTable from "../../DevelopLabSection/LabData/LabsTable";

export const LabDataRepair = () => {
  const [repairComplete, setRepairComplete] = useState(false);

  return (
    <Page
      nextPage={ROUTES.SECTION_SCHEMA_DESIGN}
      completed={repairComplete}
      exercise
    >
      <Page.Header>
        <Page.Header.Title>Basic Lab Data Repair</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <p>
          Below you will see how we structure our Labs table in our{" "}
          <code>schema.sql</code> file. This is how all of our labs are inputted
          into the database such that they will be displayable and reachable
          through our labs page.
        </p>
        <LabsTable />
        <br />
        <p>
          You will be able to create a new lab below in the same way that is
          standard for all current labs in the schema file are inserted. We use
          this schema file to spin up our Docker containers with fresh data
          whenever development is underway. Use the dropdowns to select the
          proper data for each empty column.
        </p>
        <DataRepair setRepairComplete={setRepairComplete} />
      </Page.Body>
    </Page>
  );
};
