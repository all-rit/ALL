import React from "react";
import { Table } from 'reactstrap';

const InstructingGroups = () => {
    return (
        <div className="instructing-groups">
            <Table>
                <thead>
                    <th>Courses</th>
                    <th>Invite Code</th>
                    <th>Assigned Labs</th>
                </thead>
                <tbody>
                    <tr>
                        <td>SWEN 256 Fall 2021</td>
                        <td>4EQPHY</td>
                        <td>Icons of assigned labs</td>
                    </tr>
                    <tr>
                        <td>SWEN 444 Fall 2021</td>
                        <td>BYE7UD</td>
                        <td>Icons of assigned labs</td>
                    </tr>
                    <tr>
                        <td>SWEN 101 Fall 2021</td>
                        <td>ADFKJ8</td>
                        <td>Icons of assigned labs</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default InstructingGroups;