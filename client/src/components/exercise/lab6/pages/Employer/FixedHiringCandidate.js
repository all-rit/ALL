import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import Applicant from "../../components/Applicant";



const FixedHiringCandidate = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/ExerciseEnd");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">REPAIRED: Choose A Candidate</h2>
            <h2 class="cognitive_instructions">Click on a candidates picture to select</h2>
            <h2 class="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”</h2>
            
            <div className="candidate__row">
                <Applicant type={"key"} gender={"Gender:"} age={"Age:"} years={"Years of Experience:"} availability={"Availability:"} pay={"Expected Pay:"} ai={"AI Recommendation:"}/>
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"}/>
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"}/>
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"}/>
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"}/>
            </div>

            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Continue
            </button>
      </div>
    );
}

export default FixedHiringCandidate;