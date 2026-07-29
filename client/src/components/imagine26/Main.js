import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import UpdateId from "./UpdateId";
import Done from "./Done";
import ImagineService from "src/services/ImagineService";
import useMainStateContext from "src/reducers/MainContext";
import Survey from "../all-components/imagine-components/SurveyHandlerComp";
import GalagaInstructions from "./pages/GalagaInstruction";
import Galaga from "./pages/Game";
import "./main.css";
import { Imagine26Provider } from "src/reducers/imagine/imagine26Context";
import UserProfilePicture from "./pages/UserProfilePicture";
import PHDConsentForm from "./pages/PHDConsentForm";
import ChatRoom from "./pages/ChatRoom";
import ReadingSection from "./pages/ReadingSection";

const Main = () => {
  const userID = sessionStorage.getItem("userID");

  const [canContinue, setCanContinue] = useState(true);
  const [, setPhdConsent] = useState(false);

  // user has to wait 10 seconds before allowing the next person to play
  useEffect(() => {
    if (!canContinue) {
      const timer = setTimeout(() => {
        setCanContinue(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [canContinue]);

  //Removes header
  const { actions } = useMainStateContext();
  const startImagine = () => actions.setIsImagine(true);
  useEffect(() => {
    startImagine();
  }, []);

  //After each iteration, clear the use-states
  const clearInstance = () => {
    setCanContinue(false);
  };

  const year = 26;

  // current user number
  const [userNumber, setUserNumber] = useState(1);

  useEffect(() => {
    const fetchUser = async () => {
      if (userID != null) {
        const user = await ImagineService.getUserByID(userID, 26);
        setUserNumber(user?.id);
      }
    };

    fetchUser();
  }, [userID]);

  return (
    <>
      <Imagine26Provider>
        <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
          <div
            className={
              "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[45rem] tw-gap-y-6 tw-pl-6 tw-absolute tw-top-0"
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
              "tw-absolute tw-z-10 tw-top-[-4rem] tw-bg-white tw-left-[12.5%] tw-w-3/4 tw-h-4/5 shadow tw-rounded-xl tw-p-6 tw-min-h-[40rem]"
            }
          >
            <Router
              className={
                "tw-flex tw-h-full tw-w-full tw-overflow-y-scroll tw-flex-col tw-justify-center"
              }
            >
              <UpdateId default path={"/"} canContinue={canContinue} />
              <PHDConsentForm
                path={"/PHDConsentForm"}
                setConsent={setPhdConsent}
              />
              <Survey
                className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
                path={`/PreSurvey`}
                type={"pre"}
                year={year}
                userID={userID || ""}
              />
              <UserProfilePicture path="/UserProfilePicture" />
              <GalagaInstructions path={"/GalagaInstructions"} />
              <Galaga path={"/Galaga"} />
              <ChatRoom path={"/ChatRoom"}></ChatRoom>
              <ReadingSection path={"/ReadingSection"} />
              <Survey
                className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
                path={`/PostSurvey`}
                type={"post"}
                year={year}
                userID={userID || ""}
              />
              <Done path={"/Done"} resetInstance={clearInstance} />
            </Router>
            <div className="tw-body-text tw-text-[2rem] tw-absolute tw-right-[-9rem] tw-top-5">
              User Id: {userNumber || "None"}
            </div>
          </div>
        </div>
      </Imagine26Provider>
    </>
  );
};

export default Main;
