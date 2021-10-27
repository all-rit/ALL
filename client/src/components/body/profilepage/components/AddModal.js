import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
} from 'reactstrap';
import GroupForm from './GroupForm.js';

const AddModal = (props) => {

    const {addMode,user, setInstructingGroups, groupID, groupName} = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    switch(addMode){
        case "add_instr_grp":
            return(
                <>
                    <button class="btn btn-second groups__create_btn" aria-label="add" onClick={toggle}>Create Group</button>
                    <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                        <ModalHeader>Create an instructing group</ModalHeader>
                        <GroupForm toggle={toggle} setInstructingGroups={setInstructingGroups} user={user} groupID={groupID} addMode={addMode}/>
                    </Modal>
                </>
            )
        case "update_grp_lab":
            return(
                <>
                    <button class="btn btn-second groups__labs__btn" aria-label="add" onClick={toggle}>Update Group</button>
                    <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                        <ModalHeader>Update an instructing group</ModalHeader>
                        <GroupForm toggle={toggle} setInstructingGroups={setInstructingGroups} user={user} groupID={groupID} groupName={groupName} addMode={addMode}/>
                    </Modal>
                </>
            )
        default:
            return( <p>This is the default case.</p> )
    }

}

export default AddModal;
