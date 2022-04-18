import React, { useEffect, useState } from "react";    
import GameScore from "./GameScore";
import GameStatus from "./GameStatus";
import ImagineService from "../../../services/ImagineService";
import Spinner from "../../../common/Spinner/Spinner";
import Bias from "./Bias";
import PenaltyStatus from "./PenaltyStatus";
import Avatar from 'avataaars';
import { avatarMockData } from "../../mockData/avatarMockData";


const PlayerBoard = (props) => { 
    const {user,handleNext,biasType} = props;
    const [team, setTeam] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [opposingTeam, setOpposingTeam] = useState([]);
    const [offender, setOffender] = useState(null)


    var TopType = ["NoHair", "ShortHairShaggyMullet", "EyePatch", "Hat", "Hijab", 
    "Turban", "WinterHat1", "WinterHat2",  "WinterHat3", "LongHairBob", 
    "LongHairBigHair", "LongHairCurly", "LongHairCurvy", "LongHairFro", 
    "LongHairFroBand", "LongHairNotTooLong", "LongHairMiaWallace", 
    "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", 
    "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", 
    "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", 
    "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"]

    var Accessories = ["Blank", "Kurt", "Prescription01", "Prescription02", 
    "Round", "Sunglasses", "Wayfarers"]

    
    var HairColors = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
   "PastelPink"]


   var FacialHairs = ["Blank", "BeardMedium", "BeardLight", "BeardMajestic", 
   "MoustacheFancy", "MoustacheMagnum"]

  
   /**
     * Is the same as facial hair colors, and wish both hairs to be consistent
     */
//    var FacialHairColors = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
//    "PastelPink"]


    var Clothes = ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", 
    "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"]


    var ClothesColor = ["Black", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", 
    "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink",
    "Red", "White"]


    var Eyes = ["Default", "Happy", "Wink"]


    var Eyebrow = ["Default", "DefaultNatural", "FlatNatural", "UpDown", "UpDownNatural"]


    var Mouth = ["Default", "Serious", "Smile", "Twinkle"]


    var Skin = ["Tanned", "Brown", "DarkBrown", "Black", "Pale", "Light"]



    const shuffleArray = (array) =>{
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;
	
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
	}

    useEffect(()=>{
        ImagineService.getUserSquad(user?.userid).then((data)=>{
            setTeam(data)
            setOffender(data[Math.floor(Math.random() * (3 - 0) + 0)])
        })
        ImagineService.getUserAvatar(user?.userid).then((data)=>{
            setAvatar(data)
        })
        shuffleArray(avatarMockData)
		setOpposingTeam(avatarMockData.slice(0,4));
    // eslint-disable-next-line
    },[user])
    
    return  (
            <div className="FullPB moduleContainer">
                {avatar.length!==0 && team.length!==0 && offender!==null &&
                    <Bias handleNext={handleNext} biasType={biasType} team={team} avatar={avatar} offender={offender}/>
                }
                {team?.length!==0 && opposingTeam?.length!==0 && offender!==null && avatar.length!==0?
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
                                    <td >
                                        <Avatar
                                            className='tw-w-16 tw-h-16' alt={avatar[0].name} 
                                            avatarStyle='Circle'
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
                                    <td>{user?.firstname != null ? user?.firstname+" "+ user?.lastinitial : "User#"+user?.userid}</td>
                                    <td>0/0/0</td>
                                    <td><GameStatus userType="user" handleNext={handleNext} biasType={biasType}/></td>
                                    <td><PenaltyStatus isOffender={biasType==="user"? true : false}/></td>
                                </tr>
                                {team?.map((data,index)=>{
                                    return(
                                        <tr className="teamMember" key={index}>
                                            <td >
                                                <Avatar
                                                    className='tw-w-16 tw-h-16' alt={data.name} 
                                                    avatarStyle='Circle'
                                                    topType={TopType[Math.floor(Math.random()*TopType.length)]}
                                                    accessoriesType={Accessories[Math.floor(Math.random()*Accessories.length)]}
                                                    hairColor={HairColors[Math.floor(Math.random()*HairColors.length)]}
                                                    facialHairType={FacialHairs[Math.floor(Math.random()*FacialHairs.length)]}
                                                    facialHairColor={HairColors[Math.floor(Math.random()*HairColors.length)]}
                                                    clotheType={ Clothes[Math.floor(Math.random()*Clothes.length)]}
                                                    clotheColor={ClothesColor[Math.floor(Math.random()*ClothesColor.length)]}
                                                    
                                                    /**
                                                     * Decided in meeting to not use graphic type. i.e. Cumbia
                                                     */
                                                    // graphicType={data.avatarAttributes.graphicType}
            
                                                    eyeType={Eyes[Math.floor(Math.random()*Eyes.length)]}
                                                    eyebrowType={Eyebrow[Math.floor(Math.random()*Eyebrow.length)]}
                                                    mouthType={Mouth[Math.floor(Math.random()*Mouth.length)]}
                                                    skinColor={Skin[Math.floor(Math.random()*Skin.length)]} 

                                                />
                                            </td>
                                            <td>{data.name}</td>
                                            <td><GameScore/></td>
                                            <td><GameStatus userType="teamMember" biasType={biasType}/></td>
                                            <td><PenaltyStatus isOffender={biasType==="team" ? (data.id===offender?.id ? true : false):false}/></td>
                                        </tr>
                                    )
                                })}
                                {opposingTeam?.map((data,index)=>{
                                    console.log(data)
                                    return(
                                        <tr className="opposingMember" key={index}>
                                            <td >
                                                <Avatar
                                                    className='tw-w-16 tw-h-16' alt={data.name} 
                                                    avatarStyle='Circle'
                                        topType={TopType[Math.floor(Math.random()*TopType.length)]}
                                        accessoriesType={Accessories[Math.floor(Math.random()*Accessories.length)]}
                                        hairColor={HairColors[Math.floor(Math.random()*HairColors.length)]}
                                        facialHairType={FacialHairs[Math.floor(Math.random()*FacialHairs.length)]}
                                        facialHairColor={HairColors[Math.floor(Math.random()*HairColors.length)]}
                                        clotheType={ Clothes[Math.floor(Math.random()*Clothes.length)]}
                                        clotheColor={ClothesColor[Math.floor(Math.random()*ClothesColor.length)]}
                                        
                                        /**
                                         * Decided in meeting to not use graphic type. i.e. Cumbia
                                         */
                                        // graphicType={data.avatarAttributes.graphicType}

                                        eyeType={Eyes[Math.floor(Math.random()*Eyes.length)]}
                                        eyebrowType={Eyebrow[Math.floor(Math.random()*Eyebrow.length)]}
                                        mouthType={Mouth[Math.floor(Math.random()*Mouth.length)]}
                                        skinColor={Skin[Math.floor(Math.random()*Skin.length)]} 

                                                />
                                            </td>
                                            <td>{data.name}</td>
                                            <td><GameScore/></td>
                                            <td><GameStatus userType="opposingMember" biasType={"none"}/></td>
                                            <td>None</td>
                                        </tr>
                                    )
                                })}
                        </table>
                    </>
                :
                    <div className="landingpage__row">
                        <Spinner />
                    </div>
                }
                    
            </div>
    );
};

export default PlayerBoard;