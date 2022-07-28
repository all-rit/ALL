import React, { useEffect, useCallback, useState } from 'react'
import { danMockData } from '../../../mockData/danMockData'
import clsx from "clsx";
import Bias from './Bias';
import createAvatarData from '../../../body/lab/GridImages/createAvatarData';
import Avatar from 'avataaars';


const GridApplicants = (props) => {
	const {numApplicants, handleNext, biasType, setAvatars, setSelection}=props;
	const [currentFile, setCurrentFile] = useState([])
	const [id, setId] = useState([])
	const [isModalActive, setModalActive] = useState(false);

	const gridImagesClassnames = clsx({
		"tw-cursor-pointer tw-w-full tw-rounded tw-max-w-full tw-h-auto ": true,
	});

	//equivalent to playerboard component?


	//need to create a set applicant
	const [applicant, setApplicant] = useState([])

	//added use Effect for setApplicant
	//may need more under useEffect?
	useEffect(()=>{
		let avatarData=createAvatarData(50)
		setApplicant(avatarData.slice(0,numApplicants))
	},[numApplicants])

	// useEffect(()=>{
	// 	setSelection(currentFile)
	// }, [currentFile])



/*Create another conditional. Figure out how to get it handled to carry the state up and down*/
	const handleGridImage = useCallback((imgId) => {
		if (id.length <= 3) {
			setId(prevState => [...prevState, imgId])
		}
		const selectImg = danMockData.filter(img => img.id === imgId)?.[0]
		if (currentFile.length <= 3 && !(id.includes(selectImg.id))) {
			setCurrentFile((prevState => ([...prevState, selectImg])))
			setAvatars((prevState => ([...prevState, selectImg])))
		}
		if (selectImg.ai == "false"){
			this.props.handleGridImage(imgId.target.value);
		}
		else {
			if (id?.includes(selectImg.id)) {
				setCurrentFile((prevState => prevState.filter(file => file.id !== selectImg.id)))
				setAvatars((prevState => prevState.filter(file => file.id !== selectImg.id)))
				setId((prevState => prevState.filter(id => id !== selectImg.id)))
			}
		}
	}, [id, currentFile]);

	//changed dan mock data into [varName]
	console.log(currentFile, 'cF')
	return (
		<div className='gridApplicants tw-flex'>

<Bias handleNext={handleNext} biasType={biasType} id = {id} isModalActive={isModalActive} setModalActive={setModalActive}/>

			<div className='tw-mr-4'>
				<ul className='gridApplicants-content tw-bg-bgwhite tw-mt-40'>
					<li className='tw-p-4'>Gender</li>
					<li className='tw-p-4'>Years of Experience</li>
					<li className='tw-p-4'>Availability</li>
					<li className='tw-p-4'>Expected Pay</li>
					<li className='tw-p-4'>AI Recommendation</li>
				</ul>
			</div>
			

			<div className='tw-flex tw-gap-x-4'>			
				{applicant?.map(data => (
					<ul onClick={() => {handleGridImage(data?.id)
					}} className={`gridApplicants-content tw-bg-bgwhite tw-w-40 ${id.includes(data.id) ? 'tw-opacity-75 tw-border-solid tw-border-8' : ''}`}>
						<Avatar
						className='tw-w-40 tw-h-40' alt={data.name}                                         
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
						<li className='tw-p-4'>{data?.gender}</li>
						<li className='tw-p-4'>{data?.years}</li>
						<li className='tw-p-4'>{data?.availability}</li>
						<li className='tw-p-4'>{data?.pay}</li>
						<li className='tw-p-4'>{data?.ai}</li>
					</ul>
				))
				}

			</div>
		</div >
	)
}

export default GridApplicants