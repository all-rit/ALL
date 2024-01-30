import React, { useState } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { DyslexiaAccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";

/**
 * Renders a knowledge check component that is accessible for individuals with dyslexia.
 * @returns {JSX.Element} The rendered DyslexiaAccessibleKnowledgeCheck component.
 */
const DyslexiaAccessibleKnowledgeCheck = () => {
  const [selected, setSelected] = useState(false);
  const componentName = "DyslexiaAccessibleKnowledgeCheck";

  const handler = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <KnowledgeTest
        handler={handler}
        question={KnowledgeCheck}
        link={"/Lab5/Exercise/DementiaInaccessible"}
      />
      <PageServiceTimer name={componentName} />
    </div>
  );
};

export default DyslexiaAccessibleKnowledgeCheck;
