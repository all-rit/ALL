import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import { actions } from "../../../../reducers/lab10/ExerciseReducer"

class BuildingAICodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName: "BuildingAICodeBlock",
    };
  }

  /** handleValueChange(e) {
    const { actions } = this.props;
    actions.updateMoveRightValue(e.target.value);
  }

   updateMoveLeftValue(e) {

   }

  updateMoveRightValue(e) {

  }

*/
  render() {
    return (
      <div className="code_editor">
        <div className="code_editor__content">
          <div className="code_editor__files">
            {/* AutoSysAI.js */}
            <div className="code_editor__file code_editor__file--active">
              MoveUser.js
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
              <span className="code_editor__line--green">MoveUser&nbsp;</span>
              <span className="code_editor__line--blue">extends&nbsp;</span>
              <span className="code_editor__line--green">Component&nbsp;</span>
              <span className="code_editor__line--gold">&#123;</span>
            </div>

            {/* makeDecision(){ */}
            <div className="code_editor__line">
              {/* AI function comment */}
              <span className="code_editor__line--darkgreen">
                &#47;&#47; Here is where you will update the code to allow the
                user to move the person
              </span>
            </div>
            <div className="code_editor__line">
              {/* AI function comment */}
              <span className="code_editor__line--darkgreen">
                &#47;&#47; left and right in order to avoid the incoming falling
                balls
              </span>
            </div>
            <div className="code_editor__line">{/* AI function comment */}</div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">moveUser</span>
              <span className="code_editor__line--purple">(</span>
              <span className="code_editor__line--blue">&nbsp;left</span>
              <span className="code_editor__line--white">&nbsp;,</span>
              <span className="code_editor__line--blue">&nbsp;right&nbsp;</span>
              <span className="code_editor__line--purple">) &#123;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                enter &lsquo; left &lsquo; into the first input{" "}
              </span>
            </div>
            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const </span>
              <span className={""}>moveLeft</span>
              <span className={"code_editor__line--purple"}> = </span>
              <input
                name="moveLeft"
                type="text"
                //onChange= {() => this.handleValueChange()}
                required
                title="must enter file.sensitivityLevel"
              />
              <span>;</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                enter &lsquo;right&lsquo; into the second input
              </span>
            </div>

            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const </span>
              <span className={""}>moveRight</span>
              <span className={"code_editor__line--purple"}> = </span>
              <input
                name="rightValue"
                type="text"
                // onChange= { () => this.handleValueChange()}
                required
                title="must enter threatLvl"
              />
              <span>;</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">&#125;</span>
            </div>

            <div className="code_editor__line">
              <span className="code_editor__line--gold">&#125;</span>
            </div>

            {/* export default MoveUser */}
            <div className="code_editor__line">
              <span className="code_editor__line--purple">export&nbsp;</span>
              <span className="code_editor__line--purple">default&nbsp;</span>
              <span className="code_editor__line--blue">MoveUser</span>
              <span>;</span>
            </div>
          </div>
        </div>
        <button
          // onClick={this.validateRepair.bind(this)}
          type="submit"
          className="button button--green button--block"
        >
          Update
        </button>
      </div>
    );
  }
}

export default BuildingAICodeBlock;
