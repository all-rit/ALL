
import { navigate } from "@reach/router";
import { useEffect, useState } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import Applicant from "../../components/Applicant";
import { Form } from "reactstrap";
import GridApplicants from "../../components/GridApplicants";
import {Modal , ModalBody} from "reactstrap";



const HiringCandidate1 = (props) => {
    //added avatar and accessoriestype modeled after bias.jsx
    const { actions, avatar, accessoriesType, isModalActive, setModalActive} = props;
   



    useEffect(() => {
        actions.updateState(EXERCISE_PLAYING);
    }, [actions]);

    const handleContinue = () => {
        navigate("/Lab6/Exercise/HiringCandidate2");
    }
    
    const [accessories, setAccessories] = useState(null);

    useState(()=>{
        accessoriesType === "user" ? setAccessories(avatar[0]?.accessories) : setAccessories(avatar?.accessories);

    },[avatar]);


    if(accessoriesType==="blank" || accessoriesType!=="blank"){
    return(
        <Form>
            <div className="center-div">
                <h2 className="playthrough__title">Choose your first Candidate!</h2>
                <h2 className="cognitive_instructions">Click on their picture to select</h2>
                <h2 className="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”</h2>

                <GridApplicants numApplicants={4} />

                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={handleContinue}
                    key="confirm"
                >                Continue
                </button>
            </div>
        </Form>
        );
    }

    

    if(accessoriesType!=="blank"){
        return(
            <div>
                <Modal isOpen={isModalActive}>
                    <ModalBody>
                        <div className="tw-p-5 tw-text-center">
                            <h3>Are you sure you wish to select this avatar. The AI advises against it.
                            </h3>
                        </div>

                        <button btn btn-primary btn-xl text-uppercase leftButton>No - Back to Selection</button>
                        <button btn btn-primary btn-xl text-uppercase rightButton>Yes - Submit Selection</button>
                    </ModalBody>
                </Modal>
            </div>
        );
    };


}


export default HiringCandidate1;
