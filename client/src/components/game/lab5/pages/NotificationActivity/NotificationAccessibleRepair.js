import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../components/PageServiceTimer";
import Notification from "../../components/Notification"
import {AccessibleRepairMessage} from '../../../../../constants/lab5'

class NotificationAccessibleRepair extends Component {
    handleNav() {
        navigate("/Lab5/Game/NotificationAccessibleRepairKnowledgeCheck");
    }
    render() {
        const {actions, state} = this.props;
        return (

                <div>
                    <div className= "cognitive_instructions">
                    There is a notification that has appeared. Click on it to view it! Note it can only be viewed once
                    </div>
                    <Notification message={AccessibleRepairMessage} fontSize={state.repair5.fontsizevalue} timeout={state.repair5.timeout}/>
                    <div className='flex float-right'>
                        <button
                            className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
                            onClick = {this.handleNav}
                            key="next"
                        >
                            Next
                        </button>
                    </div>
                    <PageServiceTimer actions={actions} name={this.constructor.name}/>
                </div>
        );
    }
}

export default NotificationAccessibleRepair;
