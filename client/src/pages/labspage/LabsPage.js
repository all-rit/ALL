import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import LabService from "../../services/LabService";
import Lab from "../../components/body/lab/Lab";
import useMainStateContext from "../../reducers/MainContext";
import ALLButton from "../../components/all-components/ALLButton";
import { navigate } from "@reach/router";
import BrandedALLModal from "../../components/all-components/BrandedALLModal";
import LoginBody from "../../components/body/login/LoginBody";
import GettingInvolved from "../../components/all-components/GettingInvolved";
import PropTypes from "prop-types";
import Student from "../../assets/images/stockImages/LookingAtComputer.png";
import Girl from "../../assets/images/stockImages/Girl1.png";
import LandingSection from "../../components/all-components/LandingSection";

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
  const { state } = useMainStateContext();
  const { actions } = props;
  const [labInformation, setLabInformation] = useState(new Map());

  useEffect(() => {
    if (labInformation.size !== 0) {
      return;
    }

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
  });

  const labsByDifficulty = (labMap, difficulty) => {
    const filteredMap = new Map();
    for (const [key, value] of labMap.entries()) {
      const filteredArr = value.filter((x) => x.difficulty === difficulty);
      if (filteredArr.length > 0) {
        filteredMap.set(key, filteredArr);
      }
    }
    return filteredMap;
  };

  const labsBySearchPhrase = (labMap, phrase) => {
    const filteredMap = new Map();
    if (phrase.isEmpty || phrase === "") return labMap;
    for (const [key, value] of labMap.entries()) {
      const filteredArr = value.filter((x) =>
        x.labName
          .toLowerCase()
          .includes(
            phrase.toLowerCase() ||
              x.category.toLowerCase().includes(phrase.toLowerCase()),
          ),
      );
      if (filteredArr.length > 0) {
        filteredMap.set(key, filteredArr);
      }
    }
    console.log(filteredMap);
    return filteredMap;
  };

  const [displayedLabs, setDisplayedLabs] = useState(new Map());
  const [selectedSearch, setSelectedSearch] = useState("ALL_LABS");
  const [textSearch, setTextSearch] = useState("");
  useEffect(() => {
    const tempMap = new Map();

    if (selectedSearch === "ALL_LABS") {
      setDisplayedLabs(new Map(labInformation));
    } else if (selectedSearch === "AI_MACHINE_LEARNING") {
      if (labInformation.has("AI")) {
        tempMap.set("AI", labInformation.get("AI"));
        setDisplayedLabs(tempMap);
      }
    } else if (selectedSearch === "ACCESSIBILITY") {
      if (labInformation.has("Accessibility")) {
        tempMap.set("Accessibility", labInformation.get("Accessibility"));
        setDisplayedLabs(tempMap);
      }
    } else if (selectedSearch === "DIFF1") {
      setDisplayedLabs(labsByDifficulty(labInformation, 1));
    } else if (selectedSearch === "DIFF2") {
      setDisplayedLabs(labsByDifficulty(labInformation, 2));
    } else if (selectedSearch === "DIFF3") {
      setDisplayedLabs(labsByDifficulty(labInformation, 3));
    } else {
      setDisplayedLabs(labInformation);
    }
  }, [labInformation, selectedSearch]);

  const handleSearchChange = (search) => {
    setSelectedSearch(search);
  };

  const handleSearchTextChange = (search) => {
    setTextSearch(search);
  };

  const handleSearch = () => {
    setDisplayedLabs(labsBySearchPhrase(labInformation, textSearch));
  };

  const loggedIn =
    state.main.user !== null && state.main.user.firstname !== null;
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const toggleSignIn = () => {
    setSignInModalOpen(!signInModalOpen);
  };

  const signInModal = () => {
    return (
      <BrandedALLModal
        direction={"row"}
        isOpen={signInModalOpen}
        toggle={toggleSignIn}
        body={<LoginBody />}
      />
    );
  };

  const handleNav = () => {
    if (!loggedIn) {
      toggleSignIn();
    } else {
      navigate("/Profile");
    }
  };

  return (
    <div className={"md:tw-pt-[2rem]"}>
      <LandingSection
        title={"Explore Our Labs"}
        body={`Ready to start learning? Access any of the labs below to learn
                    more about a range of topics from accessibility to sound and
                    speech, color blindness and even labs about algorithmic bias
                    and more.`}
        img={Student}
      />
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
                                  tw-border-r-0 tw-border-darkGray tw-border-2 focus:tw-outline-0"
                    placeholder="Search"
                    type="text"
                    id="searchLabs"
                    onChange={(e) => {
                      handleSearchTextChange(e.target.value);
                    }}
                  />
                  <button
                    className="tw-pr-4 tw-bg-white tw-rounded-r-md tw-border-l-0 tw-border-darkGray tw-border-2"
                    onClick={(e) => {
                      handleSearch(e);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-fill-darkGray tw-w-5 tw-h-5 tw-align-middle tw-justify-self-center"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                  </button>
                </div>
                <div className="tw-grid tw-grid-cols-3 tw-px-6 tw-pt-12 tw-pb-16 tw-gap-3">
                  <button
                    className="tw-bg-white tw-font-poppins tw-px-6 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("ALL_LABS");
                    }}
                  >
                    All Labs
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("AI_MACHINE_LEARNING");
                    }}
                  >
                    AI/Machine Learning
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("ACCESSIBILITY");
                    }}
                  >
                    Accessibility
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("DIFF1");
                    }}
                  >
                    Difficulty 1
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("DIFF2");
                    }}
                  >
                    Difficulty 2
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange("DIFF3");
                    }}
                  >
                    Difficulty 3
                  </button>
                </div>

                <div className="md:lg:tw-flex tw-flex-col md:lg:tw-justify-center sm:tw-grid-cols-2 tw-flex-wrap">
                  {Array.from(displayedLabs.entries()).map(
                    ([category, labArray]) => (
                      <div
                        key={category}
                        className="tw-flex tw-flex-col tw-mb-4"
                      >
                        <text className="tw-font-bold tw-font-calibri tw-text-xl tw-w-full tw-text-left tw-my-4">
                          {category}
                        </text>
                        <div className="tw-flex tw-flex-wrap">
                          <div
                            className="tw-grid xs:tw-grid-cols-2 lg:tw-grid-cols-3
                          tw-gap-4 tw-pb-16 tw-pr-3 tw-w-full"
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
              <div className="tw-flex xl:lg:md:tw-flex-row sm:tw-flex-col tw-h-full">
                <div className="tw-flex tw-h-full tw-flex-col tw-max-w-128">
                  <h2 className="tw-flex tw-justify-left tw-font-bold tw-font-poppins tw-px-12 tw-pt-8 tw-pb-3">
                    View Your Progress
                  </h2>
                  <p className="tw-flex tw-body-text tw-pl-12">
                    Didn’t finish a lab? Come back and continue where you left
                    off through your account profile. All of your progress will
                    be saved as you complete each lab.
                  </p>
                </div>
                <div className="tw-flex xl:lg:md:tw-self-center tw-pl-4 sm:tw-pl-12">
                  <ALLButton
                    label={"Your Account"}
                    onClick={() => {
                      handleNav();
                    }}
                  />
                  {signInModalOpen && signInModal()}
                </div>
              </div>
            </div>
          </div>
          <img
            src={Girl}
            className={"tw-absolute tw-w-[20rem] tw-bottom-0 tw-right-10"}
          />
        </div>
      </div>
      <div className="tw-bg-white tw-h-28 tw-w-full" />
      <GettingInvolved />
    </div>
  );
};

LabsPage.propTypes = {
  actions: PropTypes.shape({}),
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsPage);
