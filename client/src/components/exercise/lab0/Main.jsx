import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMainStateContext from '../../../reducers/MainContext';
import { useNavigate, Router } from 'react-router-dom';
import Lab0Context from './Lab0Context';

import ExperientialIntroduction from './DesignLabSection/ExperientialActivity/ExperientialIntroduction';
import CreateExperientialExercise from './DesignLabSection/ExperientialActivity/CreateExperientialExercise';
import DesignLabDecision from './DesignLabSection/ExperientialActivity/DesignLabDecision';
import DesignLabIntroduction from './DesignLabSection/LabIdeaActivity/DesignLabIntroduction';
import DesignNewCategory from './DesignLabSection/LabIdeaActivity/DesignNewCategory';
import DesignSortNewCategory from './DesignLabSection/LabIdeaActivity/DesignSortNewCategory';
import WireframeIntro from './DesignLabSection/WireframingActivity/WireframeIntro';
import WireframeFirstGlance from './DesignLabSection/WireframingActivity/WireframeFirstGlance';
import WireframeReinforceQuiz from './DesignLabSection/WireframingActivity/WireframeReinforceQuiz';
import WireframeExercise from './DesignLabSection/WireframingActivity/WireframeExercise';
import WireframeComponents from './DesignLabSection/WireframingActivity/WireframeComponents';
import { SECTION_STATUSES, SECTIONS, ROUTES } from '@/constants/lab0/index';
import { EXERCISE_PLAYING } from '@/constants/index';
import ProgressService from '@/services/lab0/ProgressService';
import StartExercise from './StartExercise';
import { LabIntroduction } from './pages/intro';
import {
  LabDataRepair,
  SchemaDesignRepair,
  ServiceControllerRepair,
  RoutingRepair,
  BackendTipsTricks,
  BackendIntroduction,
  LabData,
  SchemaDesign,
  ServiceController,
  Routing,
} from './pages/backend';
import {
  FrontendIntroduction,
  Boilerplate,
  Integration,
  IntegrationRepair,
  CoreLabPages,
  CoreLabPagesRepair,
  ComponentLibrary,
  FrontendTipsTricks,
} from './pages/frontend';
import ScrumIntroduction from './DesignLabSection/ScrumActivity/ScrumIntroduction';
import ScrumBoardActivity from './DesignLabSection/ScrumActivity/ScrumBoardActivity';
import ScrumVelocityReading from './DesignLabSection/ScrumActivity/ScrumVelocityReading';
import ScrumVelocityActivity from './DesignLabSection/ScrumActivity/ScrumVelocityActivity';
import DesignLabEnd from './DesignLabSection/ScrumActivity/DesignLabEnd';

const Main = (props) => {
  const navigate = useNavigate();
  const { user } = props;
  const { actions } = useMainStateContext();
  const [section, setSectionState] = useState({});

  const updateSectionStatus = async (section, sectionStatus) => {
    return await ProgressService.submitProgress(
      user.userid,
      section.category,
      section.name,
      sectionStatus,
    );
  };

  const handleNav = async (route) => {
    if (route in SECTIONS) {
      actions.updateUserState(EXERCISE_PLAYING);
      setSectionState(SECTIONS[route]);
      await updateSectionStatus(
        SECTIONS[route],
        SECTION_STATUSES.SECTION_IN_PROGRESS,
      );
    }

    if (route === '/') {
      navigate(`/Lab0/Exercise`);
    } else {
      navigate(`/Lab0/Exercise/${route}`);
    }
  };

  const [newCategoryName, setNewCategoryName] = useState('');
  const [newLabTopics, setNewLabTopics] = useState([]);

  return (
    <div>
      <Lab0Context.Provider
        value={{
          handleNav,
          section,
          updateSectionStatus,
          newCategoryName,
          setNewCategoryName,
          newLabTopics,
          setNewLabTopics,
        }}
      >
        <Router className={'tw-p-3'}>
          <StartExercise default path={'/*'} />
          <StartExercise path={'/Continue'} verb="Continue" />

          {/* Design Lab Pages */}
          <DesignLabIntroduction path={ROUTES.SECTION_LAB_IDEATION} />
          <DesignNewCategory path={ROUTES.SECTION_DESIGN_NEW_CATEGORY} />
          <DesignSortNewCategory
            path={ROUTES.SECTION_DESIGN_SORT_NEW_CATEGORY}
          />
          <DesignLabDecision path={ROUTES.SECTION_EXPERIENTIAL_EXERCISE} />
          <ExperientialIntroduction
            path={ROUTES.SECTION_EXPERIENTIAL_INTRODUCTION}
          />
          <CreateExperientialExercise
            path={ROUTES.SECTION_CREATE_EXPERIENTIAL_EXERCISE}
          />
          <WireframeIntro path={ROUTES.SECTION_WIREFRAMING_OVERVIEW} />
          <WireframeFirstGlance path={ROUTES.SECTION_WIREFRAME_FIRST_GLANCE} />
          <WireframeReinforceQuiz
            path={ROUTES.SECTION_WIREFRAME_REINFORCE_QUIZ}
          />
          <WireframeExercise path={ROUTES.SECTION_WIREFRAME_EXERCISE} />
          <WireframeComponents path={ROUTES.SECTION_WIREFRAME_COMPONENTS} />
          <ScrumIntroduction path={ROUTES.SECTION_SPRINT_PLANNING} />
          <ScrumBoardActivity path={ROUTES.SECTION_SCRUM_BOARD_ACTIVITY} />
          <ScrumVelocityReading path={ROUTES.SECTION_SCRUM_VELOCITY_READING} />
          <ScrumVelocityActivity
            path={ROUTES.SECTION_SCRUM_VELOCITY_ACTIVITY}
          />
          <DesignLabEnd path={ROUTES.SECTION_DESIGN_LAB_END} />

          {/* Intro Pages */}
          <LabIntroduction path={ROUTES.SECTION_LAB_INTRODUCTION} />

          {/* Backend Pages */}
          <BackendIntroduction path={ROUTES.SECTION_BACKEND_INTRODUCTION} />
          <LabData path={ROUTES.SECTION_LAB_DATA} />
          <LabDataRepair path={ROUTES.SECTION_LAB_DATA_REPAIR} />
          <SchemaDesign path={ROUTES.SECTION_SCHEMA_DESIGN} />
          <SchemaDesignRepair path={ROUTES.SECTION_SCHEMA_DESIGN_REPAIR} />
          <ServiceController path={ROUTES.SECTION_SERVICE_CONTROLLER} />
          <ServiceControllerRepair
            path={ROUTES.SECTION_SERVICE_CONTROLLER_REPAIR}
          />
          <Routing path={ROUTES.SECTION_ROUTING} />
          <RoutingRepair path={ROUTES.SECTION_ROUTING_REPAIR} />
          <BackendTipsTricks path={ROUTES.SECTION_BACKEND_TIPS_TRICKS} />

          {/* Frontend Pages */}
          <FrontendIntroduction path={ROUTES.SECTION_FRONTEND_INTRODUCTION} />
          <Boilerplate path={ROUTES.SECTION_BOILERPLATE} />
          <CoreLabPages path={ROUTES.SECTION_CORE_LAB_PAGES} />
          <CoreLabPagesRepair path={ROUTES.SECTION_CORE_LAB_PAGES_REPAIR} />
          <Integration path={ROUTES.SECTION_INTEGRATION} />
          <IntegrationRepair path={ROUTES.SECTION_INTEGRATION_REPAIR} />
          <ComponentLibrary path={ROUTES.SECTION_COMPONENT_LIBRARY} />
          <FrontendTipsTricks path={ROUTES.SECTION_FRONTEND_TIPS_TRICKS} />
        </Router>
      </Lab0Context.Provider>
    </div>
  );
};

Main.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.number,
  }),
};

export default Main;
