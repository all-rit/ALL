import React, { Component } from 'react';

import Box from './Box';

class Boxes extends Component {
	render() {
		const { visible, elements, clickHandler } = this.props;
		const boxElements = Object.keys(elements).map((box) => {
			return (
				<Box
					key={box}
					number={box}
					clickHandler={clickHandler.bind(this, parseInt(box))}
					state={elements[box]}
				/>
			);
		});

		if (!visible) return null;

		return <div className="game__boxes">{boxElements}</div>;
	}
}

export default Boxes;
