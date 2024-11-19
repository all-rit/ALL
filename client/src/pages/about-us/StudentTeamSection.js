import React, { useEffect, useState } from "react";
import Button from "../../components/all-components/Navigation/Button";
import MemberDisplay from "./MemberDisplay";
import teamMemberService from "../../services/TeamMemberService";

const StudentTeamSection = () => {
  // member states
  const [activeMembers, setActiveMembers] = useState([]);
  const [alumniMembers, setAlumniMembers] = useState([]);
  const [showAlumni, setShowAlumni] = useState(false);

  // current member state
  const [currentMember, setCurrentMember] = useState();

  // shown members
  const teamMembers = showAlumni ? alumniMembers : activeMembers;

  useEffect(() => {
    // group members into groups of 5
    const groupMembers = (members, setMembers) => {
      const groupedMembers = [];
      for (let i = 0; i < members.length; i += 5) {
        groupedMembers.push(members.slice(i, i + 5));
      }
      setMembers(groupedMembers);
      members.length > 0 && setCurrentMember(members[0]);
    };

    // fetch members
    const fetchMembers = async () => {
      const alumniMembers = await teamMemberService.getAllAlumni();
      groupMembers(alumniMembers, setAlumniMembers);

      const activeMembers = await teamMemberService.getAllTeamMembers();
      groupMembers(activeMembers, setActiveMembers);
    };

    fetchMembers();
  }, []);

  return (
    <section
      id={"student-team"}
      className={"tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-blue"}
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
          groupedMembers={teamMembers}
          setCurrentMember={setCurrentMember}
        >
          <div className="tw-bg-primary-yellow tw-flex">
            <div className="tw-bg-primary-yellow tw-rounded-bl-xl tw-relative -tw-left-3 tw-right-0 tw-min-w-full">
              <div className="tw-flex tw-m-9 tw-mt-3 tw-items-center tw-justify-center tw-gap-x-9">
                <Button
                  onClick={() => setShowAlumni(false)}
                  variant={showAlumni ? "default" : "primary"}
                >
                  Current Team
                </Button>
                <Button
                  onClick={() => setShowAlumni(true)}
                  variant={showAlumni ? "primary" : "default"}
                >
                  Alumni
                </Button>
              </div>
            </div>
          </div>
        </MemberDisplay>
      </div>
    </section>
  );
};

export default StudentTeamSection;
