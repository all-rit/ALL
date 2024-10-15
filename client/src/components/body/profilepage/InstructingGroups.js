import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AddModal from "./components/AddModal";
import EnrolledGroupCard from "./components/EnrolledGroupCard";
import PropTypes from "prop-types";

const InstructingGroups = (props) => {
  const { user } = props;
  const [instructingGroups, setInstructingGroups] = useState([]);
  const [instrGroupsUpdated, setInstrGroupsUpdated] = useState(false);
  useEffect(() => {
    if (user) {
      UserService.getUserInstructingGroups(user.userid).then((data) => {
        console.warn(data);
        setInstructingGroups(data);
        setInstrGroupsUpdated(false);
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
          <h4 className={"tw-title-styling-name tw-poppins"}>
            View Your Instructor Groups
          </h4>
          <AddModal
            addMode={"add_instr_grp"}
            user={props.user}
            setInstrGroupsUpdated={setInstrGroupsUpdated}
          />
        </div>
        <div className="tw-flex tw-w-full">
          {instructingGroups.length === 0 ? (
            <p> You currently do not have any groups you are instructing.</p>
          ) : (
            <div
              className={
                "tw-p-5 tw-w-3/4 tw-grid tw-grid-cols-3 lg:tw-min-h-[20rem]"
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
