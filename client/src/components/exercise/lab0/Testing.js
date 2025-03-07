import React, { useState } from "react";
import SQLQueryMock from "./Mocks/SQLQueryMock";
// Disable react/prop-types, react/no-unescaped-entities, and no-unused-vars
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

const Testing = () => {
  const [activeTab, setActiveTab] = useState("sql");

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
    <div className="tw-p-6 tw-max-w-6xl tw-mx-auto">
      <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
        Testing Environment
      </h2>
      <div className="tw-mt-4">
        <SQLQueryMock
          name={sqlTableData.name}
          query={sqlTableData.query}
          columns={sqlTableData.columns}
          records={sqlTableData.rows}
        />
      </div>
    </div>
  );
};

export default Testing;
