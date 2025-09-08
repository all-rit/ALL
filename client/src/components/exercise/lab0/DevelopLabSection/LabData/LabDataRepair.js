import React, { useState } from "react";
import SQLText from "../../../../all-components/CodeBlock/StyleComponents/SQLText";
import { labData } from "../../../../../constants/lab0/DevelopALab/LabTableData";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import JSONText from "../../../../all-components/CodeBlock/StyleComponents/JSONText";
// import { SQLText, JSONText } from "../../../../all-components/CodeBlock/StyleComponents"

const DataRepair = () => {
  const CORRECT_REPAIR = {
    shortName: "How to Build a Lab",
    category: "",
    shortDescription: "",
    walkthroughVideo: "",
  };

  const INITIAL_SHORT_NAME_LABEL = "Select a proper short lab name";

  const [shortNameDropdownOpen, setShortNameDropdownOpen] = useState(false);
  const [shortNameDropdownLabel, setShortNameDropdownLabel] = useState(
    INITIAL_SHORT_NAME_LABEL,
  );
  const [dataRepair, setDataRepair] = useState({
    shortName: "",
    category: "",
    shortDescription: "",
    walkthroughVideo: "",
  });

  const repairComplete = dataRepair === CORRECT_REPAIR;

  const toggleShortNameDropdown = () => {
    setShortNameDropdownOpen(!shortNameDropdownOpen);
  };

  const updateShortName = (option) => {
    setDataRepair((prev) => ({
      ...prev,
      shortName: option,
    }));
    setShortNameDropdownLabel(option);
  };

  const SHORT_NAME_OPTIONS = [
    "Building Really Cool Labs with ALL",
    "How to Build a Lab",
    "Labs",
  ];

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
          <JSONText>0</JSONText>
          <JSONText>
            &apos;How to Build a Lab with Accessible Learning Labs&apos;,
          </JSONText>
          <div className={"tw-flex tw-w-1/2 tw-items-center"}>
            <ButtonDropdown
              toggle={toggleShortNameDropdown}
              isOpen={shortNameDropdownOpen}
            >
              <DropdownToggle
                style={{ fontFamily: "monospace", backgroundColor: "#333" }}
                caret
              >
                {shortNameDropdownLabel}
              </DropdownToggle>
              <DropdownMenu>
                {SHORT_NAME_OPTIONS.map((option) => {
                  return (
                    <DropdownItem
                      key={option}
                      onClick={() => updateShortName(option)}
                    >
                      {option}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </ButtonDropdown>
            <JSONText>,</JSONText>
          </div>
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
      {repairComplete && <div>Repair is complete!</div>}
    </div>
  );
};

export default DataRepair;
