import React, { useEffect, useState } from "react";
import TeamMemberService from "src/services/TeamMemberService";
import Partner from "./Partner";

const PartnerGeneration = () => {
  const [partnerInformation, setPartnerInformation] = useState([]);

  useEffect(() => {
    if (partnerInformation.length == 0) {
      TeamMemberService.getAllDevPartners().then((data) => {
        console.log(data);

        setPartnerInformation(data);
      });
    }
  }, []);

  return (
    <div className="tw-container tw-py-10 tw-ml-2">
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-6">
        {partnerInformation.map((devInfo, index) => (
          <Partner
            key={index}
            partnerName={devInfo.partnerName}
            imageURL={devInfo.imageURL}
            websiteURL={devInfo.websiteURL}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerGeneration;
