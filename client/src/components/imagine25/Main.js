import React, { useEffect, useState } from "react";
import { navigate, Router } from "@reach/router";
import UpdateId from "./UpdateId";
import Done from "./Done";
import AvatarSelectionPage from "./pages/AvatarSelectionPage";
import ImagineService from "src/services/ImagineService";
import useMainStateContext from "src/reducers/MainContext";
import Survey from "../all-components/imagine-components/SurveyHandlerComp";
import {
  avatarSelections,
  opponentAvatars,
  teammateAvatars,
} from "src/constants/imagine25/Avatar";
import GalagaInstructions from "./pages/GalagaInstruction";
import Galaga from "./pages/Game";
import RetentionReading from "./pages/RetentionReading";
import "./main.css";
import Quiz from "../quiz/components/QuizHandler";
import AvatarCreationPage from "./pages/AvatarCreationPage";
import RankingQuestion from "../all-components/imagine-components/Ranking";

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
  const [quizCompleted, setQuizCompleted] = useState(false);

  const userID = sessionStorage.getItem("userID");

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
    hairStyle: "Default",
    hairColor: "Default",
    clotheColor: "Default",
    skinColor: "Default",
  });

  const [teammateAvatarSelected, setTeammateAvatarSelected] = useState();
  const [opponentAvatarSelected, setOpponentAvatarSelected] = useState();
  // const [quizAnswers, setQuizAnswers] = useState();

  //After each iteration, clear the use-states
  const clearInstance = () => {
    setUserAvatar({
      hairStyle: "Default",
      hairColor: "Default",
      clotheColor: "Default",
      skinColor: "Default",
    });
    setTeammateAvatarSelected(null);
    setOpponentAvatarSelected(null);
    setQuizCompleted(false);
  };

  const year = 25;
  return (
    <>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[45rem] tw-gap-y-6 tw-pl-6"
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
            "tw-absolute tw-top-[11%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-4/5 shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router
            className={
              "tw-flex tw-h-full tw-w-full tw-overflow-y-scroll tw-flex-col tw-justify-center"
            }
          >
            <UpdateId default path={"/"} />
            <Survey
              className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
              path={`/PreSurvey`}
              type={"pre"}
              year={year}
              userID={sessionStorage.getItem("userID")}
            />
            <AvatarCreationPage
              path={"/AvatarCreation"}
              userAvatar={userAvatar}
              setUserAvatar={setUserAvatar}
              AvatarSelections={avatarSelections}
            />
            <AvatarSelectionPage
              avatars={teammateAvatars}
              imagineService={ImagineService.postTeammateSelection}
              title={"Teammate"}
              nextNavigation={() => navigate("/Imagine2025/OpponentSelection")}
              prevNavigation={() => navigate("/Imagine2025/AvatarCreation")}
              avatarSelected={teammateAvatarSelected}
              setAvatarSelected={setTeammateAvatarSelected}
              path={"/TeammateSelection"}
            />
            <AvatarSelectionPage
              avatars={opponentAvatars}
              imagineService={ImagineService.postOpponentSelection}
              title={"Opponent"}
              nextNavigation={() => navigate("/Imagine2025/GalagaInstructions")}
              prevNavigation={() => navigate("/Imagine2025/TeammateSelection")}
              avatarSelected={opponentAvatarSelected}
              setAvatarSelected={setOpponentAvatarSelected}
              path={"/OpponentSelection"}
            />
            <GalagaInstructions path={"/GalagaInstructions"} />
            <Galaga path={"/Galaga"} />
            <RetentionReading path={"/RetentionReading"} />
            <Survey
              className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
              path={`/PreSurvey`}
              type={"pre"}
              year={year}
              userID={userID}
            />
            <Survey
              className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center"
              path={`/PostSurvey`}
              type={"post"}
              year={year}
              userID={userID}
            />
            <Quiz
              path={`/Quiz`}
              labId={year}
              userID={userID}
              isFinalQuiz={true}
              hideCertificate={false}
              quizCompleted={quizCompleted}
              setQuizCompleted={setQuizCompleted}
            />
            <Done path={"/Done"} resetInstance={clearInstance} />
            <RankingQuestion
              path={"/RankingQuestionSandbox"}
              options={["Test1", "test2", "test3"]}
            />
          </Router>
        </div>
      </div>
    </>
  );
};

export default Main;
