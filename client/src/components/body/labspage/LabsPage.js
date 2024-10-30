/* eslint-disable react/prop-types */
/* eslint-disable no-inner-declarations */
import React, { useEffect, useState } from "react";
// import Header from "../../header/header";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as appActions } from "../../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../../reducers/MainReducer";
// import LabGenerationByCategory from "./LabGenerationByCategory";
import LabService from "../../../services/LabService";
import Lab from "../lab/Lab";

const mapStateToProps = (state) => {
  return {
    // General
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

function renderLabData(actions, labInfo, progressState, index, labRecord) {
  const {
    id,
    labName,
    shortDescription,
    thumbnailImageURL,
    fullDescription,
    learningObjectives,
    authors,
    difficulty,
  } = labInfo; // destructuring
  return (
    <Lab
      progressState={progressState}
      key={index}
      alt={labName + " Thumbnail"}
      lab={id}
      name={labName}
      bio={shortDescription}
      image={thumbnailImageURL}
      fullDescription={fullDescription}
      learningObjectives={learningObjectives}
      authors={authors}
      actions={actions}
      labProgress={labRecord}
      difficulty={difficulty}
    />
  );
}

const LabsPage = (props) => {
  const { actions } = props;
  const [labInformation, setLabInformation] = useState(new Map());

  useEffect(() => {
    if (labInformation.size === 0) {
      async function fetchGroups() {
        return LabService.getAllLabs();
      }
      fetchGroups().then((data) => {
        // hashmap... :D
        let hashmap = new Map();
        data.forEach((lab) => {
          const category = lab.category;
          if (hashmap.has(category)) {
            hashmap.get(category).push(lab);
          } else {
            hashmap.set(category, [lab]);
          }
        });
        setLabInformation(hashmap);
      });
    }
  });

  const [displayedLabs, setDisplayedLabs] = useState(new Map());
  const [selectedFilter, setSelectedFilter] = useState("ALL_LABS");
  useEffect(() => {
    const tempMap = new Map();

    if (selectedFilter === "ALL_LABS") {
      setDisplayedLabs(new Map(labInformation));
    } else if (selectedFilter === "AI_MACHINE_LEARNING") {
      if (labInformation.has("AI")) {
        tempMap.set("AI", labInformation.get("AI"));
        setDisplayedLabs(tempMap);
      }
    } else if (selectedFilter === "ACCESSIBILITY") {
      if (labInformation.has("Accessibility")) {
        tempMap.set("Accessibility", labInformation.get("Accessibility"));
        setDisplayedLabs(tempMap);
      }
    } else if (selectedFilter === "DIFF1") {
      setDisplayedLabs(labInformation);
    } else if (selectedFilter === "DIFF2") {
      setDisplayedLabs(labInformation);
    } else if (selectedFilter === "DIFF3") {
      setDisplayedLabs(labInformation);
    } else {
      setDisplayedLabs(labInformation);
    }
  }, [labInformation, selectedFilter]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <div className="tw-h-128 tw-bg-primary-blue tw-flex tw-justify-center tw-items-center">
        <div className="tw-grid tw-w-full tw-h-1/2">
          <div
            className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end
                                    tw-rounded-bl-lg tw-relative"
          >
            <div
              className="tw-bg-white tw-w-full tw-h-[120%] tw-justify-self-end tw-self-center
                                    tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4"
            >
              <div className="tw-flex tw-h-full tw-flex-col tw-max-w-96">
                <h2 className="tw-flex tw-justify-left tw-font-bold tw-font-poppins tw-px-12 tw-py-8">
                  Explore Our Labs
                </h2>
                <text className="tw-flex tw-justify-left tw-text-left tw-font-poppins tw-pl-12">
                  Aenean a venenatis metus, ut varius quam. Quisque lobortis
                  odio libero, quis blandit nibh feugiat malesuada. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-white tw-h-28 tw-w-full" />

      <div className="tw-relative tw-h-auto tw-w-full">
        <div className="tw-flex tw-bg-primary-yellow tw-h-auto tw-w-full tw-relative tw-pb-16">
          <div
            className="tw-flex tw-bg-primary-blue tw-w-full -tw-left-8 tw-top-16
                            tw-h-auto tw-justify-left tw-relative tw-rounded-tr-lg"
          >
            <div className="tw-bg-white tw-auto tw-w-full -tw-left-4 tw-top-4 tw-rounded-tr-lg tw-justify-left tw-relative">
              <div
                className="tw-flex tw-flex-col tw-pt-16 tw-relative tw-left-12 tw-items-center
                              tw-flex-wrap tw-px-12"
              >
                <h1 className="tw-font-poppins tw-font-bold tw-pb-4 tw-w-full">
                  Labs
                </h1>
                <div className="tw-max-w-144 sm:tw-w-2/3 tw-flex tw-rounded-md">
                  <input
                    className="tw-px-4 tw-py-2 tw-font-poppins tw-font-semibold tw-bg-white tw-flex-grow tw-rounded-l-md
                                  tw-border-r-0 tw-border-darkGray tw-border-2"
                    placeholder="Search"
                    type="text"
                    id="searchLabs"
                  />
                  <button className="tw-pr-4 tw-bg-white tw-rounded-r-md tw-border-l-0 tw-border-darkGray tw-border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-fill-darkGray tw-w-5 tw-h-5 tw-align-middle tw-justify-self-center"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                  </button>
                </div>
                <div className="tw-flex tw-flex-wrap tw-flex-row tw-space-x-4 tw-pt-12 tw-pb-16">
                  <button
                    className="tw-bg-white tw-font-poppins tw-px-6 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => {
                      handleFilterChange("ALL_LABS");
                    }}
                  >
                    All Labs
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => {
                      handleFilterChange("AI_MACHINE_LEARNING");
                    }}
                  >
                    AI/Machine Learning
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => {
                      handleFilterChange("ACCESSIBILITY");
                      console.log("HEHEHEH");
                    }}
                  >
                    Accessibility
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => handleFilterChange("DIFF1")}
                  >
                    Difficulty 1
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => handleFilterChange("DIFF2")}
                  >
                    Difficulty 2
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-xl"
                    onClick={() => handleFilterChange("DIFF3")}
                  >
                    Difficulty 3
                  </button>
                </div>

                <div className="md:lg:tw-flex tw-flex-col md:lg:tw-justify-center sm:tw-grid-cols-2 tw-flex-wrap">
                  {/*<LabGenerationByCategory actions={actions}/>*/}
                  {Array.from(displayedLabs.entries()).map(
                    ([category, labArray]) => (
                      <div
                        key={category}
                        className="tw-flex tw-flex-col tw-mb-4"
                      >
                        <text className="tw-font-bold tw-font-calibri tw-text-xl tw-w-full tw-text-left">
                          {category}
                        </text>
                        <div className="tw-flex tw-flex-wrap">
                          <div
                            className="tw-grid xs:tw-grid-cols-2 lg:tw-grid-cols-3
                          tw-gap-4 tw-pb-16 tw-pr-3"
                          >
                            {labArray.map((labInfo) =>
                              renderLabData(
                                actions,
                                labInfo,
                                "",
                                labInfo.id - 1,
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-primary-blue tw-h-128 tw-top-4 tw-relative tw-flex tw-justify-center tw-items-center">
        <div className="tw-grid tw-w-full tw-h-1/2">
          <div
            className="tw-bg-primary-yellow tw-w-11/12 tw-h-4/5 tw-justify-self-end tw-self-end
                                    tw-rounded-bl-lg tw-relative"
          >
            <div
              className="tw-bg-white tw-w-full tw-h-[120%] tw-justify-self-end tw-self-center
                                    tw-rounded-bl-lg tw-relative tw-bottom-14 tw-left-4"
            >
              <div className="tw-flex tw-h-full tw-flex-col tw-max-w-128">
                <h2 className="tw-flex tw-justify-left tw-font-bold tw-font-poppins tw-px-12 tw-py-8">
                  View Your Progress
                </h2>
                <text className="tw-flex tw-justify-left tw-text-left tw-font-poppins tw-pl-12">
                  Aenean a venenatis metus, ut varius quam. Quisque lobortis
                  odio libero, quis blandit nibh feugiat malesuada. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus.
                </text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsPage);
