/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Proptypes, { element, PropTypes } from "prop-types";
import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../all-components/Navigation/Button";
import CodeBlock from "../../../all-components/CodeBlock/Codeblock";
import JSONText from "../../../all-components/HTMLComponents/JSONText";
import CodeLine from "../../../all-components/HTMLComponents/CodeLine";
import JSONBlock from "../../../all-components/HTMLComponents/HTMLTag";
import ReactText from "../../../all-components/HTMLComponents/ReactText";
import Tab from "../../../all-components/HTMLComponents/Tab";
import HTMLTag from "../../../all-components/HTMLComponents/HTMLTag";
import HTMLText from "../../../all-components/HTMLComponents/HTMLText";
import CodeBlockInput from "../../../all-components/HTMLComponents/CodeBlockInput";

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
          <ReactText>export const ReactText = (props) = &#123;</ReactText>
          <CodeLine>
            <Tab /> <ReactText> const handleNext = () =&#62; </ReactText>
          </CodeLine>
          <CodeLine>
            <Tab /> <Tab />
            <ReactText> const input = </ReactText>
            <CodeBlockInput
              attributes={{
                id: 1,
                name: "example",
                type: "text",
                placeholder: "This is a placeholder",
              }}
            />
            <ReactText>;</ReactText>
          </CodeLine>

          <ReactText>&#125;</ReactText>
          <ReactText>export default ReactText;</ReactText>
          <JSONText>variable: asdfasdfasdf</JSONText>
          <HTMLTag>&#60;div className = &ldquo;coolCSS&rdquo;&#62;</HTMLTag>
          <CodeLine>
            <Tab />
            <HTMLText> hello this is html text </HTMLText>
          </CodeLine>
          <HTMLTag>&#60;/div&#62;</HTMLTag>
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

CodeBlockInput.propTypes = {
  attributes: PropTypes.object,
};
export default Repair;
