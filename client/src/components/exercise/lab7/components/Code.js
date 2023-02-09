/* eslint-disable react/prop-types */
import React, {Component} from "react";
import RepairService from "../../../../services/lab7/RepairService";
import {bindActionCreators} from "redux";
import {actions as repairActions} from "../../../../reducers/lab7/RepairReducer";
import {actions as appActions} from "../../../../reducers/lab7/AppReducer";
import {connect} from "react-redux";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "AICodeRepair",
        };
    }

    validateRepair() {
        const {rewardValue, costValue, actions,} = this.props;
        let repairError = false;
        if (rewardValue !== "file.getSensitivityLvl") {
            repairError = true;
            actions.updateRewardError("Must be file.getSensitivityLvl");
        } else {
            actions.updateRewardError(null);
        }

        if (costValue !== "threatLvl") {
            repairError = true;
            actions.updateCostError("Must be 'threatLvl'");
        } else {
            actions.updateCostError(null);
        }

        actions.updateRepairError(repairError);
        this.handleSubmit(repairError);
    }

    handleSubmit(repairError) {
        const {actions, rewardValue, costValue} = this.props;
        if (!repairError) {
            const repair = JSON.stringify({rewardValue, costValue});
            RepairService.submitRepair(this.state.componentName, repair);
            actions.updatePopup("The repairs have been made.");
        } else {
            actions.updatePopup("Errors in Repair. Please fix");
        }
        actions.updateRepairEquation(rewardValue, costValue);
        actions.closeRepair();
        setTimeout(() => {
            actions.updatePopup("");
        }, 6000);
    }

    handleRewardValueChange(e) {
        const {actions} = this.props;
        actions.updateRewardValue(e.target.value);
    }

    handleCostValueChange(e) {
        const {actions} = this.props;
        actions.updateCostValue(e.target.value);
    }

    render() {
        const {rewardValue, costValue} = this.props;
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
                &#47;&#47; This is where you can change the equation that the AI
                makes decisions with to improve its accuracy.
              </span>
                        </div>

                        {/* import React, Component from react */}
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
                            <span>&nbsp;&nbsp;</span>
                            <span className="code_editor__line--yellow">makeDecision</span>
                            <span className="code_editor__line--purple">(</span>
                            <span className="code_editor__line--blue">&nbsp;file</span>
                            <span className="code_editor__line--white">&nbsp;,</span>
                            <span className="code_editor__line--blue">&nbsp;threatLvl</span>
                            <span className="code_editor__line--purple">) &#123;</span>
                        </div>

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--blue">file</span>
                            <span className="code_editor__line--white">.</span>
                            <span className="code_editor__line--yellow">changeAccess()</span>
                            <span className="code_editor__line--white">;</span>
                        </div>

                        <div className="code_editor__line">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="code_editor__line--darkgreen">
                enter &lsquo;file.getSensitivityLvl&lsquo; into the first input{" "}
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
                                className={`htmlinput ${rewardValue ? "form-error-input" : ""}`}
                                defaultValue={rewardValue}
                                onChange={this.handleRewardValueChange.bind(this)}
                                required
                                title="must enter file.getSensitivityLvl"
                            />
                            <span className="code_editor__line--white"> / </span>
                            <input
                                name="costvalue"
                                type="text"
                                className={`htmlinput ${costValue ? "form-error-input" : ""}`}
                                defaultValue={costValue}
                                onChange={this.handleCostValueChange.bind(this)}
                                required
                                title="must enter threatLvl"
                            />
                            <span className="code_editor__line--white"> )</span>
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
                <button
                    onClick={this.validateRepair.bind(this)}
                    type="submit"
                    className="button button--green button--block"
                >
                    Update
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {rewardValue, costValue, repairError} = state.repair7;
    return {rewardValue, costValue, repairError};
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...repairActions, ...appActions}, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Code);
