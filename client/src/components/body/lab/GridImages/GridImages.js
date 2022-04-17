import React, { useState, useEffect, useCallback } from 'react'
import { avatarMockData } from '../../../mockData/avatarMockData'
import clsx from "clsx";
import Avatar from 'avataaars';
import Spinner from '../../../../common/Spinner/Spinner';
const GridImages = (props) => {
	const {multi,setSelection} = props;

    const [currentFile, setCurrentFile] = useState([])
    const [id, setId] = useState([])
	const [data,setData] = useState([]);

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

    const handleGridImage = useCallback((imgId) => {
        if (id.length <= (multi-1)) {
            setId(prevState => [...prevState, imgId])
        }
        const selectImg = data.filter(img => img.id === imgId)?.[0]
        if (currentFile.length <= (multi-1) && !(id.includes(selectImg.id))) {
            setCurrentFile((prevState => ([...prevState, selectImg])))
        }
        else {
            if (id?.includes(selectImg.id)) {
                setCurrentFile((prevState => prevState.filter(file => file.id !== selectImg.id)))
                setId((prevState => prevState.filter(id => id !== selectImg.id)))
            }
        }
	// eslint-disable-next-line
    }, [id, currentFile]);

	const handleKeyPress = (id) =>{
		handleGridImage(id);
	}
	
	useEffect(()=>{
		shuffleArray(avatarMockData)
		setData(avatarMockData.slice(0,15));
		setCurrentFile([]);
		setId([]);
	},[multi])

	useEffect(()=>{
		setSelection(currentFile)
    // eslint-disable-next-line
	},[currentFile])


    const gridImagesClassnames = clsx({
        "tw-cursor-pointer tw-w-full tw-rounded tw-max-w-full tw-h-auto ": true,
    });

    var TopType = ["NoHair", "ShortHairShaggyMullet", "EyePatch", "Hat", "Hijab", 
    "Turban", "WinterHat1", "WinterHat2",  "WinterHat3", "LongHairBob", 
    "LongHairBigHair", "LongHairCurly", "LongHairCurvy", "LongHairFro", 
    "LongHairFroBand", "LongHairNotTooLong", "LongHairMiaWallace", 
    "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", 
    "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", 
    "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", 
    "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"]

    var randomTopType = TopType[Math.floor(Math.random()*TopType.length)];

    var Accessories = ["Blank", "Kurt", "Prescription01", "Prescription02", 
    "Round", "Sunglasses", "Wayfarers"]

    var randomAccessories = Accessories[Math.floor(Math.random()*Accessories.length)];

    
    var HairColors = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
   "PastelPink"]

   var randomHairColors = HairColors[Math.floor(Math.random()*HairColors.length)];

   var FacialHairs = ["Blank", "BeardMedium", "BeardLight", "BeardMajestic", 
   "MoustacheFancy", "MoustacheMagnum"]

   var randomFacialHairs =  FacialHairs[Math.floor(Math.random()*FacialHairs.length)];

   /**
     * Is the same as facial hair colors, and wish both hairs to be consistent
     */
//    var FacialHairColors = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
//    "PastelPink"]


    var Clothes = ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", 
    "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"]


    var randomClothes = Clothes[Math.floor(Math.random()*Clothes.length)];


    var ClothesColor = ["Black", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", 
    "PastelBlue", "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink",
    "Red", "White"]

    var randomClothesColor = ClothesColor[Math.floor(Math.random()*ClothesColor.length)];

    

    var Eyes = ["Default", "Happy", "Wink"]

    var randomEye = Eyes[Math.floor(Math.random()*Eyes.length)];

    var Eyebrow = ["Default", "DefaultNatural", "FlatNatural", "UpDown", "UpDownNatural"]

    var randomEyebrow = Eyebrow[Math.floor(Math.random()*Eyebrow.length)];

    var Mouth = ["Default", "Serious", "Smile", "Twinkle"]

    var randomMouth= Mouth[Math.floor(Math.random()*Mouth.length)];

    var Skin = ["Tanned", "Brown", "DarkBrown", "Black", "Pale", "Light"]

    var randomSkin= Skin[Math.floor(Math.random()*Skin.length)];


    return (
        <>
            <div className="moduleContainer">
                {data.length!==0 ?
                    <div className="tw-container tw-mx-auto tw-space-y-2 lg:tw-space-y-0 lg:tw-gap-2 lg:tw-grid lg:tw-grid-cols-5 tw-p-2">
                        {data?.map(data => (
                            <>
                                <div tabIndex="0" class={gridImagesClassnames} onClick={() => {
                                    handleGridImage(data.id);
                                }
                                }
                                onKeyPress={()=>{
                                    handleKeyPress(data.id) 
                                }}
                                >
                                    <Avatar
                                        className={id.includes(data.id) ? 'tw-opacity-50 tw-border-double tw-border-8 tw-max-w-full tw-h-auto' : 'tw-max-w-full tw-h-auto'} alt={data.name} 
                                        avatarStyle='Circle'
                                        topType={randomTopType}
                                        accessoriesType={randomAccessories}
                                        hairColor={randomHairColors}
                                        facialHairType={randomFacialHairs}
                                        facialHairColor={randomHairColors}
                                        clotheType={randomClothes}
                                        clotheColor={randomClothesColor}
                                        
                                        /**
                                         * Decided in meeting to not use graphic type. i.e. Cumbia
                                         */
                                        // graphicType={data.avatarAttributes.graphicType}

                                        eyeType={randomEye}
                                        eyebrowType={randomEyebrow}
                                        mouthType={randomMouth}
                                        skinColor={randomSkin}

                                    />
                                </div>
                                
                            </>
                        ))
                        }
                    </div >
                :
                <div className="landingpage__row">
                    <Spinner />
                </div>
                }
                
            </div>
            <div className="tw-text-2xl tw-mb-5 tw-p-2">
                {currentFile.length +" of "+multi+" selected."}
            </div>
        </>

    )
}

export default GridImages;