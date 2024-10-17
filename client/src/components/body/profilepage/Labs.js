import React, { useState } from "react";
import LabGeneration from "../lab/LabGeneration";
import useMainStateContext from "src/reducers/MainContext";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

const Labs = (props) => {
  const { actions, state } = useMainStateContext();

  const displayNotStartedLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="NOT_STARTED"
        labids={props.toDoLabs}
      />
    );
  };

  const [search, setSearch] = useState("");
  const [displayedLabs, setDisplayedLabs] = useState(displayNotStartedLabs);

  const displayInProgressLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="IN_PROGRESS"
        labRecords={props.inProgressLabs}
      />
    );
  };

  const displayCompletedLabs = () => {
    return (
      <LabGeneration
        actions={actions}
        progressState="COMPLETED"
        labRecords={props.completedLabs}
      />
    );
  };

  const searchLabs = (e) => {
    e.preventDefault();
    let searchResults = [];
    console.log(search);
    props.toDoLabs.find((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(lab);
      }
    });
    props.inProgressLabs.find((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(lab);
      }
    });
    props.completedLabs.find((lab) => {
      if (lab.labName.toLowerCase().includes(search.toLowerCase())) {
        searchResults.push(lab);
      }
    });
    console.log(searchResults);
    const displaySearchResults = (
      <div>
        <LabGeneration
          actions={actions}
          progressState={"NOT_STARTED"}
          labRecords={searchResults}
        />
        <LabGeneration
          actions={actions}
          progressState={"IN_PROGRESS"}
          labRecords={searchResults}
        />
        <LabGeneration
          actions={actions}
          progressState={"COMPLETED"}
          labRecords={searchResults}
        />
      </div>
    );
    setDisplayedLabs(displaySearchResults);
  };

  const selectLabs = (labs) => {
    setDisplayedLabs(labs);
  };

  return (
    <>
      {state.main.user && props.labRecords && (
        <>
          <ul className="tw-flex tw-flex-col">
            <div
              className=" tw-border-solid tw-border-r-[1rem] tw-border-t-[1rem] tw-border-primary-yellow
                  tw-bg-primary-yellow tw-border-l-0 tw-border-b-0"
            >
              <div
                className={
                  "tw-h-full tw-border-solid tw-border-r-[0.5rem] tw-border-t-[0.5rem] tw-border-primary-blue " +
                  "tw-bg-white tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
                }
              >
                <div
                  className={
                    "tw-text-5xl tw-font-poppins tw-title-styling-name"
                  }
                >
                  My Labs
                </div>
                <div
                  className={
                    "tw-w-full tw-flex tw-flex-row tw-justify-center tw-m-5"
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
                    className={"tw-w-[3rem] tw-border-0"}
                    onClick={(e) => searchLabs(e)}
                    style={{
                      backgroundImage:
                        "url(https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png)",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></button>
                </div>

                <div
                  className={"tw-flex tw-flex-row tw-justify-center tw-w-full"}
                >
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayNotStartedLabs)}
                  >
                    Assigned to Me
                  </button>
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayInProgressLabs)}
                  >
                    In Progress
                  </button>
                  <button
                    className={"btn btn-primary tw-m-3"}
                    onClick={() => selectLabs(displayCompletedLabs)}
                  >
                    Completed
                  </button>
                </div>
                <div className={"tw-p-6 tw-w-full"}>{displayedLabs}</div>
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
