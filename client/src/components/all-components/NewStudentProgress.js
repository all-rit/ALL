import React, { useState } from "react";
import BrandedALLModal from "./BrandedALLModal";
import PropTypes from "prop-types";
import ALLCardRow from "../all-components/ALLCardRow";
import ALLButton from "./ALLButton";
import EnrolledStudentsTable from "../body/profilepage/EnrolledStudentsTable";
import { SUCCESS } from "../../constants/notifications";
import useMainStateContext from "../../reducers/MainContext";

const NewStudentProgress = (props) => {
  const { group, enrolledStudents, assignedLabs } = props;
  const { actions } = useMainStateContext();

  const [modalOpen, setModalOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(assignedLabs.map(() => false));

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleLabOpen = (index) => {
    let newLabsOpen = labsOpen.slice();
    newLabsOpen[index] = !newLabsOpen[index];
    setLabsOpen(newLabsOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      document.getElementById("groupCode").innerHTML.trim(),
    );
    actions.showSnackbar("Successfully copied code!", SUCCESS);
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
          <div className={"tw-font-poppins"}>
            <p className={"tw-title tw-mb-3"}>View Group as the Instructor</p>
            <p className={"tw-title tw-text-2xl"}>{group.groupName}</p>
            <div className={"tw-flex tw-flex-row tw-items-center tw-my-3"}>
              <p className={"tw-text-sm"}> Group Code: </p>
              <p id={"groupCode"} className={"tw-mx-3 tw-font-bold tw-text-md"}>
                {" "}
                {group.code}
              </p>
              <ALLButton
                className={"tw-h-[3rem] tw-mb-0 tw-ml-5"}
                label={"Copy Code"}
                onClick={copyToClipboard}
              />
            </div>
            <p className={"tw-w-3/4 tw-text-sm"}>
              Share this group code with your students to get them enrolled into
              the class. All they have to do to get started is enter the code!
            </p>
          </div>
          {assignedLabs ? (
            assignedLabs.map((lab, labid) => {
              return (
                <ALLCardRow
                  key={labid}
                  title={lab.labName}
                  imageURL={`/img/lab_thumbnails/${lab.thumbnailImageURL}`}
                  circlesLabel="Difficulty"
                  circles={3}
                  circlesFilled={lab.difficulty}
                  buttonLabel={labsOpen[labid] ? "Close List" : "Open List"}
                  buttonStyle="tw-cursor-pointer tw-border-none tw-bg-primary-yellow tw-text-darkGray tw-font-poppins tw-px-3"
                  onClick={() => toggleLabOpen(labid)}
                >
                  {labsOpen[labid] && (
                    <EnrolledStudentsTable
                      groupid={group.id}
                      enrolledStudents={enrolledStudents}
                      lab={lab}
                    />
                  )}
                </ALLCardRow>
              );
            })
          ) : (
            <p className={"tw-sub-title"}> No Labs to Display. </p>
          )}
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
