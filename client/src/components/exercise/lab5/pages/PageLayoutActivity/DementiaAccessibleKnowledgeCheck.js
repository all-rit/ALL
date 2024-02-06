import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { DementiaAccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders the Dementia Accessible Knowledge Check component.
 * @returns {JSX.Element} The rendered DementiaAccessibleKnowledgeCheck component.
 */
const DementiaAccessibleKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "DementiaAccessibleKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/NotificationAccessible"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default DementiaAccessibleKnowledgeCheck;
