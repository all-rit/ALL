import React, { Component } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import {DementiaAccessibleKnowledgeCheck as KnowledgeCheck} from '../../../../../constants/lab5'
class DementiaAccessibleKnowledgeCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: false, componentName:"DementiaAccessibleKnowledgeCheck"};
    }

    render() {
        const {actions} = this.props;
        return (
            <div>
                <KnowledgeTest handler={this.handler} question = {KnowledgeCheck} link={"/Lab5/Game/NotificationAccessible"}/>
                <PageServiceTimer actions={actions} name={this.state.componentName}/>
            </div>
        );
    }
}

export default DementiaAccessibleKnowledgeCheck;
