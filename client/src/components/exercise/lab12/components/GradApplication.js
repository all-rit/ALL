import { React, useState, useEffect, useContext } from "react";
import { EXERCISE_PLAYING } from "src/constants/index";
import useMainStateContext from "src/reducers/MainContext";
import ExerciseStateContext from "../Lab12Context";
import { navigate } from "@reach/router";
import { ExerciseService } from "../../../../services/lab12/ExerciseService";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
} from "reactstrap";

const GradApplication = () => {
  const { actions, state } = useMainStateContext();
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
    actions.updateUserState(EXERCISE_PLAYING);
    fetchExercise();
  }, []);

  // will need to update
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

  const [isFormError, setIsFormError] = useState(false);

  const [fNameErr, setFirstNameErr] = useState(false);
  const [lNameErr, setLastNameErr] = useState(false);
  const [preferredNameErr, setPreferredNameErr] = useState(false);
  const [pronounsErr, setPronounsErr] = useState(false);
  const [collegeErr, setCollegeErr] = useState(false);
  const [majorErr, setMajorErr] = useState(false);
  const [gradTermErr, setGradTermErr] = useState(false);

  const [fNameEmptyErr, setFirstNameEmptyErr] = useState(false);
  const [lNameEmptyErr, setLastNameEmptyErr] = useState(false);
  const [preferredNameEmptyErr, setPreferredNameEmptyErr] = useState(false);
  const [pronounsEmptyErr, setPronounsEmptyErr] = useState(false);
  const [collegeEmptyErr, setCollegeEmptyErr] = useState(false);
  const [majorEmptyErr, setMajorEmptyErr] = useState(false);
  const [gradTermEmptyErr, setGradTermEmptyErr] = useState(false);

  const validateInput = () => {
    // reset errors
    setFirstNameEmptyErr(false);
    setFirstNameErr(false);
    setLastNameEmptyErr(false);
    setLastNameErr(false);
    setPreferredNameEmptyErr(false);
    setPreferredNameErr(false);
    setPronounsEmptyErr(false);
    setPronounsErr(false);
    setCollegeEmptyErr(false);
    setCollegeErr(false);
    setMajorEmptyErr(false);
    setMajorErr(false);
    setGradTermEmptyErr(false);
    setGradTermErr(false);
    setIsFormError(false);

    // RegExp catches on anything but white space
    const hasCharacter = new RegExp("[\\S]");
    const hasLetter = new RegExp("[A-Za-z]");

    // RegExp for special characters (anything except letters and whitespace));
    const fnSpecialChar = new RegExp("[^A-Za-z\\s+]", "g");
    if (fnSpecialChar.test(firstName)) {
      setFirstNameErr(true);
    }
    if (!hasCharacter.test(firstName)) {
      setFirstNameEmptyErr(true);
    }

    // RegExp for special characters (anything except letters and whitespace));
    const lnSpecialChar = new RegExp("[^A-Za-z\\s+]", "g");
    if (lnSpecialChar.test(lastName)) {
      setLastNameErr(true);
    }
    if (!hasCharacter.test(lastName)) {
      setLastNameEmptyErr(true);
    }

    // RegExp for special characters (anything except letters and whitespace));
    const preferredNameSpecialChar = new RegExp("[^A-Za-z\\s+]", "g");
    if (preferredNameSpecialChar.test(preferredName)) {
      setPreferredNameErr(true);
    }
    if (!hasCharacter.test(preferredName)) {
      setPreferredNameEmptyErr(true);
    }

    const pReg = new RegExp("[^A-Za-z\\s+/]", "g");
    if (pReg.test(pronouns)) {
      setPronounsErr(true);
    }
    if (!hasCharacter.test(pronouns)) {
      setPronounsEmptyErr(true);
    }

    const cReg = new RegExp("[^A-Za-z\\s+.]", "g");
    if (cReg.test(college)) {
      setCollegeErr(true);
    }
    if (!hasCharacter.test(college) || !hasLetter.test(college)) {
      setCollegeEmptyErr(true);
    }

    const mReg = new RegExp("[^A-Za-z\\s+.]", "g");
    if (mReg.test(major)) {
      setMajorErr(true);
    }
    if (!hasCharacter.test(major) || !hasLetter.test(major)) {
      setMajorEmptyErr(true);
    }

    const gtReg = new RegExp("[^A-Za-z0-9\\s+]", "g");
    if (gtReg.test(gradTerm)) {
      setGradTermErr(true);
    }
    if (!hasCharacter.test(gradTerm)) {
      setGradTermEmptyErr(true);
    }

    if (
      fNameErr ||
      lNameErr ||
      preferredNameErr ||
      pronounsErr ||
      collegeErr ||
      majorErr ||
      gradTermErr ||
      fNameEmptyErr ||
      lNameEmptyErr ||
      preferredNameEmptyErr ||
      pronounsEmptyErr ||
      collegeEmptyErr ||
      majorEmptyErr ||
      gradTermEmptyErr
    ) {
      setIsFormError(true);
    }
  };

  const handleSubmit = () => {
    validateInput();
    if (!isFormError) {
      // navigate to pre explanation or post explanation, depending on if repair is complete
      if (isRepairComplete) {
        navigate(`/Lab12/Exercise/PreCorrectDiploma`);
      } else {
        navigate(`/Lab12/Exercise/PreWrongDiploma`);
      }
    }
  };

  return (
    <div>
      <div className="tw-flex tw-justify-center">
        <div className="tw-mt-10 tw-shadow-2xl-top-bottom tw-rounded-3xl tw-min-w-72 tw-w-9/12 lg:tw-w-7/12 tw-h-full tw-p-10">
          <h1 className="tw-text-3xl tw-font-bold tw-mb-8">
            Apply for Graduation at ALL University
          </h1>
          <div className="tw-text-left tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-1.5">
              Personal Information:{" "}
            </h2>
            <div className="sm:tw-flex tw-items-center tw-mb-6">
              <label htmlFor="firstName" className="tw-pr-8">
                <span className="tw-text-error-red">*</span>
                Legal First Name:
              </label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  id="firstName"
                  label="Legal First Name"
                  placeholder="Ex: Jane"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {fNameErr && (
                  <label
                    htmlFor="firstName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </label>
                )}
                {fNameEmptyErr && (
                  <label
                    htmlFor="firstName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-items-center tw-mb-6">
              <label htmlFor="lastName" className="tw-pr-8">
                <span className="tw-text-error-red">*</span>
                Legal Last Name:
              </label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  id="lastName"
                  placeholder="Ex: Smith"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {lNameErr && (
                  <label
                    htmlFor="lastName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </label>
                )}
                {lNameEmptyErr && (
                  <label
                    htmlFor="lastName"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            {isRepairComplete && (
              <div className="sm:tw-flex tw-items-center tw-mb-6">
                <label className="tw-pr-8">Preferred Name:</label>
                <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                  <Input
                    id="preferredName"
                    placeholder="Ex: Jay"
                    onChange={(e) => {
                      setPreferredName(e.target.value);
                    }}
                  />
                  {preferredNameErr && (
                    <label
                      htmlFor="preferredName"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                      data-testid="invalid-char"
                    >
                      Error: Invalid character.
                    </label>
                  )}
                  {preferredNameEmptyErr && (
                    <label
                      htmlFor="preferredName"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    >
                      Error: Input required.
                    </label>
                  )}
                </div>
              </div>
            )}
            {isRepairComplete && (
              <div className="sm:tw-flex tw-items-center tw-mb-6">
                <label className="tw-pr-8">
                  <span className="tw-text-error-red">*</span>Pronouns:
                </label>
                <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                  <ButtonDropdown
                    toggle={() => setDropdownOpen(!dropdownOpen)}
                    isOpen={dropdownOpen}
                  >
                    <DropdownToggle className={"bg-primary"} caret>
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
                  {pronounsErr && (
                    <label
                      htmlFor="pronouns"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                      data-testid="invalid-char"
                    >
                      Error: Must make a selection.
                    </label>
                  )}
                  {pronounsEmptyErr && (
                    <label
                      htmlFor="pronouns"
                      className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    >
                      Error: Input required.
                    </label>
                  )}
                </div>
              </div>
            )}
            <h3 className="tw-mt-14 tw-text-xl tw-font-semibold tw-mb-1.5">
              Academic Information:{" "}
            </h3>
            <div className="sm:tw-flex tw-items-center tw-mb-6">
              <label className="tw-pr-8">College:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  id="college"
                  placeholder="Ex: RIT"
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                />
                {collegeErr && (
                  <label
                    htmlFor="college"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </label>
                )}
                {collegeEmptyErr && (
                  <label
                    htmlFor="college"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-items-center tw-mb-6">
              <label className="tw-pr-8">Major:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  id="major"
                  placeholder="Ex: CS"
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                />
                {majorErr && (
                  <label
                    htmlFor="major"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </label>
                )}
                {majorEmptyErr && (
                  <label
                    htmlFor="major"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-items-center tw-mb-6">
              <label className="tw-pr-8">Graduation Term:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <Input
                  id="gradTerm"
                  placeholder="Ex: Spring 2024"
                  onChange={(e) => {
                    setGradTerm(e.target.value);
                  }}
                />
                {gradTermErr && (
                  <label
                    htmlFor="gradTerm"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                    data-testid="invalid-char"
                  >
                    Error: Invalid character.
                  </label>
                )}
                {gradTermEmptyErr && (
                  <label
                    htmlFor="gradTerm"
                    className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic"
                  >
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
          </div>
          <button
            className="tw-text-error-red tw-mt-8 btn-primary btn btn-md"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Application
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default GradApplication;
