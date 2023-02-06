/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component, Fragment} from "react";
import RepairService from "../../../../../services/lab7/RepairService";
import Popup from "../../../shared/Popup";
import {navigate} from "@reach/router";
import Code from "../../components/Code";

class AICodeRepair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "AICodeRepair",
        };
    }

    UNSAFE_componentWillMount() {
        const {state} = this.props;
        this.setState({
            rewardvalue: state.repair7.rewardvalue,
            costvalue: state.repair7.costvalue,
        });
    }

    handleNav() {
        navigate("/Lab7/Exercise/ImprovedAISimulation");
    }

    render() {
        const {visible, state, handlers} = this.props;
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

                <Popup
                    message={state.app7.popupMessage}
                    handler={handlers.updatePopup}
                    error={this.state.repairerror}
                />

                <button
                    className="btn btn-second btn-xl text-uppercase leftButton"
                    onClick={handlers.openRepair}
                    key="repair"
                >
                    Repair
                </button>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleNav}
                    key="Next"
                    disabled={this.state.repairerror}
                >
                    Next
                </button>

                {visible && <Code handlers={handlers} state={state}/>}
            </div>
        );
    }
}

export default AICodeRepair;
