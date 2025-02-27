import React from "react";
import Avatar from "avataaars";
import "./avatarSelection.css";
import { Frame } from "../components/Frame";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import { ERROR } from "src/constants/notifications";

const AvatarSelection = (props) => {
  //snackbar
  const { actions } = useMainStateContext();

  //only move to next page if user has selected their avatar
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
      <h3 className={"tw-title tw-py-3]"}>Select Your {props.title}</h3>
      <div className={"tw-flex tw-justify-center"}>
        <hr className={"tw-w-3/5 tw-bg-labLightGray"} />
      </div>

      {Frame(
        <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center tw-my-10">
          {props.avatars.map((avatar, index) => {
            const avatarSelected =
              index == props.avatarSelected
                ? " tw-border-t-[#FFC335] tw-border-l-[#FFC335] tw-border-b-[#0045D5] tw-border-r-[#0045D5]"
                : "";
            //div class wrapper needed for clicking functionality
            return (
              <div
                key={index}
                onClick={() => props.setAvatarSelected(index)}
                className={
                  "hover:tw-cursor-pointer tw-rounded-full transformAvatar xs:tw-h-[135px] xs:tw-w-[135px] sm:tw-h-[135px] sm:tw-w-[135px] md:tw-h-[160px] md:tw-w-[160px] lg:tw-h-[185px] lg:tw-w-[185px] border border-4 border-white" +
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
