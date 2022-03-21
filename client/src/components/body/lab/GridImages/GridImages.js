import React from 'react'

const GridImages = () => {
	const handleGridImage = (id) => {
		// this fn takes in the image id and does whatever you want to based on the id
		console.log(id)
	}
	return (
		<div class="tw-container tw-mx-auto tw-space-y-2 lg:tw-space-y-0 lg:tw-gap-2 lg:tw-grid lg:tw-grid-cols-3">
			<div class="tw-w-full tw-rounded tw-hover:opacity-50" onClick={() => handleGridImage(1)}>
				<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
					alt="image" />
			</div>
			<div class="tw-w-full tw-rounded tw-hover:opacity-50" onClick={() => handleGridImage(2)}>
				<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
					alt="image" />
			</div>
			<div class="tw-w-full tw-rounded tw-hover:opacity-50" onClick={() => handleGridImage(3)}>
				<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
					alt="image" />
			</div>
			<div class="tw-w-full tw-rounded tw-hover:opacity-50" onClick={() => handleGridImage(4)}>
				<img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
					alt="image" />
			</div>
		</div>
	)
}

export default GridImages