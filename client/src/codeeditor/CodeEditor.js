import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux';
import './CodeEditor.css';

import { CODE_BLOCK1, CODE_BLOCK2, CODE_BLOCK3, CODE_BLOCK4 } from './CodeEditorConstants';
import {
  updateCode,
  resetCode
} from './CodeEditorActions';

const mapStateToProps = (state) => {
  return {
    firstRow: state.code.firstRow,
    secondRow: state.code.secondRow,
    thirdRow: state.code.thirdRow
  };
};

const mapDispatchToProps = {
  updateCode,
  resetCode
};

class CodeEditor extends Component {
  constructor(props) {
    super(props);

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

  render() {
    const { firstRow, secondRow, thirdRow } = this.props;

    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="code_editor__file">HintBox.js</div>

            <div className="code_editor__code">
              <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK1} readOnly></TextareaAutosize>
              <input type="text" defaultValue={firstRow} ref={this.firstRow} />
              <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK2} readOnly></TextareaAutosize>
              <input type="text" defaultValue={secondRow} ref={this.secondRow} />
              <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK3} readOnly></TextareaAutosize>
              <input type="text" defaultValue={thirdRow} ref={this.thirdRow} />
              <TextareaAutosize className="code_editor__code_block" value={CODE_BLOCK4} readOnly></TextareaAutosize>
            </div>

            <div className="code_editor__buttons">
              <button type="submit" className="code_editor__update">Update</button>
            </div>
          </form>
        </div>

        <div className="code_editor__background" onClick={this.handleClick.bind(this)}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
