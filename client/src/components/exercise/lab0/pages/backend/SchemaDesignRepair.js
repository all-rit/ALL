import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import SQLQueryMock from "../../Mocks/SQLQueryMock";

export const SchemaDesignRepair = () => {
  const [complete, setComplete] = useState(false);
  const sqlTableData = {
    query: "SELECT * FROM labs",
    name: "labs",
    columns: [
      "id",
      "labName",
      "labShortName",
      "category",
      "shortDescription",
      "about",
      "reading",
      "reinforcement",
      "quiz",
    ],
    rows: [
      {
        id: 99,
        labName: "Walkthrough Demo Lab",
        labShortName: "Demo Lab",
        category: "Accessibility",
        shortDescription: "Learn about creating a lab from...",
        about:
          "In this demo lab, you will learn why it is important to create...",
        reading: "(...)",
        reinforcement: "(...)",
        quiz: "(...)",
      },
    ],
  };

  return (
    <Page
      nextPage={ROUTES.SECTION_SERVICE_CONTROLLER}
      completed={complete}
      exercise
    >
      <Page.Header>
        <Page.Header.Title>
          Database Design &amp; Schema Models Repair
        </Page.Header.Title>
      </Page.Header>
      <div className="tw-m-4">
        <p className={"tw-body-text tw-py-6"}>
          Below you can see a simulated version of a Database IDE. Add and
          remove records from the database table, filter results, and more. To
          move on, click <code>Add Record</code>, fill in the data for the new
          lab, then click the green <code>Execute</code> button.
        </p>
        <SQLQueryMock
          name={sqlTableData.name}
          query={sqlTableData.query}
          columns={sqlTableData.columns}
          records={sqlTableData.rows}
          setComplete={setComplete}
        />
      </div>
    </Page>
  );
};
