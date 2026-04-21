import React from "react";
import PropTypes from "prop-types";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";
import ImagineHeader from "../components/ImagineHeader";
import LabButton from "src/components/all-components/LabButton";

const PHDConsentForm = ({ setConsent }) => {
  const handleAnswer = (answer) => {
    setConsent(answer);
    sessionStorage.setItem("phdConsent", JSON.stringify(answer));

    if (answer) {
      navigate("/Imagine2026/PreSurvey");
    } else {
      navigate("/Imagine2026/GalagaInstructions");
    }
  };
  return (
    <div className="tw-relative tw-w-full tw-h-full">
      <ImagineHeader title="PHD Consent Form" />
      {Frame(
        <div className="tw-grid tw-w-[60vw] tw-max-w-prose tw-pt-2">
          <p className="tw-body-text">
            The purpose of this study is to provide participants with a better
            understanding of experiential vs expression-based interventions.
            Your experiences and feedback will assist us in enhancing the
            educational abilities of instructors at RIT and other institutions.
            We will be asking several questions related to your activity
            experiences. The form should take you between 2-4 minutes to
            complete. All responses will remain confidential. No personally
            identifiable information will be made public and any personally
            identifiable information included in the results will be immediately
            removed. You may not respond to any questions which you are not
            comfortable in responding to and may cease involvement at any time.
            By filling out the survey you are giving consent for your responses
            to be used in this research, and possibly be made public. Responses
            which include numerical values or likert values will be averaged
            with other responses. No individual responses will be provided to
            anyone not directly involved with the study. In the event an
            individual quote or feedback is made public, all personally
            identifiable information in any manner will be removed from any
            statements. Additionally, no feedback which could negatively reflect
            upon an individual or groups will be made public at any time.
            Whenever possible, responses will be combined and aggregated with
            all of the other survey responses. The completion of the survey is
            confidential. All responses are voluntary. If you have any
            questions, please contact Daniel Krutz at dxkvse@rit.edu or (585)
            475 – 2896. You may also contact the RIT HSRO office at
            HSRO@rit.edu.
          </p>
          <br />
          <p className="tw-body-text tw-font-bold">
            Do you consent to your data being used? Please click an option
            below.
          </p>
          <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-4">
            <LabButton onClick={() => handleAnswer(true)} label={"Yes"} />
            <LabButton onClick={() => handleAnswer(false)} label={"No"} />
          </div>
        </div>,
      )}
    </div>
  );
};

PHDConsentForm.propTypes = {
  setConsent: PropTypes.func.isRequired,
  path: PropTypes.string,
};

export default PHDConsentForm;
