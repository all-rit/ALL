import React, { Component } from 'react';
import classNames from 'classnames/bind';
//import RepairService from '../../../../services/lab2/RepairService';
import { PhotoshopPicker } from "react-color";

class Repair extends Component {
	constructor(props) {
        super(props);
        this.state = {
          background: "",
          correctColor: "",
          incorrectColorOne: "",
          incorrectColorTwo: "",
          message: "",
          errorEqual: false,
          errorHex: false,
          errorLength: false,
          errorDarkBackground: false,
          backgroundPopup: false,
          correctColorPopup: false,
          incorrectColorOnePopup: false,
          incorrectColorTwoPopup: false,
          confirmPopup: false,
          numberChanged: 0,
          backgroundHelp: false,
          correctHelp: false,
          incorrectOneHelp: false,
          incorrectTwoHelp: false
        };
      }
    
      //Handles changes to the background color (updates state)
      onBackgroundChange = (color, event) => {
        this.setState({ background: color.hex });
      };
    
      //Handles the popup for changning the background color (updates state)
      onControlBackgroundPopup = event => {
        this.setState({ backgroundPopup: event });
      };
    
      //Handles changes to the correct circle color (updates state)
      onCorrectColorChange = (color, event) => {
        this.setState({ correctColor: color.hex });
      };
    
      //Handles the popup for changning the correct circle color (updates state)
      onControlCorrectPopup = event => {
        this.setState({ correctColorPopup: event });
      };
    
      //Handles changes to the first incorrect circle color (updates state)
      onIncorrectColorOne = (color, event) => {
        this.setState({ incorrectColorOne: color.hex });
      };
    
      //Handles the popup for changning the first incorrect circle color (updates state)
      onControlIncorrectPopupOne = event => {
        this.setState({ incorrectColorOnePopup: event });
      };
    
      //Handles changes to the second incorrect circle color (updates state)
      onIncorrectColorTwo = (color, event) => {
        this.setState({ incorrectColorTwo: color.hex });
      };
    
      //Handles the popup for changning second incorrect circle color (updates state)
      onControlIncorrectPopupTwo = event => {
        this.setState({ incorrectColorTwoPopup: event });
      };
    
      //Ensures none of the values entered are equal to one another
      ensureNotEqual = () => {
        const {
          background,
          correctColor,
          incorrectColorOne,
          incorrectColorTwo
        } = this.state;
        if (
          background.toUpperCase() !== correctColor.toUpperCase() &&
          background.toUpperCase() !== incorrectColorOne.toUpperCase() &&
          background.toUpperCase() !== incorrectColorTwo.toUpperCase()
        ) {
          if (
            correctColor.toUpperCase() !== incorrectColorOne.toUpperCase() &&
            correctColor.toUpperCase() !== incorrectColorTwo.toUpperCase()
          ) {
            if (
              incorrectColorOne.toUpperCase() !== incorrectColorTwo.toUpperCase()
            ) {
              return true;
            }
          }
        }
        return false;
      };
    
      checkAlert = () => {
        const {
          background,
          correctColor,
          incorrectColorOne,
          incorrectColorTwo
        } = this.state;
        let changed = 0;
        if (background !== this.props.colors[0]) {
          changed++;
        }
        if (correctColor !== this.props.colors[1]) {
          changed++;
        }
        if (incorrectColorOne !== this.props.colors[2]) {
          changed++;
        }
        if (incorrectColorTwo !== this.props.colors[3]) {
          changed++;
        }
        if (changed !== 4) {
          this.setState({ confirmPopup: true, numberChanged: changed });
          // return window.confirm(`You have only changed ${changed} of the four colors.
          //   Are you sure you would like to submit?`)
        } else {
          this.onFinalSubmit();
        }
      };
    
      //Ensures none of the colors entered are black to too close to black
      ensureNotBlack = () => {
        const {
          background,
          correctColor,
          incorrectColorOne,
          incorrectColorTwo
        } = this.state;
        var check = [
          background,
          correctColor,
          incorrectColorOne,
          incorrectColorTwo
        ];
        for (var i = 0; i < check.length; i++) {
          var color = check[i];
          color = color.slice(1, 8).toLowerCase();
          var total = 0;
          var conversion = [];
          for (var j = 0; j < color.length; j++) {
            if (48 <= color.charCodeAt(j) && color.charCodeAt(j) <= 57) {
              conversion.push(Number(color[j]));
            } else if (color.charCodeAt(j) === 97) {
              conversion.push(10);
            } else if (color.charCodeAt(j) === 98) {
              conversion.push(11);
            } else if (color.charCodeAt(j) === 99) {
              conversion.push(12);
            } else if (color.charCodeAt(j) === 100) {
              conversion.push(13);
            } else if (color.charCodeAt(j) === 101) {
              conversion.push(14);
            } else {
              conversion.push(15);
            }
          }
          var values = [];
          values.push((conversion[0] + conversion[1] / 16) * 16);
          values.push((conversion[2] + conversion[3] / 16) * 16);
          values.push((conversion[4] + conversion[5] / 16) * 16);
          total = values[0] + values[1] + values[2];
          if (total < 30) {
            return false;
          }
        }
        return true;
      };
    
      //Verifies the input by the user
      verifyInput = () => {
        if (!this.ensureNotEqual()) {
          this.setState({ errorEqual: true });
        } else if (!this.ensureNotBlack()) {
          this.setState({ errorDarkBackground: true });
        } else {
          this.checkAlert();
        }
      };
    
      onFinalSubmit = () => {
        let colors = [
          this.state.background,
          this.state.correctColor,
          this.state.incorrectColorOne,
          this.state.incorrectColorTwo
        ];
        this.props.changeDefaultColors(colors);
        this.props.changeGameColors(colors);
        this.props.closeColorChange();
      };
    
      //Submits the colors for the system
      onButtonSubmit = () => {
        this.setState({ errorLength: false });
        this.setState({ errorEqual: false });
        this.setState({ errorHex: false });
        this.setState({ errorDarkBackground: false });
        this.verifyInput();
      };
    
      //Renderer for the system
      render() {
        if (this.props.background !== "rgba(38,38,38,1)") {
          this.props.toGreyBackground();
        }
    
        // const whiteColor = {
        //   color: "white",
        //   paddingLeft: "5px"
        // };
    
        //Opens the background color change popup
        // const changeBackground = () => {
        //   this.onControlBackgroundPopup(true);
        // };
    
        //Closes the background color change popup
        const closeBackground = () => {
          this.onControlBackgroundPopup(false);
        };
    
        ///Revers the background color to the default color
        const revertBackground = () => {
          this.setState({ background: this.state.background });
          this.onControlBackgroundPopup(false);
        };
    
        //Opens the correct circle color change popup
        // const changeCorrectColor = () => {
        //   this.onControlCorrectPopup(true);
        // };
    
        //Closes the correct circle color change popup
        const closeCorrectColor = () => {
          this.onControlCorrectPopup(false);
        };
    
        ///Revers the correct circle color to the default color
        const revertCorrectColor = () => {
          this.setState({ correctColor: this.state.correctCircle });
          this.onControlCorrectPopup(false);
        };
    
        //Opens the first incorrect circle color change popup
        // const changeIncorrectColorOne = () => {
        //   this.onControlIncorrectPopupOne(true);
        // };
    
        //Closes the first incorrect color change popup
        const closeIncorrectColorOne = () => {
          this.onControlIncorrectPopupOne(false);
        };
    
        ///Revers the first incorrect circle color to the default color
        const revertIncorrectColorOne = () => {
          this.setState({ incorrectColorOne: this.state.incorrectColorOne });
          this.onControlIncorrectPopupOne(false);
        };
    
        //Opens the second incorrect circle color change popup
        // const changeIncorrectColorTwo = () => {
        //   this.onControlIncorrectPopupTwo(true);
        // };
    
        //Closes the second incorrect color change popup
        const closeIncorrectColorTwo = () => {
          this.onControlIncorrectPopupTwo(false);
        };
    
        ///Revers the second incorrect circle color to the default color
        const revertIncorrectColorTwo = () => {
          this.setState({ incorrectColorTwo: this.state.incorrectColorTwo });
          this.onControlIncorrectPopupTwo(false);
        };
    
        if (this.state.background === "") {
          this.setState({
            background: this.props.colors[0],
            correctColor: this.props.colors[1],
            incorrectColorOne: this.props.colors[2],
            incorrectColorTwo: this.props.colors[3]
          });
        }
    
		const { visible, data, handlers } = this.props;
		const jsFileClasses = classNames({
			code_editor__file: true,
			'code_editor__file--active': data.currentTab === 1
		});
		const jsFileCodeClasses = classNames({
			code_editor__code: true,
			code_editor__hide: data.currentTab === 2
		});

		if (!visible) return null;

		return (
			<div className="code_editor">
				<div className="code_editor__content">
					<div className="code_editor__files">
						<div onClick={handlers.updateTab.bind(this, 1)} className={jsFileClasses}>
							Circles.css
						</div>
					</div>

					<div className={jsFileCodeClasses}>
                        {/*Background*/}
						<div className="code_editor__line">
							<span className="code_editor__line--pink">.home</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
							&#47;&#47; Adjust this to change the background of the page
							</span>
						</div>
						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">
							&#47;&#47; background:
							</span>
                            <span>
                                <PhotoshopPicker
                                    onChangeComplete={this.onBackgroundChange}
                                    onAccept={closeBackground}
                                    onCancel={revertBackground}
                                    color={this.state.background}
                                />
                            </span>
						</div>
						<div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>
                        {/*Correct Circle One*/}
						<div className="code_editor__line">
							<span className="code_editor__line--pink">.correctCircle</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
							&#47;&#47; Adjust this to change the correct color option
							</span>
						</div>
						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">
							        color:
							</span>
                            <span>
                                <PhotoshopPicker
                                    onChangeComplete={this.onCorrectColorChange}
                                    onAccept={closeCorrectColor}
                                    onCancel={revertCorrectColor}
                                    color={this.state.correctColor}
                                />
                            </span>
						</div>
						<div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>
                        {/*Incorrect Circle One*/}
                        <div className="code_editor__line">
							<span className="code_editor__line--pink">.incorrectCircleOne</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
							&#47;&#47; Adjust this to change the correct color option
							</span>
						</div>
						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">
							        color:
							</span>
                            <span>
                                <PhotoshopPicker
                                    onChangeComplete={this.onIncorrectColorOne}
                                    onAccept={closeIncorrectColorOne}
                                    onCancel={revertIncorrectColorOne}
                                    color={this.state.incorrectColorOne}
                                />
                            </span>
						</div>
						<div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>
                        {/*Incorrect Circle Two*/}
                        <div className="code_editor__line">
							<span className="code_editor__line--pink">.incorrectCircleTwo</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
							&#47;&#47; Adjust this to change the correct color option
							</span>
						</div>
						<div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">
							    color:
							</span>
                            <span>
                                <PhotoshopPicker
                                    onChangeComplete={this.onIncorrectColorTwo}
                                    onAccept={closeIncorrectColorTwo}
                                    onCancel={revertIncorrectColorTwo}
                                    color={this.state.incorrectColorTwo} 
                                />
                            </span>
						</div>
						<div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>
                        
                        <div className="code_editor__line">
							<span className="code_editor__line--pink">.center</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">display: </span>
                            <span className="code_editor__line--white">felx;</span>
                        </div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">justify-content: </span>
                            <span className="code_editor__line--white">center;</span>
                        </div>
                        <div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>

                        <div className="code_editor__line">
							<span className="code_editor__line--pink">.header</span>
							<span className="code_editor__line--white">&#123;</span>
						</div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">font-size: </span>
                            <span className="code_editor__line--white">30px;</span>
                        </div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">display: </span>
                            <span className="code_editor__line--white">flex;</span>
                        </div>
                        <div className="code_editor__line">
							<span>&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--green">justify-content: </span>
                            <span className="code_editor__line--white">center;</span>
                        </div>
                        <div className="code_editor__line">
							<span className="code_editor__line--white">&#125;</span>
						</div>

					<button
						onClick={this.handleSubmit.bind(this)}
						type="submit"
						className="button button--green button--block"
					>
						Update
					</button>
				</div>
            </div>
		</div>
		);
	}
}

export default Repair;
