/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Proptypes, { element } from "prop-types";
import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../all-components/Navigation/Button";
import CodeBlock from "../../../all-components/CodeBlock/Codeblock";
import { HTMLBlock } from "../../../all-components/HTMLComponents/HTMLBlock";
import { CodeLine } from "../../../all-components/HTMLComponents/CodeLine";
import JSONBlock from "../../../all-components/HTMLComponents/JSONBlock";

const Repair = (props) => {
  const GameContext = useContext(GameStateContext);
  // eslint-disable-next-line react/prop-types
  const { user = "", headingText = "", repairText = [], fileName = "" } = props;
  const [isRepairActive, setIsRepairActive] = useState(false);
  const [next, setNext] = useState(false);

  const handleRepair = () => {
    setIsRepairActive(true);
  };
  const handleNext = () => {
    setNext();
  };

  return (
    <div>
      <CodeUpdateHeader
        heading={headingText}
        justifyAlignment={"space-between"}
      />
      <div className="tw-pb-10 tw-text-xl">
        {repairText.map((text, index) => (
          <p className="tw-indent-2" key={index}>
            {text}
          </p>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-pb-5">
        <div className="">
          <Button
            buttonText={"Repair"}
            isPrimary={false}
            onClick={handleRepair}
          />
        </div>
        <div className="tw-p-2"></div>
        <div className="">
          <Button buttonText={"Next"} disabled={next} />
        </div>
      </div>

      {isRepairActive && (
        <CodeBlock fileName={fileName}>
          <JSONBlock>
            <CodeLine>lets sheet on this</CodeLine>
          </JSONBlock>
        </CodeBlock>
      )}
    </div>
  );
};

Button.PropTypes = {
  user: Proptypes.string.isRequired,
  headingText: Proptypes.string.isRequired,
  repairText: Proptypes.array.isRequired,
};

export default Repair;
