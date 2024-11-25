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
        >
          <img
            className="tw-max-w-40 lg:tw-max-w-sm tw-max-h-sm tw-m-5"
            key={id}
            src={`/img/participating_schools${schoolInfo.imageURL}`}
            alt={schoolInfo.schoolName}
          />
        </a>
      ))}
    </>
  );
}

function display_schools_reverse(schools) {
  return (
    <>
      {schools.map((schoolInfo, id) => (
        <a
          href={schoolInfo.websiteURL}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="tw-max-w-40 lg:tw-max-w-sm tw-max-h-sm tw-m-5"
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
      <h1 className="tw-title tw-mt-32 tw-mb-20">Participating Schools</h1>
      <div className="tw-m-auto tw-relative tw-items-center tw-h-1/6 lg:tw-h-1/4 tw-w-full lg:tw-w-3/4 tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-scroll-smooth tw-animate-infinite-scroll tw-whitespace-nowrap">
          {display_schools(schoolInformation)}
          {display_schools(schoolInformation)}
        </div>
      </div>

      <div className="tw-m-auto tw-relative tw-items-center tw-h-1/6 lg:tw-h-1/4 tw-w-full lg:tw-w-3/4 tw-overflow-hidden">
        <div className="tw-w-full tw-h-full tw-flex tw-justify-end tw-scroll-smooth tw-animate-infinite-scroll-right tw-whitespace-nowrap ">
          {display_schools_reverse(schoolInformation)}
          {display_schools_reverse(schoolInformation)}
        </div>
      </div>
    </>
  );
};

export default ParticipatingSchools;
