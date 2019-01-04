import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CodeEditor.css';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import { CODE_BLOCK } from './CodeEditorConstants';
import {
  updateCode,
  resetCode
} from './CodeEditorActions';

const mapStateToProps = (state) => {
  return {
    firstRow: state.code.firstRow,
    secondRow: state.code.secondRow,
    thirdRow: state.code.thirdRow,
    fourthRow: state.code.fourthRow,
    fifthRow: state.code.fifthRow,
  };
};

const mapDispatchToProps = {
  updateCode,
  resetCode
};

class CodeEditor extends Component {
  componentDidMount() {
    this.editor.markText({line: 0, ch: 0}, {line: 8, ch: 0}, {readOnly: true});
    this.editor.markText({line: 9, ch: 0}, {line: 10, ch: 0}, {readOnly: true});
    this.editor.markText({line: 11, ch: 0}, {line: 12, ch: 0}, {readOnly: true});
    this.editor.markText({line: 15, ch: 0}, {line: 25, ch: 0}, {readOnly: true});
    this.editor.focus();
    this.editor.setCursor({line: 8, ch: 4});

    this.editor.on('update', () => {
      this.props.updateCode(
        this.editor.getLine(8),
        this.editor.getLine(10),
        this.editor.getLine(12),
        this.editor.getLine(13),
        this.editor.getLine(14));
    });
  }

  handleClick() {
    this.props.closeHandler();
  }

  getInstance = (instance) => {
    if (instance) {
      this.codemirror = instance.codemirror;
      this.editor = instance.editor;
    }
  }

  render() {
    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__file">HintBox.js</div>

          <CodeMirror value={CODE_BLOCK}
                      ref={this.getInstance}
                      options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                      }} />

          <div className="code_editor__buttons">
            <button onClick={this.handleClick.bind(this)}>Cancel</button>
            <button className="code_editor__update">Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);
