import {
  // useContext,
  useState,
} from "react";
import Proptypes, {
  // element,
  PropTypes,
} from "prop-types";
// import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../all-components/Navigation/Button";
import CodeBlock from "../../../all-components/CodeBlock/Codeblock";
import JSONText from "../../../all-components/HTMLComponents/JSONText";
import CodeLine from "../../../all-components/HTMLComponents/CodeLine";
// import JSONBlock from "../../../all-components/HTMLComponents/HTMLTag";
import ReactText from "../../../all-components/HTMLComponents/ReactText";
import Tab from "../../../all-components/HTMLComponents/Tab";
// import HTMLTag from "../../../all-components/HTMLComponents/HTMLTag";
// import HTMLText from "../../../all-components/HTMLComponents/HTMLText";
import CodeBlockInput from "../../../all-components/HTMLComponents/CodeBlockInput";
import CommentText from "../../../all-components/HTMLComponents/CommentText";
import MultiTab from "../../../all-components/HTMLComponents/MultiTab";

const Repair = (props) => {
  // const GameContext = useContext(GameStateContext);
  const {
    // user = "",
    headingText = "",
    repairText = [],
    fileName = "",
  } = props;
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
      <div className="tw-pb-10 tw-text-xl ">
        {repairText.map((text, index) => (
          <p className="tw-indent-2" key={index}>
            {text}
          </p>
        ))}
      </div>

      <div className="tw-flex tw-justify-center tw-pb-5">
        <div className="tw-pr-10">
          <Button
            buttonText={"Repair"}
            isPrimary={false}
            onClick={handleRepair}
          />
        </div>
        <div className="tw-p-16"></div>
        <div className="">
          <Button buttonText={"Next"} onClick={handleNext} disabled={next} />
        </div>
      </div>

      {isRepairActive && (
        <CodeBlock fileName={fileName}>
          <ReactText>export const dateform = (props) = &#123;</ReactText>

          <CodeLine>
            <Tab /> <ReactText> const us = &ldquo;us&rdquo; </ReactText>
          </CodeLine>
          <CodeLine>
            <Tab /> <ReactText> const eu = &ldquo;eu&rdquo; </ReactText>
          </CodeLine>
          <CodeLine>
            <Tab /> <ReactText> const dates = &#123; </ReactText>
          </CodeLine>

          <CodeLine>
            <Tab /> <Tab /> <ReactText> &ldquo;us&rdquo; = &#123;</ReactText>
          </CodeLine>
          <CodeLine>
            <Tab /> <Tab /> <Tab />
            <CommentText>
              &#47;&#47; Enter &ldquo;yyyy-mm-dd&rdquo; for localized US
              dateform
            </CommentText>
          </CodeLine>
          <CodeLine>
            <Tab /> <Tab /> <Tab />
            <JSONText> &ldquo;dateform&rdquo; : </JSONText>
            <CodeBlockInput
              attributes={{
                id: 1,
                name: "us_dateform",
                type: "text",
                placeholder: "Enter Dateform Here",
              }}
            />
          </CodeLine>
          <CodeLine>
            <Tab /> <Tab />
            <ReactText> &#125;, </ReactText>
          </CodeLine>

          <CodeLine>
            <Tab /> <Tab /> <ReactText> &ldquo;eu&rdquo; = &#123;</ReactText>
          </CodeLine>
          <CodeLine>
            <Tab /> <Tab /> <Tab />
            <JSONText> &ldquo;dateform&rdquo; : </JSONText>
            <CodeBlockInput
              attributes={{
                id: 2,
                name: "eu_dateform",
                type: "text",
                placeholder: "Enter Dateform Here",
              }}
            />
          </CodeLine>
          <CodeLine>
            <MultiTab numberOfTabs={2}/>
            <ReactText> &#125;, </ReactText>
          </CodeLine>
          <CodeLine>
            <Tab />
            <ReactText> &#125; </ReactText>
          </CodeLine>
          <ReactText>&#125;</ReactText>
          <ReactText>export default ReactText;</ReactText>
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

Repair.propTypes = {
  user: Proptypes.string,
  headingText: Proptypes.string,
  repairText: Proptypes.array,
  fileName: Proptypes.string,
};
export default Repair;
