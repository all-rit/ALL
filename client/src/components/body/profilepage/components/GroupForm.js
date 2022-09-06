/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import LabService from '../../../../services/LabService';
import GroupService from '../../../../services/GroupService';

import {
  Button,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import FormCheckbox from './FormCheckbox';
import DeleteModal from './DeleteModal';

const GroupForm = (props) => {
  const {
    setInstrGroupsUpdated,
    toggle,
    user,
    addMode,
    groupID,
    groupName,
    assignedLabs,
  } = props;
  const [labs, setLabs] = useState([]);
  // eslint-disable-next-line
  const [setState, setSetState] = useState(0);
  const labsAssigned = [];
  if (assignedLabs !== undefined) {
    assignedLabs.forEach((data) => {
      labsAssigned.push(data.labID);
    });
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    // This cursed line of code will:
    //  1. Grab the form with e.target
    //  2. Create an instance of a FormData object from ReactStrap using the form data
    //  3. Get the fields in that FormData object
    //  4. Create a new object from those entries, our new object will be an Object and not FormData
    // Essentially, this is just a really long winded way of casting FormData to Object, since
    // apparently that's necessary despite this not being an object-oriented or strongly typed language
    // Please refactor this eventually, for the love of all that is holy
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const labs = [];
    for (const [key, value] of Object.entries(formData)) {
      if (value === 'on') {
        labs.push(parseInt(key));
      }
    }

    switch (addMode) {
      case 'add_instr_grp':
        const groupName =
          formData.groupName !== '' ? formData.groupName : 'Default Group Name';
        GroupService.createGroup(user.userid, groupName).then((data) => {
          labs.forEach((labID) => {
            GroupService.addGroupLab(data.groupID, labID);
            setInstrGroupsUpdated(true);
          });
          setInstrGroupsUpdated(true);
        });
        break;
      case 'update_grp_lab':
        if (groupID) {
          if (formData.groupName !== '') {
            GroupService.updateGroup(groupID, formData.groupName);
          }
          labsAssigned.forEach((labID) => {
            if (!labs.includes(labID)) {
              GroupService.deleteGroupLab(groupID, labID).then(() =>
                setInstrGroupsUpdated(true),
              );
            }
          });
          labs.forEach((labID) => {
            if (!labsAssigned.includes(labID)) {
              GroupService.addGroupLab(groupID, labID).then(() =>
                setInstrGroupsUpdated(true),
              );
            }
          });
          setInstrGroupsUpdated(true);
        }
        break;
      default: // this is the case for enrolling in a group
        console.log('Group Form Default Case');
    }

    // Always toggle the modal
    toggle();
  };

  useEffect(() => {
    LabService.getAllLabs().then((data) => {
      setLabs(data);
    });
  }, [setState]);

  switch (addMode) {
    case 'add_instr_grp':
      return (
        <Form onSubmit={onFormSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="groupName">Group name</Label>
              <Input
                type="text"
                name="groupName"
                id="groupName"
                placeholder={'SWEN 344 Web Engineering Fall 2021'}
              />
            </FormGroup>
            <FormGroup check>
              <Label for="assign-lab">Choose labs to assign</Label>
              {labs.map((lab) => (
                <FormCheckbox isChecked={false} lab={lab} />
              ))}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Create Group
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      );
    case 'update_grp_lab':
      return (
        <Form onSubmit={onFormSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="groupName">Group name</Label>
              <Input
                type="text"
                name="groupName"
                id="groupName"
                placeholder={groupName}
              />
            </FormGroup>
            <FormGroup check>
              <Label for="assign-lab">Choose labs to assign</Label>
              {labs.map((lab) => (
                <FormCheckbox
                  isChecked={labsAssigned.includes(lab.id)}
                  lab={lab}
                />
              ))}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Update Group
            </Button>
            <DeleteModal
              mainToggle={toggle}
              groupID={groupID}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
            />
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      );
    default:
      return <></>;
  }
};
export default GroupForm;
