import React, { Component } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../components/PageServiceTimer";
import Notification from "../../components/Notification"
import {AccessibleMessage} from '../../../../../constants/lab5'

class NotificationAccessible extends Component {
    constructor(props) {
        super(props);
        this.state = {componentName: "NotificationAccessible"};
    }
    handleNav() {
        navigate("/Lab5/Game/NotificationAccessibleKnowledgeCheck");
    }
    render() {
        const {actions} = this.props;
        return (

                <div>
                    <div className= "cognitive_instructions">
                    There is a notification that has appeared. Click on it to view it! Note it can only be viewed once
                    </div>
                    <Notification message={AccessibleMessage}/>
                    <div className='flex float-right'>
                        <button
                            className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen"
                            onClick = {this.handleNav}
                            key="next"
                        >
                            Next
                        </button>
                    </div>
                    <PageServiceTimer actions={actions} name={this.state.componentName}/>
                </div>
        );
    }
}

export default NotificationAccessible;
