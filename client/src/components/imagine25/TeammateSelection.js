import React, { useState } from "react";
import Avatar from "avataaars";
import "./teammateSelection.css";

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
  const [avatarSelected, setAvatarSelected] = useState();

  return (
    <>
      <h3>Select Your Teammate!</h3>
      <div className="tw-grid tw-grid-rows-2 tw-grid-flow-col tw-gap-10 justify-content-center my-4">
        {avatars.map((avatar, index) => {
          //div class wrapper needed for clicking functionality
          const avatarStyle =
            index == avatarSelected ? "Circle" : "Transparent";
          return (
            <div key={index} onClick={() => setAvatarSelected(index)}>
              <Avatar
                topType={avatar.hairStyle}
                hairColor={avatar.hairColor}
                clotheColor={avatar.shirtColor}
                skinColor={avatar.skinColor}
                avatarStyle={avatarStyle}
                clotheType="ShirtCrewNeck"
                className="xs:tw-h-[125px] xs:tw-w-[125px] sm:tw-h-[150px] sm:tw-w-[150px] md:tw-h-[175px] md:tw-w-[175px] lg:tw-h-[200px] lg:tw-w-[200px] transformAvatar"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeammateSelection;
