import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as appActions } from "../../reducers/lab1/AppReducer";
import { actions as mainActions } from "../../reducers/MainReducer";
import LabService from "../../services/LabService";
import Lab from "../../components/body/lab/Lab";
import useMainStateContext from "../../reducers/MainContext";
import { navigate } from "@reach/router";
import BrandedALLModal from "../../components/all-components/BrandedALLModal";
import LoginBody from "../../components/body/login/LoginBody";
import GettingInvolved from "../../components/all-components/GettingInvolved";
import PropTypes from "prop-types";
import Student from "../../assets/images/stockImages/LookingAtComputer.png";
import Girl from "../../assets/images/stockImages/Girl1.png";
import LandingSection from "../../components/all-components/LandingSection";
import UserService from "../../services/UserService";
import {
  ACCESSIBILITY,
  AI_MACHINE_LEARNING,
  ALL_LABS,
  QUANTUM,
  DIFFICULTY_1,
  DIFFICULTY_2,
  DIFFICULTY_3,
  TUTORIALS,
} from "../../constants/labs";
import {
  EXPLORE_LABS_BODY,
  EXPLORE_LABS_TITLE,
  VIEW_PROGRESS_BODY,
  VIEW_PROGRESS_TITLE,
} from "../../constants/sections";
import LabGeneration from "../../components/body/lab/LabGeneration";

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
  const [myLabs, setMyLabs] = useState([]);

  useEffect(() => {
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
  }, []);

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
    return filteredMap;
  };

  const [displayedLabs, setDisplayedLabs] = useState(new Map());
  const [selectedSearch, setSelectedSearch] = useState("ALL_LABS");
  const [textSearch, setTextSearch] = useState("");

  const getMyLabs = async () => {
    if (loggedIn) {
      const allLabs = await LabService.getAllLabs();

      const assignedLabs = await UserService.getUserAssignedLabs(
        props.user?.userid,
      );

      const userLabs = [];
      allLabs.filter((lab) => {
        assignedLabs.some((assignedLab) => {
          if (assignedLab.labID === lab.id) {
            userLabs.push(lab);
          }
        });
      });
      setMyLabs(userLabs);
    }
  };

  useEffect(() => {
    const tempMap = new Map();

    switch (selectedSearch) {
      case ALL_LABS:
        setDisplayedLabs(new Map(labInformation));
        break;
      case AI_MACHINE_LEARNING:
        if (labInformation.has("AI")) {
          tempMap.set("AI", labInformation.get("AI"));
          setDisplayedLabs(tempMap);
        }
        break;
      case ACCESSIBILITY:
        if (labInformation.has("Accessibility")) {
          tempMap.set("Accessibility", labInformation.get("Accessibility"));
          setDisplayedLabs(tempMap);
        }
        break;
      case QUANTUM:
        if (labInformation.has("Quantum Computing")) {
          tempMap.set(
            "Quantum Computing",
            labInformation.get("Quantum Computing"),
          );
          setDisplayedLabs(tempMap);
        }
        break;
      case DIFFICULTY_1:
        setDisplayedLabs(labsByDifficulty(labInformation, 1));
        break;
      case DIFFICULTY_2:
        setDisplayedLabs(labsByDifficulty(labInformation, 2));
        break;
      case DIFFICULTY_3:
        setDisplayedLabs(labsByDifficulty(labInformation, 3));
        break;
      case TUTORIALS:
        if (labInformation.has("Tutorials")) {
          tempMap.set("Tutorials", labInformation.get("Tutorials"));
          setDisplayedLabs(tempMap);
        }
        break;
      default:
        setDisplayedLabs(labInformation);
    }
    getMyLabs();
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
      >
        <LoginBody />
      </BrandedALLModal>
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
    <div className={"tw-w-lvw"}>
      <LandingSection
        title={EXPLORE_LABS_TITLE}
        body={EXPLORE_LABS_BODY}
        img={Student}
      />
      <div className="tw-relative tw-h-auto  tw-mb-20">
        <div className="tw-flex tw-bg-primary-yellow tw-h-auto tw-relative tw-pb-16">
          <div
            className="tw-flex tw-bg-primary-blue tw-w-full -tw-left-8 tw-top-16
                            tw-h-auto tw-relative tw-rounded-tr-lg"
          >
            <div className="tw-bg-white tw-auto tw-w-full -tw-left-4 tw-top-4 tw-rounded-tr-lg tw-justify-left tw-relative">
              <div
                className="tw-flex tw-flex-col tw-pt-16 tw-relative tw-left-12 tw-items-center
                              tw-flex-wrap tw-px-12"
              >
                {loggedIn && (
                  <div className={"tw-w-full"}>
                    <h1 className="tw-font-poppins tw-font-bold tw-pb-4 tw-w-full">
                      My Labs
                    </h1>
                    <div className={"tw-my-6 tw-p-4 tw-min-h-[20rem]"}>
                      {myLabs.length > 0 ? (
                        <LabGeneration
                          actions={actions}
                          labids={myLabs}
                          progressState={"MY_LABS"}
                        />
                      ) : (
                        <p className={"xs:tw-col-span-3"}>
                          {" "}
                          No labs assigned yet!
                        </p>
                      )}
                    </div>
                  </div>
                )}

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
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </button>
                </div>
                <div className="xs:tw-hidden md:tw-grid tw-grid-cols-3 tw-px-6 tw-pt-12 tw-pb-16 tw-gap-3">
                  <button
                    className="tw-bg-white tw-font-poppins tw-px-6 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(ALL_LABS);
                    }}
                    autoFocus
                  >
                    All Labs
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(AI_MACHINE_LEARNING);
                    }}
                  >
                    AI/Machine Learning
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(ACCESSIBILITY);
                    }}
                  >
                    Accessibility
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(QUANTUM);
                    }}
                  >
                    Quantum Computing
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(DIFFICULTY_1);
                    }}
                  >
                    Difficulty 1
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(DIFFICULTY_2);
                    }}
                  >
                    Difficulty 2
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(DIFFICULTY_3);
                    }}
                  >
                    Difficulty 3
                  </button>
                  <button
                    className=" tw-bg-white tw-font-poppins tw-px-3 tw-py-3 tw-font-semibold tw-rounded-md
                      tw-border-0 tw-shadow-md focus:tw-bg-primary-yellow focus:tw-shadow-xl hover:tw-bg-primary-yellow"
                    onClick={() => {
                      handleSearchChange(TUTORIALS);
                    }}
                  >
                    Tutorials
                  </button>
                </div>

                <div className="md:lg:tw-flex tw-flex-col md:lg:tw-justify-center sm:tw-grid-cols-2 tw-flex-wrap">
                  {Array.from(displayedLabs.entries())
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([category, labArray]) => (
                      <div
                        key={category}
                        className="tw-flex tw-flex-col tw-mb-4"
                      >
                        <p className="tw-font-bold tw-sub-title tw-w-full tw-text-left tw-my-4">
                          {category}
                        </p>
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
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingSection
        title={VIEW_PROGRESS_TITLE}
        body={VIEW_PROGRESS_BODY}
        img={Girl}
        hasButton={true}
        buttonLabel={"Your Account"}
        onClick={handleNav}
        shrinkImg={true}
      />
      {signInModalOpen && signInModal()}
      <GettingInvolved />
    </div>
  );
};

LabsPage.propTypes = {
  actions: PropTypes.shape({}),
  user: PropTypes.shape({
    userid: PropTypes.number,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(LabsPage);
