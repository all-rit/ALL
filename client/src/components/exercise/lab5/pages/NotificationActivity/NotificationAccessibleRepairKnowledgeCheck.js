import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { NotificationAccessibleRepairKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders the NotificationAccessibleRepairKnowledgeCheck component.
 * This component displays a knowledge check for repairing accessible notifications.
 * It manages the selected state and provides a handler function to toggle the selection.
 *
 * @returns {JSX.Element} The rendered NotificationAccessibleRepairKnowledgeCheck component.
 */
const NotificationAccessibleRepairKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "NotificationAccessibleRepairKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/FormInaccessible"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default NotificationAccessibleRepairKnowledgeCheck;
