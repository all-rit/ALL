/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import GameScore from "./GameScore";
import GameStatus from "./GameStatus";
import ImagineService from "../../../services/ImagineService";
import Spinner from "../../../common/Spinner/Spinner";
import Bias from "./Bias";
import PenaltyStatus from "./PenaltyStatus";
import Avatar from "avataaars";
import createAvatarData from "../../all-components/createAvatarData";

const PlayerBoard = (props) => {
  const { user, handleNext, biasType } = props;
  const [team, setTeam] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [opposingTeam, setOpposingTeam] = useState([]);
  const [offender, setOffender] = useState(null);
  const [isModalActive, setModalActive] = useState(false);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    ImagineService.getUserSquad(user?.userid).then((data) => {
      setTeam(data);
      setOffender(data[Math.floor(Math.random() * (3 - 0) + 0)]);
    });
    ImagineService.getUserAvatar(user?.userid).then((data) => {
      setAvatar(data);
    });
    const opossingData = createAvatarData(100);
    shuffleArray(opossingData);
    setOpposingTeam(opossingData.slice(0, 4));
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className="FullPB moduleContainer">
      {avatar.length !== 0 && team.length !== 0 && offender !== null && (
        <Bias
          handleNext={handleNext}
          biasType={biasType}
          team={team}
          avatar={avatar}
          offender={offender}
          isModalActive={isModalActive}
          setModalActive={setModalActive}
        />
      )}
      {team?.length !== 0 &&
      opposingTeam?.length !== 0 &&
      offender !== null &&
      avatar.length !== 0 ? (
        <>
          <table className="matchLobbyTable">
            <thead>
              <tr>
                <th>AVATAR</th>
                <th>NAME</th>
                <th>SCORE</th>
                <th>STATUS</th>
                <th>PENALTY</th>
              </tr>
            </thead>
            <tr className="teamMember">
              <td>
                <Avatar
                  className="tw-w-16 tw-h-16"
                  alt={avatar[0].name}
                  avatarStyle="Circle"
                  topType={avatar[0].avatarAttributes.topType}
                  accessoriesType={avatar[0].avatarAttributes.accessoriesType}
                  hairColor={avatar[0].avatarAttributes.hairColor}
                  facialHairType={avatar[0].avatarAttributes.facialHairType}
                  facialHairColor={avatar[0].avatarAttributes.facialHairColor}
                  clotheType={avatar[0].avatarAttributes.clotheType}
                  clotheColor={avatar[0].avatarAttributes.clotheColor}
                  graphicType={avatar[0].avatarAttributes.graphicType}
                  eyeType={avatar[0].avatarAttributes.eyeType}
                  eyebrowType={avatar[0].avatarAttributes.eyebrowType}
                  mouthType={avatar[0].avatarAttributes.mouthType}
                  skinColor={avatar[0].avatarAttributes.skinColor}
                />
              </td>
              <td>
                {user?.firstname != null
                  ? user?.firstname + " " + user?.lastinitial
                  : "User#" + user?.userid}
              </td>
              <td>0/0/0</td>
              <td>
                <GameStatus
                  setModalActive={setModalActive}
                  userType="user"
                  handleNext={handleNext}
                  biasType={biasType}
                />
              </td>
              <td>
                <PenaltyStatus
                  isOffender={biasType === "user" ? true : false}
                />
              </td>
            </tr>
            {team?.map((data, index) => {
              return (
                <tr className="teamMember" key={index}>
                  <td>
                    <Avatar
                      className="tw-w-16 tw-h-16"
                      alt={data.name}
                      avatarStyle="Circle"
                      topType={data.avatarAttributes.topType}
                      accessoriesType={data.avatarAttributes.accessoriesType}
                      hairColor={data.avatarAttributes.hairColor}
                      facialHairType={data.avatarAttributes.facialHairType}
                      clotheType={data.avatarAttributes.clotheType}
                      clotheColor={data.avatarAttributes.clotheColor}
                      eyeType={data.avatarAttributes.eyeType}
                      eyebrowType={data.avatarAttributes.eyebrowType}
                      mouthType={data.avatarAttributes.mouthType}
                      skinColor={data.avatarAttributes.skinColor}
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>
                    <GameScore />
                  </td>
                  <td>
                    <GameStatus userType="teamMember" biasType={biasType} />
                  </td>
                  <td>
                    <PenaltyStatus
                      isOffender={
                        biasType === "team"
                          ? data.id === offender?.id
                            ? true
                            : false
                          : false
                      }
                    />
                  </td>
                </tr>
              );
            })}
            {opposingTeam?.map((data, index) => {
              return (
                <tr className="opposingMember" key={index}>
                  <td>
                    <Avatar
                      className="tw-w-16 tw-h-16"
                      alt={data.name}
                      avatarStyle="Circle"
                      topType={data.avatarAttributes.topType}
                      accessoriesType={data.avatarAttributes.accessoriesType}
                      hairColor={data.avatarAttributes.hairColor}
                      facialHairType={data.avatarAttributes.facialHairType}
                      clotheType={data.avatarAttributes.clotheType}
                      clotheColor={data.avatarAttributes.clotheColor}
                      eyeType={data.avatarAttributes.eyeType}
                      eyebrowType={data.avatarAttributes.eyebrowType}
                      mouthType={data.avatarAttributes.mouthType}
                      skinColor={data.avatarAttributes.skinColor}
                    />
                  </td>
                  <td>{data.name}</td>
                  <td>
                    <GameScore />
                  </td>
                  <td>
                    <GameStatus userType="opposingMember" biasType={"none"} />
                  </td>
                  <td>None</td>
                </tr>
              );
            })}
          </table>
        </>
      ) : (
        <div className="landingpage__row">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default PlayerBoard;
