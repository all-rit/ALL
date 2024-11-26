import React, { useEffect, useState } from "react";
import TeamMemberService from "src/services/TeamMemberService";

function display_schools(schools) {
  return (
    <>
      {schools.map((schoolInfo, id) => (
        <a
          href={schoolInfo.websiteURL}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "tw-m-5 tw-shadow-lg tw-rounded-lg tw-flex tw-items-center tw-p-10"
          }
        >
          <img
            className="tw-object-cover tw-bg-cover"
            key={id}
            src={`/img/participating_schools${schoolInfo.imageURL}`}
            alt={schoolInfo.schoolName}
          />
        </a>
      ))}
    </>
  );
}

const ParticipatingSchools = () => {
  const [schoolInformation, setSchoolInformation] = useState([]);

  useEffect(() => {
    if (schoolInformation.length == 0) {
      TeamMemberService.getAllSchools().then((data) => {
        setSchoolInformation(data);
      });
    }
  }, []);

  return (
    <>
      <h1 className="tw-title-styling-name tw-mt-20 tw-mb-10">
        Participating Schools
      </h1>
      <div
        className={"tw-grid tw-w-full lg:tw-grid-cols-4 tw-grid-cols-2 tw-px-6"}
      >
        {display_schools(schoolInformation)}
      </div>
    </>
  );
};

export default ParticipatingSchools;
