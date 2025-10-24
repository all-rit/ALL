import React, { useContext } from "react";
import Lab0Context from "../../Lab0Context";
import LabButton from "../../../../all-components/LabButton";

const ScrumIntroduction = () => {
  const { handleNav } = useContext(Lab0Context);

  const navigateToScrumExercise = () => {
    handleNav("ScrumBoardActivity");
  };

  return (
    <div className={"tw-flex tw-flex-col tw-text-left tw-p-3"}>
      <h2 className={"tw-title"}>
        {" "}
        Introduction to SCRUM and Agile Development
      </h2>
      <p className={"tw-body-text tw-py-6"}>
        <strong>AGILE</strong> development is a development methodology that
        emphasizes the importance of adaptability and ever-changing
        requirements, as well as collaborating with the product owner to ensure
        that the final product is as close to what they want as possible. Using
        AGILE allows teams to deliver and demonstrate value quickly, as well as
        gather feedback to improve the product during development.
      </p>
      <p className={"tw-body-text"}>
        <strong>SCRUM</strong> is an agile framework that helps teams in any
        business setting work together to complete projects in short, time-boxed
        increments called <strong>SPRINTS</strong>, which usually last
        approximately 2 weeks.
      </p>
      <p className={"tw-body-text tw-py-6"}>
        Prior to these sprints, planning must be completed in order for the
        teams to define goals and user stories to be completed during the 2 week
        development window. At the end of each sprint, a meeting is held called
        a <strong>RETROSPECTIVE</strong> in order to recap the previous sprint,
        and determine what went well, what went wrong, and what the team
        could&apos;ve done better.
      </p>
      <p className={"tw-body-text"}>
        Another major component of scrum is the <strong>DAILY STANDUP</strong>,
        where developers meet with their project manager for approximately 15-20
        minutes and give an update on what they completed the day before, what
        they are working on today, and if they have any blockers.
      </p>
      <p className={"tw-body-text tw-py-6"}>
        At Accessible Learning Labs (ALL), teams typically use a customized
        implementation of SCRUM to manage their workflows to ensure efficency
        and adaptability.
      </p>
      <p className={"tw-body-text tw-py-6"}>
        Click the <strong> Next</strong> button below to move on to the Sprint
        Planning exercise.
      </p>
      <div className={"tw-w-full tw-flex tw-justify-center"}>
        <LabButton label={"Next"} onClick={navigateToScrumExercise} />
      </div>
    </div>
  );
};

export default ScrumIntroduction;
