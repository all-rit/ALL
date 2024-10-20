import React, { useState, useEffect } from "react";
import UserLabService from "../../../../services/UserLabService";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";

const StudentProgress = (props) => {
  const { student, lab, hasLabel } = props;
  const [progress, setProgress] = useState();

  const getProgress = async () => {
    if (student && lab) {
      try {
        const data = await UserLabService.getUserLabCompletion(
          student.userID,
          lab.labID,
        );
        console.log("Data: ", data);
        setProgress(data);
      } catch (error) {
        console.error("Error Setting Student Progress", error);
      }
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  useEffect(() => {
    getProgress();
  }, [student, lab]);

  return (
    <tr className={"tw-border-darkLine tw-h-[5rem]"}>
      <td className={"tw-border-labLightGray "}>
        <p className="bold">
          {student.firstname} {student.lastinitial}.
        </p>
        <p className="grey-text">{student.email1}</p>
      </td>
      <td className={"tw-border-labLightGray tw-relative tw-w-1/2"}>
        {progress ? (
          <ProgressBar
            hasLabel={hasLabel}
            labID={lab.labID}
            barData={[
              ["About", progress?.aboutcompletedtime],
              ["Reading", progress?.readingcompletedtime],
              ["Exercise", progress?.exercisecompletedtime],
              ["Reinforcement", progress?.reinforcementcompletedtime],
              ["Quiz", progress?.quizcompletedtime],
            ]}
            percentage={true}
            inTable={true}
          />
        ) : (
          <ProgressBar
            hasLabel={hasLabel}
            labID={lab.labID}
            barData={[
              ["About", null],
              ["Reading", null],
              ["Exercise", null],
              ["Reinforcement", null],
              ["Quiz", null],
            ]}
            percentage={true}
            inTable={true}
          />
        )}
      </td>
      <td className={"tw-border-labLightGray"}>
        {progress?.quizscore !== null && progress?.quizscore !== undefined
          ? progress?.quizscore + "%"
          : "N/A"}
      </td>
      <td className={"tw-border-labLightGray"}>
        {progress?.labcompletiontime !== null &&
        progress?.quizscore !== undefined
          ? formatDate(progress?.labcompletiontime)
          : "N/A"}
      </td>
    </tr>
  );
};

StudentProgress.propTypes = {
  hasLabel: PropTypes.bool,
  student: PropTypes.shape({
    userID: PropTypes.number,
    firstname: PropTypes.string,
    lastinitial: PropTypes.string,
    email1: PropTypes.string,
  }),
  lab: PropTypes.shape({
    labID: PropTypes.number,
  }),
};

export default StudentProgress;
