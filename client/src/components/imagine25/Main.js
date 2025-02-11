import React from "react";
import { Router } from "@reach/router";
import AvatarCreation from "./pages/AvatarCreation";
import UpdateId from "./UpdateId";
import AvatarSelection from "./components/AvatarSelection";
import ImagineService from "src/services/ImagineService";

const teammateAvatars = [
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

const opponentAvatars = [
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

const Main = () => {
  return (
    <>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[40rem] tw-gap-y-6 tw-pl-6"
          }
        >
          <div
            className={
              "tw-row-span-3 tw-col-span-8 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
            }
          />
          <div
            className={
              "tw-row-span-5 tw-col-span-8 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
            }
          />
        </div>
        <div
          className={
            "tw-absolute tw-top-[15%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[80%] shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router>
            <UpdateId default path={"/"} />
            <AvatarCreation path={"/AvatarCreation"} />
            <AvatarSelection
              avatars={teammateAvatars}
              nextOnClick={ImagineService.postTeammateSelection}
              title={"Teammate"}
              path={"/TeammateSelection"}
            />
            <AvatarSelection
              avatars={opponentAvatars}
              nextOnClick={ImagineService.postOpponenetSelection}
              title={"Opponent"}
              path={"/OpponentSelection"}
            />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
