import React from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { convertAvatarToDicebear } from "../../../all-components/convertAvatarToDicebear";
import PropTypes from "prop-types";

const AvatarSelection = (props) => {
  return (
    <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center tw-my-10">
      {props.avatars.map((avatar, index) => {
        // keeping this here in case - hover:tw-brightness-75 tw-transition tw-duration-300
        const avatarSelected =
          index == props.avatarSelected
            ? "tw-border-t-[#FFC335] tw-border-l-[#FFC335] tw-border-b-[#0045D5] tw-border-r-[#0045D5] "
            : "tw-transition-all tw-duration-200 hover:tw-brightness-75 hover:tw-blur-0 hover:tw-contrast-100 hover:tw-grayscale-0 hover:tw-hue-rotate-0 hover:tw-invert-0 hover:tw-saturate-100 hover:tw-sepia-0 hover:tw-drop-shadow-none hover:tw-border-[blue]";
        //div class wrapper needed for clicking functionality
        return (
          <div
            key={index}
            onClick={() => props.setAvatarSelected(index)}
            className={
              "hover:tw-cursor-pointer tw-rounded-full xs:tw-h-[135px] xs:tw-w-[135px] sm:tw-h-[135px] sm:tw-w-[135px] md:tw-h-[160px] md:tw-w-[160px] lg:tw-h-[185px] lg:tw-w-[185px] border border-4 border-white " +
              avatarSelected
            }
          >
            <img
              src={convertAvatarToDicebear({
                topType: avatar.hairStyle,
                hairColor: avatar.hairColor,
                clotheColor: avatar.clotheColor,
                skinColor: avatar.skinColor,
                clotheType: "ShirtCrewNeck",
              })}
              alt="Avatar"
              className="xs:tw-h-[100px] xs:tw-w-[100px] sm:tw-h-[100px] sm:tw-w-[100px] md:tw-h-[125px] md:tw-w-[125px] lg:tw-h-[150px] lg:tw-w-[150px]"
            />
          </div>
        );
      })}
    </div>
  );
};

AvatarSelection.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.object).isRequired,
  avatarSelected: PropTypes.number,
  setAvatarSelected: PropTypes.func.isRequired,
};

export default AvatarSelection;
