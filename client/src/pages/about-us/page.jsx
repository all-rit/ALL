import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import teamMemberService from "src/services/TeamMemberService";
import SomeKid from "../../assets/images/ui-refresh/some_kid.png";
import React from "react";
import { twMerge } from "tailwind-merge";

const AboutUs = () => {
  return (
    <div>
      {/* is padding/margin for sections appropriate? */}
      <LandingSection />
      <OurMissionSection />
      <InvestigatorsSection />
      <StudentTeamSection />
      <GettingInvolvedSection />
    </div>
  );
};

const LandingSection = () => {
  return (
    <section
      id={"about-us"}
      className={"tw-min-h-screen tw-py-52 tw-flex tw-flex-col"}
    >
      <div
        className={
          "tw-relative tw-bg-primary-blue tw-flex-1 tw-flex tw-flex-col tw-justify-center"
        }
      >
        <div className={"tw-relative tw-ml-64"}>
          <div
            className={
              "tw-z-1 tw-relative tw-grid tw-grid-cols-12 tw-min-w-full tw-bg-white tw-rounded-l-md"
            }
          >
            <div
              className={
                "tw-col-span-5 tw-flex tw-flex-col tw-gap-y-6 tw-py-12 tw-px-20 tw-text-left"
              }
            >
              <h2 className={"tw-title-styling-name"}>About Us</h2>
              <p className={"tw-body-styling-name"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur nisl in tortor tincidunt pharetra. Donec accumsan
                libero in sem luctus mollis.
              </p>
            </div>
          </div>
          <div
            className={
              "tw-absolute -tw-bottom-4 -tw-left-4 tw-right-0 tw-h-[12rem] tw-min-w-full tw-bg-primary-yellow tw-rounded-bl-lg"
            }
          />
        </div>
      </div>
    </section>
  );
};

const OurMissionSection = () => {
  return (
    <section
      id={"our-mission"}
      className={
        "tw-min-h-screen tw-flex tw-flex-col tw-bg-primary-yellow tw-justify-center"
      }
    >
      <div
        className={
          "tw-flex tw-justify-center tw-bg-white tw-mr-16 tw-border-8 tw-border-l-0 tw-border-solid tw-border-primary-blue tw-rounded-r-lg"
        }
      >
        <div
          className={
            "tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-16 tw-max-w-[64rem]"
          }
        >
          <div className={"tw-flex tw-flex-col tw-gap-y-6 tw-text-left"}>
            <h2 className={"tw-title-styling-name"}>Our Mission</h2>
            <div className={"tw-grid tw-grid-cols-8 tw-items-center"}>
              <p className={"tw-col-span-6 tw-body-styling-name"}>
                Quisque justo tortor, tincidunt sed auctor et, semper at risus.
                Praesent et molestie lorem. Aliquam ultricies, orci ut aliquam
                rhoncus, est leo ultrices risus, quis placerat arcu eros sed
                dolor. Curabitur bibendum ipsum odio, vehicula hendrerit ante
                porttitor rutrum. Donec blandit nisi sed ex laoreet venenatis.
                Praesent fermentum volutpat finibus. Donec suscipit porta tellus
                a ullamcorper. Proin sed est mauris.
              </p>
              <div className={"tw-col-span-2 tw-flex tw-justify-center"}>
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div>
            <img src={SomeKid} alt={"some kid"} />
          </div>
        </div>
      </div>
    </section>
  );
};

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
      id={"student-team"}
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
          groupedMembers={teamMembers}
          setCurrentMember={setCurrentMember}
        >
          <div className="tw-bg-primary-yellow tw-flex">
            <div className="tw-bg-primary-yellow tw-rounded-bl-xl tw-relative -tw-left-3 tw-right-0 tw-min-w-full">
              <div className="tw-flex tw-m-9 tw-mt-3 tw-items-center tw-justify-center tw-gap-x-9">
                {/* TODO: update with ALL Button , whenever that is pushed */}
                <button onClick={() => setShowAlumni(false)}>
                  Current Team
                </button>
                <button onClick={() => setShowAlumni(true)}>Alumni</button>
              </div>
            </div>
          </div>
        </MemberDisplay>
      </div>
    </section>
  );
};

// shared member display component/logic
const MemberDisplay = (props) => {
  const { currentMember, setCurrentMember, groupedMembers, children } = props;

  useEffect(() => {
    if (groupedMembers.length > 0) setCurrentMember(groupedMembers[0][0]);
  }, [groupedMembers]);

  // carousel states
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex((activeIndex + 1) % groupedMembers.length);
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex(
      (activeIndex - 1 + groupedMembers.length) % groupedMembers.length,
    );
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      {currentMember && (
        <div className="tw-grid tw-grid-cols-8 tw-gap-x-6">
          <div className="tw-relative tw-top-3 -tw-left-3 tw-col-start-1 tw-col-span-3 tw-bg-primary-yellow tw-rounded-t-xl tw-p-3">
            <img
              className="tw-object-cover tw-rounded-t-lg tw-min-h-[40rem] tw-max-h-[40rem] tw-w-full tw-pointer-events-none"
              src={`/img/profileImages${currentMember.imageURL}`}
            />
          </div>
          <div className="tw-mt-12 tw-text-left tw-flex tw-flex-col tw-gap-y-12 tw-col-span-3">
            <div id="member">
              <div id="member-name">
                <h3 className="tw-font-bold tw-text-3xl">
                  {currentMember.firstName} {currentMember.lastName}
                </h3>
              </div>
              <div id="member-details" className="tw-mt-1.5">
                <p className="tw-text-md tw-font-light tw-leading-snug">
                  {currentMember.title}
                </p>
                <p className="tw-text-md tw-font-light tw-leading-snug">
                  {currentMember.datesActive}
                </p>
                <p className="tw-text-md tw-font-light tw-leading-snug">
                  Rochester Institute of Technology
                </p>
                <p className="tw-mt-6 tw-text-md tw-font-light tw-leading-snug">
                  Something inspirational here...
                </p>
              </div>
              <div id="member-socials" className="tw-mt-6">
                {currentMember.socials.map((social) => {
                  return (
                    <SocialIcon
                      key={social.link}
                      url={social.link}
                      network={social.network}
                      target={"__blank"}
                      className="tw-h-9 tw-w-9"
                    />
                  );
                })}
              </div>
            </div>
            <div id="member-favorite-lab">
              <h4 className="tw-m-0 tw-font-bold tw-text-xl">Favorite Lab</h4>
              <p className="tw-text-md tw-font-light tw-leading-snug">
                Something inspirational here...
              </p>
            </div>
            <div id="member-lab-credits">
              <h4 className="tw-m-0 tw-font-bold tw-text-xl">Lab Credits</h4>
              <p className="tw-text-md tw-font-light tw-leading-snug">
                Something inspirational here...
              </p>
            </div>
          </div>
        </div>
      )}
      {groupedMembers && (
        <div className="tw-bg-primary-yellow tw-flex">
          <div
            className={twMerge(
              "tw-relative -tw-left-3 tw-right-0 tw-bg-primary-yellow tw-min-w-full",
              children ? "tw-rounded-bl-none" : "tw-rounded-bl-xl",
            )}
          >
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={groupedMembers.map((group) => {
                  // reactstrap bug (use first member of a group as the key for that group)
                  // https://stackoverflow.com/questions/47326731/problems-with-reactstrap-carousel-indicators
                  return {
                    ...group,
                    key: group[0].firstName + group[0].lastName,
                  };
                })}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {groupedMembers.map((group) => {
                return (
                  <CarouselItem
                    key={group[0].firstName + group[0].lastName}
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                  >
                    <div className="tw-grid tw-grid-cols-5 tw-gap-x-9 tw-py-12 tw-px-24">
                      {group.map((member) => {
                        return (
                          <button
                            key={member.firstName + member.lastName}
                            onClick={() => setCurrentMember(member)}
                            className="tw-p-0 tw-flex tw-flex-col tw-bg-white tw-rounded-xl tw-max-w-lg tw-shadow-xl tw-drop-shadow-xl"
                          >
                            <img
                              className="tw-object-cover tw-rounded-t-lg tw-min-h-80 tw-max-h-80 tw-w-full tw-pointer-events-none"
                              src={`/img/profileImages${member.imageURL}`}
                            />
                            <div className="tw-flex tw-flex-col tw-gap-y-3 tw-text-left tw-p-4">
                              <div>
                                <h5 className="tw-font-bold tw-text-xl">
                                  {member.firstName} {member.lastName}
                                </h5>
                              </div>
                              <div>
                                <p className="tw-text-md tw-font-light tw-leading-snug">
                                  {member.title}
                                </p>
                                <p className="tw-text-md tw-font-light tw-leading-snug">
                                  {member.datesActive}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CarouselItem>
                );
              })}
              <CarouselControl
                className="tw-w-20"
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                className="tw-w-20"
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

MemberDisplay.propTypes = {
  currentMember: PropTypes.shape({
    imageURL: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string,
    datesActive: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  groupedMembers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
  setCurrentMember: PropTypes.func,
  children: PropTypes.node,
};

const GettingInvolvedSection = () => {
  return (
    <section
      id={"getting-involved"}
      className={"tw-min-h-screen tw-bg-primary-blue"}
    ></section>
  );
};

export default AboutUs;
