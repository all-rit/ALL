import React from "react";
import { Page } from "../../components/Page";
import { ROUTES } from "../../../../../constants/lab0/index";
import SQLQueryMock from "../../Mocks/SQLQueryMock";

export const SchemaDesignRepair = () => {
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
    <Page nextPage={ROUTES.SECTION_SERVICE_CONTROLLER} completed>
      <Page.Header>
        <Page.Header.Title>
          Database Design &amp; Schema Models Repair
        </Page.Header.Title>
      </Page.Header>
      <div className="tw-m-4">
        <SQLQueryMock
          name={sqlTableData.name}
          query={sqlTableData.query}
          columns={sqlTableData.columns}
          records={sqlTableData.rows}
        />
      </div>
    </Page>
  );
};
