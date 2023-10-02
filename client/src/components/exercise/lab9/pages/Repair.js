/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Lab9Context as GameStateContext } from "../lab9/Lab9Context";
import CodeUpdateHeader from "../../lab3/components/CodeUpdateHeader";
import React from "react";
import Popup from "../../shared/Popup";
const Repair = ({ props }) => {
  const gameState = useContext(GameStateContext);
  const { user } = props;

  const renderRepair = () => {
    return <></>;
  };

  return (
    <div>
      <CodeUpdateHeader heading={"Test"} justifyAlignment={"space-between"} />

      <div>{}</div>
      <Popup message={""} handler={""} error={""} />
    </div>
  );
};

export default Repair;
