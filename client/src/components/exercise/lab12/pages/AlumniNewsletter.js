import { React, useContext, useEffect, useState } from "react";
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
  const [isRepairComplete, setIsRepairComplete] = useState(false);

  useEffect(() => {
    checkRepairComplete();
  }, []);

  const checkRepairComplete = async () => {
    try {
      const currentExercise = await ExerciseService.fetchExercise({
        userid: user.userid,
      });
      setIsRepairComplete(
        currentExercise.isFormRepairComplete &&
          currentExercise.isDatabaseRepairComplete,
      );
    } catch (error) {
      console.error(error);
    }
  };

  let alumniName = "";
  let handleContinue;

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
