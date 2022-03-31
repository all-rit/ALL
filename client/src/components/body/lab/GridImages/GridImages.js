import React, { useState, useEffect, useCallback } from 'react'
import { gridMockData } from '../../../mockData/gridMockData'
import clsx from "clsx";

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
		console.log(currentFile)
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
		let grid = shuffleArray(gridMockData)
		grid.length=15;
		setData(grid);
		setCurrentFile([]);
		setId([]);
	},[multi])

	useEffect(()=>{
		setSelection(currentFile)
    // eslint-disable-next-line
	},[currentFile])


    const gridImagesClassnames = clsx({
        "tw-cursor-pointer tw-w-full tw-rounded": true,
    });

    return (
        <>
            <div className="moduleContainer">
                <div className="tw-container tw-mx-auto tw-space-y-2 lg:tw-space-y-0 lg:tw-gap-2 lg:tw-grid lg:tw-grid-cols-5 tw-p-5">
                    {gridMockData?.map(data => (
                        <>
                            <div class={gridImagesClassnames} onClick={() => {
                                handleGridImage(data.id);
                            }
                            }
                            onKeyPress={()=>{
                                handleKeyPress(data.id) 
                            }}
                            >
                                <img tabIndex="0" className={id.includes(data.id) ? 'tw-opacity-50 tw-border-double tw-border-8' : ''} src={data.img} alt={data.name} />
                            </div>
                        </>
                    ))
                    }
                </div >
            </div>
            <div className="tw-text-xl tw-mb-5 tw-p-2">
                {currentFile.length +" of "+multi+" selected."}
            </div>
        </>

    )
}

export default GridImages;