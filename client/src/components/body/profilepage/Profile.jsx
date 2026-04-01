import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import InstructingGroups from "./InstructingGroups";
import Labs from "./Labs";
import UserService from "@/services/UserService";
import UserLabService from "@/services/UserLabService";
import EnrolledGroups from "./EnrolledGroups";
import useMainStateContext from "@/reducers/MainContext";
import BrandedALLModal from "../../all-components/BrandedALLModal";
import LoginBody from "../login/LoginBody";

const Profile = () => {
  const { state } = useMainStateContext();
  // toDoLabs is only the assigned labs that the user hasn't made any progress in
  const [toDoLabs, setToDoLabs] = useState(null);
  // labRecords is fetching all the records for the labs that the user has made progress in
  const [labRecords, setLabRecords] = useState(null);
  const [groupsUpdated, setGroupsUpdated] = useState(false);
  const [instrGroupsUpdated, setInstrGroupsUpdated] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const inProgressLabs = [];
  const completedLabs = [];
  const user = state.main.user;
  const getUserLabs = async () => {
    if (user) {
      try {
        const toDo = await UserService.getUserToDoLabs(user.userid);
        setToDoLabs(toDo);
        const records = await UserLabService.getUserLabRecords(user.userid);
        setLabRecords(records);
      } catch (error) {
        console.error("Could not get labs", error);
      }
    }
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  useEffect(() => {
    if (!user) {
      setTimeout(function () {
        toggleLoginModal();
      }, 2000);
    } else {
      getUserLabs();
    }
  }, [user]);

  useEffect(() => {
    // We should perform scroll operations once we know data is succesfully loaded
    // meaning the child DOM elements have had an opportunity to render themselves
    const hash = window.location.hash.slice(1);
    if (hash) {
      let element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [labRecords]);

  // go through the lab records fetched from the database and categorize if
  // the lab has been completed by the user or still in progress
  if (labRecords) {
    labRecords.forEach((rec) => {
      if (rec.labcompletiontime) {
        completedLabs.push(rec);
      } else {
        inProgressLabs.push(rec);
      }
    });
  }

  return (
    <div className={"tw-overflow-x-hidden"}>
      {state.main.user?.firstname === null ? (
        <div
          className={
            "tw-pt-24 tw-flex tw-items-center tw-justify-center tw-h-[30rem]"
          }
        >
          <div
            className={
              "tw-bg-primary-blue tw-shadow-lg tw-rounded-lg tw-p-6 tw-m-6"
            }
          >
            <div>
              <p className={"tw-text-white tw-title"}>
                You are currently not logged in.
              </p>
              <p className={"tw-body-text tw-text-white tw-py-3"}>
                Please sign in to experience the user profile.
              </p>
            </div>
          </div>
          <BrandedALLModal
            isOpen={loginModalOpen}
            toggle={toggleLoginModal}
            direction={"row"}
          >
            <LoginBody />
          </BrandedALLModal>
        </div>
      ) : (
        <div className="md:tw-pt-[3rem] tw-w-full">
          <ProfileHeader
            user={user}
            labRecords={labRecords}
            toDoLabs={toDoLabs}
          />
          <br />
          <br />
          <Labs
            labRecords={labRecords}
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
          />
          <br />
          <br />
          <EnrolledGroups
            user={state.main.user}
            labRecords={labRecords}
            inProgressLabs={inProgressLabs}
            toDoLabs={toDoLabs}
            completedLabs={completedLabs}
            groupsUpdated={groupsUpdated}
            setGroupsUpdated={setGroupsUpdated}
          />
          <br />
          <InstructingGroups
            user={state.main.user}
            setGroupsUpdated={setGroupsUpdated}
            instrGroupsUpdated={instrGroupsUpdated}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
