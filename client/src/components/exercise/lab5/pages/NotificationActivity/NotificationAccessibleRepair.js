import React from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import Notification from "../../components/Notification";
import { AccessibleRepairMessage } from "../../../../../constants/lab5";
import useLab5StateContext from "src/reducers/lab5/Lab5Context";

/**
 * Renders the NotificationAccessibleRepair component.
 * This component displays a notification and provides a button to navigate to the next page.
 *
 * @returns {JSX.Element} The rendered NotificationAccessibleRepair component.
 */
const NotificationAccessibleRepair = () => {
  const componentName = "NotificationAccessibleRepair";

  const handleNav = () => {
    navigate("/Lab5/Exercise/NotificationAccessibleRepairKnowledgeCheck");
  };

  const { state } = useLab5StateContext();
  return (
    <div>
      <div className="cognitive_instructions">
        There is a notification that has appeared. Click on it to view it! Note:
        it can only be viewed once.
      </div>
      <Notification
        message={AccessibleRepairMessage}
        fontSize={state.fontsizevalue}
        timeout={state.timeout}
      />
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

export default NotificationAccessibleRepair;
