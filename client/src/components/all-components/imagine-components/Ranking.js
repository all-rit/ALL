import React, { useEffect, useState } from "react";
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

const RankingEntry = (availableAnswers, setAvailableAnswers) => {
  const [displayedValue, setDisplayedValue] = useState();

  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <Dropdown
        isOpen={dropDownOpen}
        toggle={() => setDropDownOpen((prevState) => !prevState)}
        className="tw-body-text"
      >
        <DropdownToggle color={"light"} caret>
          {displayedValue}
        </DropdownToggle>
        <DropdownMenu>
          {Object.entries(availableAnswers).map(([number, isDisabled]) => {
            <DropdownItem
              key={number}
              disabled={isDisabled}
              onClick={() => {
                setAvailableAnswers((prevState) => ({
                  ...prevState,
                  [number]: false,
                }));
                setDisplayedValue(number);
              }}
            >
              {number}
            </DropdownItem>;
          })}
        </DropdownMenu>
        <DropdownMenu></DropdownMenu>
      </Dropdown>
    </>
  );
};

const RankingQuestion = (props) => {
  const [availableAnswers, setAvailableAnswers] = useState({});

  useEffect(() => {
    const options = {};
    for (let i = 0; i < props.options.length; i++) {
      options[i] = false;
    }
    setAvailableAnswers(options);
  }, [props.options.length]);

  return (
    <Form className="border border-black">
      <div>Testing page</div>
      <FormGroup className="tw-grid tw-grid-cols-3">
        {props.options.map((option) => (
          <div key={option}>
            <Label className="mx-2 fw-bold tw-body-text">{option}</Label>
            {RankingEntry(availableAnswers, setAvailableAnswers)}
          </div>
        ))}
      </FormGroup>
    </Form>
  );
};

RankingQuestion.propTypes = {
  options: PropTypes.array.isRequired,
};

export default RankingQuestion;
