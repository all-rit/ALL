import React from "react";
import FauxFigma from "../../../../all-components/FauxFigma";
import AboutFigma from "../../../../../assets/images/lab0/Lab0-AboutFigma.png";
import ReadingFigma from "../../../../../assets/images/lab0/Lab0-ReadingFigma.png";

const WireframeFirstGlance = () => {
  return (
    <div className={"tw-text-left"}>
      <p className={"tw-title"}>Wireframing at a Glance</p>
      <p className={"tw-body tw-py-6"}>
        Below you will see examples of simple wireframing in our own proprietary
        UI/UX editor, Amgif. The point is to develop a high fidelity, easy to
        reproduce example of the desired frontend design for the software
        developers to use as a reference for the production build.
      </p>
      <p className={"tw-body"}>
        When developing UI, accessibility and branding standards are paramount
        for keeping a clean, streamlined product that matches the rest of the
        website. Take for example the wireframes for the About and Reading
        sections below:
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
    </div>
  );
};

export default WireframeFirstGlance;
