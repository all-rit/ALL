import { React } from 'react';
import useMainStateContext from '@/reducers/MainContext';
import UserLabService from '@/services/UserLabService';
import { EXERCISE_IDLE } from '@/constants/index';
import { LAB_ID } from '@/constants/lab13';
import { navigate } from 'react-router-dom';

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate('/Lab13/Reinforcement');
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };
  return (
    <div className="tw-space-y-4 mx-auto tw-flex tw-flex-col">
      <h1 className="tw-text-left tw-font-bold">Conclusion</h1>
      <p className="tw-text-left">
        Throughout this lab, you experienced how tone, formatting, confidence,
        and technical language can shape how trustworthy AI feels, even before
        verifying the information.
      </p>

      <p className="tw-text-left">You saw how:</p>
      <ul className="tw-text-left tw-list-disc tw-pl-10 tw-space-y-1">
        <li>
          Familiar phrasing can make incorrect claims <em>feel true</em>.
        </li>
        <li>
          Professional wording can create an <em>illusion of expertise</em>.
        </li>
        <li>
          Technical language can <em>discourage questioning</em>.
        </li>
      </ul>

      <p className="tw-text-left">
        These reactions reflect natural cognitive patterns that shape how we
        interpret information and assess credibility.
      </p>

      <p className="tw-text-left tw-pt-2">
        AI can generate fluent and confident responses, but it
        <em> does not</em> understand, reason, or take responsibility. That
        responsibility lies with the user. The most important safeguard is{' '}
        <strong>AI literacy</strong>, the ability to recognize bias, question
        outputs, and engage with AI thoughtfully!
      </p>
      <div className="tw-space-y-4 tw-flex tw-justify-center">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleFinish}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Conclusion;
