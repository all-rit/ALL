/* eslint-disable no-unused-vars */
// import useMainStateContext from "src/reducers/MainContext";
import React, { useState } from "react";
// import Popup from "../../all-components/Popup";
import './application.css';


const Application = () => {
  // const { actions, state } = useMainStateContext();

  // const [popUpMessage, setPopUpMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [gradTerm, setGradTerm] = useState("");
  // const [userError, setUserError] = useState(true);

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
  // const popUpHandler = (message) => {
  //   setPopUpMessage(message);
  // };

  const validateInput = () => {

    let error = false;

    // RegExp for special characters (anything except letters and whitespace)
    const specialChar = new RegExp('[^A-Za-z\\s+]', 'g');
    // RegExp for checking if there's at least one letter (uppercase or lowercase)
    const hasLetter = new RegExp('[A-Za-z]');

    if (specialChar.test(firstName)) {
      error = true;
      setFirstNameErr(true);
    }
    if (!hasLetter.test(firstName)) {
      error = true;
      setFirstNameEmptyErr(true);
    }

    if (specialChar.test(lastName)) {
      error = true;
      setLastNameErr(true);
    }
    if (!hasLetter.test(lastName)) {
      error = true;
      setLastNameEmptyErr(true);
    }

    const pReg = new RegExp('[^A-Za-z\\s+/]', 'g');
    if (pReg.test(pronouns)) {
      error = true;
      setPronounsErr(true);
    }
    if (!hasLetter.test(pronouns)) {
      error = true;
      setPronounsEmptyErr(true);
    }

    const cmReg = new RegExp('[^A-Za-z\\s+.]', 'g');;
    if (cmReg.test(college)) {
      error = true;
      setCollegeErr(true);
    }
    if (!hasLetter.test(college)) {
      error = true;
      setCollegeEmptyErr(true);
    }
    if (cmReg.test(major)) {
      error = true;
      setMajorErr(true);
    }
    if (!hasLetter.test(major)) {
      error = true;
      setMajorEmptyErr(true);
    }

    const gtReg = new RegExp('[^A-Za-z0-9\\s+]', 'g');
    if (gtReg.test(gradTerm)) {
      error = true;
      setGradTermErr(true);
    }
    if (!hasLetter.test(gradTerm)) {
      error = true;
      setGradTermEmptyErr(true);
    }
    // -------------------------------------------------
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="tw-mt-10 tw-shadow-2xl-top-bottom tw-rounded-3xl tw-w-5/12 tw-h-full tw-p-10">
          <h1 className="tw-text-3xl tw-font-bold tw-mb-8">Apply for Graduation at ALL University</h1>
          <div className="tw-text-left tw-p-6">
            <h2 className="tw-text-xl tw-font-semibold tw-mb-1.5">Personal Information: </h2>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Legal First Name:</label>
              <input placeholder="Ex: Jane"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              {fNameErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {fNameEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Legal Last Name:</label>
              <input placeholder="Ex: Smith" type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              {lNameErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {lNameEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Pronouns:</label>
              <input placeholder="Ex: They/Them" type="text"
                onChange={(e) => {
                  setPronouns(e.target.value);
                }}
              />
              {pronounsErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {pronounsEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
            <h3 className="tw-mt-10 tw-text-xl tw-font-semibold tw-mb-1.5">Academic Information: </h3>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">College:</label>
              <input placeholder="Ex: RIT" type="text"
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
              {collegeErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {collegeEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Major:</label>
              <input placeholder="Ex: CS" type="text"
                onChange={(e) => {
                  setMajor(e.target.value);
                }}
              />
              {majorErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {majorEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
            <div className="tw-flex1 tw-mb-4">
              <label className="tw-pr-8">Graduation Term:</label>
              <input placeholder="Ex: Spring 2024" type="text"
                onChange={(e) => {
                  setGradTerm(e.target.value);
                }}
              />
              {gradTermErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error</label>
              )}
              {gradTermEmptyErr && (
                <label className="tw-text-sm tw-pl-4 tw-italic">Error: Empty</label>
              )}
            </div>
          </div>
          <button className="tw-mt-8 btn-primary btn btn-md" onClick={() => { validateInput(); }}>
            Submit Application
          </button>{" "}
        </div>
      </div>
    </div >
  );
};

export default Application;

