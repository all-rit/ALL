import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import "C:/Users/MrRob/ALL/ALL/client/src/components/quiz/App.css";


import Applicant from "../../components/Applicant";

const AIRepair = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/FixedHiringCandidate");
    }


    const data = [
        {Characteristic: " ", Inclusion: " ", Weight: " "},
        {Characteristic: "Gender", Inclusion: "No",  Weight: "X"},
        {Characteristic: "Years of Experience", Inclusion: "No", Weight: "X"},
        {Characteristic: "Availability", Inclusion: "Yes", Weight: "2/10"},
        {Characteristic: "Salary", Inclusion: "Yes", Weight: "2/10"},
        {Characteristic: "Age", Inclusion: "No", Weight: "X"},
        {Characteristic: "Appearance", Inclusion: "Yes", Weight: "6/10"},
        ]


    return(
        <div className="center-div">
            <h2 class="playthrough__title">Repair the AI</h2>
            <div className="center-div">
            <div className="playthrough__sentence">
            Select row, adjust inclusion of attribute, then adjust weight to determine how significant each attribute is to AI selection.
            </div>
        </div>


        <div className= "App">
            <table>
                <tr>
                    <th>Characteristic</th>
                    <th>Inclusion</th>
                    <th>Weight</th>
                </tr>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.Characteristic}</td>
                        <td>{val.Inclusion}</td>
                        <td>{val.Weight}</td>
                    </tr>
                )
            })}
            </table>
            </div>
          
        





            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleStart}
                key="start"
            >
                Redo With Repair
            </button>
      </div>
    );
}

export default AIRepair;
