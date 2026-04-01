import React from 'react';
import { useLab13 } from '../Lab13Context';
import Repair from '@/components/body/Repair/Repair';
import PropTypes from 'prop-types';
import { startExercise } from '@/reducers/lab2/actions';
import { navigate } from 'react-router-dom';
import IDEExerciseImplementation from './repairs/IDEExerciseImplementation';

const IDEExercise = () => {
  const {
    exercisePromptsState,
    validInputs,
    isFirst,
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
    setShowConfidenceScore,
    setShowCitations,
    setDisclaimerMessage,
    setCurrentPhase,
    setTopicIndex,
  } = useLab13();

  const handleContinue = () => {
    if (!checkInputValid()) {
      alert('Please complete all fields correctly before continuing.');
      return;
    }

    // Save IDE settings to context
    const disclaimerValue = exercisePromptsState.find(
      (i) => i.id === 'disclaimer',
    ).value;
    const confidenceValue = exercisePromptsState.find(
      (i) => i.id === 'confidence',
    ).value;
    const citationsValue = exercisePromptsState.find(
      (i) => i.id === 'citations',
    ).value;

    setDisclaimerMessage(disclaimerValue);
    setShowConfidenceScore(!!confidenceValue);
    setShowCitations(!!citationsValue);

    setCurrentPhase(4);
    setTopicIndex(2);

    startExercise();
    navigate('/Lab13/Exercise/AIPanel');
  };

  const data = {
    exercisePromptsState,
    validInputs,
    isFirst,
  };

  const functions = {
    handleUserInputChange,
    checkInputValid,
    fetchRepair,
    postRepair,
  };

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={'Disclaimers, Confidence Scores and Citations'}
      repairText={[
        'Fill in the blanks to add the disclaimers, confidence scores, and citations to the chatbot outputs.',
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'ALLIEChatbot.js',
          implementation: IDEExerciseImplementation,
        },
      ]}
      navigateNext={handleContinue}
    />
  );
};

IDEExercise.propTypes = {
  exercisePromptsState: PropTypes.object,
  validInputs: PropTypes.object,
  isFirst: PropTypes.bool,
};

export default IDEExercise;
