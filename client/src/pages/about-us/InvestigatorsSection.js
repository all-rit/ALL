import React, { useState, useEffect } from "react";
import MemberDisplay from "./MemberDisplay";
import teamMemberService from "../../services/TeamMemberService";

// group members into groups of 5
const groupMembers = (members, setMembers) => {
  const groupedMembers = [];
  for (let i = 0; i < members.length; i += 5) {
    groupedMembers.push(members.slice(i, i + 5));
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
        "tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-blue tw-pb-0"
      }
    >
      <div className={"tw-flex tw-flex-col tw-bg-white tw-ml-16"}>
        <div
          className={
            "tw-flex tw-flex-col tw-gap-y-6 tw-text-left tw-w-[48rem] tw-py-24 tw-px-12"
          }
        >
          <h2 className={"tw-title-styling-name"}>
            Meet Our Principal Investigators and Advisors
          </h2>
          <p className={"tw-col-span-6 tw-body-styling-name"}>
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
