import React, {useEffect, useState} from 'react';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
const DeleteModal = (props) =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <>
            <Button color="danger" aria-label="delete" onClick={toggle} >Delete Group</Button>
            <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                <ModalHeader>Update an instructing group</ModalHeader>
                <ModalBody>
                    <div>delete group?</div>
                </ModalBody>
                <ModalFooter>
                        <Button color="danger" type="submit">Delete Group</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DeleteModal;