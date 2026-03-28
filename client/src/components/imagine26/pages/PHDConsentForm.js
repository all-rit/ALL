import React from "react";
import PropTypes from "prop-types";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";
import ImagineHeader from "../components/ImagineHeader";
import LabButton from "src/components/all-components/LabButton";

const PHDConsentForm = ({ setConsent }) => {
  const handleAnswer = (answer) => {
    setConsent(answer);

    // optional: also store in sessionStorage
    sessionStorage.setItem("phdConsent", JSON.stringify(answer));

    if (answer) {
      navigate("/Imagine2026/PreSurvey");
    } else {
      navigate("/Imagine2026/GalagaInstructions");
    }
  };
  return (
    <>
      <ImagineHeader title="PHD Consent Form" />
      {Frame(
        <div className="tw-grid tw-w-[20vw]">
          <p className="tw-body-text">
            form info blah blah + Place Holder + Lab questions route will be
            added in another story below is the place Holder
          </p>
          <br />
          {/*&apos; is just a apostrophe --> " ' "*/}
          <p className="tw-body-text">
            Do you consent to your data being used? Please click an option below
          </p>

          <div className="tw-flex tw-gap-4 tw-mt-4">
            <LabButton onClick={() => handleAnswer(true)} label={"Yes"} />

            <LabButton onClick={() => handleAnswer(false)} label={"No"} />
          </div>
        </div>,
      )}
    </>
  );
};

PHDConsentForm.propTypes = {
  setConsent: PropTypes.func.isRequired,
  path: PropTypes.string,
};

export default PHDConsentForm;
