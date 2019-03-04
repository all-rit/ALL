import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { SketchPicker } from 'react-color';
import './CodeEditor.css';

import { CODE_BLOCK1, CODE_BLOCK2, CODE_BLOCK3, CODE_BLOCK4 } from './CodeEditorConstants';
import {
  updateCode,
  updateCorrectBackground,
  updateIncorrectBackground,
  resetCode,
  updateTab
} from './CodeEditorActions';
import Conditional from '../helpers/Conditional';

const mapStateToProps = (state) => {
  return {
    firstRow: state.code.firstRow,
    secondRow: state.code.secondRow,
    thirdRow: state.code.thirdRow,
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
  resetCode,
  updateTab
};

class CodeEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctBackgroundColorPopup: false,
      incorrectBackgroundColorPopup: false
    };
    this.firstRow = React.createRef();
    this.secondRow = React.createRef();
    this.thirdRow = React.createRef();
  }

  handleClick() {
    this.props.closeHandler();
  }

  handleSubmit(event) {
    event.preventDefault();

    const { updateCode } = this.props;

    updateCode(this.firstRow.current.value, this.secondRow.current.value, this.thirdRow.current.value);
    this.props.closeHandler();
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

  render() {
    const { firstRow, secondRow, thirdRow, correctBackgroundColor, incorrectBackgroundColor, currentTab, updateTab } = this.props;
    const { correctBackgroundColorPopup, incorrectBackgroundColorPopup } = this.state;
    const jsFileClasses = classNames({
      'code_editor__file': (currentTab === 2),
      'code_editor__file_active': (currentTab === 1)
    });
    const cssFileClasses = classNames({
      'code_editor__file': (currentTab === 1),
      'code_editor__file_active': (currentTab === 2)
    });

    return (
      <div className="code_editor">
        <div className="code_editor__content">
            <div className="code_editor__files">
              <div onClick={updateTab.bind(this, 1)} className={jsFileClasses}>HintBox.js</div>
              <div onClick={updateTab.bind(this, 2)} className={cssFileClasses}>HintBox.css</div>
            </div>

            <Conditional if={currentTab === 1}>
              <div className="code_editor__code">
                <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK1} readOnly></TextareaAutosize>
                <input type="text" defaultValue={firstRow} ref={this.firstRow} />
                <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK2} readOnly></TextareaAutosize>
                <input type="text" defaultValue={secondRow} ref={this.secondRow} />
                <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK3} readOnly></TextareaAutosize>
                <input type="text" defaultValue={thirdRow} ref={this.thirdRow} />
                <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK4} readOnly></TextareaAutosize>
              </div>
            </Conditional>

            <Conditional if={currentTab === 2}>
              <div className="code_editor__code">
                <p className="code_editor__class"><b>.code_editor__correct_answer</b> &#123;</p>
                <div className="code_editor__form">
                  <div className="code_editor__property">background-color: </div>
                  <div className="code_editor__input">
                    <button onClick={this.toggleCorrectBackgroundColorPopup.bind(this)} style={{ backgroundColor: correctBackgroundColor }}></button>
                    <Conditional if={correctBackgroundColorPopup}>
                      <div className="code_editor__color_selector">
                        <SketchPicker color={correctBackgroundColor}
                                      onChangeComplete={this.changeCorrectBackgroundColor.bind(this)} />
                      </div>
                    </Conditional>
                  </div>
                </div>
                <p className="code_editor__class">&#125;</p>

                <p className="code_editor__class"><b>.code_editor__incorrect_answer</b> &#123;</p>
                <div className="code_editor__form">
                  <div className="code_editor__property">background-color: </div>
                  <div className="code_editor__input">
                    <button onClick={this.toggleIncorrectBackgroundColorPopup.bind(this)} style={{ backgroundColor: incorrectBackgroundColor }}></button>
                    <Conditional if={incorrectBackgroundColorPopup}>
                      <div className="code_editor__color_selector">
                        <SketchPicker color={incorrectBackgroundColor}
                                      onChangeComplete={this.changeIncorrectBackgroundColor.bind(this)} />
                      </div>
                    </Conditional>
                  </div>
                </div>
                <p className="code_editor__class">&#125;</p>
              </div>
            </Conditional>

            <div className="code_editor__buttons">
              <button type="submit" className="code_editor__update">Update</button>
            </div>

          <Conditional if={incorrectBackgroundColorPopup}>
            <div className="code_editor__color_selector_background" onClick={this.toggleIncorrectBackgroundColorPopup.bind(this)}>
            </div>
          </Conditional>

          <Conditional if={correctBackgroundColorPopup}>
            <div className="code_editor__color_selector_background" onClick={this.toggleCorrectBackgroundColorPopup.bind(this)}>
            </div>
          </Conditional>
        </div>

        <div className="code_editor__background" onClick={this.handleClick.bind(this)}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
