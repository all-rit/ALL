/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import useScroll from '../../../../use-hooks/useScroll';
import MainInstructions from './mainInstructions';
import LabButton from '../../../all-components/LabButton';

const LandingPage = ({ endFirstExercise, toWhiteBackground, background }) => {
  useScroll();

  const closePage = () => {
    endFirstExercise();
  };

  if (background !== 'white') {
    toWhiteBackground();
  }

  return (
    <div>
      <div id="Header" className={'tw-px-6 tw-py-3'}>
        <p className="tw-title tw-text-left">Exercise Start</p>
      </div>
      <div id="Body" className={'tw-overflow-y-scroll '}>
        <MainInstructions />
        <div className="mainInstructionsContainer tw-py-4 tw-text-left">
          <p className="tw-body-text tw-font-medium">
            To help track your exercise history and to help ensure we are
            providing you with the best possible learning experience, please
            sign in with Google.
          </p>
        </div>
        <p className="tw-body-text tw-text-center">
          When you are ready, click the <strong>'Let's Get Started'</strong>{' '}
          button to begin the exercise
        </p>
        <div className="center tw-my-6">
          <LabButton onClick={closePage} label={'Lets Get Started!'} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
