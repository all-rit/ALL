import React from "react";
import Avatar from "avataaars";

import "./style.css";

//array that will dicate avatars displayed
const avatars = [
  {
    hairStyle: "ShortHairShortCurly",
    hairColor: "Black",
    shirtColor: "Gray01",
    skinColor: "Light",
  },
  {
    hairStyle: "LongHairCurly",
    hairColor: "Blonde",
    shirtColor: "Black",
    skinColor: "Brown",
  },
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Blue",
    shirtColor: "PastelYellow",
    skinColor: "DarkBrown",
  },
  {
    hairStyle: "LongHairStraight",
    hairColor: "Red",
    shirtColor: "Pink",
    skinColor: "Black",
  },
];

const TeammateSelection = () => {
  return (
    <>
      <h3>Select Your Teammate!</h3>
      <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center my-4">
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            topType={avatar.hairStyle}
            hairColor={avatar.hairColor}
            clotheColor={avatar.shirtColor}
            skinColor={avatar.skinColor}
            clotheType="ShirtCrewNeck"
            className="tw-transition-all tw-duration-500 tw-ease-in-out tw-transform hover:tw-w-[375px] hover:tw-h-[375px]"
          />
        ))}
      </div>
    </>
  );
};

export default TeammateSelection;
