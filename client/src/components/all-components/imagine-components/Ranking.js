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

/**
 *
 * @param {*} option - One of the ranking options
 * @param {*} length - total number of options for the user to pick from
 * @param {*} handleOption - when user selects an option, call respective handle options method in Ranking main component
 * @param {*} currrentValue - current number the user has this option ranked at
 * @returns dropdown and label for the given option
 */
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
          {/*\u00A0 is a blank character to push the drop down caret to the right*/}
          {currrentValue == 0 ? "\u00A0" : currrentValue}
        </DropdownToggle>
        <DropdownMenu>
          {/*Create a x number of options for user to rank in the dropdown */}
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
  //Both are used in order to ensure mutual exculivity between a value and it's key
  //These are answers in {option: ranking} eg: {"Option11": 2}
  const [selectedAnswers, setSelectedAnswers] = useState({});
  //These are the answers in the inverted order {ranking: option} eg {2: "Option1"}
  const [availableAnswers, setAvailableAnswers] = useState({});

  //sets the base value of each hashmap. for selcted answers 0 is the defalut value, and for available answers "" is the default
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

  //anytime selected answers are updated, notify the registered observer
  useEffect(() => {
    props.updatedSelectedAnswers?.(selectedAnswers);
  }, [selectedAnswers]);

  //handles selection to ensure mutal exclusivity
  const handleSelection = (rankingNumber, option) => {
    const prevSelectedAnswer = selectedAnswers[option];
    const prevAvailableAnswer = availableAnswers[rankingNumber];

    //if current ranking is already taken, remove is
    if (prevAvailableAnswer != 0) {
      setSelectedAnswers((prevState) => ({
        ...prevState,
        [prevAvailableAnswer]: 0,
      }));
    }
    //if current option is already taken, remove it
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

  useEffect(() => {
    for (let i = props.options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = props.options[i];
      props.options[i] = props.options[j];
      props.options[j] = temp;
    }
    return;
  }, []);

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
