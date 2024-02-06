import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { NotificationAccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders the NotificationAccessibleKnowledgeCheck component.
 * This component displays a knowledge check and a page service timer.
 * @returns {JSX.Element} The rendered NotificationAccessibleKnowledgeCheck component.
 */
const NotificationAccessibleKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "NotificationAccessibleKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/NotificationInaccessible"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default NotificationAccessibleKnowledgeCheck;
