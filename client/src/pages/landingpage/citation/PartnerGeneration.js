import React, { useEffect, useState } from "react";
import TeamMemberService from "src/services/TeamMemberService";

const PartnerGeneration = () => {
  const [partnerInformation, setPartnerInformation] = useState([]);

  useEffect(() => {
    if (partnerInformation.length == 0) {
      TeamMemberService.getAllDevPartners().then((data) => {
        setPartnerInformation(data);
      });
    }
  }, []);

  return (
    <div className="tw-grid tw-col-items-start tw-grid-cols-2 lg:tw-grid-cols-3 tw-my-10 tw-px-5">
      {partnerInformation.map((devInfo, index) => (
        <a
          href={devInfo.websiteURL}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "tw-bg-white tw-m-5 tw-shadow-lg tw-rounded-lg tw-flex tw-items-center tw-p-2 lg:tw-p-5"
          }
        >
          <img
            className="tw-w-full"
            key={index}
            src={`/img/dev_partners${devInfo.imageURL}`}
            alt={devInfo.partnerName}
          />
        </a>
      ))}
    </div>
  );
};

export default PartnerGeneration;
