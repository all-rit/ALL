/* eslint-disable react/prop-types */
import React, {Component} from "react";
import RepairService from "../../../../services/lab7/RepairService";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rewardvalue: null,
            costvalue: null,
            rewarderror: null,
            costerror: null,
            repairerror: true,
        }
    }

    validateRepair(input) {
        let error = false;
        Object.keys(this.state).map((name) => {
            switch (name) {
                case "rewardvalue":
                    if (this.state[name] !== "file.getSensitivityLvl") {
                        error = true;
                        this.setState({rewarderror: "Must be file.getSensitivityLvl"});
                    } else {
                        this.setState({rewarderror: null});
                    }
                    break;
                case "costvalue":
                    if (this.state[name] !== "threatLvl") {
                        error = true;
                        this.setState({costerror: "Must be 'threatLvl'"});
                    } else {
                        this.setState({costerror: null});
                    }
                    break;
                default:
                    break;
            }
            return [];
        });
        this.setState({repairerror: error}, () => this.handleSubmit(input));
    }

    handleSubmit(event) {
        const {handlers} = this.props;
        const {rewardvalue, costvalue} = this.state;

        event.preventDefault();
        if (!this.state.repairerror) {
            const repair = JSON.stringify({
                rewardvalue,
                costvalue,
            });
            RepairService.submitRepair(this.state.componentName, repair);
            handlers.updatePopup("The repairs have been made.");
        } else {
            handlers.updatePopup("Errors in Repair. Please fix");
        }
        handlers.updateRepairEquation(rewardvalue, costvalue);
        handlers.closeRepair();
        setTimeout(() => {
            handlers.updatePopup("");
        }, 6000);
    }

    changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {state} = this.props;
        return (
            <div className="code_editor">
                <div className="code_editor__content">
                    <div className="code_editor__files">
                        {/* AutoSysAI.js */}
                        <div className="code_editor__file code_editor__file--active">
                            AutoSysAI.js
                        </div>
                        {/* psuedocode */}
                        {/* <div className="code_editor__file code_editor__file--inactive">
									Psuedocode
								</div> */}
                    </div>

                    <div className="code_editor__code">
                        <div className="code_editor__line">
                            {/* AI file description comment */}
                            <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can change the equation that
                    the AI makes decisions with to improve its accuracy.
                  </span>
                        </div>

                        {/* import React, Component from react */}
                        <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
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
                            <span className="code_editor__line--green">
                    AutoSysAI&nbsp;
                  </span>
                            <span className="code_editor__line--blue">extends&nbsp;</span>
                            <span className="code_editor__line--green">
                    Component&nbsp;
                  </span>
                            <span className="code_editor__line--gold">&#123;</span>
                        </div>

                        {/* makeDecision(){ */}
                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;</span>
                            <span className="code_editor__line--yellow">
                    makeDecision
                  </span>
                            <span className="code_editor__line--purple">(</span>
                            <span className="code_editor__line--blue">&nbsp;file</span>
                            <span className="code_editor__line--white">&nbsp;,</span>
                            <span className="code_editor__line--blue">
                    &nbsp;threatLvl
                  </span>
                            <span className="code_editor__line--purple">) &#123;</span>
                        </div>

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--blue">file</span>
                            <span className="code_editor__line--white">.</span>
                            <span className="code_editor__line--yellow">
                    changeAccess()
                  </span>
                            <span className="code_editor__line--white">;</span>
                        </div>

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
                    enter &lsquo;file.getSensitivityLvl&lsquo; into the first
                    input{" "}
                  </span>
                        </div>

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
                    enter &lsquo;threatLvl&lsquo; into the second input
                  </span>
                        </div>

                        {/* return() */}
                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--purple">return </span>
                            <span className="code_editor__line--white">( </span>
                            <input
                                name="rewardvalue"
                                type="text"
                                className={`htmlinput ${
                                    this.state.rewardvalue ? "form-error-input" : ""
                                }`}
                                defaultValue={state.repair7.rewardvalue}
                                onChange={this.changeHandler.bind(this)}
                                required
                                title="must enter file.getSensitivityLvl"
                            />
                            <span className="code_editor__line--white"> / </span>
                            <input
                                name="costvalue"
                                type="text"
                                className={`htmlinput ${
                                    this.state.costvalue ? "form-error-input" : ""
                                }`}
                                defaultValue={state.repair7.costvalue}
                                onChange={this.changeHandler.bind(this)}
                                required
                                title="must enter threatLvl"
                            />
                            <span className="code_editor__line--white"> )</span>
                        </div>

                        {this.state.h1error && (
                            <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                                <span className="form-error">{this.state.h1error}</span>
                            </div>
                        )}

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;</span>
                            <span className="code_editor__line--purple">&#125;</span>
                        </div>

                        <div className="code_editor__line">
                            <span className="code_editor__line--gold">&#125;</span>
                        </div>

                        {/* export default AutoSysAI */}
                        <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    export&nbsp;
                  </span>
                            <span className="code_editor__line--purple">
                    default&nbsp;
                  </span>
                            <span className="code_editor__line--blue">AutoSysAI</span>
                            <span>;</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={this.validateRepair.bind(this)}
                    type="submit"
                    className="button button--green button--block"
                >
                    Update
                </button>
            </div>
        )
    }
}

export default Code;