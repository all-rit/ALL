import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import './HintBox.css';

import { HINT_BOX_CLOSED, HINT_BOX_OPEN, HINT_BOX_THINKING } from '../GameConstants';
import { CODE_BLOCK_ANSWER2, CODE_BLOCK_ANSWER3 } from '../../codeeditor/CodeEditorConstants';
import Conditional from '../../helpers/Conditional';

const mapStateToProps = (state) => {
  return {
    firstRow: state.code.firstRow,
    secondRow: state.code.secondRow,
    thirdRow: state.code.thirdRow,
    correctBackgroundColor: state.code.correctBackgroundColor,
    incorrectBackgroundColor: state.code.incorrectBackgroundColor
  };
};

class HintBox extends Component {
  handleClick() {
    this.props.onClickHandler();
  }

  render() {
    const { hint, state, secondRow, thirdRow, correctBackgroundColor, incorrectBackgroundColor } = this.props;
    const classes = classNames({
      hint_box: true,
      'hint_box--open': (state === HINT_BOX_OPEN)
    });
    let hintMessage = "?";
    let noHintMessage = "?";

    if (secondRow !== CODE_BLOCK_ANSWER2) {
      hintMessage = secondRow.match(/'([^']+)'/)[1];
    }

    if (thirdRow !== CODE_BLOCK_ANSWER3) {
      noHintMessage = thirdRow.match(/'([^']+)'/)[1];
    }

    return (
      <div className={classes} onClick={this.handleClick.bind(this)}>
        <Conditional if={state === HINT_BOX_CLOSED}>
          <Conditional if={hint}>
            <div className="hint_box__background" style={{backgroundColor: correctBackgroundColor}}>
            { hintMessage }
            </div>
          </Conditional>

          <Conditional if={!hint}>
            <div className="hint_box__background" style={{backgroundColor: incorrectBackgroundColor}}>
              { noHintMessage }
            </div>
          </Conditional>
        </Conditional>

        <Conditional if={state === HINT_BOX_THINKING}>
          <BeatLoader
            sizeUnit={"px"}
            size={10}
          />
        </Conditional>

        <Conditional if={state === HINT_BOX_OPEN}>
          <Conditional if={hint}>
            { hint }
          </Conditional>

          <Conditional if={!hint}>
            No Hint.
          </Conditional>
        </Conditional>
      </div>
    );
  }
}

export default connect(mapStateToProps)(HintBox);
