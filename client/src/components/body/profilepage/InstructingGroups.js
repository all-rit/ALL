import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import UserService from "../../../services/UserService";
import GroupDetails from "./GroupDetails";

const InstructingGroups = (props) => {

    const {user} = props;
    const [ instructingGroups, setInstructingGroups] = useState([]);

    useEffect(() => {
        if (user){
            UserService.getUserInstructingGroups(user.userid).then((data) => {
                setInstructingGroups(data);
            })
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
                                <th>Assigned Labs</th>
                            </tr>
                            </thead>
                            <tbody>
                            {instructingGroups.map((group, index) => (
                                <tr key={index}>
                                    <td className="bold">
                                        <p className="bold">{group.groupName}</p>
                                        <p className="bold">Invite Code: {group.code}</p>
                                    </td>
                                    <GroupDetails group={group} instructing={true}/>
                                    <></>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        {/* Mock of converting from using table to unordered list */}
                        {/* <ul class="table">
                            <ul class="table_header">
                                <ul class="table_row">
                                    <li>Groups</li>
                                    <li>Assigned Labs</li>
                                </ul>
                            </ul>
                            <ul class="table_body ">
                                {instructingGroups.map((group, index) => (
                                    <ul class="table_row" key={index}>
                                        <ul className="bold">
                                            <li className="bold">{group.groupName}</li>
                                            <li className="bold">Invite Code: {group.code}</li>
                                        </ul>
                                        <GroupDetails group={group} instructing={true}/>
                                        <></>
                                    </ul>
                                ))}
                            </ul>
                        </ul> */}
                    </>
            }
        </div>
    )
};

export default InstructingGroups;