import React from "react";
import PropTypes from "prop-types";
import UserPfp from "src/components/all-components/UserPfp";

const ProfileHeader = (props) => {
  const { user } = props;

  return (
    <div className="tw-w-screen tw-bg-primary-blue xs:tw-h-[15rem] md:tw-h-[20rem] tw-flex tw-flex-row tw-align-middle tw-relative">
      {user && (
        <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-center">
          <div
            className="tw-bg-white tw-w-full tw-h-[50%] tw-z-0
              tw-border-t-0 tw-border-r-0 tw-border-b-[1rem] tw-border-solid tw-border-primary-yellow
              tw-border-l-0"
          >
            <div
              className={
                "tw-flex tw-flex-row tw-items-center tw-justify-between"
              }
            >
              <div className="tw-rounded-full">
                <div
                  className="
                      xs:tw-h-[7rem] xs:tw-w-[7rem]
                      md:tw-h-[10rem] md:tw-w-[10rem] xs:tw-border-[0.5rem]
                      tw-rounded-full tw-border-solid xs:tw-mx-[2rem] md:tw-mx-[4rem]
                      tw-border-primary-yellow tw-z-[1rem] tw-flex tw-flex-row tw-overflow-hidden"
                >
                  <UserPfp />
                </div>
              </div>
              <div className={"tw-w-full tw-h-full tw-flex tw-items-center "}>
                <p
                  className={
                    "xs:tw-text-xl md:tw-text-4xl tw-font-poppins tw-title tw-mx-10 tw-text-left"
                  }
                >
                  {user.firstname} {user.lastinitial}.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastinitial: PropTypes.string,
    userpfp: PropTypes.string,
  }),
};

export default ProfileHeader;
