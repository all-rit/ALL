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
    shirtColor: "Pink",
    skinColor: "DarkBrown",
  },
  {
    hairStyle: "ShortHairShortFlat",
    hairColor: "Blonde",
    shirtColor: "PastelYellow",
    skinColor: "Brown",
  },
  {
    hairStyle: "LongHairCurly",
    hairColor: "Red",
    shirtColor: "Blue",
    skinColor: "Light",
  },
  {
    hairStyle: "LongHairStraight",
    hairColor: "Blue",
    shirtColor: "Gray01",
    skinColor: "Black",
  },
];

const OpponentSelection = () => {
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  const [avatarSelected, setAvatarSelected] = useState();

  const nextOnClick = async () => {
    await ImagineService.postOpponenetSelection(
      "3",
      avatars[avatarSelected],
      25,
    );
  };

  return (
    <>
      <h3>Select Your Opponent!</h3>
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

export default OpponentSelection;
