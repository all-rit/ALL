import React, {useState} from 'react';
import GroupService from '../../../../services/GroupService';

import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
const DeleteModal = (props) =>{
    const {mainToggle,groupID,setInstrGroupsUpdated}= props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deleteGroup = () =>{
        GroupService.deleteGroup(groupID).then(()=>{
            setInstrGroupsUpdated(true)
        })

        toggle()
        mainToggle()
    }

    return(
        <>
            <Button  color="danger" aria-label="delete" onClick={toggle} >Delete Group</Button>
            <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                <ModalHeader>Delete an instructing group</ModalHeader>
                <ModalBody>
                    <ul>
                        <li>
                            Are you sure you would like to delete your group?
                        </li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                        <Button color="danger" onClick={deleteGroup} type="submit">Delete Group</Button>
                        <Button color="secondary" type="submit"onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DeleteModal;