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
    // reset errors
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
    // -------------------------------------------------
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="tw-mt-10 tw-shadow-2xl-top-bottom tw-rounded-3xl tw-min-w-72 tw-w-9/12 lg:tw-w-7/12 tw-h-full tw-p-10">
          <h1 className="tw-text-3xl tw-font-bold tw-mb-8">
            Apply for Graduation at ALL University
          </h1>
          <div className="tw-text-left tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-1.5">
              Personal Information:{" "}
            </h2>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">Legal First Name:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  label="Legal First Name"
                  placeholder="Ex: Jane"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                {fNameErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Invalid character.
                  </label>
                )}
                {fNameEmptyErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">Legal Last Name:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  placeholder="Ex: Smith"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {lNameErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Invalid character.
                  </label>
                )}
                {lNameEmptyErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">Pronouns:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  placeholder="Ex: They/Them"
                  onChange={(e) => {
                    setPronouns(e.target.value);
                  }}
                />
                {pronounsErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Invalid character.
                  </label>
                )}
                {pronounsEmptyErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <h3 className="tw-mt-10 tw-text-xl tw-font-semibold tw-mb-1.5">
              Academic Information:{" "}
            </h3>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">College:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  placeholder="Ex: RIT"
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                />
                {collegeErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Invalid character.
                  </label>
                )}
                {collegeEmptyErr && (
                  <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                    Error: Input required.
                  </label>
                )}
              </div>
            </div>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">Major:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  placeholder="Ex: CS"
                  onChange={(e) => {
                    setMajor(e.target.value);
                  }}
                />
                <div className="tw-mb-4">
                  {majorErr && (
                    <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                      Error: Invalid character.
                    </label>
                  )}
                  {majorEmptyErr && (
                    <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                      Error: Input required.
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="sm:tw-flex tw-mb-6">
              <label className="tw-pr-8">Graduation Term:</label>
              <div className="tw-flex tw-flex-col tw-max-w-72 tw-h-8 tw-w-full sm:tw-w-8/12 md:tw-w-6/12">
                <input
                  placeholder="Ex: Spring 2024"
                  onChange={(e) => {
                    setGradTerm(e.target.value);
                  }}
                />
                <div className="tw-mb-4">
                  {gradTermErr && (
                    <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                      Error: Invalid character.
                    </label>
                  )}
                  {gradTermEmptyErr && (
                    <label className="tw-text-error-red tw-text-sm tw-pl-4 tw-italic">
                      Error: Input required.
                    </label>
                  )}
                </div>
              </div>
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
