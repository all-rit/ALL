import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";

const InstructingGroups = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;
  const [instructingGroups, setInstructingGroups] = useState([]);
  const [instrGroupsUpdated, setInstrGroupsUpdated] = useState(false);
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
        " tw-border-solid tw-border-r-[1rem] tw-border-t-[1rem] tw-border-primary-yellow tw-bg-primary-yellow tw-border-l-0 tw-border-b-0"
      }
    >
      <div
        className={
          "tw-h-full tw-border-solid tw-border-r-[0.5rem] tw-border-t-[0.5rem] tw-border-primary-blue tw-bg-white tw-border-l-0 tw-border-b-0 tw-rounded-tr-xl"
        }
      >
        <div className="header_with_button">
          <h4 className={"tw-title-styling-name tw-poppins tw-text-2xl"}>
            View Your Instructor Groups
          </h4>
        </div>
        <div className="tw-flex tw-w-full tw-m-5 tw-flex-row tw-justify-between">
          {instructingGroups.length === 0 ? (
            <p> You currently do not have any groups you are instructing.</p>
          ) : (
            <div
              className={
                "tw-w-3/4 tw-grid tw-grid-cols-3 tw-gap-3 lg:tw-min-h-[20rem]"
              }
            >
              {instructingGroups.map((group, index) => {
                return (
                  <EnrolledGroupCard
                    key={index}
                    instructing={true}
                    group={group}
                    instructorID={user.userid}
                    setInstrGroupsUpdated={setInstrGroupsUpdated}
                  />
                );
              })}
            </div>
          )}
          <div className={"tw-m-5 tw-text-left tw-w-1/4"}>
            <p className={"tw-font-poppins tw-title-styling-name tw-text-2xl"}>
              {" "}
              Want to start a new group?{" "}
            </p>
            <p className={"tw-font-calibri tw-pb-2"}>
              {" "}
              Click below to get started.{" "}
            </p>
            <AddModal
              addMode={"add_instr_grp"}
              user={user}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
            />
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
};

export default InstructingGroups;
