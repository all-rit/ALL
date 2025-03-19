import React, { useContext } from "react";
import FauxFigma from "../../../../all-components/FauxFigma";
import AboutFigma from "../../../../../assets/images/lab0/Lab0-AboutFigma.png";
import ReadingFigma from "../../../../../assets/images/lab0/Lab0-ReadingFigma.png";
import LabButton from "../../../../all-components/LabButton";
import lab0Context from "../../Lab0Context";

const WireframeFirstGlance = () => {
  const { handleNav } = useContext(lab0Context);

  const navigateNext = () => {
    handleNav("WireframeExercise");
  };

  return (
    <div className={"tw-text-left"}>
      <p className={"tw-title"}>Wireframing at a Glance</p>
      <p className={"tw-body-text tw-py-6"}>
        Below you will see examples of simple wireframing in our own proprietary
        UI/UX editor, <strong>Amgif</strong>. The point is to develop a high
        fidelity, easy to reproduce example of the desired frontend design for
        the software developers to use as a reference for the production build.
      </p>
      <p className={"tw-body-text"}>
        When developing UI, accessibility and branding standards are paramount
        for keeping a clean, streamlined product that matches the rest of the
        website. Take for example the wireframes for the <strong>About</strong>{" "}
        and
        <strong> Reading</strong> sections below:
      </p>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">About</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>About</strong> section is a brief overview of the lab. It
        describes the topic, the goal of the lab, and the activities the user
        will complete throughout the sections.
      </p>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Reading</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Reading</strong> section is an in-depth description and
        explanation of the topic. It explains fundamental concepts as well as
        provides the user with relevant information regarding the topic. This
        section can also include infographics, pictures, and links to additional
        resources.
      </p>
      <FauxFigma>
        <div className={"tw-w-full tw-grid tw-grid-cols-2 tw-gap-3"}>
          <img
            className={"tw-flex"}
            src={AboutFigma}
            alt={"About Lab Figma Design"}
          />
          <img
            className={"tw-flex"}
            src={ReadingFigma}
            alt={"Lab Reading Figma Design"}
          />
        </div>
      </FauxFigma>
      <p className="tw-body-text tw-justify-center">
        Click the <strong> Next</strong> button to continue.
      </p>
      <div className={"tw-flex tw-justify-center tw-py-6"}>
        <LabButton label={"Next"} onClick={navigateNext} />
      </div>
    </div>
  );
};

export default WireframeFirstGlance;
