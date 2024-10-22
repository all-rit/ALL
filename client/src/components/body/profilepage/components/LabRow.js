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
    setListOpen(listOpen === labId ? null : labId);
    setListLabel(listOpen === labId ? "Open List" : "Close List");
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
    <div className="tw-flex tw-flex-col tw-w-full ">
      <div
        className={`${listOpen === lab.labID && studentProgress ? "" : "tw-shadow-lg"} tw-w-full tw-h-[5rem] tw-flex tw-flex-row tw-m-3 tw-rounded-lg tw-relative`}
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
        <div id={"lab" + lab.labID} className={"tw-p-5"}>
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
            id={`fullDescription-${lab.labID}`}
            onClick={() => toggle(lab.labID)}
            className={
              "tw-absolute tw-right-0 tw-top-[20%] tw-cursor-pointer tw-bg-primary-yellow tw-text-darkGray tw-font-poppins tw-px-3"
            }
          >
            <div> {listLabel}</div>
          </div>
        ) : (
          <div>
            <Tooltip
              placement={"left"}
              isOpen={tooltipOpen === lab.labID}
              target={`fullDescription-${lab.labID}`}
            >
              {" "}
              {lab.fullDescription}{" "}
            </Tooltip>
            <div
              id={`fullDescription-${lab.labID}`}
              onClick={() => setTooltipOpen(lab.labID)}
              className={
                "tw-absolute tw-right-3 tw-top-[20%] tw-cursor-pointer tw-bg-darkGray tw-text-white tw-font-poppins tw-px-3"
              }
            >
              <div> More Information</div>
            </div>
          </div>
        )}
      </div>
      {/* Table container outside the main row */}
      {listOpen === lab.labID && studentProgress && (
        <div className="tw-w-full tw-ml-3 tw-p-4 tw-bg-white tw-shadow-lg tw-shadow-t-none tw-overflow-hidden">
          <EnrolledStudentsTable
            groupid={group.id}
            enrolledStudents={enrolledStudents}
            lab={lab}
          />
        </div>
      )}
    </div>
  );
};

LabRow.propTypes = {
  lab: PropTypes.shape({
    labID: PropTypes.number,
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
