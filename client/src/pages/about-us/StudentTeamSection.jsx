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
      className={
        "tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-blue tw-pb-10 tw-mb-10"
      }
    >
      <div className={"tw-flex tw-flex-col tw-bg-white tw-ml-16"}>
        <div
          className={
            "tw-flex tw-flex-col tw-gap-y-6 tw-text-left xs:tw-w-full md:tw-w-3/4 tw-px-6 tw-pt-10 tw-pb-6"
          }
        >
          <h2 className={"tw-title xs:tw-text-xl md:tw-text-[2rem]"}>
            Meet Our Student Team
          </h2>
          <p className={"tw-col-span-6 tw-body-text tw-leading-snug"}>
            Our labs were made possible by the amazing efforts of our team of
            student developers! We invite you to get to know each team member
            through their individualized cards, and don’t forget to explore our
            Alumni as well!
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
