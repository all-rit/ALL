import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import Applicant from "../../components/Applicant";
import { Form } from "reactstrap";
import GridApplicants from "../../components/GridApplicants";



const HiringCandidate = (props) => {
    const { actions } = props;

    useEffect(() => {
        actions.updateState(EXERCISE_PLAYING);
    }, [actions]);

    const handleContinue = () => {
        navigate("/Lab6/Exercise/AIReasoningQuestions");
    }

    return (
        <Form>

            <div className="center-div">
                <h2 className="playthrough__title" >Choose A Candidate</h2>
                <h2 className="cognitive_instructions">Click on a candidates picture to select</h2>
                <h2 className="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc. here Dan”</h2>

                <GridApplicants />
                
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={handleContinue}
                    key="confirm"
                >
                    Continue
                </button>
            </div>
        </Form>
    );
}

export default HiringCandidate;
