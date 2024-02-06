import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { DementiaInaccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders the DementiaInaccessibleKnowledgeCheck component.
 *
 * @returns {JSX.Element} The rendered DementiaInaccessibleKnowledgeCheck component.
 */
const DementiaInaccessibleKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "DementiaInaccessibleKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/PageLayoutGuidance"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default DementiaInaccessibleKnowledgeCheck;
