import { Tooltip } from "reactstrap";
import React, { useState } from "react";
import PropTypes from "prop-types";
import EnrolledStudentsTable from "../EnrolledStudentsTable";

const LabRow = (props) => {
  const { group, enrolledStudents, lab, studentProgress } = props;

  const [tooltipOpen, setTooltipOpen] = useState(null);
  const [listOpen, setListOpen] = useState(null);
  const [listLabel, setListLabel] = useState("Open List");

  const toggle = (labId) => {
    setListOpen(labId);
    if (listOpen) {
      setListLabel("Close List");
    } else {
      setListLabel("Open List");
    }
  };

  const displayDifficulty = (difficulty) => {
    const totalCircles = 3;
    const rating = [];
    for (let i = 1; i <= totalCircles; i++) {
      rating.push(
        <div
          className={`tw-m-0.5 
          ${i <= difficulty ? "module__lab_difficulty_filled" : "module__lab_difficulty"}`}
        ></div>,
      );
    }
    return <div className={"tw-flex tw-flex-row tw-ms-1"}>{rating}</div>;
  };

  return (
    <div
      className={
        "tw-shadow-lg tw-w-full tw-h-[5rem] tw-flex tw-flex-row tw-m-3 tw-rounded-lg tw-relative"
      }
    >
      <div
        className="tw-w-1/12 tw-object-cover tw-rounded-l-lg tw-align-middle"
        style={{
          backgroundImage:
            "url(/img/lab_thumbnails/" + lab.thumbnailImageURL + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div id={"lab" + lab.id} className={"tw-p-5"}>
        <div className={"tw-flex tw-flex-row tw-items-center"}>
          <p className={"tw-font-calibri"}> Difficulty: </p>
          {displayDifficulty(lab.difficulty)}
        </div>
        <p className={"tw-font-poppins tw-font-bold tw-text-md"}>
          {" "}
          {lab.labName}
        </p>
      </div>
      {studentProgress ? (
        <div
          id={`fullDescription-${lab.id}`}
          onClick={() => toggle(lab.id)}
          className={
            "tw-cursor-pointer tw-bg-primary-yellow tw-text-darkGray tw-font-poppins tw-absolute tw-right-0 tw-px-3 tw-top-[25%]"
          }
        >
          <EnrolledStudentsTable
            groupid={group.id}
            enrolledStudents={enrolledStudents}
            lab={lab}
          />
          <div> {listLabel}</div>
        </div>
      ) : (
        <div>
          <Tooltip
            placement={"left"}
            isOpen={tooltipOpen === lab.id}
            target={`fullDescription-${lab.id}`}
          >
            {" "}
            {lab.fullDescription}{" "}
          </Tooltip>
          <div
            id={`fullDescription-${lab.id}`}
            onClick={() => setTooltipOpen(lab.id)}
            className={
              "tw-cursor-pointer tw-bg-darkGray tw-text-white tw-font-poppins tw-absolute tw-right-0 tw-px-3 tw-top-[25%]"
            }
          >
            <div> More Information</div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

LabRow.propTypes = {
  lab: PropTypes.shape({
    id: PropTypes.number,
    thumbnailImageURL: PropTypes.string,
    labName: PropTypes.string,
    difficulty: PropTypes.number,
    fullDescription: PropTypes.string,
  }),
  studentProgress: PropTypes.bool,
  enrolledStudents: PropTypes.array,
  group: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default LabRow;
