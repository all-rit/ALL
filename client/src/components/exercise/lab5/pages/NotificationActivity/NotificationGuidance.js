import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";

/**
 * Renders the NotificationGuidance component.
 * This component displays guidance and recommendations for users with dyslexia.
 * It also includes a button to navigate to the next step.
 *
 * @returns {JSX.Element} The rendered NotificationGuidance component.
 */
const NotificationGuidance = () => {
  const componentName = "NotificationGuidance";

  const handleNav = () => {
    navigate("/Lab5/Exercise/NotificationRepair");
  };

  return (
    <Fragment>
      <div className="center-div">
        <div className="guidance">
          The activity you completed was meant to stimulate what an individual
          with dyslexia experiences
          <div className="lowercontent">Common challenges include:</div>
          <ul>
            <li>
              Distinguishing among homophones such as &quot;their&quot; and
              &quot;there&quot;
            </li>
            <li>Reading quickly</li>
            <li>Confusing the order of letters in words</li>
            <li>Spelling highly phonetic words</li>
          </ul>
          <div className="lowercontent">
            To optimize their experience, W3C recommends:
          </div>
          <ul>
            <li>Providing users enough time to read and use content</li>
            <li>Default fonts are no smaller than 12px</li>
          </ul>
          <div className="lowercontent">
            Let&rsquo;s continue on and make the changes. Click
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

export default NotificationGuidance;
