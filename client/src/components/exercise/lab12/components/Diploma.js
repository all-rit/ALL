import { React, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import SealImage from "../../../../assets/images/lab12/diploma_seal.png";
import "../../../../assets/stylesheets/components/Diploma.css";
import useMainStateContext from "src/reducers/MainContext";
import ExerciseStateContext from "../Lab12Context";
import { ExerciseService } from "../../../../services/lab12/ExerciseService";

const Diploma = () => {
  const { state } = useMainStateContext();
  const [nextPage, setNextPage] = useState(`/Lab12/Exercise/AlumniNewsletter`);
  const [buttonLabel, setButtonLabel] = useState(
    "Continue to Alumni Newsletter",
  );
  const [isRepairComplete, setIsRepairComplete] = useState(false);

  const user = state.main.user;

  const fetchExercise = async () => {
    try {
      const currentExercise = await ExerciseService.fetchExercise({
        userid: user.userid,
      });
      if (
        currentExercise.isFormRepairComplete &&
        !currentExercise.isDatabaseRepairComplete
      ) {
        setButtonLabel("Continue");
        setNextPage("/Lab12/Exercise/PreDbRepair");
      }
      setIsRepairComplete(
        currentExercise.isFormRepairComplete &&
          currentExercise.isDatabaseRepairComplete,
      );
    } catch (error) {
      console.error("Error fetching exercise: ", error);
    }
  };

  useEffect(() => {
    fetchExercise();
  }, []);

  const { firstName, lastName, preferredName, college, major, gradTerm } =
    useContext(ExerciseStateContext);

  const handleContinue = () => {
    navigate(nextPage);
  };

  return (
    <div>
      <div className="tw-flex tw-bg-diploma-background tw-flex-col tw-justify-center tw-items-center tw-p-4">
        <h1 className="tw-font-diploma tw-text-7xl tw-leading-none tw-pb-8 tw-pt-4">
          ALL University
        </h1>
        <p
          className="fancy-text tw-text-3xl tw-leading-none"
          data-testid="collegeName"
        >
          Upon the recommendation of the President and Faculty of the{" "}
          <span className="tw-font-diploma tw-leading-none">{college}</span> and
          by the Board of Trustees has conferred upon
        </p>
        <h2
          className="tw-font-bold tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4"
          data-testid="names"
        >
          {isRepairComplete ? preferredName : firstName} {lastName}
        </h2>
        <p className="fancy-text tw-text-3xl tw-leading-none">
          for the degree of
        </p>
        <h3
          className="tw-font-diploma tw-text-5xl tw-leading-none tw-pb-4 tw-pt-4"
          data-testid="degree"
        >
          {major}
        </h3>
        <p className="fancy-text tw-text-3xl tw-leading-none">
          In testimony, thereof, the Board of Trustees has granted this diploma
          bearing the Seal of the Institution.
        </p>
        <p
          className="fancy-text tw-text-3xl tw-pb-8 tw-leading-normal"
          data-testid="date"
        >
          Earned on this {gradTerm}
        </p>
        <div className="tw-flex tw-row tw-justify-evenly tw-items-center tw-w-full">
          <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
          <img
            className="tw-w-32 md:tw-w-40 lg:tw-w-48"
            src={SealImage}
            alt="College Seal"
          />
          <hr className="tw-flex-none tw-flex-grow-0 tw-w-1/5 tw-h-2 tw-border-2" />
        </div>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Alumni Newsletter&quot; button to continue.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

Diploma.propTypes = {
  collegeName: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  degree: PropTypes.string,
  date: PropTypes.string,
};

export default Diploma;
