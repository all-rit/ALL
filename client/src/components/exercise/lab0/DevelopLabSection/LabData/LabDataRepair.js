import React from "react";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import { labData } from "../../../../../constants/lab0/DevelopALab/LabTableData";
// import { SQLText, JSONText } from "../../../../all-components/CodeBlock/StyleComponents"

const DataRepair = () => {
  return (
    <div
      className={"code_editor__code tw-w-full tw-h-full tw-p-5 tw-rounded-lg"}
    >
      <div className={"tw-flex tw-w-full tw-flex-wrap"}>
        <SQLText> INSERT INTO public.labs (</SQLText>
        {labData.map((data, index) => {
          return (
            <div key={index} className={"tw-flex"}>
              <div className={"tw-mr-[-3px]"}>
                <SQLText>{data.name}</SQLText>
              </div>
              {index < labData.length - 1 && <SQLText>,</SQLText>}
            </div>
          );
        })}
        <SQLText>)</SQLText>
      </div>
      <div>
        <SQLText> VALUES (</SQLText>
        <div className={"tw-flex tw-flex-col"}>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
          <SQLText>0</SQLText>
        </div>
      </div>
    </div>
  );
};

export default DataRepair;
