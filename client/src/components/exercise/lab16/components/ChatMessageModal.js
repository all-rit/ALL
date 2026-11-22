import React, {useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import PropTypes from "prop-types";


const ChatMessageModal = (props) =>{
    const {handleNavigation} = props;
    const [modal,setModal] = useState(true)

    const navigateMessage = async () => {
        setModal(!modal);
        await handleNavigation();
    };

return <>
    <Modal isOpen={modal} centered className="tw-px-8">
        <ModalHeader className="tw-justify-center">
            <img
                className="tw-w-20 tw-object-contain"
                src="/src/assets/images/lab16/message.svg"
                alt="alert icon"
            />
    </ModalHeader>
        <ModalBody className="tw-text-center tw-py-4 tw-px-2">
        <h5 className="tw-font-semibold">
            New Message
        </h5>
        <p className="tw-text-gray-600">
            Your teammate sent you a message.
        </p>
        </ModalBody>
        <ModalFooter className="tw-justify-center">
        <Button
            onClick={navigateMessage} 
            className="tw-px-8 tw-rounded-2xl tw-bg-mediumBlue">
                Open
        </Button>
        </ModalFooter>
    </Modal>
</>
}

export default ChatMessageModal;

ChatMessageModal.propTypes = {
  handleNavigation: PropTypes.func,
};