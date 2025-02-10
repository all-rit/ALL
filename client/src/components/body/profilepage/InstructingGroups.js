import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";

const InstructingGroups = (props) => {
  const { state } = useMainStateContext();
  const { setGroupsUpdated, instrGroupsUpdated, setInstrGroupsUpdated } = props;
  const user = state.main.user;
  const [instructingGroups, setInstructingGroups] = useState([]);
  useEffect(() => {
    if (user) {
      UserService.getUserInstructingGroups(user.userid).then((data) => {
        setInstructingGroups(data);
      });
    }
  }, [user, instrGroupsUpdated]);

  return (
    <div
      className={
        " tw-border-solid tw-border-r-[1rem] tw-border-t-[4rem] tw-border-primary-yellow tw-bg-primary-yellow tw-border-l-0 tw-border-b-0 tw-mb-[2rem]"
      }
    >
      <div
        className={
          "tw-h-full tw-border-solid tw-border-r-[0.75rem] tw-border-t-[0.75rem] tw-border-primary-blue tw-bg-white tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
        }
      >
        <div className="">
          <h4
            className={
              "tw-title tw-text-left tw-poppins tw-text-2xl tw-px-[2rem] tw-py-[1rem]"
            }
          >
            View Your Instructor Groups
          </h4>
        </div>
        <div className="tw-flex xs:tw-flex-col md:tw-flex-row tw-justify-between tw-px-[3rem]">
          {instructingGroups.length === 0 ? (
            <p> You currently do not have any groups you are instructing.</p>
          ) : (
            <div
              className={
                "tw-w-3/4 xs:tw-flex xs:tw-flex-col md:tw-grid md:tw-grid-cols-3 tw-gap-3 lg:tw-min-h-[20rem]"
              }
            >
              {instructingGroups.map((group, index) => {
                return (
                  <EnrolledGroupCard
                    key={index}
                    instructing={true}
                    group={group}
                    instructorID={user.userid}
                    setGroupsUpdated={setGroupsUpdated}
                    setInstrGroupsUpdated={setInstrGroupsUpdated}
                  />
                );
              })}
            </div>
          )}
          <div
            className={
              "tw-flex tw-flex-col tw-my-5 tw-text-left xs:tw-w-3/4 md:tw-w-1/4 tw-gap-y-2"
            }
          >
            <p className={"tw-font-poppins tw-title tw-text-xl"}>
              {" "}
              Want to start a new group?{" "}
            </p>
            <p className={"tw-body-text tw-pb-2"}>
              {" "}
              Click below to get started.{" "}
            </p>
            <div className={"tw-ml-2"}>
              <AddModal
                addMode={"add_instr_grp"}
                user={user}
                setInstrGroupsUpdated={setInstrGroupsUpdated}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InstructingGroups.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.number,
  }),
  setGroupsUpdated: PropTypes.func,
  instrGroupsUpdated: PropTypes.bool,
  setInstrGroupsUpdated: PropTypes.func,
};

export default InstructingGroups;
