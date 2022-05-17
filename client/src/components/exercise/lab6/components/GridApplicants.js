import React, { useEffect, useCallback, useState } from 'react'
import { danMockData } from '../../../mockData/danMockData'
import clsx from "clsx";

const GridApplicants = () => {
	const [currentFile, setCurrentFile] = useState([])
	const [id, setId] = useState([])

	const gridImagesClassnames = clsx({
		"tw-cursor-pointer tw-w-full tw-rounded tw-max-w-full tw-h-auto ": true,
	});

	const handleGridImage = useCallback((imgId) => {
		if (id.length <= 3) {
			setId(prevState => [...prevState, imgId])
		}
		const selectImg = danMockData.filter(img => img.id === imgId)?.[0]
		if (currentFile.length <= 3 && !(id.includes(selectImg.id))) {
			setCurrentFile((prevState => ([...prevState, selectImg])))
		}
		else {
			if (id?.includes(selectImg.id)) {
				setCurrentFile((prevState => prevState.filter(file => file.id !== selectImg.id)))
				setId((prevState => prevState.filter(id => id !== selectImg.id)))
			}
		}
	}, [id, currentFile]);

	console.log(currentFile, 'cF')
	return (
		<div className='gridApplicants tw-flex'>
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

				{danMockData?.map(data => (
					<ul onClick={() => handleGridImage(data?.id)} className={`gridApplicants-content tw-bg-bgwhite tw-w-40 ${id.includes(data.id) ? 'tw-opacity-75 tw-border-solid tw-border-8' : ''}`}>
						< img className="" src={data?.src} alt='dan' />
						<li className='tw-p-4'>{data.gender}</li>
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