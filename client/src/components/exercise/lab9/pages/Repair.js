import {
  // useContext,
  useState,
} from "react";
import Proptypes from "prop-types";
// import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../all-components/Navigation/Button";
import CodeBlock from "../../../all-components/CodeBlock/Components/Codeblock";
import DateformRepair from "./DateformRepair";

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
          <DateformRepair />
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

Repair.propTypes = {
  user: Proptypes.string,
  headingText: Proptypes.string,
  repairText: Proptypes.array,
  fileName: Proptypes.string,
};
export default Repair;
