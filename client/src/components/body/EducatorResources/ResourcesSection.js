import React, { useEffect, useState } from "react";
import { LabOverview } from "../../../constants/educatorResources/LabOverview";
import LabSection from "./components/LabSection";

const ResourcesSection = () => {
  const [displayedResource, setDisplayedResource] = useState("");

  useEffect(() => {
    setDisplayedResource("Overview");
  }, []);

  const displayOverview = () => {
    setDisplayedResource("Overview");
  };

  const displayWalkthrough = () => {
    setDisplayedResource("Walkthrough");
  };

  const displaySlides = () => {
    setDisplayedResource("Slides");
  };

  const displayGroups = () => {
    setDisplayedResource("Groups");
  };

  return (
    <div
      className={
        "tw-w-full tw-min-h-[40rem] tw-bg-primary-blue tw-flex tw-flex-row tw-justify-end tw-items-center tw-py-6"
      }
    >
      <div
        className={"tw-bg-white tw-w-[85%] tw-rounded-tl-lg tw-rounded-bl-lg"}
      >
        <div
          className="tw-flex tw-flex-col tw-text-left xs:tw-w-full tw-p-10 tw-rounded-bl-2xl
                    tw-justify-center tw-border-solid tw-border-[1rem] tw-border-primary-yellow tw-border-t-0 tw-border-r-0"
        >
          <p
            className={
              "tw-font-poppins tw-font-bold xxs:tw-text-md md:tw-text-3xl"
            }
          >
            {" "}
            Educator Resources{" "}
          </p>
          <div className={"tw-flex tw-flex-row tw-gap-3"}>
            <button className={"btn btn-primary"} onClick={displayOverview}>
              Overview
            </button>
            <button className={"btn btn-primary"} onClick={displayWalkthrough}>
              Walkthrough Videos
            </button>
            <button className={"btn btn-primary"} onClick={displaySlides}>
              Lab Lecture Slides
            </button>
            <button className={"btn btn-primary"} onClick={displayGroups}>
              Leading a Group
            </button>
          </div>
          <div className={"tw-w-full tw-py-6"}>
            {displayedResource === "Overview" && (
              <ul>
                {LabOverview.map((lab) => {
                  return (
                    <LabSection
                      key={lab.id}
                      id={lab.id}
                      title={lab.title}
                      description={lab.description}
                      image={lab.image}
                    />
                  );
                })}
              </ul>
            )}
            {displayedResource === "Walkthrough" && <div>Walkthrough</div>}
            {displayedResource === "Slides" && <div>Slides</div>}
            {displayedResource === "Groups" && <div>Lead a Group</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
