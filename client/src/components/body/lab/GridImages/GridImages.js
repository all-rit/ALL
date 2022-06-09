import React, { useState, useEffect, useCallback } from 'react'
import clsx from "clsx";
import Avatar from 'avataaars';
import Spinner from '../../../../common/Spinner/Spinner';
import createAvatarData from './createAvatarData';

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
	
    //changed useEffect
	useEffect(()=>{
        let avatarData = createAvatarData(1000)
		shuffleArray(avatarData)
		setData(avatarData.slice(0,15));
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
                                        avatarStyle='Square'
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