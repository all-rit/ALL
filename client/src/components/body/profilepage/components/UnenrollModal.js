import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter, ModalHeader,
} from 'reactstrap';
import GroupService from "../../../../services/GroupService";

const UnenrollModal = (props) => {
    const { buttonLabel,className, userid, groupid, groupsUpdated } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const unenroll = (userid, groupid) => {
        GroupService.unenrollUserFromGroup(userid, groupid).then((response) => {
            if (response.status === 200){
                console.log("Successfully unenrolled from group.")
                groupsUpdated(true);
            } else {
                console.log("Failed to unenroll from group.")
            }
        });
        toggle();
    };

    return (
        <ul>
            <button class="groups__button button Button btn btn-second" onClick={toggle}>{buttonLabel}</button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader>
                    Unenroll from group
                </ModalHeader>
                <ModalBody>
                    <ul>
                        <li><p>Are you sure you want to unenroll?</p></li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-primary" onClick={() => unenroll(userid, groupid)}>
                        Unenroll
                    </Button>{' '}
                    <Button className="btn-second" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </ul>
    );

}

export default UnenrollModal;