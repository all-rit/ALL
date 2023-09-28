/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Lab9Context as GameStateContext } from "../lab9/Lab9Context"; 

const Repair = ({ props }) => {
    
    const gameState = useContext(GameStateContext);
    const { user } = props;

};

export default Repair;
