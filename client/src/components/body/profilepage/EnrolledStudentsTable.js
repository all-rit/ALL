import React from "react";
import { Table } from 'reactstrap';

const EnrolledStudentsTable = (props) => {

    const { assignedLabs, enrolledStudents } = props;

    return (
        <div className="enrolled_students_table">
            {
                enrolledStudents.length === 0 ?
                    <p>There are currently no students enrolled in this group.</p>
                    :
                    <Table>
                        <thead>
                        <tr>
                            <th>Student</th>
                            <th>Completion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {enrolledStudents.map((student, index) => (
                            <tr key={index}>
                                <td>
                                    <>
                                        <p className="bold">{student.firstname} {student.lastinitial}.<br/></p>
                                        <p className="grey-text">{student.email1}<br/></p>
                                        <p className="grey-text">Enrolled on {student.enrolledDate.split("T")[0]}</p>
                                    </>
                                </td>
                                <td className="assigned-labs">
                                    {assignedLabs.map((lab, index) => (
                                        <div className="assigned-labs__lab-bubble" key={index}>
                                            {lab.labShortName}
                                        </div>
                                    ))
                                    }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
            }
        </div>
    )
}

export default EnrolledStudentsTable;