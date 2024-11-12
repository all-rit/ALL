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
          <h2 className={"tw-title-styling-name"}>Meet Our Student Team</h2>
          <p className={"tw-col-span-6 tw-body-styling-name"}>
            Quisque justo tortor, tincidunt sed auctor et, semper at risus.
            Praesent et molestie lorem. Aliquam ultricies, orci ut aliquam
            rhoncus, est leo ultrices risus, quis placerat arcu eros sed dolor.
            Curabitur bibendum ipsum odio, vehicula hendrerit ante porttitor
            rutrum. Donec blandit nisi sed ex laoreet venenatis. Praesent
            fermentum volutpat finibus. Donec suscipit porta tellus a
            ullamcorper. Proin sed est mauris.
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
