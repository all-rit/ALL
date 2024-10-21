import React, { useState } from "react";
import BrandedALLModal from "./BrandedALLModal";
import PropTypes from "prop-types";
import LabRow from "../body/profilepage/components/LabRow";
import ALLButton from "./ALLButton";
import Snackbar from "@mui/material/Snackbar";

const NewStudentProgress = (props) => {
  const { group, enrolledStudents, assignedLabs } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const openSnackbar = () => {
    setSnackbarOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      document.getElementById("groupCode").innerHTML.trim(),
    );
    openSnackbar();
  };

  const groupLabs = () => {
    return assignedLabs.map((lab, key) => {
      return (
        <LabRow
          key={key}
          lab={lab}
          studentProgress={true}
          group={group}
          enrolledStudents={enrolledStudents}
        />
      );
    });
  };

  const progressHeader = () => {
    return (
      <div className={"tw-font-poppins"}>
        <p className={"tw-title-styling-name tw-mb-3"}>
          View Group as the Instructor
        </p>
        <p className={"tw-title-styling-name tw-text-2xl"}>{group.groupName}</p>
        <div className={"tw-flex tw-flex-row tw-items-center tw-mb-3"}>
          <p className={"tw-text-sm"}> Group Code: </p>
          <p id={"groupCode"} className={"tw-mx-3 tw-font-bold tw-text-md"}>
            {" "}
            {group.code}
          </p>
          <ALLButton
            className={"tw-h-[3rem] tw-mb-0"}
            label={"Copy Code"}
            onClick={copyToClipboard}
          />
        </div>
        <p className={"tw-w-3/4 tw-text-sm"}>
          Share this group code with your students to get them enrolled into the
          class. All they have to do to get started is enter the code!
        </p>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          message="Code successfully copied to clipboard!"
          onClose={() => {
            setSnackbarOpen(false);
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          className={"tw-font-poppins"}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: "#FACE35", // your desired color
              color: "black",
            },
          }}
        />
      </div>
    );
  };

  return (
    <>
      <a
        onClick={toggleModal}
        className="tw-absolute tw-right-0 tw-top-[45%] tw-cursor-pointer
                tw-font-poppins tw-bg-darkGray tw-text-white tw-p-2 tw-font-medium"
      >
        Student Progress
      </a>
      <BrandedALLModal
        direction={"column"}
        isOpen={modalOpen}
        toggle={toggleModal}
      >
        <div className={"tw-px-[2rem] tw-py-[1rem]"}>
          {progressHeader()}
          {groupLabs()}
        </div>
      </BrandedALLModal>
    </>
  );
};

NewStudentProgress.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number,
    groupName: PropTypes.string,
    code: PropTypes.string,
  }),
  enrolledStudents: PropTypes.array,
  assignedLabs: PropTypes.array,
};

export default NewStudentProgress;
