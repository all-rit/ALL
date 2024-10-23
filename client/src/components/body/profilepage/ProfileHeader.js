import React from "react";
import PropTypes from "prop-types";

const ProfileHeader = (props) => {
  const { user } = props;

  console.log(user?.userpfp);

  return (
    <div className="tw-w-screen tw-bg-primary-blue xs:tw-h-[15rem] lg:tw-h-[30rem] tw-flex tw-flex-row tw-align-middle tw-relative">
      {user && (
        <div className="tw-h-full tw-w-full tw-flex tw-flex-row tw-align-middle tw-justify-end">
          <div
            className="tw-bg-white tw-w-5/6 tw-h-[50%] tw-absolute xs:tw-top-[25%] md:tw-top-[30%] lg:tw-top-[22%] tw-z-0
              tw-border-t-0 tw-border-r-0 tw-border-b-[1rem] tw-border-solid tw-border-primary-yellow
              tw-flex tw-flex-col tw-justify-center"
          >
            <div className={"tw-w-full tw-h-full tw-relative"}>
              <p
                className={
                  "xs:tw-text-xl md:tw-text-5xl tw-font-poppins tw-title-styling-name tw-absolute xs:tw-left-[40%] md:tw-left-[25%] lg:tw-left-[20%] md:tw-top-[20%] xs:tw-top-[40%] lg:tw-top-[40%]"
                }
              >
                {user.firstname} {user.lastinitial}.
              </p>
            </div>
          </div>
          <div className="tw-absolute tw-rounded-full tw-left-0 xs:tw-top-[20%] md:tw-top-[12%] lg:tw-top-12">
            <div
              className="
                xs:tw-h-[10rem] xs:tw-w-[10rem] xs:tw-border-[0.5rem]
                md:tw-h-[12rem] md:tw-w-[12rem]
                lg:tw-h-[22rem] lg:tw-w-[22rem] tw-rounded-full
                        tw-border-solid md:tw-border-[1rem]
                        tw-border-primary-blue tw-z-[1rem] tw-flex tw-flex-row tw-align-middle tw-overflow-hidden"
            >
              <img
                src={user?.userpfp}
                alt={`${user.firstname}'s profile`}
                className="tw-w-full tw-h-full tw-object-cover"
                loading="eager"
                style={{
                  imageRendering: "auto",
                  WebkitBackfaceVisibility: "hidden",
                  MozBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              />
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
