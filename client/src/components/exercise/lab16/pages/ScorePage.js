import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import TeammateVideo from "../components/TeammateVideo";
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab16Context";
import WarningModal from "../components/WarningModal";


const ScorePage = () => {

  const [isModalOpen,setIsModalOpen] = useState(false)

  const contentSizing ="tw-border tw-rounded-xl tw-w-[46vw] tw-h-[39vw] tw-h-[40vw] xxl:tw-h-[600px] xxl:tw-w-[800px] tw-pt-[7rem]";

  const {teammateId} = useContext(ExerciseStateContext);

  //Random score that will be generated for both teams
  const totalUserScore = Math.floor(Math.random() * 1000 + 500);

  const userScore = Math.floor(
    Math.random() * (totalUserScore * 0.6) + totalUserScore * 0.2,
  );
  const teammateScore = totalUserScore - userScore;

  /*opponent score will always be less than user score, but never less than 475
      This is done so that the game seems realistically close*/
  const totalOpponentScore = Math.floor(
    Math.random() * (totalUserScore * 0.8) + totalUserScore * 0.2,
  );

  return (
    <>
  <div className={contentSizing}>

 
    {!isModalOpen ? (
    <div>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-full tw-p-4">
        <h3 className="tw-title text-center">You Win!!!</h3>
        <div className="tw-flex tw-items-center tw-justify-center tw-border-solid tw-border-0 tw-border-b tw-border-secondary-gray">
          <div className="tw-my-12 tw-body-text tw-mx-14">
            <div className="tw-my-4 tw-font-bold tw-text-labGray tw-text-center">
              Your team
            </div>
            <div className="tw-font-poppins tw-font-bold tw-text-center tw-text-5xl tw-text-mediumBlue">
              {userScore + teammateScore}
            </div>
          </div>
          <div className="tw-my-12 tw-body-text tw-mx-14">
            <div className="tw-my-4 tw-font-bold tw-text-labGray tw-text-center">
              Opponent
            </div>
            <div className="tw-font-poppins tw-font-bold tw-text-center tw-text-5xl tw-text-darkGray">
              {totalOpponentScore}
            </div>
          </div>
        </div>
        <div className="tw-my-4">
          <div className="tw-body-text tw-text-labGray tw-mx-auto">
            <p>
              You <span className="tw-font-bold tw-text-black">{userScore}</span> &middot; Teammate <span className="tw-font-bold tw-text-black">{teammateScore}</span>
            </p>
          </div>
        </div>

        <button
            className="tw-w-fit tw-bg-primary-blue hover:tw-bg-labBlue tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-colors tw-duration-200"
              //alert model should pop up and deepfake should be shown
              onClick={() => setIsModalOpen(true)}
            >
              Continue
        </button>
      </div>
      <TeammateVideo teammateId={teammateId} status={'scorePage'}/>
    </div>  
    
    ) : (
      <WarningModal/>
     
    )}
   </div>
    </>
  );
};

export default ScorePage;


