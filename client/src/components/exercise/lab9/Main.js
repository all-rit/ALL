/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";
import { actions as exerciseActions } from "../../../reducers/lab9/ExerciseReducer";
import { bindActionCreators } from "redux";
import ExerciseStart from "./pages/ExerciseStart";
import ExerciseEnd from "./pages/ExerciseEnd";
import Welcome from "./pages/SocialMedia/Welcome";
import Profile from "./pages/SocialMedia/Profile";
import Feed from "./pages/SocialMedia/Feed";
import createAvatarData from "../../body/lab/GridImages/createAvatarData";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

const Main = (props) => {
  const { actions, state, user } = props;

  const [userAvatar, setUserAvatarData] = useState(null);

  useEffect(() => {
    setUserAvatarData(createAvatarData(1)[0]);
  }, []);

  return (
    <div className="bottomSpace">
      <Router className="app">
        <ExerciseStart default path="/" actions={actions} />
        <Welcome path="/Welcome" actions={actions} />
        <Profile path="/Profile" actions={actions} data={userAvatar} />
        <Feed path="/Feed" actions={actions} data={userAvatar} />
        <ExerciseEnd
          path="/ExerciseEnd"
          actions={actions}
          state={state}
          user={user}
        />
      </Router>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
