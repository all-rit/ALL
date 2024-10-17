/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import StudentProgress from "./StudentProgress";
import PropTypes from "prop-types";
import LabCompletionBubbles from "./LabCompletionBubbles";

const ResultLimiter = (props) => {
  const { resultType, data, lab, groupid } = props;
  const [index, setIndex] = useState(0);
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    console.log(data);
    setGroupedData(dataParser(data));
  }, [index, data]);

  const decreaseIndex = () => {
    setIndex(index - 1);
  };
  const increaseIndex = () => {
    setIndex(index + 1);
  };

  function dataParser(data) {
    const parsedData = [];
    let data_set = [];
    for (const i in data) {
      data_set.push(data[i]);
      if (data_set.length === 5) {
        parsedData.push(data_set);
        data_set = [];
      }
    }
    if (data_set.length !== 0) {
      parsedData.push(data_set);
    }
    return parsedData;
  }

  switch (resultType) {
    case "studentLabs":
      if (groupedData.length !== 0) {
        return (
          <>
            <tbody>
              {groupedData[index].map((student, index) => (
                <tr key={index}>
                  <td>
                    <>
                      <p className="bold">
                        {student.firstname} {student.lastinitial}.<br />
                      </p>
                      <p className="grey-text">
                        {student.email1}
                        <br />
                      </p>
                      <p className="grey-text">
                        Enrolled on {student.enrolledDate.split("T")[0]}
                      </p>
                    </>
                  </td>
                  <LabCompletionBubbles
                    studentid={student.userID}
                    groupid={groupid}
                  />
                </tr>
              ))}
            </tbody>
            <tfoot className="limiter__group">
              <tr>
                {index !== 0 ? (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      onClick={decreaseIndex}
                    >
                      Previous
                    </Button>
                  </td>
                ) : (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      disabled={true}
                    >
                      Previous
                    </Button>
                  </td>
                )}
                <td className="limiter__page">
                  Page {index + 1} of {groupedData.length}
                </td>
                {index !== groupedData.length - 1 ? (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      onClick={increaseIndex}
                    >
                      Next
                    </Button>
                  </td>
                ) : (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      disabled={true}
                    >
                      Next
                    </Button>
                  </td>
                )}
              </tr>
            </tfoot>
          </>
        );
      } else {
        return <div>Loading Data...</div>;
      }
    case "studentProgress":
      if (groupedData.length !== 0) {
        return (
          <>
            <tbody>
              {groupedData[index].map((student, index) => (
                <tr key={index}>
                  <StudentProgress student={student} lab={lab} />
                </tr>
              ))}
            </tbody>
            <tfoot className="limiter__group">
              <tr>
                {index !== 0 ? (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      onClick={decreaseIndex}
                    >
                      Previous
                    </Button>
                  </td>
                ) : (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      disabled={true}
                    >
                      Previous
                    </Button>
                  </td>
                )}
                <td className="limiter__page">
                  Page {index + 1} of {groupedData.length}
                </td>
                {index !== groupedData.length - 1 ? (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      onClick={increaseIndex}
                    >
                      Next
                    </Button>
                  </td>
                ) : (
                  <td>
                    <Button
                      tabIndex="0"
                      className="btn btn-second limiter__group__button"
                      disabled={true}
                    >
                      Next
                    </Button>
                  </td>
                )}
              </tr>
            </tfoot>
          </>
        );
      } else {
        return <div>No Data Available...</div>;
      }
    default:
      return <div>Type Error Occurred: Contact Administrator.</div>;
  }
};

ResultLimiter.propTypes = {
  resultType: PropTypes.string,
  data: PropTypes.array,
  lab: PropTypes.shape({}),
  groupid: PropTypes.number,
};

export default ResultLimiter;
