/* eslint-disable no-unused-vars */
// import useMainStateContext from "src/reducers/MainContext";
import React, { useState } from "react";

const Application = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [gradTerm, setGradTerm] = useState("");

  const [fNameErr, setFirstNameErr] = useState(false);
  const [lNameErr, setLastNameErr] = useState(false);
  const [pronounsErr, setPronounsErr] = useState(false);
  const [collegeErr, setCollegeErr] = useState(false);
  const [majorErr, setMajorErr] = useState(false);
  const [gradTermErr, setGradTermErr] = useState(false);

  const [fNameEmptyErr, setFirstNameEmptyErr] = useState(false);
  const [lNameEmptyErr, setLastNameEmptyErr] = useState(false);
  const [pronounsEmptyErr, setPronounsEmptyErr] = useState(false);
  const [collegeEmptyErr, setCollegeEmptyErr] = useState(false);
  const [majorEmptyErr, setMajorEmptyErr] = useState(false);
  const [gradTermEmptyErr, setGradTermEmptyErr] = useState(false);

  const validateInput = () => {
    let error = false;
    setFirstNameEmptyErr(false);
    setFirstNameErr(false);
    setLastNameEmptyErr(false);
    setLastNameErr(false);
    setPronounsEmptyErr(false);
    setPronounsErr(false);
    setCollegeEmptyErr(false);
    setCollegeErr(false);
    setMajorEmptyErr(false);
    setMajorErr(false);
    setGradTermEmptyErr(false);
    setGradTermErr(false);

    // RegExp catches on anything but white space
    const hasCharacter = new RegExp("[\\S]");
    const hasLetter = new RegExp("[A-Za-z]");

    // RegExp for special characters (anything except letters and whitespace));
    const fnSpecialChar = new RegExp("[^A-Za-z\\s+]", "g");
    if (fnSpecialChar.test(firstName)) {
      error = true;
      setFirstNameErr(true);
    }
    if (!hasCharacter.test(firstName)) {
      error = true;
      setFirstNameEmptyErr(true);
    }

    // RegExp for special characters (anything except letters and whitespace));
    const lnSpecialChar = new RegExp("[^A-Za-z\\s+]", "g");
    if (lnSpecialChar.test(lastName)) {
      error = true;
      setLastNameErr(true);
    }
    if (!hasCharacter.test(lastName)) {
      error = true;
      setLastNameEmptyErr(true);
    }

    const pReg = new RegExp("[^A-Za-z\\s+/]", "g");
    if (pReg.test(pronouns)) {
      error = true;
      setPronounsErr(true);
    }
    if (!hasCharacter.test(pronouns)) {
      error = true;
      setPronounsEmptyErr(true);
    }

    const cReg = new RegExp("[^A-Za-z\\s+.]", "g");
    if (cReg.test(college)) {
      error = true;
      setCollegeErr(true);
    }
    if (!hasCharacter.test(college) || !hasLetter.test(college)) {
      error = true;
      setCollegeEmptyErr(true);
    }

    const mReg = new RegExp("[^A-Za-z\\s+.]", "g");
    if (mReg.test(major)) {
      error = true;
      setMajorErr(true);
    }
    if (!hasCharacter.test(major) || !hasLetter.test(major)) {
      error = true;
      setMajorEmptyErr(true);
    }

    const gtReg = new RegExp("[^A-Za-z0-9\\s+]", "g");
    if (gtReg.test(gradTerm)) {
      error = true;
      setGradTermErr(true);
    }
    if (!hasCharacter.test(gradTerm)) {
      error = true;
      setGradTermEmptyErr(true);
    }
    // -------------------------------------------------
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="tw-mt-10 tw-shadow-2xl-top-bottom tw-rounded-3xl tw-min-w-72 tw-w-9/12 lg:tw-w-5/12 md:tw-w-7/12 tw-h-full tw-p-10">
          <h1 className="tw-text-3xl tw-font-bold tw-mb-8">
            Apply for Graduation at ALL University
          </h1>
          <div className="tw-text-left tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-1.5">
              Personal Information:{" "}
            </h2>
            <div className="tw-resize-x tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Legal First Name:</label>
              <input
                placeholder="Ex: Jane" className="tw-h-8 tw-w-full md:tw-w-6/12"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <br />
              {fNameErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {fNameEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Legal Last Name:</label>
              <input
                placeholder="Ex: Smith" className="tw-h-8 tw-w-full md:tw-w-6/12"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <br />
              {lNameErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {lNameEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Pronouns:</label>
              <input
                placeholder="Ex: They/Them" className="tw-h-8 tw-w-full md:tw-w-6/12"
                type="text"
                onChange={(e) => {
                  setPronouns(e.target.value);
                }}
              />
              <br />
              {pronounsErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {pronounsEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
            <h3 className="tw-mt-10 tw-text-xl tw-font-semibold tw-mb-1.5">
              Academic Information:{" "}
            </h3>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">College:</label>
              <input
                placeholder="Ex: RIT" className="tw-h-8 tw-w-full md:tw-w-6/12"
                type="text"
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
              <br />
              {collegeErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {collegeEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Major:</label>
              <input
                placeholder="Ex: CS" className="tw-h-8 tw-w-full md:tw-w-6/12"
                type="text"
                onChange={(e) => {
                  setMajor(e.target.value);
                }}
              />
              <br />
              {majorErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {majorEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Graduation Term:</label>
              <input
                placeholder="Ex: Spring 2024" className="tw-h-8 tw-w-full md:tw-w-6/12"
                type="text"
                onChange={(e) => {
                  setGradTerm(e.target.value);
                }}
              />
              <br />
              {gradTermErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Invalid character used.
                </label>
              )}
              {gradTermEmptyErr && (
                <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                  Error: Input required.
                </label>
              )}
            </div>
          </div>
          <button
            className="tw-text-error-red tw-mt-8 btn-primary btn btn-md"
            onClick={() => {
              validateInput();
            }}
          >
            Submit Application
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Application;
