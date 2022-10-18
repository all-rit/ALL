/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import { Form, FormGroup, Input, Label } from "reactstrap";

const QualQues1 = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/QualQues2");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // This cursed line of code will:
    //  1. Grab the form with e.target
    //  2. Create an instance of a FormData object from ReactStrap using the form data
    //  3. Get the fields in that FormData object
    //  4. Create a new object from those entries, our new object will be an Object and not FormData
    // Essentially, this is just a really long winded way of casting FormData to Object, since
    // apparently that's necessary despite this not being an object-oriented or strongly typed language
    // Please refactor this eventually, for the love of all that is holy
    const formData = Object.fromEntries(new FormData(e.target).entries());
    let survey = [];
    for (const [key, value] of Object.entries(formData)) {
      if (value === "on") {
        survey.push(key);
      }
    }
    console.log(survey);
    if (survey.length !== 0) {
      handleContinue();
    }
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Qualification Questions:</h2>

      <Form onSubmit={onFormSubmit}>
        <div className="center-div">
          <h2 className="cognitive_instructions">
            What gender do you identify as?
          </h2>

          {/* Tried to get radio buttons inside of radio group */}
          {/* <RadioGroup label = "What gender to you identify as?"> */}
          {/* <Input id="gender1" name="gender1" type="radio" className="analysis__checkbox">Male</Input>
                <Input id="gender2" name="gender2" type="radio" className="analysis__checkbox">Female</Input> */}
          {/* 
            /* </RadioGroup> */}

          <div className="analysis__questions">
            <FormGroup check>
              <Label for="Male" check>
                <Input
                  id="gender"
                  name="gender"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">Male</div>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="Female" check>
                <Input
                  id="gender2"
                  name="gender"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">Female</div>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="Non-binary" check>
                <Input
                  id="gender3"
                  name="gender"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">Non-binary</div>
              </Label>
            </FormGroup>
          </div>

          <button
            className="btn btn-primary text-black btn-xl text-uppercase "
            type="submit"
            key="confirm"
          >
            Next Question
          </button>
        </div>
      </Form>
    </div>
  );
};

export default QualQues1;
