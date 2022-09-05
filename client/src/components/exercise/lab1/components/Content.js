import React, {Component} from 'react';
import {EXERCISE_IDLE, EXERCISE_ENDED} from '../../../../constants/lab1';

import Playthrough from './Playthrough';
import AppInstructions from './AppInstructions';
import Exercise from './Exercise';
import Repair from './Repair';

class Content extends Component {
  render() {
    const {data, handlers, user} = this.props;
    const {
      availableMessage,
      unavailableMessage,
      availableBackgroundColor,
      unavailableBackgroundColor,
      currentTab,
      repairVisible,
    } = data;
    return (
      <main className="content">
        <Playthrough
          plays={data.plays}
          results={data.results}
          visible={data.state === EXERCISE_IDLE}
        />

        <AppInstructions
          visible={
            data.state !== EXERCISE_ENDED && data.state !== EXERCISE_IDLE
          }
        />
        <Repair
          visible={repairVisible && data.state === EXERCISE_IDLE}
          data={{
            availableMessage,
            unavailableMessage,
            availableBackgroundColor,
            unavailableBackgroundColor,
            currentTab,
          }}
          handlers={handlers}
        />
        <Exercise data={data} handlers={handlers} user={user} />
      </main>
    );
  }
}

export default Content;
