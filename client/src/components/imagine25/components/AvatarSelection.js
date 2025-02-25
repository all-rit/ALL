import React from "react";
import Avatar from "avataaars";
import "./avatarSelection.css";
import { Frame } from "../components/Frame";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import { ERROR } from "src/constants/notifications";

const AvatarSelection = (props) => {
  const { actions } = useMainStateContext();
  const nextOnClick = async () => {
    if (props.avatarSelected != null) {
      props.nextNavigation();
      await props.imagineService("1", props.avatars[props.avatarSelected], 25);
      return;
    }
    actions.showSnackbar("Please select your " + props.title, ERROR);
  };

  return (
    <>
      <h3 className={"tw-title tw-py-3"}>Select Your {props.title}</h3>
      <div className={"tw-flex tw-justify-center"}>
        <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
      </div>
      {Frame(
        <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center my-4">
          {props.avatars.map((avatar, index) => {
            //div class wrapper needed for clicking functionality
            const avatarSelected =
              index == props.avatarSelected ? " tw-bg-[#68D7FF]" : "";
            return (
              <div
                key={index}
                onClick={() => props.setAvatarSelected(index)}
                className={
                  "hover:tw-cursor-pointer tw-rounded-full transformAvatar xs:tw-h-[125px] xs:tw-w-[125px] sm:tw-h-[125px] sm:tw-w-[125px] md:tw-h-[150px] md:tw-w-[150px] lg:tw-h-[175px] lg:tw-w-[175px]" +
                  avatarSelected
                }
              >
                <Avatar
                  topType={avatar.hairStyle}
                  hairColor={avatar.hairColor}
                  clotheColor={avatar.shirtColor}
                  skinColor={avatar.skinColor}
                  clotheType="ShirtCrewNeck"
                  className="xs:tw-h-[100px] xs:tw-w-[100px] sm:tw-h-[100px] sm:tw-w-[100px] md:tw-h-[125px] md:tw-w-[125px] lg:tw-h-[150px] lg:tw-w-[150px]"
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
