import ReactText from "../../../all-components/CodeBlock/StyleComponents/ReactText";
import CodeLine from "../../../all-components/CodeBlock/Components/CodeLine";
import Tab from "../../../all-components/CodeBlock/Components/Tab";
import CommentText from "../../../all-components/CodeBlock/StyleComponents/CommentText";
import CodeBlockInput from "../../../all-components/CodeBlock/Components/CodeBlockInput";
import MultiTab from "../../../all-components/CodeBlock/Components/MultiTab";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import HTMLTag from "../../../all-components/CodeBlock/StyleComponents/HTMLTag";
import HTMLText from "../../../all-components/CodeBlock/StyleComponents/HTMLText";
import { NAV_BAR_ELEMENTS } from "../../../../constants/lab9/NavBarElements";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab8/ExerciseReducer";
import { connect } from "react-redux";

export const NavBarRepair = () => {

	const [ elements ] = useState(NAV_BAR_ELEMENTS.elements)
	// const [messageError, setMessageError] = useState([
	// 	false,
	// 	false,
	// 	false,
	// 	false,
	// ]);

	return (
		<>
			<ReactText>export const NavBar = () = &#123;</ReactText>
			<CodeLine>
				<Tab/> <ReactText> return ( </ReactText>
			</CodeLine>
			<CodeLine>
				<MultiTab numberOfTabs={2}/> <HTMLTag> &#60;span&#62;</HTMLTag>
			</CodeLine>
			{elements.map((element, index) => (
				<div key={element.id}>
					<CodeLine>
						<MultiTab numberOfTabs={3}/> <HTMLTag> &#60;div className = &ldquo;nav-item&rdquo;&#62;</HTMLTag>
					</CodeLine>
					<CodeLine>
						<MultiTab numberOfTabs={4}/>
						<HTMLTag> &#60;p className = &ldquo;nav-text&rdquo;&#62;</HTMLTag>
					</CodeLine>
					<CodeLine>
						<MultiTab numberOfTabs={5}/>
						<HTMLText> {element.navbar_item} </HTMLText>
					</CodeLine>
					<CodeLine>
						<MultiTab numberOfTabs={5}/>
						{/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
						<CommentText> {element.comment} </CommentText>
					</CodeLine>
					<CodeLine>
						<MultiTab numberOfTabs={5}/> <HTMLTag> &#60;img href = </HTMLTag>
						<CodeBlockInput attributes={{
							title: { },
							type: "text",
							placeholder: "Enter icon image file here",
							// className: messageError[index] ? "form error-input" : ""
						}}/>
					<HTMLTag>/&#62; </HTMLTag>
						</CodeLine>
				<CodeLine>
					<MultiTab numberOfTabs={4}/>
					<HTMLTag> &#60;/p&#62;</HTMLTag>
				</CodeLine>
				<CodeLine>
					<MultiTab numberOfTabs={3}/>
					<HTMLTag> &#60;/div&#62;</HTMLTag>
				</CodeLine>
				</div>
			))};
			<CodeLine>
				<MultiTab numberOfTabs={2}/> <HTMLTag> &#60;span&#62;</HTMLTag>
			</CodeLine>
			<CodeLine>
				<Tab/> <HTMLTag>);</HTMLTag>
			</CodeLine>
			<ReactText>export default NavBar;</ReactText>
			</>

	)
}

CodeBlockInput.propTypes = {
	attributes: PropTypes.object,
};
NavBarRepair.propTypes = {
	actions: PropTypes.string,
	user: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...exerciseActions }, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(NavBarRepair);