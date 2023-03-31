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

          {/* import React, Component, useState, useEffect from react */}
          <div className="code_editor__code">
            <div className="code_editor__line">
              <span className="code_editor__line--purple">import&nbsp;</span>
              <span className="code_editor__line--blue">React</span>
              <span className="code_editor__line--gold">,&nbsp;</span>
              <span className="code_editor__line--gold">&#123;</span>
              <span className="code_editor__line--blue"> Component, useState, useEffect </span>
              <span className="code_editor__line--gold">&#125;&nbsp;</span>
              <span className="code_editor__line--purple">from&nbsp;</span>
              <span className="code_editor__line--orange">
                &lsquo;react&lsquo;
              </span>
              <span className="code_editor__line--gold">;</span>
            </div>

            <div className="code_editor__line">&nbsp;</div>

            {/* class MoveUser extends Component*/}
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
              <span className="code_editor__line--purple">) &#123;</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const</span>
              <span className={""}> [position, setPosition] = </span>
              <span className="code_editor__line--blue">useState</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">0</span>
              <span className={""}>)</span>
              <span className={""}>;</span>
            </div>

            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--yellow">useEffect(</span>
              <span className={""}>()  </span>
              <span className="code_editor__line--blue"> =&gt; </span>
              <span className={""}> &#123; </span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>const </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={"tw-border-white"}> = (</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>) =&gt; &#123;</span>
            </div>
            <div>
              <span className="code_editor__line--darkgreen">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Enter &lsquo;ArrowLeft&lsquo; into the input below {" "}
              </span>
            </div>
            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={"code_editor__line--purple"}>if </span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">code</span>
              <span className={""}> === </span>
              <input
                name="moveLeft"
                type="text"
                required
                title="must enter ArrowLeft"
              />
              <span>) &#123;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--orange">setPosition</span>
              <span className={""}> ((</span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}>) =&gt; </span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}> - </span>
              <span className="code_editor__line--orange">10</span>
              <span className={""}>);</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--darkgreen">
                Enter &lsquo;ArrowRight&lsquo; into the input below.
              </span>
            </div>

            <div className="code_editor__line code_editor__line-background--light">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className={""}>&#125; </span>
              <span className={"code_editor__line--purple"}>else if </span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">event</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">code</span>
              <span className={""}> === </span>
              <input
                name="moveLeft"
                type="text"
                required
                title="must enter ArrowLeft"
              />
              <span>) &#123;</span>

              <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--orange">setPosition</span>
              <span className={""}> ((</span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}>) =&gt; </span>
              <span className="code_editor__line--blue">prevPosition</span>
              <span className={""}> + </span>
              <span className="code_editor__line--orange">10</span>
              <span className={""}>);</span>
            </div>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&#125;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&#125;;</span>
            </div>
            <div className="code_editor__line">
              <span className={"form-error"}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--gold">document</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">addEventListener</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">&apos;keydown&apos;</span>
              <span className={""}>, </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={""}>);</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--purple">return </span>
              <span className={""}>() =&gt; &#123;</span>
            </div>
            <div className={"code_editor__line"}>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="code_editor__line--gold">document</span>
              <span className={""}>.</span>
              <span className="code_editor__line--blue">removeEventListener</span>
              <span className={""}>(</span>
              <span className={""}>(</span>
              <span className="code_editor__line--orange">&apos;keydown&apos;</span>
              <span className={""}>, </span>
              <span className="code_editor__line--blue">handleKey</span>
              <span className={""}>);</span>
            </div>
            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="">&#125;;</span>
            </div>

            <div className="code_editor__line">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
