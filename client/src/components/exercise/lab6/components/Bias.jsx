import React, { useState } from "react";
// import Timer from "./Timer";
import {Modal , ModalBody} from "reactstrap";

const Bias = (props) =>{
    const {handleNext,biasType,team,avatar,offender,isModalActive,setModalActive} = props;
    // const [timerDone, setTimerDone] = useState(false);
    const [bias,setBias] = useState(null);

    useState(()=>{
        biasType ==="user" ? setBias(avatar[0]?.bias) : setBias(offender?.bias);
    },[team,avatar,offender]);

    const onExit = () => {
        handleNext();
    }
    const penaltyFinished = () => {
        // setTimerDone(true);
        setModalActive(false);
        onExit()
    };

    if(biasType!=="none"){
        return(
            <div>
                <Modal isOpen={isModalActive}>
                    <ModalBody>
                        <div className="tw-p-5 tw-text-center">
                            {biasType ==="user"?<h3>
                                Are you sure you want to select that/those applicant(s)?
                            </h3>:
                            <h3>
                            </h3>
                            }
                        </div>
                        
                        <div onClick={onExit}>
                            <button>  
                                Next 
                            </button>
                        </div>

                        {/* <div>
                            <Timer seconds={30} finished={penaltyFinished}/>
                        </div> /}
                        {/ <div>

                            timerDone? <button className="btn btn-primary text-black btn-xl text-uppercase" */}
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