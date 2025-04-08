import React, { useState, useEffect } from "react";
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

const RankingEntry = (option, length, handleOption, currrentValue) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="tw-flex tw-justify-between">
      <Label className="mx-2 fw-bold tw-body-text">{option}</Label>
      <Dropdown
        isOpen={dropDownOpen}
        toggle={() => setDropDownOpen((prevState) => !prevState)}
        className="tw-body-text"
      >
        <DropdownToggle
          color={"light"}
          className="tw-w-[6rem] tw-flex tw-justify-between tw-items-center"
          caret
        >
          {currrentValue == 0 ? "\u00A0" : currrentValue}
        </DropdownToggle>
        <DropdownMenu>
          {Array.from({ length: length }, (_, i) => i + 1).map((number) => (
            <DropdownItem
              key={number}
              onClick={() => handleOption(number, option)}
            >
              {number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const RankingQuestion = (props) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [availableAnswers, setAvailableAnswers] = useState({});

  useEffect(() => {
    const selectedOptions = {};
    const availableOptions = {};
    for (let i = 0; i < props.options.length; i++) {
      availableOptions[i + 1] = "";
      selectedOptions[props.options[i]] = 0;
    }
    setSelectedAnswers(selectedOptions);
    setAvailableAnswers(availableOptions);
  }, [props.options.length]);

  useEffect(() => {
    props.updatedSelectedAnswers?.(selectedAnswers);
  }, [selectedAnswers]);

  const handleSelection = (rankingNumber, option) => {
    const prevSelectedAnswer = selectedAnswers[option];
    const prevAvailableAnswer = availableAnswers[rankingNumber];
    if (prevAvailableAnswer != 0) {
      setSelectedAnswers((prevState) => ({
        ...prevState,
        [prevAvailableAnswer]: 0,
      }));
    }
    if (prevSelectedAnswer != "") {
      setAvailableAnswers((prevState) => ({
        ...prevState,
        [prevSelectedAnswer]: "",
      }));
    }
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [option]: rankingNumber,
    }));
    setAvailableAnswers((prevState) => ({
      ...prevState,
      [rankingNumber]: option,
    }));
  };

  return (
    <Form>
      <FormGroup className="tw-grid tw-grid-cols-1 tw-gap-10 tw-max-w-[25%] tw-mx-auto tw-text-left">
        {props.options.map((option) => (
          <div key={option}>
            {RankingEntry(
              option,
              props.options.length,
              handleSelection,
              selectedAnswers[option],
            )}
          </div>
        ))}
      </FormGroup>
    </Form>
  );
};

RankingQuestion.propTypes = {
  options: PropTypes.array.isRequired,
  updatedSelectedAnswers: PropTypes.func,
};

export default RankingQuestion;
