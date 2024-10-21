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
import LabRow from "./LabRow";

const GroupForm = (props) => {
  const {
    setInstrGroupsUpdated,
    toggle,
    user,
    addMode,
    groupID,
    groupName,
    groupColor,
    assignedLabs,
  } = props;
  const [labs, setLabs] = useState([]);
  const [checkedLabs, setCheckedLabs] = useState({});
  const [color, setColor] = useState(groupColor || "");
  const [tooltipOpen, setTooltipOpen] = useState(null);

  const cardColors = [
    "blue",
    "green",
    "red",
    "teal",
    "grey",
    "yellow",
    "pink",
    "purple",
  ];

  useEffect(() => {
    LabService.getAllLabs().then((data) => {
      setLabs(data);
      if (tooltipOpen !== null) {
        const timer = setTimeout(() => {
          setTooltipOpen(null);
        }, 20000);
        return () => clearTimeout(timer);
      }
      const initialCheckedState = {};
      if (assignedLabs) {
        assignedLabs.map((lab) => {
          initialCheckedState[lab.labID] = true;
        });
      }
      setCheckedLabs(initialCheckedState);
    });
    if (groupColor) {
      setColor(groupColor);
    }
  }, [assignedLabs, tooltipOpen, groupColor]);

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
          await GroupService.updateGroup(
            groupID,
            formData.get("groupName"),
            groupColor,
          );
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
    <Form className={"tw-w-full"} onSubmit={onFormSubmit}>
      <ModalBody className={"tw-w-full"}>
        <h4
          className={
            "tw-font-poppins tw-title-styling-name tw-text-2xl tw-mb-0"
          }
        >
          {" "}
          Create a Group as the Instructor{" "}
        </h4>
        <FormGroup className={"tw-px-5"}>
          <Label for="groupName"></Label>
          <Input
            className={"tw-font-poppins"}
            type="text"
            name="groupName"
            id="groupName"
            defaultValue={groupName}
            placeholder="Enter Group Name Here"
          />
        </FormGroup>
        <hr />
        <FormGroup check className={"tw-flex tw-flex-col tw-w-full"}>
          <div
            className={
              "tw-w-full tw-flex tw-flex-col tw-justify-between tw-text-left"
            }
          >
            <p className={"tw-title-styling-name tw-font-poppins tw-text-lg"}>
              Assign Color for Group:
            </p>
            <p className={"tw-font-calibri tw-font-medium"}>
              {" "}
              Select a color for this group to distinguish it from the others!{" "}
            </p>
          </div>
          <div className={"tw-grid tw-grid-cols-2 tw-gap-5 tw-w-1/2 tw-py-5"}>
            {cardColors.map((color, key) => {
              return (
                <div
                  key={key}
                  className={
                    "tw-flex tw-flex-row tw-h-[5rem] tw-w-[10rem] tw-items-center"
                  }
                >
                  <Input
                    type="radio"
                    name="groupColor"
                    className={"tw-m-3 tw-rounded-sm"}
                    defaultChecked={
                      groupColor ? groupColor.includes(color) : false
                    }
                    onChange={() => setColor(`group_${color}`)}
                  />
                  <div
                    className={`group_${color} tw-h-full tw-w-full tw-rounded-t-lg tw-p-3`}
                  />
                </div>
              );
            })}
          </div>
        </FormGroup>
        <hr />
        <h4 className={"tw-font-poppins tw-title-styling-name tw-text-lg"}>
          {" "}
          Assign Labs:{" "}
        </h4>
        <FormGroup check className={"tw-px-5"}>
          <p>Select all labs you wish to assign to this group.</p>
          {labs.map((lab) => (
            <div
              key={lab.id}
              className={
                "tw-flex tw-flex-row tw-items-center tw-gap-3 tw-pl-[5%]"
              }
            >
              <Input
                className={"tw-rounded-sm tw-box-content"}
                type="checkbox"
                name={lab.id}
                id={"lab" + lab.id}
                checked={!!checkedLabs[lab.id]}
                onChange={() => toggleCheck(lab.id)}
              />
              <LabRow lab={lab} />
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
