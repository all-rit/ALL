import React from 'react';
import { PropTypes } from 'prop-types';
import Repair from '../../../../body/Repair/Repair';
import { EXERCISE_PATH, EXERCISE_STATES } from '../../../../../constants/lab11';
import { navigate } from 'react-router-dom';
import { SENTENCE_COUNT_REPAIR_HEADING } from '../../../../../constants/lab11';
import useDataService from '../../hooks/useDataService';
import FogIndexCalculationData from '../../../../../constants/lab11/FogIndexCalculationData';
import SentenceCountRepairImplementation from '../RepairImpls/SentenceCountRepairImplementation';
/**
 * SentenceCountRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the sentence count repair for lab 11 literacy.
 * @param {Object} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const SentenceCountRepair = (props) => {
  const { user = null } = props;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_SENTENCE_COUNT,
    FogIndexCalculationData.sentences,
  );

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={SENTENCE_COUNT_REPAIR_HEADING}
      repairText={[
        'In this section you will be making changes to the FogIndexCalculation.js file below to ensure the correct sentence count is being calculated.',
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'FogIndexCalculation.js',
          implementation: SentenceCountRepairImplementation,
        },
      ]}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/InformationLetterSentenceCount`);
      }}
    />
  );
};

SentenceCountRepair.propTypes = {
  user: PropTypes.object,
};

export default SentenceCountRepair;
