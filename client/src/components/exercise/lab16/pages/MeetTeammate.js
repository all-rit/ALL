import React, { useContext,useState,useEffect } from "react"
import { navigate } from "@reach/router";
import ExerciseStateContext from "../Lab16Context";
import { TEAMMATE_INFO,LOCATIONS,MEET_TEAMMATATE_PATHS } from "src/constants/lab16";
import { ExerciseService } from "../../../../services/lab16/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";


const MeetTeammate = ()=>{
  const {setTeammateID,teamName,location,setLocation} = useContext(ExerciseStateContext)
  const { state } = useMainStateContext();
  const [imagePath, setImagePath] = useState("");
  

  const imageTransformSizing = "tw-w-[15rem] tw-object-cover tw-outline tw-outline-transparent tw-rounded-lg";
  const handleContinue = () => {
      navigate("/Lab16/Exercise/Game");
  };


  useEffect(() => {

    //initialize all variables
    const id = Math.floor(Math.random() * 4);
    setTeammateID(id)
    const teammateInfo = TEAMMATE_INFO[id]
    setLocation(LOCATIONS[id])
    setImagePath(MEET_TEAMMATATE_PATHS[id] || MEET_TEAMMATATE_PATHS[0]);

    //save teammateInfo on database
    async function saveTeammateInfo() {
      try {
        const resp = await ExerciseService.saveTeammate(
        {
          userID: state.main.user.userid,
          teammateInfo:teammateInfo
        })
        console.log(resp)
      } catch (err){
        console.log(err)
      }
    }
    saveTeammateInfo()

  }, []);
   
  return (<>
  <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-p-5 tw-border-labYellow tw-border-dashed  tw-rounded-xl tw-w-fit tw-mx-auto">
            <p className="tw-inline-block tw-text-xl tw-font-bold tw-text-[#0144D5]">
              Team: <b>{teamName}</b>
            </p>

            <h2 className="tw-text-[20px] tw-pb-2 tw-font-bold tw-text-black">
                Meet your Teammate for the Guess The Flag Tournament !
            </h2>
          
            <img src={imagePath} alt="image1" className={imageTransformSizing}/>

            <p >Live from: <b>{location}</b></p>
            <div className="tw-bg-[#dbe4ff] tw-rounded-2xl tw-rounded-bl-sm tw-px-4 tw-py-3">
              <p className="tw-text-sm sm:tw-text-base tw-font-bold">
                “I am excited to play this game with you!”
              </p>
            </div>

            <button
              style={{
                color: 'white',
                backgroundColor: '#0144D5',
                border: 'none',
                borderRadius: 6,
                padding: '12px 28px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 16,
                fontWeight: 'bold',
              }}
              onClick={handleContinue}
              key="start"
            >
              Start Game
          </button>
          </div>
       </>)
}

export default MeetTeammate