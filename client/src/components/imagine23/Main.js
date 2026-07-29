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
import ExpressionExercise2 from "./pages/ExpressionExercise2";
import ExpressionScore from "./pages/ExpressionScore";
import ExerciseEnd from "./pages/ExerciseEnd";
import UpdateID from "./pages/UpdateID";
import ExpressionMainInstructions from "./pages/ExpressionMainInstructions";
import ExpressionInstructions from "./pages/ExpressionInstructions";
import Survey from "../all-components/imagine-components/SurveyHandlerComp";
import { resetSystem } from "../../reducers/lab2/actions";
const { nanoid } = require("nanoid");

import { PropTypes } from "prop-types";
import useMainStateContext from "../../reducers/MainContext";

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
  const year = 23;
  const [isExperiential, setIsExperiential] = useState(false);

  const context = useMainStateContext();
  const { actions } = context;

  function handleGroupAssignment(isExperiential) {
    setIsExperiential(isExperiential);

    if (isExperiential) {
      navigate("/Imagine2023/ExperientialStart");
    } else {
      navigate("/Imagine2023/ExpressionStart");
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
    <div className=" tw-min-h-[40rem] tw-mt-[10%]">
      <div className={"tw-relative"}>
        <div className="tw-bg-primary-blue tw-absolute tw-right-14  tw-top-[-2rem] tw-z-1 tw-border-0 tw-rounded-xl tw-shadow-lg">
          {/* change font size */}
          <h2 className=" text-uppercase tw-title tw-p-6 tw-text-white">
            {"ID: " + userID}
          </h2>
        </div>
      </div>
      <div className={"tw-flex tw-h-full tw-w-full tw-mt-[10%]"}>
        <div
          className={
            "tw-grid tw-grid-cols-8 tw-grid-rows-9 tw-w-full tw-h-[40rem] tw-gap-y-6 tw-pl-6"
          }
        >
          <div
            className={
              "tw-row-span-3 tw-col-span-8 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
            }
          />
          <div
            className={
              "tw-row-span-5 tw-col-span-8 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
            }
          />
        </div>
        <div
          className={
            "tw-absolute tw-top-[15%] tw-left-[15%] tw-bg-white tw-w-3/4 tw-h-[80%] shadow tw-rounded-xl tw-p-6"
          }
        >
          <Router className="app tw-h-full tw-overflow-x-hidden tw-flex tw-justify-center tw-items-center">
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
              year={year}
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
              year={year}
            />
            <ExpressionExercise2
              path="/ExpressionPOCExercise"
              actions={actions}
              state={state}
              setCount={setCount}
              count={count}
              userID={userID}
              year={year}
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
              year={year}
            />
            <Survey
              path={`/PostSurvey`}
              userID={userID}
              type="post"
              year={year}
            />
            <ExerciseEnd
              path="/ExerciseEnd"
              actions={actions}
              state={state}
              isExperiential={isExperiential}
              userID={userID}
              resetSystem={resetSystem}
            />
          </Router>
        </div>
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
