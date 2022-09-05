import React, { useState, useEffect } from "react";
import groupService from "../../../../services/GroupService";

const LabCompletionBubbles = (props) => {
  const { studentid, groupid } = props;
  const [completedLabs, setCompletedLabs] = useState([]);

  useEffect(() => {
    groupService.getCompletedGroupLabs(studentid, groupid).then((data) => {
      setCompletedLabs(data);
    });
  }, [studentid, groupid]);

  return (
    <td className="assigned-labs">
      {completedLabs.length !== 0 ? (
        completedLabs.map((lab, index) => (
          <div className="assigned-labs__lab-bubble" key={index}>
            {lab.labShortName}
          </div>
        ))
      ) : (
        <div>No Labs Completed</div>
      )}
    </td>
  );
};

export default LabCompletionBubbles;
