import React, {Component} from 'react';
import KnowledgeTest from '../../components/KnowledgeTest';
import PageServiceTimer from '../../../shared/PageServiceTimer';
import {NotificationAccessibleRepairKnowledgeCheck as KnowledgeCheck} from '../../../../../constants/lab5';
class NotificationAccessibleRepairKnowledgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      componentName: 'NotificationAccessibleRepairKnowledgeCheck',
    };
  }

  render() {
    const {actions} = this.props;
    return (
      <div>
        <KnowledgeTest
          handler={this.handler}
          question={KnowledgeCheck}
          link={'/Lab5/Exercise/FormInaccessible' + ''}
        />
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default NotificationAccessibleRepairKnowledgeCheck;
