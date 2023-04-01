/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "../../../../../../src/assets/stylesheets/components/PawPrintProfile.scss";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab9";
import Avatar from "avataaars";

const Profile = (props) => {
  const { data, actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleNavigate = () => {
    navigate("/Lab9/Exercise/Feed");
  };

  return (
    <div>
      <div className="profile-div">
        <div className="smaller-profile-div">
          <span className="inside-profile">
            {data && (
              <Avatar
                alt={"user avatar"}
                className={"profile-image tw-rounded-3xl"}
                avatarStyle="Square"
                topType={data.avatarAttributes.topType}
                accessoriesType={data.avatarAttributes.accessoriesType}
                hairColor={data.avatarAttributes.hairColor}
                facialHairType={data.avatarAttributes.facialHairType}
                clotheType={data.avatarAttributes.clotheType}
                clotheColor={data.avatarAttributes.clotheColor}
                eyeType={data.avatarAttributes.eyeType}
                eyebrowType={data.avatarAttributes.eyebrowType}
                mouthType={data.avatarAttributes.mouthType}
                skinColor={data.avatarAttributes.skinColor}
              />
            )}
            <div className="profile-info guidance">
              <h1 className="tw-font-bold tw">User Profile</h1>
              <p className="tw-font-semibold tw-mt-2 tw-text-xl">
                You are from this point “User 812”. You are someone who has
                grown up on a farm, and has a diverse selection of animals that
                you continuously post about.
              </p>
            </div>
          </span>
        </div>
      </div>
      <div className="tw-mt-10">
        <span className="tw-w-full tw-h-20 tw-justify-items-center">
          <Button
            className="view-profile-btn"
            onClick={handleNavigate}
            key="start"
          >
            View Feed
          </Button>
        </span>
      </div>
    </div>
  );
};
export default Profile;
