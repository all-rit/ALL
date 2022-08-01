
import { navigate } from "@reach/router";
import { useEffect, useState } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import Applicant from "../../components/Applicant";
import { Form } from "reactstrap";
import GridApplicants from "../../components/GridApplicants";
import {Modal , ModalBody,ModalFooter, Button} from "reactstrap";
import { AvatarStyle } from "avataaars";


//need to make sure that only when the AI doesn't recommend them and that when they are selected that the modal appears
//modal doesn't appear for the last hiring candidate selection; needs to
//need to make the bias against the glasses editable, so that when someone edits the table later the bias can change here as well

const HiringCandidate = (props) => {
    //added avatar and accessoriestype modeled after bias.jsx
    const { actions, avatar, accessoriesType, biasType} = props;
    
    const [roundOfApplicants, setRoundOfApplicants] = useState(0);

    const [selection, setSelection] = useState([]);

    const [userAnswers, setAnswers] = useState([]);
    
    //default of modal set
    const [isModalActive, setModalActive] = useState(false);

    useEffect(() => {
        actions.updateState(EXERCISE_PLAYING);
    }, [actions]);

    //change to avatars and setAvatars in line 25
    // const [avatars, setAvatars] = useState([]);

    const handleContinue = () => {
        if(selection.length > 0){
            let answers = [];
            setModalActive(true);
            answers.push(selection);
            setAnswers(answers);
        }

        if(roundOfApplicants > 2){
            navigate("/Lab6/Exercise/AIReasoningQuestions");
        }
        else{
            let roundCount = roundOfApplicants
            setRoundOfApplicants(roundCount + 1);
        }
     
        //looping thru avatars array
        // for (let i = 0; i < avatars.length; i++){
        //     if(avatars[i]!=="blank"){
        //         isModalActive = true;
        //     }
        // }
        //do the check for what avatar has the attributes. If avatar does have glasses, have isModalActive={true}, but set default to false

        //redo line 29 as an array for avatars, then pass setavatars into gridapplicants. This part still confuses me
        
        // isModalActive = true;

    }
    // useState(()=>{
    //     accessoriesType === "user" ? setAvatars(avatar[0]?.accessories) : setAvatars(avatar?.accessories);

    // },[avatar]);

    //will not need the conditional, just put in line 46. Won't display as long as isModalActive is false
    return(
            <div className="center-div">
                <h2 className="playthrough__title">Choose your first Candidate!</h2>
                <h2 className="cognitive_instructions">Click on their picture to select</h2>
                <h2 className="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”</h2>

                {/*Added modal body*/}

                {/*Edited similar to playerboard file in imagine */}
                <Modal isOpen={isModalActive} toggle={()=>{setModalActive(!isModalActive)}} >  
                    <ModalBody>
                        <div className="tw-p-5 tw-text-center">
                            <h3>Are you sure you wish to select this avatar? The AI advises against it.
                            </h3>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                            <Button className="btn-primary" onClick={()=>{setModalActive(!isModalActive)}}>Yes - Submit Selection</Button>{' '}
                            <Button className="btn-second" onClick={()=>{setModalActive(!isModalActive)}}>No - Back to Selection</Button>
                    </ModalFooter>
                </Modal>

                {roundOfApplicants===0 &&
                    <GridApplicants numApplicants={4} setSelection={setSelection}/>
                }
                {roundOfApplicants===1 &&
                    <GridApplicants numApplicants={4} setSelection={setSelection} />
                }
                {roundOfApplicants===2 &&
                    <GridApplicants numApplicants={4} setSelection={setSelection} />
                }
                {roundOfApplicants===3 &&
                    <GridApplicants numApplicants={4} setSelection={setSelection} />
                }
                
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={handleContinue}
                    key="confirm"
                >                Continue
                </button>
            </div>
        );
    }

    



export default HiringCandidate;
