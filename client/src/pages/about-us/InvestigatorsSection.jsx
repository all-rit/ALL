import React, { useState, useEffect } from "react";
import MemberDisplay from "./MemberDisplay";
import teamMemberService from "../../services/TeamMemberService";

// group members into groups of 5
const groupMembers = (members, setMembers) => {
  const groupedMembers = [];
  if (window.innerWidth > 640) {
    for (let i = 0; i < members.length; i += 5) {
      groupedMembers.push(members.slice(i, i + 5));
    }
  } else {
    for (let i = 0; i < members.length; i += 1) {
      groupedMembers.push(members.slice(i, i + 1));
    }
  }
  setMembers(groupedMembers);
};

const InvestigatorsSection = () => {
  // member states
  const [principalInvestigators, setPrincipalInvestigators] = useState([]);

  // current member state
  const [currentMember, setCurrentMember] = useState();

  useEffect(() => {
    // fetch members
    const fetchMembers = async () => {
      const professors = await teamMemberService.getAllProfessors();
      groupMembers(professors, setPrincipalInvestigators);
    };

    fetchMembers();
  }, []);

  return (
    <section
      id={"investigators-team"}
      className={
        "tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-blue tw-py-6"
      }
    >
      <div className={"tw-flex tw-flex-col tw-bg-white tw-ml-16"}>
        <div
          className={
            "tw-flex tw-flex-col tw-gap-y-6 tw-text-left xs:tw-w-full md:tw-w-3/5 tw-pt-10 tw-pb-6 tw-px-6"
          }
        >
          <h2 className={"tw-title xs:tw-text-xl md:tw-text-[2rem]"}>
            Meet Our Principal Investigators and Advisors
          </h2>
          <p className={"tw-col-span-6 tw-flex tw-body-text tw-leading-snug"}>
            These are the principal investigators and advisors behind the
            Accessible Learning Labs team. They provide guidance and leadership
            for our student team! We invite you to get to know each of them
            through their individualized cards.
          </p>
        </div>
        <MemberDisplay
          currentMember={currentMember}
          groupedMembers={principalInvestigators}
          setCurrentMember={setCurrentMember}
        />
      </div>
    </section>
  );
};

export default InvestigatorsSection;
