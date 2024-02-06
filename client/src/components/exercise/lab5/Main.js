import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import ExerciseStart from "./pages/ExerciseStart";
import DyslexiaAccessible from "./pages/PageLayoutActivity/DyslexiaAccessible";
import DyslexiaAccessibleKnowledgeCheck from "./pages/PageLayoutActivity/DyslexiaAccessibleKnowledgeCheck";
import DementiaInaccessible from "./pages/PageLayoutActivity/DementiaInaccessible";
import DementiaInaccessibleKnowledgeCheck from "./pages/PageLayoutActivity/DementiaInaccessibleKnowledgeCheck";
import PageLayoutGuidance from "./pages/PageLayoutActivity/PageLayoutGuidance";
import PageLayoutRepair from "./pages/PageLayoutActivity/PageLayoutRepair";
import DementiaAccessible from "./pages/PageLayoutActivity/DementiaAccessible";
import DementiaAccessibleKnowledgeCheck from "./pages/PageLayoutActivity/DementiaAccessibleKnowledgeCheck";
import NotificationAccessible from "./pages/NotificationActivity/NotificationAccessible";
import NotificationAccessibleKnowledgeCheck from "./pages/NotificationActivity/NotificationAccessibleKnowledgeCheck";
import NotificationInaccessible from "./pages/NotificationActivity/NotificationInaccessible";
import NotificationInaccessibleKnowledgeCheck from "./pages/NotificationActivity/NotificationInaccessibleKnowledgeCheck";
import NotificationGuidance from "./pages/NotificationActivity/NotificationGuidance";
import NotificationRepair from "./pages/NotificationActivity/NotificationRepair";
import NotificationAccessibleRepairKnowledgeCheck from "./pages/NotificationActivity/NotificationAccessibleRepairKnowledgeCheck";
import NotificationAccessibleRepair from "./pages/NotificationActivity/NotificationAccessibleRepair";
import FormInaccessible from "./pages/FormResponseActivity/FormInaccessible";
import FormGuidance from "./pages/FormResponseActivity/FormGuidance";
import FormAccessible from "./pages/FormResponseActivity/FormAccessible";
import FormRepair from "./pages/FormResponseActivity/FormRepair";
import ExerciseEnd from "./pages/ExerciseEnd";
import useLab5StateContext, {
  Lab5ContextProvider,
} from "src/reducers/lab5/Lab5Context";

/**
 * Main component for the exercise lab5.
 * Renders the exercise routes and provides the necessary context.
 *
 * @returns {JSX.Element} The rendered Main component.
 */
const Main = () => {
  const { state, actions } = useLab5StateContext();

  return (
    <Lab5ContextProvider>
      <div className="bottomSpace">
        <Router className="app">
          <ExerciseStart default path="/" />
          <DyslexiaAccessible path="/DyslexiaAccessible" />
          <DyslexiaAccessibleKnowledgeCheck path="/DyslexiaAccessibleKnowledgeCheck" />
          <DementiaInaccessible path="/DementiaInaccessible" />
          <DementiaInaccessibleKnowledgeCheck path="/DementiaInaccessibleKnowledgeCheck" />
          <PageLayoutGuidance path="/PageLayoutGuidance" />
          <PageLayoutRepair
            path="/PageLayoutRepair"
            visible={state.repairVisible}
            data={state}
          />
          <DementiaAccessible path="/DementiaAccessible" />
          <DementiaAccessibleKnowledgeCheck path="/DementiaAccessibleKnowledgeCheck" />
          <NotificationAccessible path="/NotificationAccessible" />
          <NotificationAccessibleKnowledgeCheck path="/NotificationAccessibleKnowledgeCheck" />
          <NotificationInaccessible path="/NotificationInaccessible" />
          <NotificationInaccessibleKnowledgeCheck path="/NotificationInaccessibleKnowledgeCheck" />
          <NotificationGuidance path="/NotificationGuidance" />
          <NotificationRepair
            path="/NotificationRepair"
            visible={state.repairVisible}
            data={state}
            handlers={actions}
          />
          <NotificationAccessibleRepair path="/NotificationAccessibleRepair" />
          <NotificationAccessibleRepairKnowledgeCheck path="/NotificationAccessibleRepairKnowledgeCheck" />
          <FormInaccessible path="/FormInaccessible" />
          <FormGuidance path="/FormGuidance" />
          <FormRepair
            path="/FormRepair"
            handlers={actions}
            visible={state.repairVisible}
            data={state}
          />
          <FormAccessible path="/FormAccessible" />
          <ExerciseEnd path="/ExerciseEnd" />
        </Router>
      </div>
    </Lab5ContextProvider>
  );
};

export default Main;
