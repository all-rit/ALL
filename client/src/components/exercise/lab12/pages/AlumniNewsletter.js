import { React, useContext, useState } from "react";
import InformationLetterEmail from "../../../all-components/InformationLetterEmail";
import { ALUMNI_NEWSLETTER_CONTENT } from "src/constants/lab12/index";
import ExerciseStateContext from "../Lab12Context";
import { navigate } from "@reach/router";

const AlumniNewsletter = () => {
  const { firstName, lastName, preferredName } =
    useContext(ExerciseStateContext);

  // will need to update
  const [isRepairComplete] = useState(false);

  var alumniName = "";
  var handleContinue;

  if (isRepairComplete) {
    alumniName = preferredName + " " + lastName;
    handleContinue = () => {
      navigate(`/Lab12/Exercise/PostCorrectNewsletter`);
    };
  } else {
    alumniName = firstName + " " + lastName;
    handleContinue = () => {
      navigate(`/Lab12/Exercise/PostWrongNewsletter`);
    };
  }

  return (
    <div className="center-div">
      <InformationLetterEmail
        isEditable={false}
        letterBody={ALUMNI_NEWSLETTER_CONTENT}
        showsFogIndex={false}
        alumniName={alumniName}
        handleContinue={handleContinue}
      />
    </div>
  );
};

export default AlumniNewsletter;
