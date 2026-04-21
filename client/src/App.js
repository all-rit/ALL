import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactGA from "react-ga";

/** Body Components **/
import { default as About } from "./components/body/About";
import { default as Reading } from "./components/body/Reading/Reading";
import { default as Reinforcement } from "./components/body/Reinforcement";
import { default as Quiz } from "./components/quiz/components/QuizHandler";

/** Exercise Components **/
import { default as ExerciseLab0 } from "./components/exercise/lab0/Main";
import { default as ExerciseLab1 } from "./components/exercise/lab1/Main";
import { default as ExerciseLab2 } from "./components/exercise/lab2/Main";
import { default as ExerciseLab3 } from "./components/exercise/lab3/Main";
import { default as ExerciseLab4 } from "./components/exercise/lab4/Main";
import { default as ExerciseLab5 } from "./components/exercise/lab5/Main";
import { default as ExerciseLab6 } from "./components/exercise/lab6/Main";
import { default as ExerciseLab7 } from "./components/exercise/lab7/Main";
import { default as ExerciseLab8 } from "./components/exercise/lab8/Main";
import { default as ExerciseLab9 } from "./components/exercise/lab9/Main";
import { default as ExerciseLab10 } from "./components/exercise/lab10/Main";
import { default as ExerciseLab11 } from "./components/exercise/lab11/Main";
import { default as ExerciseLab12 } from "./components/exercise/lab12/Main";
import { default as ExerciseLab13 } from "./components/exercise/lab13/Main";
import { default as ExerciseLab14 } from "./components/exercise/lab14/Main";

import { Sections } from "./constants/index";

/** Persistent Components **/
import Header from "./components/header/header";
import MainFooter from "./components/footer/mainFooter";
import ALLSnackbar from "./components/all-components/ALLSnackbar";

/** Individual Page Components **/
import LandingPage from "./pages/landingpage/index";
import LabsPage from "./pages/labspage/LabsPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import EducatorResources from "./pages/EducatorResources/EducatorResources";
import Profile from "./components/body/profilepage/Profile";

/** Miscellaneous Components and Redux **/
import { default as Error } from "./pages/landingpage/error";
import { default as SiteMap } from "./pages/landingpage/sitemap";
import { default as Imagine2023 } from "./components/imagine23/Main";
import { default as Imagine2025 } from "./components/imagine25/Main";
import { globalHistory, Router } from "@reach/router";
import { connect } from "react-redux";
import { actions as mainActions } from "./reducers/MainReducer";
import { bindActionCreators } from "redux";
import "./assets/stylesheets/main.scss";
import { stateChange } from "./helpers/Redirect";
import { actions as appActions } from "./reducers/lab1/AppReducer";
import useMainStateContext from "./reducers/MainContext";
import { Spinner } from "reactstrap";
import ScrollWrapper from "./use-hooks/scrollWrapper";

const LabWindow = lazy(
  () => import("./components/all-components/Lab/LabWindow"),
);
const parse = require("url-parse");

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...appActions, ...mainActions }, dispatch),
  };
};

function initializeReactGA() {
  if (process.env.NODE_ENV === "production") {
    const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

const App = () => {
  const context = useMainStateContext();
  const { state, actions } = context;
  let [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    actions.login();
    const location = parse(window.location.href);
    stateChange(actions, location.pathname);
    globalHistory.listen((location) => {
      stateChange(actions, location.location.pathname);
    });
    setLoaded(true);
  }, []);
  const lab = state.main.lab;
  const body = state.main.body;
  const isImagine = state.main.isImagine;
  const labInProgress = lab !== 99;

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questions, setQuestions] = useState([
    {
      question: "Default",
      answers: [
        {
          val: 0,
          type: "0",
          content: "Default",
        },
      ],
      multiChoice: false,
    },
  ]);
  const [result, setResult] = useState(0);

  const renderLabs = () => {
    return (
      <div className={"tw-h-full tw-w-full"}>
        <Router basepath={process.env.PUBLIC_URL}>
          <ScrollWrapper path="/">
            <About path={`/Lab${lab}/`} user={state.main.user} labID={lab} />
            <About
              path={`/Lab${lab}/About`}
              user={state.main.user}
              labID={lab}
            />
            <Reading
              path={`/Lab${lab}/Reading`}
              user={state.main.user}
              labID={lab}
              isImagine={isImagine}
            />
            <ExerciseLab0 path={"/Lab0/Exercise/*"} user={state.main.user} />
            <ExerciseLab1 path="/Lab1/Exercise" user={state.main.user} />
            <ExerciseLab2
              path="/Lab2/Exercise"
              user={state.main.user}
              isImagine={isImagine}
            />
            <ExerciseLab3 path="/Lab3/Exercise/*" user={state.main.user} />
            <ExerciseLab4 path="/Lab4/Exercise/*" user={state.main.user} />
            <ExerciseLab5 path="/Lab5/Exercise/*" user={state.main.user} />
            <ExerciseLab6 path="/Lab6/Exercise/*" user={state.main.user} />
            <ExerciseLab7 path="/Lab7/Exercise/*" user={state.main.user} />
            <ExerciseLab8 path="/Lab8/Exercise/*" user={state.main.user} />
            <ExerciseLab9 path="/Lab9/Exercise/*" user={state.main.user} />
            <ExerciseLab10 path="/Lab10/Exercise/*" user={state.main.user} />
            <ExerciseLab11 path="/Lab11/Exercise/*" user={state.main.user} />
            <ExerciseLab12 path="/Lab12/Exercise/*" user={state.main.user} />
            <ExerciseLab13 path="/Lab13/Exercise/*" user={state.main.user} />
            <ExerciseLab14 path="/Lab14/Exercise/*" user={state.main.user} />

            <Reinforcement
              path={`/Lab${lab}/Reinforcement`}
              user={state.main.user}
              labID={lab}
            />
            <Quiz
              path={`/Lab${lab}/Quiz`}
              labId={lab}
              user={state.main.user}
              isFinalQuiz={true}
              hideCertificate={false}
              quizCompleted={quizCompleted}
              setQuizCompleted={setQuizCompleted}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
              questions={questions}
              setQuestions={setQuestions}
              result={result}
              setResult={setResult}
            />
          </ScrollWrapper>
        </Router>
      </div>
    );
  };

  const renderPages = () => {
    return (
      <Router basepath={process.env.PUBLIC_URL}>
        <ScrollWrapper path="/">
          <AboutUsPage path={"/about-us"} />
          <LandingPage path="/" />
          <SiteMap path="/SiteMap" />
          <Profile path="/Profile" user={state.main.user} />
          <LabsPage path={"/Labs"} user={state.main.user} actions={actions} />
          <EducatorResources
            path={"/EducatorResources"}
            user={state.main.user}
          />
          <Error default />

          <Imagine2023
            path={"/Imagine2023/*"}
            user={state.main.user}
            isImagine={isImagine}
            actions={actions}
          />

          <Imagine2025
            path={"/Imagine2025/*"}
            user={state.main.user}
            isImagine={isImagine}
          />
        </ScrollWrapper>
      </Router>
    );
  };

  // look into index.js in constants
  initializeReactGA();
  return (
    <>
      {isLoaded ? (
        <div
          className={
            labInProgress || isImagine ? "" : "overflow-x-hidden min-h-screen"
          }
        >
          <Suspense fallback={<Spinner />}>
            <Header isImagine={isImagine} />
            <div className={`tw-relative`}>
              <div className={`tw-relative tw-grid`}>
                {labInProgress ? (
                  <LabWindow
                    lab={lab}
                    title={Sections[lab].fullname}
                    context={context}
                    quizCompleted={quizCompleted}
                    setQuizCompleted={setQuizCompleted}
                    isImagine={isImagine}
                    body={body}
                  >
                    {renderLabs()}
                  </LabWindow>
                ) : (
                  <div className={"tw-flex tw-row-span-10 tw-text-center"}>
                    {renderPages()}
                  </div>
                )}
              </div>
            </div>
            {!labInProgress && !isImagine && <MainFooter />}
            <ALLSnackbar />
          </Suspense>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
