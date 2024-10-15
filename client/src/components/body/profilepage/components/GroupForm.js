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
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  const [color, setColor] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("Select Group Color");

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
  }, [assignedLabs, color]);

  const toggleCheck = (labID) => {
    setCheckedLabs((prevCheckedLabs) => ({
      ...prevCheckedLabs,
      [labID]: !prevCheckedLabs[labID],
    }));
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleColorSelect = (selectedColor, label) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setColor(selectedColor);
    setDropdownLabel(label);
    setDropdownOpen(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const groupName = formData.get("groupName") || "Default Group Name";
      const groupColor = color;

      let selectedLabs = Object.keys(checkedLabs)
        .filter((labID) => checkedLabs[labID])
        .map((labID) => parseInt(labID));

      if (addMode === "add_instr_grp") {
        const newGroup = await GroupService.createGroup(
          user.userid,
          groupName,
          groupColor,
        );

        const addLabPromises = selectedLabs.map((labID) => {
          GroupService.addGroupLab(newGroup.id, labID);
        });

        await Promise.all(addLabPromises);
      } else if (addMode === "update_grp_lab" && groupID) {
        if (formData.get("groupName") !== props.groupName) {
          await GroupService.updateGroup(groupID, formData.get("groupName"));
        }

        for (const lab in checkedLabs) {
          if (Array.isArray(assignedLabs)) {
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

        if (Array.isArray(assignedLabs)) {
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
            defaultValue={groupName}
            placeholder="Enter Group Name"
          />
        </FormGroup>
        <hr />
        <FormGroup check>
          <Label for="assign-lab" className={"tw-ml-[-1.5rem]"}>
            Choose labs to assign
          </Label>
          {labs.map((lab) => (
            <div key={lab.id}>
              <Input
                type="checkbox"
                name={lab.id}
                id={"lab" + lab.id}
                checked={!!checkedLabs[lab.id]}
                onChange={() => toggleCheck(lab.id)}
              />
              <Label for={"lab" + lab.id}>{lab.labShortName}</Label>
            </div>
          ))}
        </FormGroup>
        <hr />
        <FormGroup className={"tw-flex tw-flex-col"}>
          <div className={"tw-w-1/2 tw-flex tw-flex-row tw-justify-between"}>
            <Label for="groupColor">Group Color</Label>
            <div className={`${color} tw-rounded-full tw-w-5 tw-h-5`}></div>
          </div>
          <ButtonDropdown
            className={`tw-w-1/2 tw-flex tw-flex-row tw-justify-start`}
            align
            isOpen={dropdownOpen}
            toggle={toggleDropdown}
          >
            <DropdownToggle
              className={
                "tw-bg-white tw-text-darkGray focus:tw-bg-secondary-gray"
              }
              caret
            >
              {dropdownLabel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleColorSelect("group_red", "Red")}>
                Red
              </DropdownItem>
              <DropdownItem onClick={handleColorSelect("group_blue", "Blue")}>
                Blue
              </DropdownItem>
              <DropdownItem
                onClick={handleColorSelect("group_purple", "Purple")}
              >
                Purple
              </DropdownItem>
              <DropdownItem onClick={handleColorSelect("group_green", "Green")}>
                Green
              </DropdownItem>
              <DropdownItem
                onClick={handleColorSelect("group_orange", "Orange")}
              >
                Orange
              </DropdownItem>
              <DropdownItem
                onClick={handleColorSelect("group_yellow", "Yellow")}
              >
                Yellow
              </DropdownItem>
              <DropdownItem onClick={handleColorSelect("group_pink", "Pink")}>
                Pink
              </DropdownItem>
              <DropdownItem onClick={handleColorSelect("group_teal", "Teal")}>
                Teal
              </DropdownItem>
              <DropdownItem
                onClick={handleColorSelect("group_neonGreen", "Neon Green")}
              >
                Neon Green
              </DropdownItem>
              <DropdownItem onClick={handleColorSelect("group_grey", "Grey")}>
                Grey
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
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
