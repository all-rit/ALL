import React from "react";
import { Frame } from "../components/Frame";
import { navigate } from "@reach/router";
import ImagineHeader from "../components/ImagineHeader";
import LabButton from "src/components/all-components/LabButton";

const PHDConsentForm = () => {
  // const fontSize = "xs:tw-text-md xl:tw-text-xl";
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
            <LabButton
              onClick={() => navigate("/Imagine2026/PreSurvey")}
              label={"Yes"}
            />

            <LabButton
              onClick={() => navigate("/Imagine2026/PreSurvey")}
              label={"No"}
            />
          </div>
        </div>,
      )}
    </>
  );
};

export default PHDConsentForm;
