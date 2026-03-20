import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const ExtraNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={"tw-flex tw-flex-row tw-justify-between"}
        color="light"
        light
        expand="md"
      >
        <NavbarBrand className={"tw-title tw-text-[1.25rem]"}>
          Accessibility
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <input
                placeholder="Menu 1"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 2"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 3"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 4"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 5"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 6"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
            <NavItem>
              <input
                placeholder="Menu 7"
                className="inputHover exercise__nav"
                readOnly
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ExtraNav;
