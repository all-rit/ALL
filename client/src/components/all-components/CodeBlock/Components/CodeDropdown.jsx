import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { DARK } from "@/constants/themes";

/**
 * React component for rendering a dropdown for a code block.
 *
 * The 'CodeDropdown' component is to be used in conjunction with Repair codeblock components. It gives the developer
 * the ability to create a code-styled dropdown that simplifies selections and keeps guardrails for answers.
 *
 * @param {Object} props - The props for the `CodeLine` component.
 * @param {Function} props.toggle - The function in the parent component used to open and close the dropdown
 * @param {boolean} props.isOpen - The boolean value flipped by props.toggle to open/close the dropdown
 * @param {array} props.options - An array of options that can be selections
 * @param {string} props.initialLabel - The initial label of the dropdown before an option has been selected
 * @param {Function} props.setSelection - Function passed in from the parent component that sets the selection
 * @param {string} props.theme - Value that sets the color theme of the dropdown. Default is DARK.
 * @param {boolean} props.selectionCorrect - Boolean value that determines the color of the dropdown border
 * based on selection correctness
 *
 * @return {JSX.Element} The rendered component that displays the code line as a row.
 */

const CodeDropdown = (props) => {
  const {
    toggle,
    isOpen,
    options,
    initialLabel,
    setSelection,
    theme,
    selectionCorrect,
  } = props;

  const [label, setLabel] = useState(initialLabel);
  const [optionSelected, setOptionSelected] = useState(false);

  const pickOption = (option) => {
    setSelection(option);
    setLabel(option);
    setOptionSelected(true);
  };

  return (
    <ButtonDropdown
      toggle={toggle}
      isOpen={isOpen}
      style={{ borderColor: `${selectionCorrect && "green"}` }}
    >
      <DropdownToggle
        style={{
          fontFamily: "monospace",
          backgroundColor: theme === DARK ? "#333" : "#fff",
          color: theme === DARK ? "#fff" : "#333",
          fontSize: 12,
          marginTop: 1,
          marginBottom: 1,
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          borderColor: `${optionSelected ? (selectionCorrect ? "green" : "red") : "#666"}`,
        }}
        caret
      >
        <p className={"tw-pr-3"}>{label}</p>
      </DropdownToggle>
      <DropdownMenu
        style={{
          backgroundColor: "#333",
          borderColor: "#666",
          marginTop: 3,
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        }}
      >
        {options.map((option) => {
          return (
            <DropdownItem
              style={{ fontSize: 12, backgroundColor: "#333", color: "white" }}
              key={option}
              onClick={() => pickOption(option)}
            >
              {option}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </ButtonDropdown>
  );
};

CodeDropdown.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
  initialLabel: PropTypes.string,
  setSelection: PropTypes.func,
  theme: PropTypes.string,
  selectionCorrect: PropTypes.bool,
};

export default CodeDropdown;
