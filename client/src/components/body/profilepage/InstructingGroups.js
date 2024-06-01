/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import UserService from "../../../services/UserService";
import GroupDetails from "./GroupDetails";
import AddModal from "./components/AddModal";

const InstructingGroups = (props) => {
  const { user } = props;
  const [instructingGroups, setInstructingGroups] = useState([]);
  const [instrGroupsUpdated, setInstrGroupsUpdated] = useState(false);
  useEffect(() => {
    console.warn(user.userid);
    if (user) {
      UserService.getUserInstructingGroups(user.userid).then((data) => {
        setInstructingGroups(data);
        setInstrGroupsUpdated(false);
      });
    }
  }, [user, instrGroupsUpdated]);

  return (
    <>
      <div className="header_with_button">
        <h4>My Instructing Groups</h4>
        <AddModal
          addMode={"add_instr_grp"}
          user={props.user}
          setInstrGroupsUpdated={setInstrGroupsUpdated}
        />
      </div>
      <div className="instructing-groups">
        {instructingGroups.length === 0 ? (
          <p> You currently do not have any groups you are instructing.</p>
        ) : (
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
                    <GroupDetails
                      group={group}
                      instructing={true}
                      user={user}
                      setInstrGroupsUpdated={setInstrGroupsUpdated}
                    />
                    <></>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  );
};

export default InstructingGroups;
