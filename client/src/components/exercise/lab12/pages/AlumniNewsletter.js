import React from "react";
// import { navigate } from "@reach/router";
// import { useEffect } from "react";
// import { REPAIR, EXERCISE_STATES } from "../../../../../constants/lab12";
import InformationLetterEmail from "../../lab11/pages/InformationLetterEmail";
import { ALUMNI_NEWSLETTER_CONTENT } from "src/constants/lab12/index";
import PropTypes from "prop-types";

const AlumniNewsletter = (props) => {
  const { name } = props;

  const handleContinue = () => {
    // eventually should navigate to next page
  };

  return (
    <div className="center-div">
      <InformationLetterEmail
        isEditable={false}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        showsFogIndex={false}
        alumniName={name}
      />

      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Next
        </button>
      </div>
    </div>
  );
};

AlumniNewsletter.propTypes = {
  name: PropTypes.string,
};

export default AlumniNewsletter;
