import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { SketchPicker } from 'react-color';

import {
	updateCode,
	updateCorrectBackground,
	updateIncorrectBackground,
	updateCodeEditorStatus,
	resetCode,
	updateTab
} from '../../reducers/codeeditor/Actions';
import { updatePopup } from '../../reducers/app/Actions';
import Conditional from '../../helpers/Conditional';

const mapStateToProps = (state) => {
	return {
		correctMessage: state.code.correctMessage,
		incorrectMessage: state.code.incorrectMessage,
		correctBackgroundColor: state.code.correctBackgroundColor,
		incorrectBackgroundColor: state.code.incorrectBackgroundColor,
		currentTab: state.code.currentTab
	};
};

const mapDispatchToProps = {
	updateCode,
	updateCorrectBackground,
	updateIncorrectBackground,
	updateCodeEditorStatus,
	resetCode,
	updateTab,
	updatePopup
};

class CodeEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			correctBackgroundColorPopup: false,
			incorrectBackgroundColorPopup: false
		};
		this.correctMessage = React.createRef();
		this.incorrectMessage = React.createRef();
	}

	handleSubmit(event) {
		event.preventDefault();

		const { updateCode, correctBackgroundColor, incorrectBackgroundColor, updatePopup } = this.props;

		updateCode(this.correctMessage.current.value, this.incorrectMessage.current.value);
		this.closeCodeEditor();
		updatePopup('The adjustments for the game has been made.');

		setTimeout(() => {
			this.props.updatePopup('');
		}, 5000)

		fetch(process.env.REACT_APP_SERVER_URL + '/codeeditor/submit', {
			method: 'POST',
			headers: new Headers({ 'content-type': 'application/json' }),
			body: JSON.stringify({
				correctMessage: this.correctMessage.current.value,
				incorrectMessage: this.incorrectMessage.current.value,
				correctBackgroundColor: correctBackgroundColor,
				incorrectBackgroundColor: incorrectBackgroundColor
			}),
			credentials: 'include'
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	toggleCorrectBackgroundColorPopup() {
		this.setState({ correctBackgroundColorPopup: !this.state.correctBackgroundColorPopup });
	}

	toggleIncorrectBackgroundColorPopup() {
		this.setState({ incorrectBackgroundColorPopup: !this.state.incorrectBackgroundColorPopup });
	}

	changeCorrectBackgroundColor(color) {
		const { updateCorrectBackground } = this.props;

		updateCorrectBackground(color.hex);
	}

	changeIncorrectBackgroundColor(color) {
		const { updateIncorrectBackground } = this.props;

		updateIncorrectBackground(color.hex);
	}

	closeCodeEditor() {
		this.props.updateCodeEditorStatus(false);
	}

	render() {
		const {
			correctMessage,
			incorrectMessage,
			correctBackgroundColor,
			incorrectBackgroundColor,
			currentTab,
			updateTab
		} = this.props;
		const { correctBackgroundColorPopup, incorrectBackgroundColorPopup } = this.state;
		const jsFileClasses = classNames({
			code_editor__file: true,
			'code_editor__file--active': currentTab === 1
		});
		const cssFileClasses = classNames({
			code_editor__file: true,
			'code_editor__file--active': currentTab === 2
		});
		const jsFileCodeClasses = classNames({
			code_editor__code: true,
			code_editor__hide: currentTab === 2
		});
		const cssFileCodeClasses = classNames({
			code_editor__code: true,
			code_editor__hide: currentTab === 1
		});

		return (
			<div className="code_editor">
				<div className="code_editor__content">
					<div className="code_editor__files">
						<div onClick={updateTab.bind(this, 1)} className={jsFileClasses}>
							HintBox.js
						</div>
						<div onClick={updateTab.bind(this, 2)} className={cssFileClasses}>
							HintBox.css
						</div>
					</div>

					<div className={jsFileCodeClasses}>
						<div className="code_editor__line">
							<span className="code_editor__line--darkgreen">
								&#47;&#47; This is where you can change the hint box's default messages.
							</span>
						</div>
						<div className="code_editor__line">
							<span className="code_editor__line--purple">import&nbsp;</span>
							<span className="code_editor__line--blue">React</span>
							<span className="code_editor__line--gold">,&nbsp;</span>
							<span className="code_editor__line--gold">&#123;</span>
							<span className="code_editor__line--blue">&nbsp;Component&nbsp;</span>
							<span className="code_editor__line--gold">&#125;&nbsp;</span>
							<span className="code_editor__line--purple">from&nbsp;</span>
							<span className="code_editor__line--orange">'react'</span>
							<span className="code_editor__line--gold">;</span>
						</div>

						<div className="code_editor__line">&nbsp;</div>

						<div className="code_editor__line">
							<span className="code_editor__line--blue">class&nbsp;</span>
							<span className="code_editor__line--green">HintBox&nbsp;</span>
							<span className="code_editor__line--blue">extends&nbsp;</span>
							<span className="code_editor__line--green">Component&nbsp;</span>
							<span className="code_editor__line--gold">&#123;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;</span>
							<span className="code_editor__line--yellow">render</span>
							<span className="code_editor__line--purple">() &#123;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkblue">let</span>
							<span className="code_editor__line--blue">&nbsp;&#123;&nbsp;</span>
							<span className="code_editor__line--blue">hint</span>
							<span>,&nbsp;</span>
							<span className="code_editor__line--blue">isExtended</span>
							<span className="code_editor__line--blue">&nbsp;&#125;&nbsp;</span>
							<span>=&nbsp;</span>
							<span className="code_editor__line--darkblue">this</span>
							<span className="code_editor__line--blue">.props</span>
							<span>;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkblue">let&nbsp;</span>
							<span className="code_editor__line--blue">content</span>
							<span>&nbsp;=&nbsp;</span>
							<span className="code_editor__line--orange">"?"</span>
							<span>;</span>
						</div>

						<div className="code_editor__line">&nbsp;</div>
						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkgreen">&#47;&#47; Check if hint is empty</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--purple">if&nbsp;</span>
							<span className="code_editor__line--blue">(</span>
							<span className="code_editor__line--blue">hint</span>
							<span>&nbsp;!=&nbsp;</span>
							<span className="code_editor__line--orange">""</span>
							<span className="code_editor__line--blue">)&nbsp;</span>
							<span className="code_editor__line--purple">&#123;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkgreen">
								&#47;&#47; Update the variable 'content' to "Available Hint here!"
							</span>
						</div>

						<div className="code_editor__line code_editor__line-background--light">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--blue">content</span>
							<span>&nbsp;=&nbsp;</span>
							<span className="code_editor__line--orange">'</span>
							<span>
								<input type="text" defaultValue={correctMessage} ref={this.correctMessage} />
							</span>
							<span className="code_editor__line--orange">'</span>
							<span>;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--purple">&#125;&nbsp;</span>
							<span className="code_editor__line--blue">else</span>
							<span className="code_editor__line--purple">&nbsp;&#123;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkgreen">
								&#47;&#47; Otherwise, update the variable 'content' to "No Available Hint yet..."
							</span>
						</div>

						<div className="code_editor__line code_editor__line-background--light">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--blue">content</span>
							<span>&nbsp;=&nbsp;</span>
							<span className="code_editor__line--orange">'</span>
							<span>
								<input type="text" defaultValue={incorrectMessage} ref={this.incorrectMessage} />
							</span>
							<span className="code_editor__line--orange">'</span>
							<span>;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--purple">&#125;&nbsp;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--purple">return</span>
							<span className="code_editor__line--blue">&nbsp;(</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkblue">&#60;</span>
							<span className="code_editor__line--darkblue">div</span>
							<span className="code_editor__line--darkblue">&#62;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span>&#123;&nbsp;</span>
							<span className="code_editor__line--blue">isExtended</span>
							<span>&nbsp;?&nbsp;</span>
							<span>(</span>
							<span className="code_editor__line--blue">hint</span>
							<span>&nbsp;?&nbsp;</span>
							<span className="code_editor__line--blue">hint</span>
							<span>&nbsp;:&nbsp;</span>
							<span className="code_editor__line--orange">"No hint"</span>
							<span>)</span>
							<span>&nbsp;:&nbsp;</span>
							<span className="code_editor__line--blue">content</span>
							<span>&nbsp;&#125;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--darkblue">&#60;</span>
							<span className="code_editor__line--darkblue">/div</span>
							<span className="code_editor__line--darkblue">&#62;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span className="code_editor__line--blue">)</span>
							<span>;</span>
						</div>

						<div className="code_editor__line">
							<span>&nbsp;&nbsp;</span>
							<span className="code_editor__line--purple">&#125;</span>
						</div>

						<div className="code_editor__line">
							<span className="code_editor__line--purple">&#125;</span>
						</div>

						<div className="code_editor__line">&nbsp;</div>

						<div className="code_editor__line">
							<span className="code_editor__line--purple">export&nbsp;</span>
							<span className="code_editor__line--purple">default&nbsp;</span>
							<span className="code_editor__line--blue">HintBox</span>
							<span>;</span>
						</div>
					</div>

					<div className={cssFileCodeClasses}>
						<div className="code_editor__line">
							<span className="code_editor__line--darkgreen">
								&#47;&#47; This is where you can change the hint box's styling.
							</span>
						</div>
						<p className="code_editor__class">.available_hint &#123;</p>
						<div className="code_editor__form">
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">
									&#47;&#47; Changes the background of the box with an available hint.
								</span>
							</div>
							<div className="code_editor__property code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span>background-color:&nbsp;</span>
							</div>
							<div className="code_editor__input">
								<button
									onClick={this.toggleCorrectBackgroundColorPopup.bind(this)}
									style={{ backgroundColor: correctBackgroundColor }}
								/>
								<Conditional if={correctBackgroundColorPopup}>
									<div className="code_editor__color_selector">
										<SketchPicker
											color={correctBackgroundColor}
											onChangeComplete={this.changeCorrectBackgroundColor.bind(this)}
										/>
									</div>
								</Conditional>
							</div>
						</div>
						<p className="code_editor__class">&#125;</p>

						<p className="code_editor__class">.unavailable_hint&#123;</p>
						<div className="code_editor__form">
							<div className="code_editor__line">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span className="code_editor__line--darkgreen">
									&#47;&#47; Changes the background of the box with an unavailable hint.
								</span>
							</div>
							<div className="code_editor__property code_editor__line-background--light">
								<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span>background-color:&nbsp;</span>
							</div>
							<div className="code_editor__input">
								<button
									onClick={this.toggleIncorrectBackgroundColorPopup.bind(this)}
									style={{ backgroundColor: incorrectBackgroundColor }}
								/>
								<Conditional if={incorrectBackgroundColorPopup}>
									<div className="code_editor__color_selector">
										<SketchPicker
											color={incorrectBackgroundColor}
											onChangeComplete={this.changeIncorrectBackgroundColor.bind(this)}
										/>
									</div>
								</Conditional>
							</div>
						</div>
						<p className="code_editor__class">&#125;</p>
					</div>

					<button
						onClick={this.handleSubmit.bind(this)}
						type="submit"
						className="button button--green button--block"
					>
						Update
					</button>

					<Conditional if={incorrectBackgroundColorPopup}>
						<div
							className="code_editor__color_selector_background"
							onClick={this.toggleIncorrectBackgroundColorPopup.bind(this)}
						/>
					</Conditional>

					<Conditional if={correctBackgroundColorPopup}>
						<div
							className="code_editor__color_selector_background"
							onClick={this.toggleCorrectBackgroundColorPopup.bind(this)}
						/>
					</Conditional>
				</div>

				<div className="code_editor__background" onClick={this.closeCodeEditor.bind(this)} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
