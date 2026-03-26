import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as appActions } from '../../reducers/lab1/AppReducer';
import { actions as mainActions } from '../../reducers/MainReducer';
import LabService from '../../services/LabService';
import Lab from '../../components/body/lab/Lab';
import useMainStateContext from '../../reducers/MainContext';
import { navigate } from 'react-router-dom';
import BrandedALLModal from '../../components/all-components/BrandedALLModal';
import LoginBody from '../../components/body/login/LoginBody';
import GettingInvolved from '../../components/all-components/GettingInvolved';
import PropTypes from 'prop-types';
import Student from '../../assets/images/stockImages/LookingAtComputer.png';
import Girl from '../../assets/images/stockImages/Girl1.png';
import LandingSection from '../../components/all-components/LandingSection';
import UserService from '../../services/UserService';
import {
  EXPLORE_LABS_BODY,
  EXPLORE_LABS_TITLE,
  VIEW_PROGRESS_BODY,
  VIEW_PROGRESS_TITLE,
} from '../../constants/sections';
import LabGeneration from '../../components/body/lab/LabGeneration';

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
      alt={labName + ' Thumbnail'}
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

  const labsByDifficulty = (labMap, difficulties) => {
    const filteredMap = new Map();
    for (const [key, value] of labMap.entries()) {
      const filteredArr = value.filter((x) =>
        difficulties.includes(x.difficulty),
      );
      if (filteredArr.length > 0) {
        filteredMap.set(key, filteredArr);
      }
    }
    return filteredMap;
  };

  const labsBySearchPhrase = (labMap, phrase) => {
    const filteredMap = new Map();
    if (phrase.isEmpty || phrase === '') return labMap;
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
  const [textSearch, setTextSearch] = useState('');

  const [showFilter, setShowFilter] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);

  useEffect(() => {
    applyFilters(selectedTopics, selectedDifficulties, textSearch);
  }, [selectedTopics, selectedDifficulties, textSearch]);

  const changeTopic = (value) => {
    setSelectedTopics((prev) =>
      prev.includes(value)
        ? prev.filter((topic) => topic !== value)
        : [...prev, value],
    );
  };
  const changeDifficulty = (value) => {
    setSelectedDifficulties((prev) =>
      prev.includes(value)
        ? prev.filter((level) => level !== value)
        : [...prev, value],
    );
  };
  const applyFilters = (
    topics = selectedTopics,
    difficulties = selectedDifficulties,
    text = textSearch,
  ) => {
    let filtered = new Map(labInformation);
    if (topics.length > 0) {
      filtered = new Map(
        Array.from(filtered.entries()).filter(([key]) => topics.includes(key)),
      );
    }
    if (difficulties.length > 0) {
      filtered = labsByDifficulty(filtered, difficulties);
    }
    if (text.trim() !== '') {
      filtered = labsBySearchPhrase(filtered, text);
    }
    setDisplayedLabs(filtered);
  };

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
    setDisplayedLabs(new Map(labInformation));
    getMyLabs();
  }, [labInformation]);

  const handleSearchTextChange = (search) => {
    setTextSearch(search);
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
        direction={'row'}
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
      navigate('/Profile');
    }
  };

  return (
    <div className={'tw-w-lvw'}>
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
                  <div className={'tw-w-full'}>
                    <h1 className="tw-font-poppins tw-font-bold tw-pb-4 tw-w-full">
                      My Labs
                    </h1>
                    <div className={'tw-my-6 tw-p-4 tw-min-h-[20rem]'}>
                      {myLabs.length > 0 ? (
                        <LabGeneration
                          actions={actions}
                          labids={myLabs}
                          progressState={'MY_LABS'}
                        />
                      ) : (
                        <p className={'xs:tw-col-span-3'}>
                          {' '}
                          No labs assigned yet!
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <h1 className="tw-font-poppins tw-font-bold tw-pb-4 tw-w-full">
                  Labs
                </h1>
                <div className="tw-flex tw-items-center tw-gap-3 tw-max-w-144 sm:tw-w-2/3 tw-w-full">
                  <div className="tw-flex tw-flex-1 tw-rounded-md tw-min-w-0 tw-shadow-md">
                    <input
                      className="tw-px-4 tw-py-2 tw-font-poppins tw-font-semibold tw-bg-white tw-flex-grow tw-rounded-md
                                  tw-border-darkGray tw-border-2 tw-min-w-0"
                      placeholder="Search"
                      type="text"
                      id="searchLabs"
                      onChange={(e) => {
                        handleSearchTextChange(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFilter((prev) => !prev)}
                    className="
                      tw-px-4 tw-py-2
                      tw-rounded-md tw-shadow-md
                      tw-bg-primary-yellow
                      tw-flex tw-justify-center tw-gap-2
                      tw-font-bold tw-border-solid tw-border-primary-yellow tw-font-poppins"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="tw-w-5"
                      viewBox="0 0 640 640"
                    >
                      <path d="M96 128C78.3 128 64 142.3 64 160C64 177.7 78.3 192 96 192L182.7 192C195 220.3 223.2 240 256 240C288.8 240 317 220.3 329.3 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L329.3 128C317 99.7 288.8 80 256 80C223.2 80 195 99.7 182.7 128L96 128zM96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L342.7 352C355 380.3 383.2 400 416 400C448.8 400 477 380.3 489.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L489.3 288C477 259.7 448.8 240 416 240C383.2 240 355 259.7 342.7 288L96 288zM96 448C78.3 448 64 462.3 64 480C64 497.7 78.3 512 96 512L150.7 512C163 540.3 191.2 560 224 560C256.8 560 285 540.3 297.3 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L297.3 448C285 419.7 256.8 400 224 400C191.2 400 163 419.7 150.7 448L96 448z" />
                    </svg>
                    FILTER
                  </button>
                </div>
                {showFilter && (
                  <div className="tw-relative tw-flex tw-flex-col tw-gap-4 tw-p-6 tw-mt-5 tw-max-w-[35rem] sm:tw-w-[calc(66.666%-1rem)] tw-w-[calc(100%-1rem)] tw-text-left tw-rounded-md tw-font-poppins">
                    <div className="tw-relative">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTopics([]);
                          setSelectedDifficulties([]);
                        }}
                        className="tw-absolute tw-font-bold tw-z-10 tw-top-0 tw-right-0 btn tw-text-black tw-bg-primary-yellow tw-shadow-md focus:tw-bg-secondary-gray hover:tw-bg-secondary-gray hover:tw-shadow-lg text-uppercase tw-max-h-[5rem] tw-min-w-[4rem] tw-max-w-[20rem] tw-text-nowrap tw-border-none"
                      >
                        CLEAR
                      </button>
                      <h2 className="tw-text-lg tw-font-bold tw-py-4">Topic</h2>
                      <div className="tw-grid tw-grid-cols-2 tw-gap-6">
                        {Array.from(labInformation.keys()).map((key) => (
                          <label
                            key={key}
                            htmlFor={key}
                            className={`
                                tw-flex tw-items-center tw-justify-center
                                focus-within:tw-border-black
                                btn tw-border-solid tw-shadow-md tw-border-1 
                                tw-text-sm md:tw-text-[1rem]
                                hover:tw-bg-primary-yellow
                                tw-z-10
                                ${
                                  selectedTopics.includes(key)
                                    ? 'tw-bg-primary-yellow'
                                    : 'tw-bg-white'
                                }
                            `}
                          >
                            <input
                              type="checkbox"
                              id={key}
                              name="topic"
                              value={key}
                              checked={selectedTopics.includes(key)}
                              onChange={() => changeTopic(key)}
                              className="tw-w-0 tw-h-0"
                            />
                            {key}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <h2 className="tw-text-lg tw-font-bold tw-py-4">
                        Difficulty
                      </h2>
                      <div className="tw-flex tw-gap-6">
                        {[1, 2, 3].map((level) => (
                          <label
                            key={level}
                            htmlFor={`difficulty-${level}`}
                            className={`
                                tw-flex-1 tw-items-center tw-justify-center
                                focus-within:tw-border-black
                                btn tw-border-solid tw-shadow-md tw-border-1 
                                tw-text-sm md:tw-text-[1rem]
                                hover:tw-bg-primary-yellow
                                tw-z-10
                                ${
                                  selectedDifficulties.includes(level)
                                    ? 'tw-bg-primary-yellow'
                                    : 'tw-bg-white'
                                }
                            `}
                          >
                            <input
                              type="checkbox"
                              id={`difficulty-${level}`}
                              name="difficulty"
                              value={level}
                              checked={selectedDifficulties.includes(level)}
                              onChange={() => changeDifficulty(level)}
                              className="tw-w-0 tw-h-0"
                            />
                            {level}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`tw-absolute tw-border-solid tw-border-primary-blue
                        tw-border-[0.4rem] tw-right-[-0.5rem] tw-top-[-0.5rem] tw-h-full tw-w-full tw-z-0
                        tw-border-l-0 tw-border-b-0 tw-rounded-tr-lg`}
                    />
                    <div
                      className={`tw-absolute tw-border-solid tw-border-primary-yellow
                        tw-border-[0.4rem] tw-left-[-0.5rem] tw-bottom-[-0.5rem]
                        tw-w-full tw-h-full tw-z-0 tw-border-t-0 tw-border-r-0 tw-rounded-bl-lg`}
                    />
                  </div>
                )}

                <div className="md:lg:tw-flex tw-flex-col md:lg:tw-justify-center sm:tw-grid-cols-2 tw-flex-wrap tw-w-full xl:tw-w-[80%] tw-max-w-[79rem]">
                  {Array.from(displayedLabs.values()).length === 0 ? (
                    <p className="tw-text-center tw-w-full tw-my-12 tw-font-poppins">
                      No labs to display. Try different search options!
                    </p>
                  ) : (
                    Array.from(displayedLabs.entries())
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
                                  '',
                                  labInfo.id - 1,
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                  )}
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
        buttonLabel={'Your Account'}
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
