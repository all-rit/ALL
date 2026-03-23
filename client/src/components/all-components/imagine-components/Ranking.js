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
  //Both are used in order to ensure mutual exclusivity between a value and its key
  //These are answers in {option: ranking} eg: {"Option11": 2}
  const [selectedAnswers, setSelectedAnswers] = useState({});
  //These are the answers in the inverted order {ranking: option} eg {2: "Option1"}
  const [availableAnswers, setAvailableAnswers] = useState({});

  // Work with a local copy of options to avoid mutating props.options directly
  const [displayOptions, setDisplayOptions] = useState([...props.options]);

  // Shuffle displayOptions on mount unless disabled
  useEffect(() => {
    if (props.disableShuffle) {
      setDisplayOptions([...props.options]);
      return;
    }
    const arr = [...props.options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setDisplayOptions(arr);
  }, [props.options]);

  // sets the base value of each hashmap. for selected answers 0 is the default value, and for available answers "" is the default
  // If props.initialSelectedAnswers is provided, use it to pre-populate both maps
  useEffect(() => {
    const selectedOptions = {};
    const availableOptions = {};

    for (let i = 0; i < displayOptions.length; i++) {
      const opt = displayOptions[i];
      const initialVal = props.initialSelectedAnswers?.[opt] ?? 0;
      selectedOptions[opt] = initialVal;
    }
    for (let i = 0; i < displayOptions.length; i++) {
      const rank = i + 1;
      // find which option (if any) is assigned to this rank from initialSelectedAnswers
      let assigned = "";
      if (props.initialSelectedAnswers) {
        for (const [k, v] of Object.entries(props.initialSelectedAnswers)) {
          if (v === rank) {
            assigned = k;
            break;
          }
        }
      }
      availableOptions[rank] = assigned;
    }

    setSelectedAnswers(selectedOptions);
    setAvailableAnswers(availableOptions);
  }, [displayOptions, props.initialSelectedAnswers]);

  // anytime selected answers are updated, notify the registered observer
  useEffect(() => {
    props.updatedSelectedAnswers?.(selectedAnswers);
  }, [selectedAnswers]);

  // handles selection to ensure mutual exclusivity
  const handleSelection = (rankingNumber, option) => {
    const prevSelectedAnswer = selectedAnswers[option];
    const prevAvailableAnswer = availableAnswers[rankingNumber];

    // if current ranking is already taken, remove it
    if (prevAvailableAnswer && prevAvailableAnswer !== "") {
      setSelectedAnswers((prevState) => ({
        ...prevState,
        [prevAvailableAnswer]: 0,
      }));
    }
    // if current option is already taken, remove it
    if (prevSelectedAnswer && prevSelectedAnswer !== 0) {
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
        {displayOptions.map((option) => (
          <div key={option}>
            {RankingEntry(
              option,
              displayOptions.length,
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
  initialSelectedAnswers: PropTypes.object,
  // when true, do not shuffle options on mount
  disableShuffle: PropTypes.bool,
};

export default RankingQuestion;
