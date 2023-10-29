import React, { useState } from "react";
import ExerciseStateContext from "./Lab11Context";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
import LiteracyExerciseStart from "./pages/LiteracyExerciseStart";
import LiteracyExerciseEnd from "./pages/LiteracyExerciseEnd";
import { bindActionCreators } from "redux";
import { actions as exerciseActions } from "../../../reducers/lab11/ExerciseReducer";
import { connect } from "react-redux";
import InformationLetterIntroduction from "./pages/InformationLetterIntroduction";

const Main = (props) => {
  const { user, actions } = props;
  const [exerciseState, setExerciseState] = useState("");

  return (
    <div className="bottomSpace">
      <ExerciseStateContext.Provider
        value={{ exerciseState, setExerciseState }}
      >
        <Router className="app">
          <LiteracyExerciseStart
            default
            path="/"
            user={user}
            actions={actions}
          />
          <InformationLetterIntroduction
            path="/InformationLetterIntroduction"
            user={user}
            actions={actions}
          />
          <LiteracyExerciseEnd
            path="/ExerciseEnd"
            user={user}
            actions={actions}
          />
        </Router>
      </ExerciseStateContext.Provider>
    </div>
  );
};

Main.propTypes = {
  user: PropTypes.string.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...exerciseActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
