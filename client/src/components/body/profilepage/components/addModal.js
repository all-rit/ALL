import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const AddModal = (props) => {

    const addMode = props.addMode;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    switch(addMode){
        case "add_instr_grp":
            return(
                <>
                    <Fab className="add-btn" aria-label="add" onClick={toggle}>
                        <AddIcon />
                    </Fab>
                    <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                        <ModalHeader>Update assigned labs</ModalHeader>
                        <ModalBody>
                            Group name field<br/>
                            Choose labs to assign
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Create Group</Button>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </>
            )
        case "assign_grp_lab":
            return(
                <>
                    <Fab className="add-btn" aria-label="add" onClick={toggle}>
                        <AddIcon />
                    </Fab>
                    <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                        <ModalHeader>Create an instructing group</ModalHeader>
                        <ModalBody>
                            Checkbox with the five labs
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Update Labs</Button>
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </>
            )
        default:
            return(
                <p>This is the default case.
                </p>
            )
    }

}

export default AddModal;