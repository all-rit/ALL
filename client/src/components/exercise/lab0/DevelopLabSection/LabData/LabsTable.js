import React from "react";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import Tab from "../../../../all-components/CodeBlock/Components/Tab";
import { labData } from "../../../../../constants/lab0/DevelopALab/LabTableData";

const LabsTable = () => {
  return (
    <div
      className={
        "code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg tw-text-[14px]"
      }
    >
      <SQLText> CREATE TABLE labs (</SQLText>
      {labData.map((data, index) => {
        return (
          <div key={index} className={"tw-flex"}>
            <Tab />
            <div className={"tw-w-1/2 tw-flex tw-justify-between"}>
              <SQLText>{data.name}</SQLText>
              <SQLText>{data.type}</SQLText>
            </div>
          </div>
        );
      })}
      <div className={"tw-flex"}>
        <Tab />
        <SQLText> primary key (id)</SQLText>
      </div>
      <SQLText>);</SQLText>
    </div>
  );
};

export default LabsTable;
