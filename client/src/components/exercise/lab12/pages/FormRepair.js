import React from 'react';
import PropTypes from 'prop-types';
import useDataService from '../../lab12/hooks/useDataService';
import Repair from 'src/components/body/Repair/Repair';
import { navigate } from 'react-router-dom';
import {
  FORM_REPAIR_HEADING,
  EXERCISE_STATES,
  EXERCISE_PATH,
} from 'src/constants/lab12/index';
import FormRepairImplementation from './repairs/FormRepairImplementation';
import useMainStateContext from 'src/reducers/MainContext';
import IdentityFormData from '../../../../constants/lab12/FormRepair';

/**
 * FormRepair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @returns
 */

const FormRepair = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.FORM_REPAIR,
    IdentityFormData.inputData,
  );

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={FORM_REPAIR_HEADING}
      repairText={[
        'In this section you will be making changes to the IdentityForm.js file that handles inputs in the previous form. Once completed, click the "Next" button to fill out the updated form!',
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'IdentityForm.js',
          implementation: FormRepairImplementation,
        },
      ]}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/GraduationApplication`);
      }}
      repairComplete
    />
  );
};

FormRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default FormRepair;
