/* eslint-disable no-unused-vars */

import React from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AIWeightCodeBlock = (props) => {
  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* ColorWeight.json*/}
          <div className="code_editor__file code_editor__file--active">
            ColorWeight.json
          </div>
        </div>

        <div className="code_editor__code">
          <div className="code_editor__line--darkgreen">
            &#47;&#47; Below you will see the accrued weights from the previous
            exercise
          </div>
          <div className="code_editor__line--darkgreen">
            &#47;&#47; based on the color of blocks that hit your character
          </div>
          <div className="code_editor__line--blue">&#123;</div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;</span>
            <span className="code_editor__line--green">
              &ldquo;weights&rdquo;
            </span>
            <span className="code_editor__line--white">: </span>
            <span className="code_editor__line--blue">[</span>
          </div>

          <div className="code_editor__line"></div>
          <div id={""} className="code_editor__line">
            <span className="code_editor__line">
              {Object.entries(props.weights).map(([key, value]) => {
                return (
                  <div key={key}>
                    <span className="code_editor__line--green">
                      &nbsp;&nbsp;&nbsp;&nbsp; &ldquo;{key}&rdquo;
                    </span>
                    <span className="code_editor__line--white"> : </span>
                    <span className="code_editor__line--orange"> {value}</span>
                    <span className="code_editor__line--white">, </span>
                  </div>
                );
              })}
            </span>
          </div>
          <div className="code_editor__line--blue">&nbsp;&nbsp;]</div>
          <div className="code_editor__line">
            <span className="code_editor__line--blue">&#125;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AIWeightCodeBlock.propTypes = {
  weights: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { weights } = state.exercise10;
  return { weights };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AIWeightCodeBlock);
