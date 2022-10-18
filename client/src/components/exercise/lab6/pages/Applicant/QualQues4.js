/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import { Form, FormGroup, Input, Label } from "reactstrap";

const QualQues4 = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/QualQues5");
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
          <h2 className="cognitive_instructions">What is your expected salary?</h2>

          <div className="analysis__questions">
            <FormGroup check>
              <Label for="salary" check>
                <Input
                  id="salary"
                  name="salary"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">40K - 42.5K</div>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="salary" check>
                <Input
                  id="salary"
                  name="salary"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">42.6K - 45K</div>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="salary" check>
                <Input
                  id="salary"
                  name="salary"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">45.1K - 47.5K</div>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label for="salary" check>
                <Input
                  id="salary"
                  name="salary"
                  type="radio"
                  className="analysis__checkbox"
                />
                <div className="analysis__question">47.6 - 50K</div>
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

export default QualQues4;
