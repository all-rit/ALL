import React, { useEffect, useRef, useState } from "react";
import {
  GROUP_OVERVIEW,
  LAB_OVERVIEW,
} from "../../constants/educatorResources/LabOverview";
import LabService from "../../services/LabService";
import ResourceRow from "./components/ResourceRow";

const ResourcesSection = () => {
  const [displayedResource, setDisplayedResource] = useState("Overview");
  const [labs, setLabs] = useState([]);

  const resourceBody = useRef(null);
  const [width, setWidth] = useState(0);

  const getLabs = async () => {
    const labData = await LabService.getAllLabs();
    setLabs(labData);
  };

  useEffect(() => {
    getLabs();
    const changeWidth = () => {
      if (resourceBody.current) {
        setWidth(resourceBody.current.offsetWidth + 24);
      }
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
  }, [width]);

  const displayOverview = () => {
    setDisplayedResource("Overview");
  };

  const displayWalkthrough = () => {
    setDisplayedResource("Materials");
  };

  const displayGroups = () => {
    setDisplayedResource("Groups");
  };

  return (
    <div
      className={
        "tw-w-full tw-min-h-[40rem] tw-bg-primary-blue tw-flex tw-flex-row tw-justify-end tw-items-center tw-py-6 "
      }
    >
      <div
        className={
          "tw-bg-white tw-w-[85%] tw-rounded-tl-lg tw-rounded-bl-3xl tw-my-16 tw-relative tw-z-10"
        }
        ref={resourceBody}
      >
        <div
          className="tw-flex tw-flex-col tw-text-left xs:tw-w-full tw-p-10 tw-rounded-l-2xl
                    tw-justify-center tw-z-10 tw-bg-white "
        >
          <p
            className={
              "tw-font-poppins tw-font-bold xxs:tw-text-md md:tw-text-3xl tw-z-10 "
            }
          >
            {" "}
            Educator Resources{" "}
          </p>
          <div
            className={
              "md:tw-flex xs:tw-grid xs:tw-grid-cols-2 md:tw-flex-row tw-gap-3 tw-my-3 tw-z-10 "
            }
          >
            <button
              className={
                "btn tw-border-solid tw-shadow-md tw-border-1 xs:tw-text-xs md:tw-text-[1rem] tw-bg-white hover:tw-bg-primary-yellow focus:tw-bg-primary-yellow tw-z-10"
              }
              onClick={displayOverview}
              autoFocus
            >
              Lab Overview
            </button>
            <button
              className={
                "btn tw-border-solid tw-shadow-md tw-border-1 xs:tw-text-xs md:tw-text-[1rem] tw-bg-white hover:tw-bg-primary-yellow focus:tw-bg-primary-yellow tw-z-10"
              }
              onClick={displayWalkthrough}
            >
              Learning Materials
            </button>
            <button
              className={
                "btn tw-border-solid tw-shadow-md tw-border-1 xs:tw-text-xs md:tw-text-[1rem] tw-bg-white hover:tw-bg-primary-yellow focus:tw-bg-primary-yellow"
              }
              onClick={displayGroups}
            >
              Leading a Group
            </button>
          </div>
          <div className={"tw-w-full tw-z-10 tw-bg-white"}>
            {displayedResource === "Overview" && (
              <ul>
                {LAB_OVERVIEW.map((lab) => {
                  return (
                    <ResourceRow
                      key={lab.id}
                      title={lab.title}
                      description={lab.description}
                      image={lab.image}
                    />
                  );
                })}
              </ul>
            )}
            {displayedResource === "Materials" && (
              <ul>
                {labs.map((lab) => {
                  return (
                    <ResourceRow
                      key={lab.id}
                      id={lab.id}
                      title={lab.labName}
                      subTitle={lab.labShortName}
                      description={lab.fullDescription}
                      slides={`/powerpoints/${lab.slideshow}`}
                      walkthroughVideo={lab.walkthroughVideo}
                    />
                  );
                })}
              </ul>
            )}
            {displayedResource === "Groups" && (
              <div className={"tw-text-justify"}>
                <p className={"tw-body-text xs:tw-w-full md:tw-w-1/2 tw-my-3"}>
                  Below, you will find a guide on creating, updating, and
                  managing instructing groups in our profile section! In
                  addition, you will also be find information on tracking
                  student progress and how to join a group!
                </p>
                <ul>
                  {GROUP_OVERVIEW.map((lab) => {
                    return (
                      <ResourceRow
                        key={lab.id}
                        title={lab.title}
                        description={lab.description}
                        image={lab.image}
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div
          className={`tw-absolute tw-h-[95%] tw-border-solid tw-border-[1.5rem] tw-bg-white
              tw-border-primary-yellow tw-border-t-0 tw-border-r-0 tw-left-[-1rem] tw-bottom-[-1rem] tw-rounded-bl-lg tw--z-10`}
          style={{
            width: `${width}px`,
            paddingLeft: "1rem",
          }}
        />
      </div>
    </div>
  );
};

export default ResourcesSection;
