/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab4/ExerciseReducer";
import SmallTarget from "./pages/SmallTarget";
import TargetGuideline from "./pages/TargetGuideline";
import SubmitUpdated from "./pages/SubmitUpdated";
import CodeChangeTarget from "./pages/CodeChangeTarget";
import CodeChangeBlocks from "./pages/CodeChangeBlocks";
import BypassBlocksGuideline from "./pages/BypassBlocksGuideline";
import FormSkipToMainBroken from "./pages/FormSkipToMainBroken";
import FormSkipToMainFixed from "./pages/FormSkipToMainFixed";
import FormHintInaccessible from "./pages/FormHintInaccessible";
import AccessibleGuideline from "./pages/AccessibleGuideline";
import CodeChangeAccessible from "./pages/CodeChangeAccessible";
import FormHintAccessible from "./pages/FormHintAccessible";
import Finish from "./pages/Finish";
import ExerciseStart from "./pages/ExerciseStart";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

class Main extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    const { actions, user } = this.props;
    return (
      <div className="container bottomSpace">
        <Router className="app">
          <ExerciseStart path="/" actions={actions} />
          <SmallTarget path="/SmallTarget" actions={actions} />
          <TargetGuideline path="/TargetGuideline" actions={actions} />
          <CodeChangeTarget path={"/CodeChangeTarget"} actions={actions} />
          <SubmitUpdated path="/SubmitUpdated" actions={actions} />
          <CodeChangeBlocks path={"/CodeChangeBlocks"} actions={actions} />
          <BypassBlocksGuideline
            path={"/BypassBlocksGuideline"}
            actions={actions}
          />
          <FormSkipToMainBroken
            path={"/FormSkipToMainBroken"}
            actions={actions}
          />
          <FormSkipToMainFixed
            path={"/FormSkipToMainFixed"}
            actions={actions}
          />
          <FormHintInaccessible
            path={"FormHintInaccessible"}
            actions={actions}
          />
          <AccessibleGuideline
            path={"/AccessibleGuideline"}
            actions={actions}
          />
          <CodeChangeAccessible
            path={"/CodeChangeAccessible"}
            actions={actions}
          />
          <FormHintAccessible path={"/FormHintAccessible"} actions={actions} />
          <Finish path={"/Finish"} actions={actions} user={user} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
