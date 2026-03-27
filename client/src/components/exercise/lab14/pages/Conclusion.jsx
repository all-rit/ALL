import { React } from 'react';
import useMainStateContext from 'src/reducers/MainContext';
import UserLabService from '../../../../services/UserLabService';
import { EXERCISE_IDLE } from 'src/constants/index';
import { LAB_ID } from '../../../../constants/lab14';
import { navigate } from 'react-router-dom';

const Conclusion = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate('/Lab14/Reinforcement');
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">Quantum Computing & The Future</h1>
      <div className="margin-bottom-2 tw-text-left tw-gap-x-10">
        <h2 className="tw-sub-title tw-py-6">
          What tasks are ideal for quantum computers?
        </h2>
        <p className="tw-body-text">
          Quantum computers use the weird rules of quantum physics to do certain
          things that regular computers struggle with. They work best when the
          problem fits the “quantum way” of thinking. For example lots of
          possibilities, patterns, and interactions happening at once. Because
          they can explore many possibilities at the same time, they are great
          at:
        </p>

        <ul className="tw-list-disc tw-body-text tw-pl-6 tw-py-6">
          <li>
            Simulating molecules and chemistry (helps discover new materials or
            medicines)
          </li>
          <li>
            Solving huge optimization problems (like finding the best route or
            the best design)
          </li>
          <li>Breaking some older forms of encryption</li>
        </ul>

        <h2 className="tw-sub-title tw-py-6">
          What tasks aren’t ideal for quantum computers?
        </h2>
        <p className="tw-body-text">
          Quantum computers sound powerful, but they aren’t good at every type
          of task. Their unique way of processing information makes them
          excellent for some problems, yet they struggle with others. They have
          difficulty when:
        </p>
        <ul className="tw-list-disc tw-body-text tw-pl-6 tw-py-6">
          <li>
            The task is something normal computers already do extremely well
          </li>
          <li>
            Solving problems for which classical algorithms are already
            efficient
          </li>
          <li>Everyday computing</li>
        </ul>

        <h2 className="tw-text-left tw-py-6 tw-sub-title">
          Quantum Computing Future
        </h2>
        <p className="tw-body-text">
          The future of quantum computing is unknown and wide open. Scientists
          are making progress, but nobody knows exactly when quantum computers
          will become common or how powerful they’ll get. What we do know is
          that quantum tech could change many fields, from AI to climate science
          to cybersecurity, in ways that are hard to imagine today. It’s a
          technology with huge potential, but also big challenges.
        </p>

        <div className="tw-body-text tw-text-center tw-pb-6">
          Click the <strong>Continue</strong> button to move on the the
          Reinforcement Section!
        </div>
        <div className="center-div">
          <button
            className="center-div btn btn-primary text-black btn-xl text-uppercase"
            onClick={handleFinish}
            key="start"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
