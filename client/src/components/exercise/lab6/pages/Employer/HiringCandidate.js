
import { navigate } from "@reach/router";
import { useEffect } from "react";
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
                <h2 className="cognitive_instructions">Click on their picture to select</h2>
                <h2 className="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”</h2>
                <div className="candidate__row">
                    <Applicant type={"key"} gender={"Gender:"} age={"Age:"} years={"Years of Experience:"} availability={"Availability:"} pay={"Expected Pay:"} ai={"AI Recommendation:"} />
                    <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                    {/* <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                    <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                    <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} /> */} */
                </div>

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
