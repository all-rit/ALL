import React, { Component } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../components/PageServiceTimer";
import {NotificationInaccessibleKnowledgeCheck as KnowledgeCheck} from '../../../../../constants/lab5'
class NotificationInaccessibleKnowledgeCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: false };
    }

    render() {
        const {actions} = this.props;
        return (
            <div>
                <KnowledgeTest handler={this.handler} question = {KnowledgeCheck} link={"/Lab5/Game/NotificationGuidance"}/>
                <PageServiceTimer actions={actions} name={this.constructor.name}/>
            </div>
        );
    }
}

export default NotificationInaccessibleKnowledgeCheck;
