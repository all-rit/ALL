import React, { useEffect, useState } from "react";
import TeamMemberService from "src/services/TeamMemberService";
import Partner from "./Partner";

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
    <div className="tw-container tw-py-10 tw-ml-2">
      <div className="tw-grid tw-grid-cols-4 tw-gap-6">
        {partnerInformation.map((devInfo, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "tw-col-span-2"
                : index === 5
                  ? "tw-col-span-2"
                  : "tw-col-span-1"
            }
          >
            <Partner
              partnerName={devInfo.partnerName}
              imageURL={devInfo.imageURL}
              websiteURL={devInfo.websiteURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerGeneration;
