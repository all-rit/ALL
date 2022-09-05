import React, { Component } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../shared/PageServiceTimer";
import { NotificationInaccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";
class NotificationInaccessibleKnowledgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      componentName: "NotificationInaccessibleKnowledgeCheck",
    };
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <KnowledgeTest
          handler={this.handler}
          question={KnowledgeCheck}
          link={"/Lab5/Exercise/NotificationGuidance"}
        />
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default NotificationInaccessibleKnowledgeCheck;
