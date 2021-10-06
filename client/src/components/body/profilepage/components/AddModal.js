import React, { useState } from 'react';
import GroupService from '../../../../services/GroupService.js'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const AddModal = (props) => {

    const addMode = props.addMode;
    const [modal, setModal] = useState(false);
    const [courseName, setCourseName] = useState('');

    const onFormSubmit = e => {
        e.preventDefault()
        // This cursed line of code will:
        //  1. Grab the form with e.target
        //  2. Create an instance of a FormData object from ReactStrap using the form data
        //  3. Get the fields in that FormData object
        //  4. Create a new object from those entries, our new object will be an Object and not FormData
        // Essentially, this is just a really long winded way of casting FormData to Object, since
        // apparently that's necessary despite this not being an object-oriented or strongly typed language
        // Please refactor this eventually, for the love of all that is holy
        const formData = Object.fromEntries((new FormData(e.target)).entries())
        GroupService.createGroup(props.user.id, formData.groupName, [])
        // Always toggle the modal
        toggle()
    }

    const toggle = () => setModal(!modal)

    switch(addMode){
        case "add_instr_grp":
            return(
                <>
                    <button class="btn btn-second groups__create_btn" aria-label="add" onClick={toggle}>Create Group</button>
                    <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
                        <ModalHeader>Create an instructing group</ModalHeader>
                        <Form onSubmit={onFormSubmit}>
                            <ModalBody>
                                <FormGroup>
                                    <Label for="groupName">Group name</Label>
                                    <Input
                                        type="text" name="groupName" id="groupName"
                                        placeholder={"SWEN 344 Web Engineering Fall 2021"}
                                    />
                                </FormGroup>
                                <Label for="assign-lab">Choose labs to assign</Label>
                                <FormGroup check>
                                    <Input type="checkbox" name="lab1" id="lab1"/>
                                    <Label for="lab1" check>Sound and Speech</Label><br/>
                                    <Input type="checkbox" name="lab2" id="lab2"/>
                                    <Label for="lab2" check>Color Blindness</Label><br/>
                                    <Input type="checkbox" name="lab3" id="lab3"/>
                                    <Label for="lab3" check>Screen Readers</Label><br/>
                                    <Input type="checkbox" name="lab4" id="lab4"/>
                                    <Label for="lab4" check>Dexterity</Label><br/>
                                    <Input type="checkbox" name="lab5" id="lab5"/>
                                    <Label for="lab5" check>Cognitive Impairments</Label>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit">Create Group</Button>
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </>
            )
        case "assign_grp_lab":
            return(
                <>
                    <button class="btn btn-second groups__labs__btn" aria-label="add" onClick={toggle}>Update Group</button>
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
            return( <p>This is the default case.</p> )
    }

}

export default AddModal;
