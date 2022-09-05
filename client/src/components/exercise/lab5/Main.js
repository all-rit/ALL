import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import { actions as exerciseActions } from "../../../reducers/lab5/ExerciseReducer";
import { actions as repairActions } from "../../../reducers/lab5/RepairReducer";
import { actions as appActions } from "../../../reducers/lab5/AppReducer";
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
import { bindActionCreators } from "redux";
import NotificationAccessibleRepairKnowledgeCheck from "./pages/NotificationActivity/NotificationAccessibleRepairKnowledgeCheck";
import NotificationAccessibleRepair from "./pages/NotificationActivity/NotificationAccessibleRepair";
import FormInaccessible from "./pages/FormResponseActivity/FormInaccessible";
import FormGuidance from "./pages/FormResponseActivity/FormGuidance";
import FormAccessible from "./pages/FormResponseActivity/FormAccessible";
import FormRepair from "./pages/FormResponseActivity/FormRepair";
import ExerciseEnd from "./pages/ExerciseEnd";
const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { ...exerciseActions, ...repairActions, ...appActions },
      dispatch
    ),
  };
};

class Main extends Component {
  render() {
    const { actions, state, user } = this.props;
    return (
      <div className="bottomSpace">
        <Router className="app">
          <ExerciseStart default path="/" actions={actions} />
          <DyslexiaAccessible
            path="/DyslexiaAccessible"
            actions={actions}
            state={state}
          />
          <DyslexiaAccessibleKnowledgeCheck
            path="/DyslexiaAccessibleKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <DementiaInaccessible
            path="/DementiaInaccessible"
            actions={actions}
            state={state}
          />
          <DementiaInaccessibleKnowledgeCheck
            path="/DementiaInaccessibleKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <PageLayoutGuidance path="/PageLayoutGuidance" actions={actions} />
          <PageLayoutRepair
            path="/PageLayoutRepair"
            visible={state.repair5.repairVisible}
            data={state.repair5}
            handlers={actions}
            state={state}
            actions={actions}
          />
          <DementiaAccessible
            path="/DementiaAccessible"
            actions={actions}
            state={state}
          />
          <DementiaAccessibleKnowledgeCheck
            path="/DementiaAccessibleKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <NotificationAccessible
            path="/NotificationAccessible"
            actions={actions}
            state={state}
          />
          <NotificationAccessibleKnowledgeCheck
            path="/NotificationAccessibleKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <NotificationInaccessible
            path="/NotificationInaccessible"
            actions={actions}
            state={state}
          />
          <NotificationInaccessibleKnowledgeCheck
            path="/NotificationInaccessibleKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <NotificationGuidance
            path="/NotificationGuidance"
            actions={actions}
          />
          <NotificationRepair
            path="/NotificationRepair"
            visible={state.repair5.repairVisible}
            data={state.repair5}
            handlers={actions}
            state={state}
            actions={actions}
          />
          <NotificationAccessibleRepair
            path="/NotificationAccessibleRepair"
            actions={actions}
            state={state}
          />
          <NotificationAccessibleRepairKnowledgeCheck
            path="/NotificationAccessibleRepairKnowledgeCheck"
            actions={actions}
            state={state}
          />
          <FormInaccessible
            path="/FormInaccessible"
            actions={actions}
            state={state}
          />
          <FormGuidance path="/FormGuidance" actions={actions} state={state} />
          <FormRepair
            path="/FormRepair"
            actions={actions}
            state={state}
            handlers={actions}
            visible={state.repair5.repairVisible}
            data={state.repair5}
          />
          <FormAccessible
            path="/FormAccessible"
            actions={actions}
            state={state}
          />
          <ExerciseEnd
            path="/ExerciseEnd"
            actions={actions}
            state={state}
            user={user}
          />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
