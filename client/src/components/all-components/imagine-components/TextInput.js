import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label } from "reactstrap";

// Represents one text entry
const TextInputBox = ({ label, handleTextChange, currentValue }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2">
      <Label className="mx-2 fw-bold tw-body-text">{label}</Label>
      <textarea
        className="tw-border tw-rounded tw-p-2 tw-body-text tw-w-full"
        placeholder="Type your answer..."
        value={currentValue || ""}
        onChange={(e) => handleTextChange(label, e.target.value)}
      />
    </div>
  );
};

TextInputBox.propTypes = {
  label: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
};

//Question Id = when to reset the text inputs
const TextInput = ({ options = [], updatedSelectedAnswers, questionId }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  // Stores list of options/questions to display
  useEffect(() => {
    const initialAnswers = {};
    options.forEach((option) => {
      initialAnswers[option] = "";
    });
    setSelectedAnswers(initialAnswers);
  }, [questionId]);

  //Kepes track of the tect
  const handleTextChange = (label, value) => {
    const updated = {
      ...selectedAnswers,
      [label]: value,
    };

    setSelectedAnswers(updated);

    updatedSelectedAnswers?.({
      target: {
        value: updated,
      },
    });
  };

  return (
    <Form>
      <FormGroup className="tw-grid tw-grid-cols-1 tw-gap-10 tw-max-w-[50%] tw-mx-auto tw-text-left">
        {options.map((option, index) => (
          <TextInputBox
            key={`${option}-${index}`}
            label={option}
            handleTextChange={handleTextChange}
            currentValue={selectedAnswers[option]}
          />
        ))}
      </FormGroup>
    </Form>
  );
};

TextInput.propTypes = {
  options: PropTypes.array,
  updatedSelectedAnswers: PropTypes.func,
  questionId: PropTypes.number,
};

export default TextInput;
