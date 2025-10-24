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
        Below you will see examples of simple wireframing in a fictional UI/UX
        editor, <strong>Amgif</strong>. The point is to develop a high fidelity,
        easy to reproduce example of the desired frontend design for the
        software developers to use as a reference for the production build.
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
        The <strong>About</strong> section introduces the lab with a clear
        overview of its topic, goal, and activities. This section is one of the
        most important for conveying the significance of the topic within the
        categories of Accessible Learning Labs (Accessibility, AI/ML, and any
        future category). It establishes the lab&apos;s purpose and guides users
        on what to expect, ensuring they begin with clarity and focus.
      </p>
      <h3 className="tw-text-2xl tw-font-bold tw-pt-4">Reading</h3>
      <p className={"tw-body-text tw-pt-2"}>
        The <strong>Reading</strong> section offers a detailed explanation of
        the topic, covering essential concepts and providing relevant
        information to support users&apos; understanding. It often includes
        visual aids like infographics and pictures, as well as links to
        additional resources, enriching the learning experience and encouraging
        further exploration.
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
      <div>
        <p className="tw-body-text tw-justify-self-center">
          Click the <strong> Next</strong> button to continue.
        </p>
        <div className={"tw-flex tw-justify-center tw-py-6"}>
          <LabButton label={"Next"} onClick={navigateNext} />
        </div>
      </div>
    </div>
  );
};

export default WireframeFirstGlance;
