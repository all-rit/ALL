import React, { useEffect, useState } from "react";
import { navigate, Router } from "@reach/router";
import AvatarCreation from "./pages/AvatarCreation";
import UpdateId from "./UpdateId";
import AvatarSelection from "./components/AvatarSelection";
import ImagineService from "src/services/ImagineService";
import useMainStateContext from "src/reducers/MainContext";
import Survey from "../all-components/imagine-components/SurveyHandlerComp";
import {
  opponentAvatars,
  teammateAvatars,
} from "src/constants/imagine25/Avatar";

//Generates random arrays using Fisher-Yates algorithim
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
/*Note this is not in the main fuction as
we do not want the user to have a radnom array
each time they go back and forth between pages.*/
shuffleArray(teammateAvatars);
shuffleArray(opponentAvatars);

const Main = () => {
  //Removes header
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  /*All avatars states are held in main so
  changes are held persitently throughout
  page navigation*/
  const [userAvatar, setUserAvatar] = useState({
    hairStyle: "",
    hairColor: "",
    shirtColor: "",
    skinColor: "",
  });

  const [teammteAvatarSelected, setTeammateAvatarSelected] = useState();

  const [opponentAvatarSelected, setOpponentAvatarSelected] = useState();
  const year = 25;
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
            "tw-absolute tw-top-[15%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[100%] shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router>
            <UpdateId default path={"/"} />
            <AvatarCreation
              path={"/AvatarCreation"}
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
            />
            <AvatarSelection
              avatars={teammateAvatars}
              imagineService={ImagineService.postTeammateSelection}
              title={"Teammate"}
              nextNavigation={() => navigate("/Imagine2025/OpponentSelection")}
              prevNavigation={() => navigate("/Imagine2025/AvatarCreation")}
              avatarSelected={teammteAvatarSelected}
              setAvatarSelected={setTeammateAvatarSelected}
              path={"/TeammateSelection"}
            />
            <AvatarSelection
              avatars={opponentAvatars}
              imagineService={ImagineService.postOpponentSelection}
              title={"Opponent"}
              nextNavigation={() => alert("no navigation implemented ;)")}
              prevNavigation={() => navigate("/Imagine2025/TeammateSelection")}
              avatarSelected={opponentAvatarSelected}
              setAvatarSelected={setOpponentAvatarSelected}
              path={"/OpponentSelection"}
            />
            <Survey
              className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
              path={`/PreSurvey`}
              type={"pre"}
              year={year}
              userID={sessionStorage.getItem("userID")}
            />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
