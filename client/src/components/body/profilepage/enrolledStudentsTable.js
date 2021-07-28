import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import GroupService from "../../../services/GroupService";

const EnrolledStudentsTable = (props) => {

    const groupID = props.groupid;
    const { assignedLabs } = props.labs;
    const [ enrolledStudents, setEnrolledStudents ] = useState([]);

    useEffect(() => {
        if (groupID){
            async function fetchEnrolledStudents() {
                return GroupService.getGroupEnrolledStudents(groupID);
            }
            fetchEnrolledStudents().then((data) => {
                setEnrolledStudents(data);
            });
        }
    }, [groupID]);

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
                                <td>{student.firstname}</td>
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