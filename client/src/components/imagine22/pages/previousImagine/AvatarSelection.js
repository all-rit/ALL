/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { navigate } from "@reach/router";
import GridImages from "../../../body/lab/GridImages/GridImages";
import ImagineService from "../../../../services/ImagineService";

const AvatarSelection = (props) => {
  const { user, linkNum } = props;
  const handleNext = () => {
    navigate("/Imagine" + linkNum + "/MatchLobby");
  };

  return (
    <div className="mainInstructionsContainer">
      {/*
    <p className='instructionTitle'>
      Main instructions for Color Clicker:
    </p>
      */}
      <p className="mainInstructionList">
        You are about to play a exercise involving three colored circles, the
        same size as this one:
      </p>
      {/* <div className="center">
        <Circle color={"blue"} clickable={false} />
      </div> */}
      <ul className="study__list">
        <li className="mainInstructionsItem">
          You will need to <strong>click the circle</strong> in the center of
          the screen.
        </li>
        <li className="mainInstructionsItem">
          The circle will be 1 of 3 colors.
        </li>
        <li className="mainInstructionsItem">
          The color you need to click will appear in the{" "}
          <strong>bottom left</strong> corner of the screen.
        </li>
        <li className="mainInstructionsItem">
          The colors you should <strong>avoid</strong> clicking will appear in
          the <strong>bottom right</strong> of the screen.
        </li>
        <li className="mainInstructionsItem">
          You will gain or lose points based on if you clicked the{" "}
          <strong>correct or incorrect</strong> circle and based on{" "}
          <strong>how fast you clicked</strong> the correct colored circle. So
          click as fast as you possibly can!
        </li>
        <li className="mainInstructionsItem">
          The color changes in the center of the screen every second for fifteen
          seconds.
        </li>
      </ul>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleNext}
        key="start"
      >
        Start
      </button>
    </div>
  );

  //   const [squadSelection, setSquadSelection] = useState(false);

  //   const [avatar, setAvatar] = useState([]);
  //   const [squad, setSquad] = useState([]);

  //   const handleAvatarSelection = () => {
  //     if (avatar.length !== 0) {
  //       ImagineService.userAvatar(user.userid, avatar);
  //       setSquadSelection(true);
  //     }
  //   };

  //   const handleSquadSelection = () => {
  //     if (squad.length === 3) {
  //       ImagineService.userSquad(user.userid, squad).then((data) => {
  //         handleNext();
  //       });
  //     }
  //   };

  // return (
  //   <div className="container bottomSpace center-div">
  //     {squadSelection === false ? (
  //       <>
  //         <h2 className="playthrough__title">Choose Your Avatar</h2>
  //         <div className="tw-text-2xl tw-mt-5 tw-mb-5">
  //           Choose the avatar that represents you the most.
  //         </div>

  //         <GridImages multi={1} setSelection={setAvatar} />

  //         <button
  //           className="btn btn-primary text-black btn-xl text-uppercase "
  //           onClick={handleAvatarSelection}
  //           key="start"
  //         >
  //           Confirm Avatar Selection
  //         </button>
  //       </>
  //     ) : (
  //       <>
  //         <h2 className="playthrough__title">Choose Your Squad</h2>
  //         <div className="tw-text-2xl tw-mt-5 tw-mb-5">
  //           Choose the members of your squad from this group of active players.
  //         </div>

  //         <GridImages multi={3} setSelection={setSquad} />

  //         <button
  //           className="btn btn-primary text-black btn-xl text-uppercase "
  //           onClick={handleSquadSelection}
  //           key="start"
  //         >
  //           Confirm Squad Selection
  //         </button>
  //       </>
  //     )}
  //   </div>
  // );
};

export default AvatarSelection;
