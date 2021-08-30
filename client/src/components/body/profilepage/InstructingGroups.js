import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import UserService from "../../../services/UserService";
import GroupDetails from "./GroupDetails";

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
                                    <td className="bold">{group.groupName}</td>
                                    <td className="bold">{group.code}</td>
                                    <GroupDetails group={group} instructing={true}/>
                                    <></>
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