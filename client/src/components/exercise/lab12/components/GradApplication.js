import React, { useState, useEffect, useContext } from "react";
import useMainStateContext from "src/reducers/MainContext";
import ExerciseStateContext from "../Lab12Context";
import { navigate } from "@reach/router";
import { ExerciseService } from "../../../../services/lab12/ExerciseService";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const GradApplication = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;

  const [isRepairComplete, setIsRepairComplete] = useState(false);
  const fetchExercise = async () => {
    try {
      const currentExercise = await ExerciseService.fetchExercise({
        userid: user.userid,
      });
      setIsRepairComplete(currentExercise.isFormRepairComplete);
    } catch (error) {
      console.error("Could not fetch exercise: ", error);
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("Select Pronouns");

  const setPronounsAndDropdownLabel = (pronouns) => {
    setPronouns(pronouns);
    setDropdownLabel(pronouns);
  };

  useEffect(() => {
    fetchExercise();
  }, []);

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    preferredName,
    setPreferredName,
    pronouns,
    setPronouns,
    college,
    setCollege,
    major,
    setMajor,
    gradTerm,
    setGradTerm,
  } = useContext(ExerciseStateContext);

  const [formErrors, setFormErrors] = useState([]);

  const validateInput = (formData) => {
    const errors = formData.map((input) => input === "");
    const hasError = errors.some((error) => error);
    setFormErrors(errors);
    return hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = !isRepairComplete
      ? [firstName, lastName, college, major, gradTerm]
      : [
          firstName,
          lastName,
          preferredName,
          pronouns,
          college,
          major,
          gradTerm,
        ];

    const error = validateInput(formData); // Validate the form

    if (!error) {
      navigate(`/Lab12/Exercise/PreWrongDiploma`); // If no errors, submit
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="tw-flex tw-justify-center">
        <div className="tw-mt-10 tw-shadow-2xl-top-bottom tw-rounded-3xl tw-min-w-72 tw-w-9/12 lg:tw-w-7/12 tw-h-full tw-p-10">
          <h1 className="tw-text-3xl tw-font-bold tw-mb-8">
            Apply for Graduation at ALL University
          </h1>
          <div className="tw-text-left tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-1.5">
              Personal Information:{" "}
            </h2>
            <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
              <Label htmlFor="firstName" className="tw-pr-8 tw-mb-0">
                <span className="tw-text-error-red">*</span>
                Legal First Name:
              </Label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  type="text"
                  id="firstName"
                  label="Legal First Name"
                  placeholder="Ex: Jane"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {formErrors[0] && (
                  <Label
                    htmlFor="firstName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </Label>
                )}
              </div>
            </FormGroup>
            <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
              <Label htmlFor="lastName" className="tw-pr-8 tw-mb-0">
                <span className="tw-text-error-red">*</span>
                Legal Last Name:
              </Label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Ex: Smith"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {formErrors[1] && (
                  <Label
                    htmlFor="lastName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </Label>
                )}
              </div>
            </FormGroup>
            {isRepairComplete && (
              <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
                <Label className="tw-pr-8 tw-mb-0">Preferred Name:</Label>
                <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                  <Input
                    type="text"
                    id="preferredName"
                    placeholder="Ex: Jay"
                    value={preferredName}
                    onChange={(e) => {
                      setPreferredName(e.target.value);
                    }}
                  />
                  {formErrors[2] && (
                    <Label
                      htmlFor="preferredName"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    >
                      Error: Input required.
                    </Label>
                  )}
                </div>
              </FormGroup>
            )}
            {isRepairComplete && (
              <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
                <Label className="tw-pr-8 tw-mb-0">
                  <span className="tw-text-error-red">*</span>Pronouns:
                </Label>
                <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                  <ButtonDropdown
                    toggle={() => setDropdownOpen(!dropdownOpen)}
                    isOpen={dropdownOpen}
                  >
                    <DropdownToggle color={"secondary"} caret>
                      {dropdownLabel}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => setPronounsAndDropdownLabel("He/Him")}
                      >
                        {" "}
                        He/Him{" "}
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setPronounsAndDropdownLabel("She/Her")}
                      >
                        {" "}
                        She/Her{" "}
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setPronounsAndDropdownLabel("They/Them")}
                      >
                        {" "}
                        They/Them{" "}
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                  {formErrors[3] && (
                    <Label
                      htmlFor="pronouns"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    >
                      Error: Please make a selection.
                    </Label>
                  )}
                </div>
              </FormGroup>
            )}
            <h3 className="tw-mt-14 tw-text-xl tw-font-semibold tw-mb-1.5">
              Academic Information:{" "}
            </h3>
            <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
              <Label className="tw-pr-8 tw-mb-0">College:</Label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  type="text"
                  id="college"
                  placeholder="Ex: RIT"
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                />
                {isRepairComplete
                  ? formErrors[4]
                  : formErrors[2] && (
                      <Label
                        htmlFor="college"
                        className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                      >
                        Error: Input required.
                      </Label>
                    )}
              </div>
            </FormGroup>
            <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
              <Label className="tw-pr-8 tw-mb-0">Major:</Label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  type="text"
                  id="major"
                  placeholder="Ex: CS"
                  value={major}
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                />
                {isRepairComplete
                  ? formErrors[6]
                  : formErrors[3] && (
                      <Label
                        htmlFor="major"
                        className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                      >
                        Error: Input required.
                      </Label>
                    )}
              </div>
            </FormGroup>
            <FormGroup className="sm:tw-flex tw-items-center tw-mb-6">
              <Label className="tw-pr-8 tw-mb-0">Graduation Term:</Label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  type="text"
                  id="gradTerm"
                  placeholder="Ex: Spring 2024"
                  value={gradTerm}
                  onChange={(e) => {
                    setGradTerm(e.target.value);
                  }}
                />
                {isRepairComplete
                  ? formErrors[7]
                  : formErrors[4] && (
                      <Label
                        htmlFor="gradTerm"
                        className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                      >
                        Error: Input required.
                      </Label>
                    )}
              </div>
            </FormGroup>
          </div>
          <Button
            type="submit"
            className="tw-text-error-red tw-mt-8 btn-primary btn btn-md"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit Application
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default GradApplication;
