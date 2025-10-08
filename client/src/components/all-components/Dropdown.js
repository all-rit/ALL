import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { DARK } from "../../constants/themes";

const Dropdown = (props) => {
  const { toggle, isOpen, options, initialLabel, setSelection, theme } = props;

  const [label, setLabel] = useState(initialLabel);

  const pickOption = (option) => {
    setSelection(option);
    setLabel(option);
  };

  return (
    <ButtonDropdown toggle={toggle} isOpen={isOpen}>
      <DropdownToggle
        style={{
          fontFamily: "monospace",
          backgroundColor: theme === DARK ? "#333" : "#fff",
          color: theme === DARK ? "#fff" : "#333",
          fontSize: 14,
          marginTop: 1,
          marginBottom: 1,
        }}
        caret
      >
        {label}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((option) => {
          return (
            <DropdownItem
              style={{ fontSize: 14 }}
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

Dropdown.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  options: PropTypes.array,
  initialLabel: PropTypes.string,
  setSelection: PropTypes.func,
  theme: PropTypes.string,
};

export default Dropdown;
