import React, { useEffect, useState } from "react";
import StudentProgress from "./components/StudentProgress";
import PropTypes from "prop-types";
import { Input, Table } from "reactstrap";

const EnrolledStudentsTable = (props) => {
  const { lab, enrolledStudents } = props;
  const [search, setSearch] = useState("");

  const renderStudents = () => {
    return displayedStudents.map((student, key) => {
      return (
        <StudentProgress
          key={key}
          student={student}
          lab={lab}
          hasLabel={true}
          inTable={true}
        />
      );
    });
  };

  const [displayedStudents, setDisplayedStudents] = useState([]);
  const [studentNotFound, setStudentNotFound] = useState(false);

  useEffect(() => {
    setDisplayedStudents(enrolledStudents);
  }, []);

  const searchStudents = (e) => {
    e.preventDefault();
    let searchResults = [];
    enrolledStudents.forEach((student) => {
      if (student.firstname.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(student);
      }
    });
    if (searchResults.length > 0) {
      setDisplayedStudents(searchResults);
      setStudentNotFound(false);
    } else {
      setStudentNotFound(true);
    }
  };

  return (
    <div className="enrolled_students_table">
      {enrolledStudents.length === 0 ? (
        <p>There are currently no students enrolled in this group.</p>
      ) : (
        <>
          {studentNotFound && (
            <p className={"tw-text-brightRed tw-text-sm"}>Student not found.</p>
          )}
          <div
            className={
              "tw-w-full tw-flex tw-flex-row tw-h-[3rem] tw-items-center"
            }
          >
            <Input
              className={`tw-w-1/2 tw-font-poppins ${studentNotFound && "tw-border-solid tw-border-brightRed"}`}
              placeholder={"Search for a student"}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>
            <button
              className={"tw-w-[1.5rem] tw-h-[1.5rem] tw-mx-2 tw-border-0"}
              onClick={(e) => searchStudents(e)}
              style={{
                backgroundImage:
                  "url(https://www.svgrepo.com/show/127033/magnifying-glass.svg)",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></button>
          </div>
          <Table className={"tw-bg-white tw-w-full"}>
            <thead className={"tw-bg-white tw-align-middle"}>
              <tr className={"tw-bg-white "}>
                <th className={"tw-border-none tw-bg-white tw-text-center"}>
                  Student Name
                </th>
                <th className={"tw-border-none tw-bg-white tw-text-center"}>
                  Lab Progress
                </th>
                <th className={"tw-border-none tw-bg-white tw-text-center"}>
                  Quiz Grade
                </th>
                <th className={"tw-border-none tw-bg-white tw-text-center"}>
                  Date Completed
                </th>
              </tr>
              {renderStudents()}
            </thead>
          </Table>
        </>
      )}
    </div>
  );
};

EnrolledStudentsTable.propTypes = {
  lab: PropTypes.shape({
    labID: PropTypes.number,
  }),
  enrolledStudents: PropTypes.array,
};

export default EnrolledStudentsTable;
