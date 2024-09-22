import { React, useContext } from "react";
import InformationLetterEmail from "../../../all-components/InformationLetterEmail";
import { ALUMNI_NEWSLETTER_CONTENT } from "src/constants/lab12/index";
import ExerciseStateContext from "../Lab12Context";
import { navigate } from "@reach/router";
import { ExerciseService } from "../../../../services/lab12/ExerciseService";
import useMainStateContext from "../../../../reducers/MainContext";

const AlumniNewsletter = () => {
  const { firstName, lastName, preferredName } =
    useContext(ExerciseStateContext);
  const { state } = useMainStateContext();
  const user = state.main.user;

  const isRepairComplete = async () => {
    const currentExercise = await ExerciseService.fetchExercise({
      userid: user.userid,
    });
    return (
      currentExercise.isFormRepairComplete &&
      currentExercise.isDatabaseRepairComplete
    );
  };

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
