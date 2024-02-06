import React from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Notification from "../../components/Notification";
import { InaccessibleMessage } from "../../../../../constants/lab5";

/**
 * Renders a component for displaying an inaccessible notification.
 * Clicking on the notification will allow the user to view it.
 * The notification can only be viewed once.
 *
 * @returns {JSX.Element} The rendered component.
 */
const NotificationInaccessible = () => {
  const componentName = "NotificationInaccessible";

  const handleNav = () => {
    navigate("/Lab5/Exercise/NotificationInaccessibleKnowledgeCheck");
  };

  return (
    <div>
      <div className="cognitive_instructions">
        There is a notification that has appeared. Click on it to view it! Note:
        it can only be viewed once.
      </div>
      <Notification message={InaccessibleMessage} />
      <div className="flex float-right">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleNav}
          key="next"
        >
          Next
        </button>
      </div>
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default NotificationInaccessible;
