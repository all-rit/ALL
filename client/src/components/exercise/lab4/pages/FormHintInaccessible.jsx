import React, { useEffect, useState } from 'react';
import AppInstructions from '../components/AppInstructions';
import ExtraNav from '../components/ExtraNav';
import FormComp from '../components/FormComp';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';

const FormHintInaccessible = () => {
  const { actions } = useMainStateContext();

  const [classState, setClassState] = useState('app__instructions2');

  const callbackFunction = () => {
    setClassState('app__instructions3');
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const instructions = `Complete the form again, and try to access the hint.
          Use tab to go next, and shift+tab to go back.`;
  const instructions2 = 'Do not use the mouse!';
  const url = '/Lab4/Exercise/AccessibleGuideline';
  const tooltipTab = null;
  const name = 'FormHintInaccessible';
  const jumpToMain = () => {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.focus({ preventScroll: true });
    }
  };
  return (
    <div className={'tw-p-6'}>
      <a className="skip-main" href={'#'} onClick={jumpToMain}>
        Skip to main content
      </a>
      <ExtraNav />
      <AppInstructions
        className={classState}
        instructions2={instructions2}
        instructions={instructions}
      />
      <FormComp
        url={url}
        rule={true}
        showTooltip={true}
        tooltipDisabled={true}
        tooltipTab={tooltipTab}
        parentCallback={callbackFunction}
        name={name}
      />
    </div>
  );
};

export default FormHintInaccessible;
