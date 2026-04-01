import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Repair from '../../../../../body/Repair/Repair';
import { HEADINGS, EXERCISE_STATES } from '../../../../../../constants/lab9';
import NavBarRepair from './NavBarRepair';
import useDataService from '../../../hooks/useDataService';
import { navigate } from 'react-router-dom';
import NavBarData from '../../../../../../constants/lab9/NavBarData';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';

/**
 * Nav Repair is a component that is responsible for passing logic into the universal
 * repair page component, what this allows us to do is call the re-useable repair component
 * with custom logic pertaining to that repair section.
 * @param {Object} user contains user id for data state and logging user input
 * @returns
 */

const NavRepairPage = ({ user }) => {
  const { actions } = useMainStateContext();
  const { data, functions } = useDataService(
    user,
    EXERCISE_STATES.REPAIR_NAV_BAR,
    NavBarData.navItems,
  );

  const handleNav = () => {
    navigate('/Lab9/Exercise/page');
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  return (
    <Repair
      data={data}
      functions={functions}
      headingText={HEADINGS.REPAIR_NAV_HEADING}
      repairText={[
        'in this section you will be making changes to the repair data file below',
      ]}
      files={[
        {
          fileId: 0,
          fileName: 'NavBar.js',
          implementation: NavBarRepair,
        },
      ]}
      navigateNext={() => handleNav()}
    />
  );
};

NavRepairPage.propTypes = {
  user: PropTypes.object,
  actions: PropTypes.object,
};
export default NavRepairPage;
