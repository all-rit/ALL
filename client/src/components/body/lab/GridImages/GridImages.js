import React, { useState, useEffect } from 'react'
import { gridMockData } from '../../../mockData/gridMockData'
import clsx from "clsx";

const GridImages = () => {
	// to test this component, go to
	// localhost:3000/gridimages
	const [currentFile, setCurrentFile] = useState({})
	const [id, setId] = useState('')
	const [active, setActive] = useState(false)



	const handleGridImage = (id) => {
		setId(id)
		const selectImg = gridMockData.filter(img => img.id === id)?.[0]
		setCurrentFile(selectImg)
	}
	const handleEsc = (e) => {
		if (e.key === "Escape") {
			setCurrentFile({})
			setActive(false)
		};
	};

	useEffect(() => {
		if (active) {
			window.addEventListener("keydown", handleEsc);
		} else {
			window.removeEventListener("keydown", handleEsc);
		}
		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [currentFile, active]);



	const gridImagesClassnames = clsx({
		"tw-cursor-pointer tw-w-full tw-rounded": true,
	});

	const gridImageClassnames = clsx({
		"tw-cursor-pointer": true,
		'tw-opacity-50': active,
	});

	console.log(currentFile)
	console.log(id)
	console.log(active)
	return (
		<div class="tw-container tw-mx-auto tw-space-y-2 lg:tw-space-y-0 lg:tw-gap-2 lg:tw-grid lg:tw-grid-cols-5">
			{gridMockData?.map(data => (
				<>
					<div class={gridImagesClassnames} onClick={() => {
						handleGridImage(data.id);
						setActive(true)
					}
					}
					>
						<img className={currentFile.id === data.id ? gridImageClassnames : ''} src={data.img} alt={data.name} />
					</div>
				</>
			))
			}
		</div >
	)
}

export default GridImages