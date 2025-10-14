import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { DARK } from "../../constants/themes";

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
