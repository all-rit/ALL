import React, { useState } from "react";
import Timer from "./Timer";
import {Modal , ModalBody, ModalFooter} from "reactstrap";

const Bias = (props) =>{
    const {handleNext,biasType,team,avatar,offender} = props;
    const [timerDone, setTimerDone] = useState(false);
    const [isModalActive, setModalActive] = useState(true);
    const [bias,setBias] = useState(null);

    useState(()=>{
        biasType ==="user" ? setBias(avatar[0]?.bias) : setBias(offender?.bias);
    },[team,avatar,offender]);

    const onExit = () => {
        handleNext();
    }
    const penaltyFinished = () => {
        setTimerDone(true);
        setModalActive(false);
    };

    if(biasType!=="none"){
        return(
            <div>
                <Modal isOpen={isModalActive}>  
                    <ModalBody>
                        <div>
                            {biasType ==="user"?<h3>
                                Your avatar was not selected because the {bias}.
                            </h3>:
                            <p>
                                You were not selected because of this {bias} they in the appearance of one of your teammates.
                            </p>
                            }
                        </div>
                        <div>
                            <Timer seconds={30} finished={penaltyFinished}/>
                        </div>
                        <div>
                        {
                            timerDone? <button className="btn btn-primary text-black btn-xl text-uppercase"
                             onClick={onExit}>Next</button>:<></>
                        }
                        </div>
                    </ModalBody>
                </Modal>
                {/* change to any number */}
            </div>
        );
    } else{
        return(<></>)
    }

}

export default Bias;
