/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import UserLabService from "../../../../services/UserLabService";
import ProgressBar from "./ProgressBar";

const StudentProgress = (props) => {
  const { student, lab } = props;
  const [progress, setProgress] = useState();

  useEffect(() => {
    console.warn(student.userID, lab.labID);
    if (student && lab) {
      try {
        const data = UserLabService.getUserLabCompletion(
          student.userID,
          lab.labID,
        );
        console.warn(data);
        setProgress(data);
      } catch (error) {
        console.error("Error Setting Student Progress", error);
      }
    }
  }, [student, lab]);

  return (
    <>
      <td>
        <p className="bold">
          {student.firstname} {student.lastinitial}.
        </p>
        <p className="grey-text">{student.email1}</p>
      </td>
      {progress ? (
        <>
          <td>{progress?.quizscore}</td>
          <td>
            <ProgressBar
              labID={lab.labID}
              barData={[
                ["About", progress?.aboutcompletedtime],
                ["Reading", progress?.readingcompletedtime],
                ["Exercise", progress?.exercisecompletedtime],
                ["Reinforcement", progress?.reinforcementcompletedtime],
                ["Quiz", progress?.quizcompletedtime],
              ]}
              percentage={true}
            />
          </td>
        </>
      ) : (
        <>
          <td>0</td>
          <td>
            <ProgressBar
              labID={lab.id}
              barData={[
                ["About", null],
                ["Reading", null],
                ["Exercise", null],
                ["Reinforcement", null],
                ["Quiz", null],
              ]}
              percentage={true}
            />
          </td>
        </>
      )}
    </>
  );
};

export default StudentProgress;
