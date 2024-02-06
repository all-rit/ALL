import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";

/**
 * Renders the guidance content for the PageLayoutActivity.
 * This component provides recommendations for optimizing the reading experience for individuals with cognitive disabilities.
 * It includes suggestions such as using short paragraphs and sentences, consistent font, and proper headings/subheadings.
 * The component also includes a "Next" button to proceed to the next step.
 *
 * @returns {JSX.Element} The rendered PageLayoutGuidance component.
 */
const PageLayoutGuidance = () => {
  const componentName = "PageLayoutGuidance";

  const handleNav = () => {
    navigate("/Lab5/Exercise/PageLayoutRepair");
  };

  return (
    <Fragment>
      <div className="center-div">
        <div className="guidance">
          The text you read was meant to stimulate what an individual with
          cognitive disability experiences. As read earlier, these individuals
          have a hard time reading under time constraint and interpreting the
          text.
          <div className="lowercontent">
            To optimize their experience, W3 recommends using:
          </div>
          <ul>
            <li>short paragraphs and sentences to reduce cognitive load</li>
            <li>consistent font</li>
            <li>proper headings/subheadings</li>
          </ul>
          <div className="lowercontent">
            Let&apos;s continue on and make the changes. Click
            &lsquo;Next&rsquo;
          </div>
          <div className="flex">
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick={handleNav}
              key="Next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <PageServiceTimer name={componentName} />
    </Fragment>
  );
};

export default PageLayoutGuidance;
