/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import GameStateContext from "../Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Button from "../../../../common/Navigation/Button";

const Repair = (props) => {
  const { user, heading, repairText=[] } = props;
  const [isRepairActive, setIsRepairActive] = useState(false);
  const [Next, setNext] = useState(false);

  return (
    <div>
        <CodeUpdateHeader heading={heading} justifyAlignment={"space-between"} />
        <div>
        {repairText.map((text, index) => <p className="indent-2" key={index}>{text }</p>) }
        </div>
        <div className="tw-flex tw-flex tw-justify-center ">
      <div className="tw-pr-10">
        <Button buttonText={"Repair"} isPrimary={false} />
        </div>
        <div className="tw-pl-10">
        <Button buttonText={"Next"} disabled={true} />
      </div>

      </div>
      
      {isRepairActive && <>
        placeholder
      </>}
    </div>
  );
};

export default Repair;
