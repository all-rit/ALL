import React, {Component} from 'react';
import KnowledgeTest from '../../components/KnowledgeTest';
import PageServiceTimer from '../../../shared/PageServiceTimer';
import {DyslexiaAccessibleKnowledgeCheck as KnowledgeCheck} from '../../../../../constants/lab5';
class DyslexiaAccessibleKnowledgeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      componentName: 'DyslexiaAccessibleKnowledgeCheck',
    };
  }

  render() {
    const {actions} = this.props;
    return (
      <div>
        <KnowledgeTest
          handler={this.handler}
          question={KnowledgeCheck}
          link={'/Lab5/Exercise/DementiaInaccessible'}
        />
        <PageServiceTimer actions={actions} name={this.state.componentName} />
      </div>
    );
  }
}

export default DyslexiaAccessibleKnowledgeCheck;
