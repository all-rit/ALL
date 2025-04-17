import React, { useState } from "react";
import PropTypes from "prop-types";
import useMainStateContext from "../../../reducers/MainContext";
import { navigate, Router } from "@reach/router";
import Lab0Context from "./Lab0Context";
import ExperientialIntroduction from "./DesignLabSection/ExperientialActivity/ExperientialIntroduction";
import CreateExperientialExercise from "./DesignLabSection/ExperientialActivity/CreateExperientialExercise";
import DesignLabDecision from "./DesignLabSection/ExperientialActivity/DesignLabDecision";
import ScrumIntroduction from "./DesignLabSection/ScrumActivity/ScrumIntroduction";
import DesignLabIntroduction from "./DesignLabSection/LabIdeaActivity/DesignLabIntroduction";
import ScrumBoardActivity from "./DesignLabSection/ScrumActivity/ScrumBoardActivity";
import ScrumVelocityReading from "./DesignLabSection/ScrumActivity/ScrumVelocityReading";
import ScrumVelocityActivity from "./DesignLabSection/ScrumActivity/ScrumVelocityActivity";
import DesignNewCategory from "./DesignLabSection/LabIdeaActivity/DesignNewCategory";
import DesignSortNewCategory from "./DesignLabSection/LabIdeaActivity/DesignSortNewCategory";
import WireframeIntro from "./DesignLabSection/WireframingActivity/WireframeIntro";
import WireframeFirstGlance from "./DesignLabSection/WireframingActivity/WireframeFirstGlance";
import WireframeReinforceQuiz from "./DesignLabSection/WireframingActivity/WireframeReinforceQuiz";
import WireframeExercise from "./DesignLabSection/WireframingActivity/WireframeExercise";
import WireframeComponents from "./DesignLabSection/WireframingActivity/WireframeComponents";
import { SECTION_STATUSES, SECTIONS } from "../../../constants/lab0/index";
import { EXERCISE_PLAYING } from "../../../constants/index";
import ProgressService from "src/services/lab0/ProgressService";
import StartExercise from "./StartExercise";
import TestRepair from "./TestRepair";
import DesignLabEnd from "./DesignLabSection/ScrumActivity/DesignLabEnd";
import {
  LabDataRepair,
  SchemaRepair,
  ServiceControllerRepair,
  RoutingRepair,
  BackendTipsTricks,
  BackendIntroduction,
  LabData,
  SchemaDesign,
  ServiceController,
  Routing,
} from "./pages/backend";
import {
  FrontendIntroduction,
  Boilerplate,
  BoilerplateRepair,
  Integration,
  IntegrationRepair,
  CoreLabPages,
  CoreLabPagesRepair,
  ComponentLibrary,
  FrontendTipsTricks,
} from "./pages/frontend";

const Main = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();
  const [section, setSectionState] = useState({});

  const updateSectionStatus = (section, sectionStatus) => {
    ProgressService.submitProgress(
      user.userid,
      section.category,
      section.name,
      sectionStatus,
    );
  };

  const handleNav = (route) => {
    if (route in SECTIONS) {
      actions.updateUserState(EXERCISE_PLAYING);
      setSectionState(SECTIONS[route]);
      updateSectionStatus(
        SECTIONS[route],
        SECTION_STATUSES.SECTION_IN_PROGRESS,
      );
    }

    navigate(`/Lab0/Exercise/${route}`);
  };

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newLabTopics, setNewLabTopics] = useState([]);

  return (
    <div className={"tw-h-[35rem] tw-overflow-y-scroll"}>
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
        <Router className={"tw-p-3 tw-h-[40rem]"}>
          <StartExercise default path={"/*"} />
          <StartExercise path={"/Continue"} verb="Continue" />
          <TestRepair path={"/TestRepair"} />

          {/*// Lab Ideation*/}
          <DesignLabIntroduction path={"/LabIdeation"} />
          <DesignNewCategory path={"/DesignNewCategory"} />
          <DesignSortNewCategory path={"/DesignSortNewCategory"} />

          {/*// Experiential Exercise*/}
          <DesignLabDecision path={"/LabDecision"} />
          <ExperientialIntroduction path={"/ExperientialIntro"} />
          <CreateExperientialExercise path={"/ExperientialExercise"} />

          {/*// Wireframing Overview*/}
          <WireframeIntro path={"/WireframeIntro"} />
          <WireframeFirstGlance path={"/WireframeFirstGlance"} />
          <WireframeReinforceQuiz path={"/WireframeReinforceQuiz"} />
          <WireframeExercise path={"/WireframeExercise"} />
          <WireframeComponents path={"/WireframeComponents"} />

          {/* Frontend Pages */}
          <FrontendIntroduction
            path={`${ROUTES.SECTION_FRONTEND_INTRODUCTION}`}
          />

          <Boilerplate path={`${ROUTES.SECTION_BOILERPLATE}`} />
          <BoilerplateRepair path={`${ROUTES.SECTION_BOILERPLATE_REPAIR}`} />

          <CoreLabPages path={`${ROUTES.SECTION_CORE_LAB_PAGES}`} />
          <CoreLabPagesRepair
            path={`${ROUTES.SECTION_CORE_LAB_PAGES_REPAIR}`}
          />

          <Integration path={`${ROUTES.SECTION_INTEGRATION}`} />
          <IntegrationRepair path={`${ROUTES.SECTION_INTEGRATION_REPAIR}`} />

          <ComponentLibrary path={`${ROUTES.SECTION_COMPONENT_LIBRARY}`} />

          <FrontendTipsTricks path={`${ROUTES.SECTION_FRONTEND_TIPS_TRICKS}`} />
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
