import React from "react";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { SocialIcon } from "react-social-icons";

// shared member display component/logic
const MemberDisplay = (props) => {
  const { currentMember, setCurrentMember, groupedMembers, children } = props;

  // carousel states
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    if (groupedMembers.length > 0) setCurrentMember(groupedMembers[0][0]);
  }, [groupedMembers]);

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
                  {currentMember.affiliation
                    ? currentMember.affiliation
                    : "Rochester Institute of Technology"}
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
    affiliation: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  groupedMembers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
  setCurrentMember: PropTypes.func,
  children: PropTypes.node,
};

export default MemberDisplay;
