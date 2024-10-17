import React from "react";
import { Table } from "reactstrap";
import StudentProgress from "./components/StudentProgress";
import PropTypes from "prop-types";
// import ResultLimiter from "./components/ResultLimiter";

const EnrolledStudentsTable = (props) => {
  const { lab, enrolledStudents } = props;

  return (
    <div className="enrolled_students_table">
      {enrolledStudents.length === 0 ? (
        <p>There are currently no students enrolled in this group.</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th className={"tw-border-none"}>Student Name</th>
              <th className={"tw-border-none"}>Lab Progress</th>
              <th className={"tw-border-none"}>Quiz Grade</th>
              <th className={"tw-border-none"}>Date Completed</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student, key) => {
              return (
                <tr key={key}>
                  <td>
                    {student.firstname} {student.lastinitial}
                  </td>
                  <td>
                    <StudentProgress student={student} lab={lab} />
                  </td>
                </tr>
              );
            })}
          </tbody>
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
