import React from "react";
import Avatar from "avataaars";
import "./avatarSelection.css";
import { Frame } from "../components/Frame";
import PropTypes from "prop-types";

const AvatarSelection = (props) => {
  const nextOnClick = async () => {
    props.nextNavigation();
    await props.imagineService(
      sessionStorage.getItem("userID"),
      props.avatars[props.avatarSelected],
      25,
    );
  };

  return (
    <>
      <h3>Select Your {props.title}!</h3>
      {Frame(
        <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center my-4">
          {props.avatars.map((avatar, index) => {
            //div class wrapper needed for clicking functionality
            const avatarStyle =
              index == props.avatarSelected ? "Circle" : "Transparent";
            return (
              <div key={index} onClick={() => props.setAvatarSelected(index)}>
                <Avatar
                  topType={avatar.hairStyle}
                  hairColor={avatar.hairColor}
                  clotheColor={avatar.shirtColor}
                  skinColor={avatar.skinColor}
                  avatarStyle={avatarStyle}
                  clotheType="ShirtCrewNeck"
                  className="xs:tw-h-[100px] xs:tw-w-[100px] sm:tw-h-[100px] sm:tw-w-[100px] md:tw-h-[125px] md:tw-w-[125px] lg:tw-h-[150px] lg:tw-w-[150px] transformAvatar"
                />
              </div>
            );
          })}
        </div>,
        nextOnClick,
        props.prevNavigation,
      )}
    </>
  );
};

AvatarSelection.propTypes = {
  title: PropTypes.string.isRequired,
  avatars: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagineService: PropTypes.func.isRequired,
  nextNavigation: PropTypes.func,
  prevNavigation: PropTypes.func,
  avatarSelected: PropTypes.number.isRequired,
  setAvatarSelected: PropTypes.func.isRequired,
};

export default AvatarSelection;
