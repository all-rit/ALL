import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import UserService from "../../../services/UserService";
import GroupAssignedLabs from "./groupAssignedLabs";

const InstructingGroups = (props) => {

    const {user} = props;
    const [ instructingGroups, setInstructingGroups] = useState([]);

    useEffect(() => {
        if (user){
            async function fetchInstructingGroups() {
                return UserService.getUserInstructingGroups(user.userid);
            }
            fetchInstructingGroups().then((data) => {
                setInstructingGroups(data);
            });
        }
    }, [user]);

    return (
        <div className="instructing-groups">
            {
                instructingGroups.length === 0 ?
                    <p> You currently do not have any groups you are instructing.</p> :
                    <>
                        <Table>
                            <thead>
                            <tr>
                                <th>Groups</th>
                                <th>Invite Code</th>
                                <th>Assigned Labs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {instructingGroups.map((group, index) => (
                                <tr key={index}>
                                    <td>{group.groupName}</td>
                                    <td>{group.code}</td>
                                    <GroupAssignedLabs group={group} />
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </>
            }
        </div>
    )
};

export default InstructingGroups;