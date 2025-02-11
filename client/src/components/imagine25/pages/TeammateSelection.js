import React, { useEffect, useState } from "react";
import Avatar from "avataaars";
import "./avatarSelection.css";
import { Frame } from "../components/Frame";
import useMainStateContext from "src/reducers/MainContext";
import ImagineService from "src/services/ImagineService";

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
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  const [avatarSelected, setAvatarSelected] = useState();

  const nextOnClick = async () => {
    await ImagineService.postTeammateSelection(
      "2",
      avatars[avatarSelected],
      25,
    );
  };

  return (
    <>
      <h3>Select Your Teammate!</h3>
      {Frame(
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
                  className="xs:tw-h-[100px] xs:tw-w-[100px] sm:tw-h-[100px] sm:tw-w-[100px] md:tw-h-[125px] md:tw-w-[125px] lg:tw-h-[150px] lg:tw-w-[150px] transformAvatar"
                />
              </div>
            );
          })}
        </div>,
        nextOnClick,
      )}
    </>
  );
};

export default TeammateSelection;
