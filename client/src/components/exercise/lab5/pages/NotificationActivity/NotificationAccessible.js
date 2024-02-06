import React from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Notification from "../../components/Notification";
import { AccessibleMessage } from "../../../../../constants/lab5";

/**
 * Renders a component for displaying a notification that can be accessed.
 *
 * @returns {JSX.Element} The rendered component.
 */
const NotificationAccessible = () => {
  const componentName = "NotificationAccessible";

  const handleNav = () => {
    navigate("/Lab5/Exercise/NotificationAccessibleKnowledgeCheck");
  };

  return (
    <div>
      <div className="cognitive_instructions">
        There is a notification that has appeared. Click on it to view it! Note:
        it can only be viewed once.
      </div>
      <Notification message={AccessibleMessage} />
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

export default NotificationAccessible;
