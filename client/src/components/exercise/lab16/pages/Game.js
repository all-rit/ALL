import React, { useEffect, useState,useContext } from "react";
import TeammateVideo from "../components/TeammateVideo";
import DisplayDeepFake from "../components/DisplayDeepfake";
import ScorePage from "./ScorePage";
import { TEAMMATE_INFO } from "src/constants/lab16";
import { ExerciseService } from "../../../../services/lab16/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";
import TicTacToeGame from "../components/TicTacToeGame";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab16Context";
import GuessTheFlag from "../components/GuessTheFlag";

const Game = () => {
  const status ='game'
  const {setTeammateID} = useContext(ExerciseStateContext);

  const { state } = useMainStateContext();
  const contentSizing =
    "tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px]";

  const [seconds, setSeconds] = useState(60);

  const [teammateId, setTeammate] = useState(1);

  //When page loads timer starts that counts down from 60->0
  useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            //go to score page
            // setStatus("scorePage");
            return 0;
          }

          return prevSeconds - 1;
        });
      }, 100);
      return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const id = Math.floor(Math.random() * 4);
    setTeammate(id);
    setTeammateID(id)
    const teammateInfo = TEAMMATE_INFO[id]
    console.log(teammateInfo)

    async function saveTeammateInfo() {
      try {
        const resp = await ExerciseService.saveTeammate(
          {
          userID: state.main.user.userid,
          teammateInfo:teammateInfo
        }
          )
        console.log(resp)
      } catch (err){
        console.log(err)
      }
    }
    
    saveTeammateInfo()

  }, []);


  useEffect(()=>{
    if (seconds == 0){
       navigate("/Lab16/Exercise/ScorePage");
    }
  })

  return (
    //flex container used to center game vertically, dimensions are slightly different than content sizing for scaling purposes
    <div>
      <div
        className={contentSizing + "tw-flex tw-justify-center tw-items-center tw-relative tw-bg-[blue]"}
      >

          <GuessTheFlag/>

        
        {/*Not sure if tailwind can support custom styling so "timerFont" is in a css file */}
        <div className="tw-flex tw-justify-center tw-w-[100%] tw-absolute tw-top-5 tw-text-white timerFont">
          <div>{seconds}</div>
        </div>
      </div>
          <TeammateVideo teammateId={teammateId} status={status} />
    </div>
  );
};

export default Game;
