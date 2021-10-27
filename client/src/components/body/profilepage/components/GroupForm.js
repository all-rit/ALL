import React, { useEffect, useState } from 'react';
import LabService from '../../../../services/LabService';
import GroupService from '../../../../services/GroupService';
import UserService from '../../../../services/UserService';
import {
    Button,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
} from 'reactstrap';

const GroupForm = (props) => {
    const {setInstructingGroups,toggle, user,addMode, groupID, groupName} = props
    const [ labs, setLabs ] = useState([]);
    const [ groupLabs, setGroupLabs ] = useState([]);
    // eslint-disable-next-line
    const [setState, setSetState] = useState(0)
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
        let labs=[]
        for (const [key,value] of Object.entries(formData)){
            if(value==="on"){
                if(!groupLabs.includes(key)){
                    labs.push(key)
                }
            }
        }
        if(!groupID){
            GroupService.createGroup(user.userid, formData.groupName).then((data) => {
                labs.forEach((labID)=>{
                    GroupService.addGroupLab(data.groupID,labID)
                })
                UserService.getUserInstructingGroups(user.userid).then((data) => {
                    setInstructingGroups(data)
                })
            })
        }
        else {
            if(formData.groupName!==''){
                GroupService.updateGroup(groupID,formData.groupName)
                groupLabs.forEach((lab)=>{
                    if(!labs.includes(lab)){
                        GroupService.deleteGroupLab(groupID,lab.id)
                    }
                })
                UserService.getUserInstructingGroups(user.userid).then((data) => {
                     setInstructingGroups(data)
                })
            }
        }

        // Always toggle the modal
        toggle()
    }
    useEffect(() => {
        LabService.getAllLabs().then((data) => {
            setLabs(data);
        })
        if(groupID){
            GroupService.getGroupAssignedLabs(groupID).then((data)=>{
                let grplabs=[]
                data.forEach((data)=>{
                    grplabs.push(data.labID)
                })
                setGroupLabs(grplabs)
            })
        }
        
    }, [groupID,setState]);
    switch(addMode){
        case "add_instr_grp":
            return(
                <Form onSubmit={onFormSubmit}>
                    <ModalBody>
                            <FormGroup>
                                <Label for="groupName">Group name</Label>
                                    <Input
                                        type="text" name="groupName" id="groupName"
                                        placeholder={"SWEN 344 Web Engineering Fall 2021"}
                                    />
                            </FormGroup>
                            <FormGroup check>
                                <Label for="assign-lab">Choose labs to assign</Label>
                                {labs.map((lab) => (
                                    <CustomInput for={"lab"+lab.id} type="checkbox" name={lab.id} id={"lab"+lab.id} label={lab.labShortName}/>
                                ))}
                            </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type="submit">Create Group</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
        )
        case "update_grp_lab":
            return(<Form onSubmit={onFormSubmit}>
                <ModalBody>
                        <FormGroup>
                            <Label for="groupName">Group name</Label>
                                <Input
                                    type="text" name="groupName" id="groupName"
                                    placeholder={groupName}
                                />
                        </FormGroup>
                        <FormGroup check>
                            <Label for="assign-lab">Choose labs to assign</Label>
                            {labs.map((lab) => (
                                <CustomInput for={"lab"+lab.id} type="checkbox" name={lab.id} id={"lab"+lab.id} checked={groupLabs.includes(lab.id)?true:false} label={lab.labShortName}/>
                            ))}
                        </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit">Update Group</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Form>)
        default:
            return( <p>This is the default case.</p> )
    
    }
}
export default GroupForm;