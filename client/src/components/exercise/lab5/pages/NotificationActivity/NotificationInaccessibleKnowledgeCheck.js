import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { NotificationInaccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders the NotificationInaccessibleKnowledgeCheck component.
 * This component displays a knowledge check and a page service timer.
 * @returns {JSX.Element} The rendered NotificationInaccessibleKnowledgeCheck component.
 */
const NotificationInaccessibleKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "NotificationInaccessibleKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/NotificationGuidance"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default NotificationInaccessibleKnowledgeCheck;
