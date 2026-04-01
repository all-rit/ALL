import React, { useEffect, useState } from "react";
import LabGeneration from "../lab/LabGeneration";
import useMainStateContext from "@/reducers/MainContext";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

const Labs = (props) => {
  const { actions, state } = useMainStateContext();

  const [currentHeader, setCurrentHeader] = useState("Not Started");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [labProgress, setLabProgress] = useState("NOT_STARTED");
  const [displayedLabs, setDisplayedLabs] = useState(props.toDoLabs);

  useEffect(() => {
    setDisplayedLabs(props.toDoLabs);
  }, [props.toDoLabs]);

  const displayNotStartedLabs = () => {
    setCurrentHeader("Not Started");
    setLabProgress("NOT_STARTED");
    setSearchSubmitted(false);
    setDisplayedLabs(props.toDoLabs || []);
  };

  const displayInProgressLabs = () => {
    setCurrentHeader("In Progress");
    setLabProgress("IN_PROGRESS");
    setSearchSubmitted(false);
    setDisplayedLabs(props.inProgressLabs || []);
  };

  const displayCompletedLabs = () => {
    setCurrentHeader("Completed");
    setLabProgress("COMPLETED");
    setSearchSubmitted(false);
    setDisplayedLabs(props.completedLabs || []);
  };

  const searchLabs = (e) => {
    e.preventDefault();
    let searchResults = {
      notStarted: [],
      inProgress: [],
      completed: [],
    };

    (props.toDoLabs || []).forEach((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.notStarted.push(lab);
      }
    });

    (props.inProgressLabs || []).forEach((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.inProgress.push(lab);
      }
    });

    (props.completedLabs || []).forEach((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.completed.push(lab);
      }
    });
    setSearchResults(searchResults);
    setSearchSubmitted(true);
    setCurrentHeader("Search Results");
  };

  return (
    <>
      {state.main.user && props.labRecords && (
        <>
          <ul className="tw-flex tw-flex-col">
            <div
              className=" tw-border-solid tw-border-r-[1rem] tw-border-t-[4rem] tw-border-primary-yellow
                  tw-bg-primary-yellow tw-border-l-0 tw-border-b-0"
            >
              <div
                className={
                  "tw-h-full tw-border-solid tw-border-r-[0.75rem] tw-border-t-[0.75rem] tw-border-primary-blue " +
                  "tw-bg-white tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
                }
              >
                <div
                  id="MyLabs"
                  className={"tw-font-poppins tw-title tw-my-[1rem]"}
                >
                  My Labs
                </div>
                <div
                  className={
                    "tw-w-full tw-h-[3rem] tw-flex tw-flex-row tw-justify-center tw-m-5 tw-items-center"
                  }
                >
                  <Input
                    className={"tw-w-1/2 tw-font-poppins"}
                    placeholder={"Search"}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  ></Input>
                  <button
                    className={
                      "tw-w-[1.5rem] tw-h-[1.5rem] tw-border-0 tw-mx-2"
                    }
                    onClick={(e) => searchLabs(e)}
                    style={{
                      backgroundImage:
                        "url(https://www.svgrepo.com/show/127033/magnifying-glass.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "transparent",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></button>
                </div>

                <div
                  className={"tw-flex tw-flex-row tw-justify-center tw-w-full"}
                >
                  <button
                    className={
                      "btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-lg tw-m-3"
                    }
                    onClick={displayNotStartedLabs}
                  >
                    Not Started
                  </button>
                  <button
                    className={
                      "btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-lg tw-m-3"
                    }
                    onClick={displayInProgressLabs}
                  >
                    In Progress
                  </button>
                  <button
                    className={
                      "btn tw-bg-secondary-gray tw-shadow-md hover:tw-bg-primary-yellow hover:tw-shadow-lg tw-m-3"
                    }
                    onClick={displayCompletedLabs}
                  >
                    Completed
                  </button>
                </div>
                <h1 className={"tw-title tw-mt-5"}>{currentHeader}</h1>
                <div className={"tw-p-6 tw-w-full"}>
                  {searchSubmitted ? (
                    <div>
                      <LabGeneration
                        actions={actions}
                        progressState="NOT_STARTED"
                        labids={searchResults.notStarted}
                        search={true}
                      />
                      <LabGeneration
                        actions={actions}
                        progressState="IN_PROGRESS"
                        labRecords={searchResults.inProgress}
                        search={true}
                      />
                      <LabGeneration
                        actions={actions}
                        progressState="COMPLETED"
                        labRecords={searchResults.completed}
                        search={true}
                      />
                    </div>
                  ) : (
                    <LabGeneration
                      actions={actions}
                      progressState={labProgress}
                      labids={labProgress === "NOT_STARTED" && displayedLabs}
                      labRecords={
                        labProgress !== "NOT_STARTED" && displayedLabs
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </ul>
        </>
      )}
    </>
  );
};

Labs.propTypes = {
  labRecords: PropTypes.array,
  toDoLabs: PropTypes.array,
  inProgressLabs: PropTypes.array,
  completedLabs: PropTypes.array,
};

export default Labs;
