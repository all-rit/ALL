/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component, Fragment} from "react";
import Popup from "../../../shared/Popup";
import {navigate} from "@reach/router";
import Code from "../../components/Code";
import {LOCKED_FILE} from "../../../../../constants/lab7";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as repairActions} from "../../../../../reducers/lab7/RepairReducer";
import {actions as appActions} from "../../../../../reducers/lab7/AppReducer";

class AICodeRepair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "AICodeRepair",
        };
    }

    handleNav() {
        navigate("/Lab7/Exercise/ImprovedAISimulation");
    }

    updateMakeDecision(threatLvl, file) {
        return LOCKED_FILE;
    }

    handleSubmit() {

    }

    render() {
        const {visible, popupMessage, actions, repairError} = this.props;
        return (
            <div>
                <Fragment>
                    <div className="center-div">
                        <div className="guidance margin-bottom-2">
                            <p className="playthrough__sentence">
                                Since we have identified the component of the AI that is
                                impacting its decision-making, let&lsquo;s take a look into the
                                AI and see how it can be improved.
                            </p>
                            <p className="playthrough__sentence">
                                In this part of the exercise, you will be guided in changing the
                                AI code to improve the accuracy of the autonomous file access
                                system.
                            </p>
                        </div>
                        <p className="playthrough__sentence">
                            Click the &lsquo;Repair&lsquo; button to view and edit the code of
                            the autonomous system.
                        </p>
                    </div>
                </Fragment>
                <Popup message={popupMessage} handler={actions.updatePopup} error={repairError}/>
                <button
                    className="btn btn-second btn-xl text-uppercase leftButton"
                    onClick={actions.openRepair}
                    key="repair"
                >
                    Repair
                </button>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleNav}
                    key="Next"
                    disabled={repairError}
                >
                    Next
                </button>
                {visible && <Code/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {popupMessage} = state.app7;
    const {repairError} = state.repair7;
    return {popupMessage, repairError};
};

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators({...repairActions, ...appActions}, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(AICodeRepair);
