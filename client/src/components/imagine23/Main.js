import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { navigate, Router } from "@reach/router";
import { bindActionCreators } from "redux";
import LandingPage from "./pages/landingPage";
import MainInstructions from "./pages/mainInstructions";
import Reading from "../body/Reading/Reading";
import { default as ExerciseLab2 } from "../exercise/lab2/Main";
import ExpressionStart from "./pages/ExpressionStart";
import ExpressionExercise from "./pages/ExpressionExercise";
import ExpressionScore from "./pages/ExpressionScore";
import ExerciseEnd from "./pages/ExerciseEnd";
import UpdateID from "./pages/UpdateID";
import ExpressionMainInstructions from "./pages/ExpressionMainInstructions";
import ExpressionInstructions from "./pages/ExpressionInstructions";
import Survey from "./pages/SurveyHandler";
const { nanoid } = require("nanoid");
import { PropTypes } from "prop-types";
import useMainStateContext from "../../reducers/MainContext";
import { default as Quiz } from "../quiz/components/QuizHandler";

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

const Main = (props) => {
  const { state, user, isImagine } = props;
  const [count, setCount] = useState(0);
  const [userID, setUserID] = useState(null);

  const labId = 2;
  const [isExperiential, setIsExperiential] = useState(false);

  const context = useMainStateContext();
  const { actions } = context;

  function handleGroupAssignment(isExperiential) {
    setIsExperiential(isExperiential);

    if (isExperiential) {
      navigate("/Imagine/ExperientialStart");
    } else {
      navigate("/Imagine/ExpressionStart");
    }
  }

  useEffect(() => {
    if (user?.userid) {
      let userSession = sessionStorage.getItem(user?.userid);
      if (!userSession) {
        let newID = nanoid(6).toUpperCase();
        sessionStorage.setItem(user?.userid, newID);
        setUserID(newID);
      } else {
        setUserID(userSession);
      }
    }
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase tw-text-right">
            {"ID#" + userID}
          </h2>
        </div>
      </div>
      <div className="bottomSpace">
        <Router className="app">
          <UpdateID
            default
            path="/"
            actions={actions}
            setUserID={setUserID}
            isImagine={isImagine}
            user={user}
          />
          <Survey
            path={`/PreSurvey`}
            userID={userID}
            type="pre"
            isImagine={isImagine}
            handleGroupAssignment={handleGroupAssignment}
          />
          <LandingPage
            path="/ExperientialStart"
            actions={actions}
            state={state}
            userID={userID}
          />
          <ExpressionInstructions
            path="/ExpressionStart"
            actions={actions}
            state={state}
            userID={userID}
          />
          <MainInstructions
            path="/ExperientialInstructions"
            actions={actions}
            state={state}
            userID={userID}
          />
          <ExpressionMainInstructions
            path="/ExpressionInstructions"
            actions={actions}
            state={state}
            userID={userID}
          />
          <ExerciseLab2
            path="/ExperientialExercise"
            actions={actions}
            state={state}
            isImagine
            userID={userID}
          />
          <ExerciseLab2
            path="/ExpressionActivity"
            actions={actions}
            state={state}
            isImagine
            isImagineExpression
            userID={userID}
          />
          <ExpressionStart
            path="/ExpressionExerciseStart"
            actions={actions}
            state={state}
            userID={userID}
            setCount={setCount}
          />
          <ExpressionExercise
            path="/ExpressionExercise"
            actions={actions}
            state={state}
            setCount={setCount}
            count={count}
            userID={userID}
          />
          <ExpressionScore
            path="/ExpressionScore"
            actions={actions}
            state={state}
            count={count}
            userID={userID}
          />
          <Reading
            path={`/Reading`}
            user={state.main.user}
            userID={userID}
            labID={labId}
            isImagine={isImagine}
          />
          <Quiz
            path={"/Quiz"}
            user={state.main.user}
            labId={labId}
            isImagine={isImagine}
            hideCertificate={false}
            submitData={() => {}}
            isFinalQuiz={false}
            userID={userID}
          />
          <Survey path={`/PostSurvey`} userID={userID} type="post" />
          <ExerciseEnd
            path="/ExerciseEnd"
            actions={actions}
            state={state}
            isExperiential={isExperiential}
            userID={userID}
          />
        </Router>
      </div>
    </div>
  );
};

Main.propTypes = {
  actions: PropTypes.object,
  state: PropTypes.object,
  user: PropTypes.object,
  isImagine: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
