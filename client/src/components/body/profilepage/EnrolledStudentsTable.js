/* eslint-disable react/prop-types */
import React from "react";
import { Table } from "reactstrap";
import ResultLimiter from "./components/ResultLimiter";

const EnrolledStudentsTable = (props) => {
  const { assignedLabs, enrolledStudents, groupid } = props;

  return (
    <div className="enrolled_students_table">
      {enrolledStudents.length === 0 ? (
        <p>There are currently no students enrolled in this group.</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Completion</th>
            </tr>
          </thead>
          <ResultLimiter
            assignedLabs={assignedLabs}
            data={enrolledStudents}
            resultType={"studentLabs"}
            groupid={groupid}
          />
        </Table>
      )}
    </div>
  );
};

export default EnrolledStudentsTable;
