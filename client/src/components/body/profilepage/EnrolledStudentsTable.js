import React from "react";
import StudentProgress from "./components/StudentProgress";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
// import ResultLimiter from "./components/ResultLimiter";

const EnrolledStudentsTable = (props) => {
  const { lab, enrolledStudents } = props;

  return (
    <div className="enrolled_students_table">
      {enrolledStudents.length === 0 ? (
        <p>There are currently no students enrolled in this group.</p>
      ) : (
        <Table className={"tw-bg-white tw-w-full"}>
          <thead className={"tw-bg-white"}>
            <tr className={"tw-bg-white"}>
              <th className={"tw-border-none tw-bg-white tw-text-center"}>
                Student Name
              </th>
              <th className={"tw-border-none tw-bg-white tw-text-center"}>
                Lab Progress
              </th>
              <th className={"tw-border-none tw-bg-white tw-text-center"}>
                Quiz Grade
              </th>
              <th className={"tw-border-none tw-bg-white tw-text-center"}>
                Date Completed
              </th>
            </tr>
            {enrolledStudents.map((student, key) => {
              return <StudentProgress key={key} student={student} lab={lab} />;
            })}
          </thead>
        </Table>
      )}
    </div>
  );
};

EnrolledStudentsTable.propTypes = {
  lab: PropTypes.shape({}),
  enrolledStudents: PropTypes.array,
};

export default EnrolledStudentsTable;
