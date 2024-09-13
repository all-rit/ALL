/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import LabService from "../../../../services/LabService";
import GroupService from "../../../../services/GroupService";

import {
  Button,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import DeleteModal from "./DeleteModal";

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
  const [checkedLabs, setCheckedLabs] = useState({});

  useEffect(() => {
    LabService.getAllLabs().then((data) => {
      setLabs(data);
      const initialCheckedState = {};
      data.forEach((lab) => {
        initialCheckedState[lab.id] = assignedLabs
          ? assignedLabs.includes(lab.labID)
          : false;
      });
      setCheckedLabs(initialCheckedState);
    });
  }, [assignedLabs]);

  const toggleCheck = (labID) => {
    setCheckedLabs((prevCheckedLabs) => ({
      ...prevCheckedLabs,
      [labID]: !prevCheckedLabs[labID],
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const selectedLabs = [];
    for (const [labID, isChecked] of Object.entries(checkedLabs)) {
      if (isChecked) {
        selectedLabs.push(parseInt(labID));
      }
    }

    const formData = new FormData(e.target);
    const groupName = formData.get("groupName") || "Default Group Name";
    console.warn(await GroupService.createGroup(user.userid, groupName));
    try {
      if (addMode === "add_instr_grp") {
        await GroupService.createGroup(user.userid, groupName);
        const addLabPromises = selectedLabs.map((labID) =>
          GroupService.addGroupLab(groupID, labID),
        );
        await Promise.all(addLabPromises);
        setInstrGroupsUpdated(true);
      } else if (addMode === "update_grp_lab" && groupID) {
        if (formData.get("groupName")) {
          await GroupService.updateGroup(groupID, formData.get("groupName"));
        }
        if (assignedLabs.length >= 0 || assignedLabs !== undefined) {
          assignedLabs.forEach((labID) => {
            if (!selectedLabs.includes(labID)) {
              GroupService.deleteGroupLab(groupID, labID);
            }
          });
        }
        if (selectedLabs.length >= 0) {
          selectedLabs.forEach((labID) => {
            if (!assignedLabs.includes(labID)) {
              GroupService.addGroupLab(groupID, labID);
            }
          });
        }
        setInstrGroupsUpdated(true);
      }
      props.toggle();
    } catch (error) {
      console.error("Error creating or updating group:", error);
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <ModalBody>
        <FormGroup>
          <Label for="groupName">Group Name</Label>
          <Input
            type="text"
            name="groupName"
            id="groupName"
            defaultValue={groupName || ""}
            placeholder="Enter Group Name"
          />
        </FormGroup>
        <FormGroup check>
          <Label for="assign-lab">Choose labs to assign</Label>
          {labs.map((lab) => (
            <div key={lab.id}>
              <Input
                type="checkbox"
                name={lab.id}
                id={"lab" + lab.id}
                checked={checkedLabs[lab.id]}
                onChange={() => toggleCheck(lab.id)}
              />
              <Label for={"lab" + lab.id}>{lab.labShortName}</Label>
            </div>
          ))}
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit">
          {addMode === "add_instr_grp" ? "Create Group" : "Update Group"}
        </Button>
        {addMode === "update_grp_lab" && (
          <DeleteModal
            mainToggle={toggle}
            groupID={groupID}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
          />
        )}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Form>
  );
};

export default GroupForm;
