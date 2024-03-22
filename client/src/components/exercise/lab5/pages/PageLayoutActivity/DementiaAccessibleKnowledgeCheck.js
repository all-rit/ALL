/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import KnowledgeTest from "../../components/KnowledgeTest";
import PageServiceTimer from "../../../../all-components/PageServiceTimer";
import { DementiaAccessibleKnowledgeCheck as KnowledgeCheck } from "../../../../../constants/lab5";
class DementiaAccessibleKnowledgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      componentName: "DementiaAccessibleKnowledgeCheck",
    };
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <KnowledgeTest
          handler={this.handler}
          question={KnowledgeCheck}
          link={"/Lab5/Exercise/NotificationAccessible"}
        />
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default DementiaAccessibleKnowledgeCheck;
