import React from "react";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../../reducers/lab10/ExerciseReducer";
import { connect } from "react-redux";

const AIWeightCodeBlock = () => {
  return (
    <div className="code_editor">
      <div className="code_editor__content">
        <div className="code_editor__files">
          {/* AIColorBlockWeight.js */}
          <div className="code_editor__file code_editor__file--active">
            AIColorBlockWeight.js
          </div>
        </div>

        {/* import React, Component from react */}
        <div className="code_editor__code">
          <div className="code_editor__line">
            <span className="code_editor__line--purple">import&nbsp;</span>
            <span className="code_editor__line--blue">React</span>
            <span className="code_editor__line--gold">,&nbsp;</span>
            <span className="code_editor__line--gold">&#123;</span>
            <span className="code_editor__line--blue">
              &nbsp;Component&nbsp;
            </span>
            <span className="code_editor__line--gold">&#125;&nbsp;</span>
            <span className="code_editor__line--purple">from&nbsp;</span>
            <span className="code_editor__line--orange">
              &lsquo;react&lsquo;
            </span>
            <span className="code_editor__line--gold">;</span>
          </div>

          <div className="code_editor__line">&nbsp;</div>

          {/* class AutoSysAI extends Component*/}
          <div className="code_editor__line">
            <span className="code_editor__line--blue">class&nbsp;</span>
            <span className="code_editor__line--green">AutoSysAI&nbsp;</span>
            <span className="code_editor__line--blue">extends&nbsp;</span>
            <span className="code_editor__line--green">Component&nbsp;</span>
            <span className="code_editor__line--gold">&#123;</span>
          </div>

          {/* makeDecision(){ */}
          <div className="code_editor__line">
            {/* AI function comment */}
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Here is where you will update the equation to improve
              the AI&lsquo;s accuracy
            </span>
          </div>
          <div className="code_editor__line">
            {/* AI function comment */}
            <span className="code_editor__line--darkgreen">
              &#47;&#47; Feel free to add other math operations to improve its
              accuracy
            </span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;</span>
            <span className="code_editor__line--yellow">makeDecision</span>
            <span className="code_editor__line--purple">(</span>
            <span className="code_editor__line--blue">&nbsp;file</span>
            <span className="code_editor__line--white">&nbsp;,</span>
            <span className="code_editor__line--blue">
              &nbsp;threatLvl&nbsp;
            </span>
            <span className="code_editor__line--purple">) &#123;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--darkgreen">
              enter &lsquo;file.sensitivityLevel&lsquo; into the first input{" "}
            </span>
          </div>
          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span className={""}>rewardValue</span>
            <span className={"code_editor__line--purple"}> = </span>

            <span>;</span>
          </div>

          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--darkgreen">
              enter &lsquo;threatLvl&lsquo; into the second input
            </span>
          </div>
          <div className="code_editor__line code_editor__line-background--light">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span className={""}>costValue</span>
            <span className={"code_editor__line--purple"}> = </span>
            <span>;</span>
          </div>

          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className={"code_editor__line--purple"}>const </span>
            <span>utility</span>
            <span className={"code_editor__line--purple"}> = </span>
            <span>
              rewardValue <span className={"code_editor__line--purple"}>/</span>{" "}
              costValue;
            </span>
          </div>
          {/* return() */}
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="code_editor__line--purple">return </span>
            <span>utility;</span>
          </div>
          <div className="code_editor__line">
            <span>&nbsp;&nbsp;</span>
            <span className="code_editor__line--purple">&#125;</span>
          </div>

          <div className="code_editor__line">
            <span className="code_editor__line--gold">&#125;</span>
          </div>

          {/* export default AutoSysAI */}
          <div className="code_editor__line">
            <span className="code_editor__line--purple">export&nbsp;</span>
            <span className="code_editor__line--purple">default&nbsp;</span>
            <span className="code_editor__line--blue">AutoSysAI</span>
            <span>;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AIWeightCodeBlock);
