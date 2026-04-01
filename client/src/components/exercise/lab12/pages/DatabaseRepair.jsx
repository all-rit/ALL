import useMainStateContext from '../../../../reducers/MainContext';
import useDataService from '../../lab12/hooks/useDataService';
import {
  DATABASE_REPAIR_HEADING,
  EXERCISE_PATH,
  EXERCISE_STATES,
} from '../../../../constants/lab12';
import React from 'react';
import Repair from '../../../body/Repair/Repair';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DatabaseRepairImplementation from './repairs/DatabaseRepairImplementation';
import IdentityDatabaseData from '../../../../constants/lab12/DatabaseRepair';

/**
 * DatabaseRepair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @returns
 */

const DatabaseRepair = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.DATABASE_REPAIR,
    IdentityDatabaseData.inputData,
  );

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={DATABASE_REPAIR_HEADING}
      repairText={[
        "In this section you will be making changes to the SQL database file that creates the table for our user's data.",
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'schema.sql',
          implementation: DatabaseRepairImplementation,
        },
      ]}
      navigateNext={() => {
        navigate(`${EXERCISE_PATH}/PreCorrectDiploma`);
      }}
      repairComplete
    />
  );
};

DatabaseRepair.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
  state: PropTypes.object,
};

export default DatabaseRepair;
