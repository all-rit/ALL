import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Dropdown,
  FormGroup,
  Label,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const RankingQuestion = () => {
  const [displayedValue, setDisplayedValue] = useState();

  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <Form className="border border-black">
      <FormGroup row>
        <Label>testing</Label>
        <Dropdown
          isOpen={dropDownOpen}
          toggle={() => setDropDownOpen((prevState) => !prevState)}
          className="tw-body-text"
        >
          <DropdownToggle color={"light"} caret>
            {displayedValue}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setDisplayedValue(1)}>1</DropdownItem>
            <DropdownItem onClick={() => setDisplayedValue(2)}>2</DropdownItem>
            <DropdownItem onClick={() => setDisplayedValue(3)}>3</DropdownItem>
            <DropdownItem onClick={() => setDisplayedValue(4)}>4</DropdownItem>
            <DropdownItem onClick={() => setDisplayedValue(5)}>5</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </FormGroup>
    </Form>
  );
};

RankingQuestion.propTypes = {
  questions: PropTypes.obj,
};

export default RankingQuestion;
