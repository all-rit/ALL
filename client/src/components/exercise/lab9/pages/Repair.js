/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Proptypes from "prop-types";
import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../../common/Navigation/Button";

const Repair = (props) => {
  const GameContext = useContext(GameStateContext);
  // eslint-disable-next-line react/prop-types
  const { user="", headingText="", repairText = [] } = props;
  const [isRepairActive, setIsRepairActive] = useState(false);
  const [next, setNext] = useState(false);


  const handleRepair = () => {
    setIsRepairActive(true);
  }
  const handleNext = () => {
    setNext();
   }
  
  return (
    <div>
      <CodeUpdateHeader heading={headingText} justifyAlignment={"space-between"} />
      <div>
        {repairText.map((text, index) => (
          <p className="indent-2" key={index}>
            {text}
          </p>
        ))}
      </div>
      <div className="tw-flex tw-flex tw-justify-center ">
        <div className="tw-pr-10">
          <Button buttonText={"Repair"} isPrimary={false} onClick={handleRepair} />
        </div>
        <div className="tw-pl-10">
          <Button buttonText={"Next"} disabled={next} />
        </div>
      </div>

      {isRepairActive && <>placeholder</>}
    </div>
  );
};

Button.PropTypes = {
  user: Proptypes.string.isRequired,
  headingText: Proptypes.string.isRequired,
  repairText: Proptypes.array.isRequired,

}

export default Repair;
