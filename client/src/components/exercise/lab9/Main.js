import React, { useState } from "react";
import { Router } from "@reach/router";
import PropTypes from "prop-types";

// redux related libs that will be removed later
import { bindActionCreators } from "redux";
import { connect } from "react-redux"
import { actions as exerciseActions } from "../../../reducers/lab9/ExerciseReducer";

// lab imported dependencies;
import LocalizationRepair from "../lab9/pages/LocalizationRepair";
import { REPAIR, EXERCISE_STATES } from "../../../constants/lab9";
import GameStateContext from "./Lab9Context";
import Webpage from "../lab9/components/Webpage";
import ExerciseStart from "../lab9/pages/ExerciseStart";
import Discovery from "./pages/Discovery";
import Conclusion from "../lab9/pages/Conclusion";
import FacadeWebpage from "./components/FacadeWebpage";
import { actions } from "src/reducers/MainReducer";
/**
 * Main(): is the routing component for managing the lab exercise progression,
 * this will be responsible for iterating through the different stages of the lab
 * and acting as the container managing the state of the user.
 */
const Main = (props) => {
  const { user } = props;
  const [exerciseState, setExerciseState] = useState(
    EXERCISE_STATES.EXERCISE_SELECTION_DEFAULT
  );
  return (
    <div className="bottomSpace">
      <GameStateContext.Provider value={{ exerciseState, setExerciseState }}>
        <Router className="app">
          <ExerciseStart path="/*" actions={actions} />
          <FacadeWebpage path="/InitialPage" actions={actions} />
          <Discovery path="/Discovery" actions={actions }/>
          <Webpage user={user} path={"/page"} actions={actions } />
          <LocalizationRepair user={user} path={`${REPAIR}/*`} actions={actions} />
          <Conclusion path="/Conclusion" />
        </Router>
      </GameStateContext.Provider>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.object.isRequired,
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
