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
    <>
      <Label className="mx-2 fw-bold tw-body-text">{option}</Label>
      <Dropdown
        isOpen={dropDownOpen}
        toggle={() => setDropDownOpen((prevState) => !prevState)}
        className="tw-body-text"
      >
        <DropdownToggle color={"light"} caret>
          {currrentValue == 0 ? "" : currrentValue}
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
    </>
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

  console.log(selectedAnswers);
  console.log(availableAnswers);

  const handleSelection = (rankingNumber, option) => {
    console.log(rankingNumber + " | " + option);
    const prevSelectedAnswer = selectedAnswers[option];
    console.log("\nPrevSelectedAnswer: " + prevSelectedAnswer);
    const prevAvailableAnswer = availableAnswers[rankingNumber];
    console.log("\nPrevAvailableAnswer: " + prevAvailableAnswer);
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
      <div>Testing page</div>
      <FormGroup className="tw-grid tw-grid-cols-3">
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
};

export default RankingQuestion;
