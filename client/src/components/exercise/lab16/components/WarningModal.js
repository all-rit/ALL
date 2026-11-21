

import React, {useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { navigate } from "@reach/router";


const WarningModal = ()=>{
    const [modal,setModal] = useState(true)
    const toggle = () => {
        setModal(!modal);
        navigate('/Lab16/Exercise/TeammateDeepfake')
    };

return <>
    <Modal isOpen={modal} centered className="tw-px-8">
        <ModalHeader className="tw-text-center tw-justify-center tw-text-red-600 tw-font-bold">
               {/* Tournament Alert */}
               <img
                    className="tw-w-12 tw-h-12 tw-object-contain"
                    src="/src/assets/images/lab16/alert.svg"
                    alt="alert icon"
                  />
    </ModalHeader>
        <ModalBody className="tw-text-center tw-py-6 tw-px-2">
        <h5 className="tw-font-semibold">
            You are disqualified!
        </h5>
        <p className="tw-text-gray-600">
            We received an image of your teammate cheating during the game.
        </p>
        </ModalBody>
        <ModalFooter className="tw-justify-center">
        <Button color="danger" onClick={toggle} className="tw-px-8">
                View Image
        </Button>
        </ModalFooter>
    </Modal>
</>
}

export default WarningModal;