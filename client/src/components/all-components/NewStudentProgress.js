import React, { useState } from "react";
import BrandedALLModal from "./BrandedALLModal";
import PropTypes from "prop-types";
import LabRow from "../body/profilepage/components/LabRow";

const NewStudentProgress = (props) => {
  const { group, enrolledStudents, assignedLabs } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
        body={<div className={"tw-p-[3rem]"}>{groupLabs()}</div>}
      />
    </>
  );
};

NewStudentProgress.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number,
  }),
  enrolledStudents: PropTypes.array,
  assignedLabs: PropTypes.array,
};

export default NewStudentProgress;
