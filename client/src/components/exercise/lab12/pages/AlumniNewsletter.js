import React from "react";
import InformationLetterEmail from "../../../all-components/InformationLetterEmail";
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
        handleContinue={handleContinue}
      />
    </div>
  );
};

AlumniNewsletter.propTypes = {
  name: PropTypes.string,
};

export default AlumniNewsletter;
