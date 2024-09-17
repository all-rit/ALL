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
      if (assignedLabs) {
        assignedLabs.map((lab) => {
          initialCheckedState[lab.labID] = true;
        });
      }
      setCheckedLabs(initialCheckedState);
    });
  }, [assignedLabs]);

  useEffect(() => {
    console.log(checkedLabs);
  }, [checkedLabs]);

  const toggleCheck = (labID) => {
    setCheckedLabs((prevCheckedLabs) => ({
      ...prevCheckedLabs,
      [labID]: !prevCheckedLabs[labID],
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const groupName = formData.get("groupName") || "Default Group Name";

      let selectedLabs = Object.keys(checkedLabs)
        .filter((labID) => checkedLabs[labID])
        .map((labID) => parseInt(labID));

      if (addMode === "add_instr_grp") {
        const newGroup = await GroupService.createGroup(user.userid, groupName);
        console.log("New group created:", newGroup);

        const addLabPromises = selectedLabs.map((labID) => {
          GroupService.addGroupLab(newGroup.id, labID);
        });

        await Promise.all(addLabPromises);
      } else if (addMode === "update_grp_lab" && groupID) {
        if (formData.get("groupName") !== props.groupName) {
          await GroupService.updateGroup(groupID, formData.get("groupName"));
        }

        if (selectedLabs.length >= 0) {
          for (const lab in checkedLabs) {
            if (Array.isArray(assignedLabs) && assignedLabs.length !== 0) {
              if (
                !assignedLabs.includes(lab.labID) ||
                assignedLabs.length === 0
              ) {
                await GroupService.addGroupLab(groupID, `${lab}`);
              }
            } else {
              await GroupService.addGroupLab(groupID, `${lab}`);
            }
          }
        }

        if (Array.isArray(assignedLabs) && assignedLabs.length >= 0) {
          assignedLabs.forEach((lab) => {
            if (!selectedLabs.includes(lab.labID)) {
              GroupService.deleteGroupLab(groupID, lab.labID);
            }
          });
        }
      }
      setInstrGroupsUpdated(true);
      props.toggle();
    } catch (error) {
      console.error("Error in form submission:", error);
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
                checked={checkedLabs[lab.id] || false}
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
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Form>
  );
};

export default GroupForm;
