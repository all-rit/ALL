import React from "react";
import { PropTypes } from "prop-types";

const CodeBlockInput = (props) => {
	const { attributes } = props;
	return (
		<>
			<input className={"p-1 code_editor__input"}
						 {...attributes}
			/>
		</>
	)
}

CodeBlockInput.propTypes = {
	attributes: PropTypes.object
};

export default CodeBlockInput;