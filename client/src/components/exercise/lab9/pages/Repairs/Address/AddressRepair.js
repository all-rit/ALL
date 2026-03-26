import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Repair from '../../../../../body/Repair/Repair';
import { EXERCISE_STATES, HEADINGS } from '../../../../../../constants/lab9';
import useDataService from '../../../hooks/useDataService';
import { navigate } from 'react-router-dom';
import { AddressRepairData } from '../../../../../../constants/lab9/AddressRepairData';
import AddressRepairCodeBlock from './AddressRepairCodeBlock';
import useMainStateContext from 'src/reducers/MainContext';
import { EXERCISE_PLAYING } from 'src/constants/index';

/**
 * AddressRepair: is a Component responsible for passing in both logic and information
 * into the universal repair component. This allows for the ability to handle the custom routing
 * and custom implementation for the address repair for lab 9 localization.
 * @param {Object} user contains user id for data state and logging user input
 * @returns Component to handle custom logic for the lab.
 */
const AddressRepair = ({ user }) => {
  const { actions } = useMainStateContext();
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_ADDRESS_FORM,
    AddressRepairData.countries,
  );

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={HEADINGS.REPAIR_ADDRESS_HEADING}
      repairText={[
        "Let's localize the address for our newsletter subscription form. Click 'Repair' to make the appropriate changes.",
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'AddressFormat.js',
          implementation: AddressRepairCodeBlock,
        },
      ]}
      navigateNext={() => {
        navigate('/Lab9/Exercise/page');
      }}
    />
  );
};

AddressRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};

export default AddressRepair;
