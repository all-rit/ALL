import React, { Suspense, useEffect, useState } from "react";
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
import { Sections } from "./constants/index";

/** Persistent Components **/
import Header from "./components/header/header";
import LabFooter from "./components/footer/LabFooter";
import MainFooter from "./components/footer/mainFooter";
import NavigationPane from "./components/all-components/Lab/NavigationPane";
import SiteAccessibilityButton from "./components/all-components/SiteAccessibilityButton";
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

  useEffect(() => {
    actions.login();
    const location = parse(window.location.href);
    stateChange(actions, location.pathname);
    globalHistory.listen((location) => {
      stateChange(actions, location.location.pathname);
    });
  }, []);
  const lab = state.main.lab;
  const body = state.main.body;
  const isImagine = state.main.isImagine;

  const [quizCompleted, setQuizCompleted] = useState(false);

  const renderLabs = () => {
    return (
      <Router basepath={process.env.PUBLIC_URL}>
        <About path={`/Lab${lab}/`} user={state.main.user} labID={lab} />
        <About path={`/Lab${lab}/About`} user={state.main.user} labID={lab} />

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
        />
        <Error actions={actions} default />
      </Router>
    );
  };

  const renderPages = () => {
    return (
      <Router basepath={process.env.PUBLIC_URL}>
        <AboutUsPage path={"/about-us"} />
        <LandingPage path="/" />
        <SiteMap path="/SiteMap" />
        <Profile path="/Profile" user={state.main.user} />
        <LabsPage path={"/Labs"} user={state.main.user} actions={actions} />
        <EducatorResources path={"/EducatorResources"} user={state.main.user} />
        <Error actions={actions} default />

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
      </Router>
    );
  };

  // look into index.js in constants
  initializeReactGA();
  return (
    <>
      <div
        className={`overflow-x-hidden tw-h-lvh ${isImagine ? "overflow-y-hidden" : "overflow-y-auto"}`}
      >
        <Header isImagine={isImagine} />
        <Suspense
          fallback={
            <div className={"tw-body-text tw-max-h-[40rem]"}> Loading... </div>
          }
        >
          <div className="appBody tw-min-h-fit tw-relative xs:tw-mt-[6rem] md:tw-mt-[8rem] tw-overflow-y-scroll tw-overflow-x-hidden">
            <div className={"tw-relative"}>
              {lab !== 99 && (
                <div
                  className={
                    "tw-absolute tw-grid tw-ml-5 tw-grid-cols-12 tw-w-lvw xs:tw-h-[30rem] md:tw-h-[45rem] tw-gap-y-4"
                  }
                >
                  <div
                    className={
                      "tw-row-start-2 tw-col-start-1 tw-row-span-3 tw-col-span-12 tw-bg-primary-yellow tw-rounded-bl-lg tw-flex shadow"
                    }
                  />
                  <div
                    className={
                      "tw-row-span-6 tw-col-span-12 tw-col-start-1 tw-bg-primary-blue tw-rounded-bl-lg tw-flex shadow"
                    }
                  />
                </div>
              )}

              {lab !== 99 ? (
                <div
                  className={
                    "tw-grid tw-justify-center tw-grid-cols-12 tw-py-6 tw-h-[45rem] tw-gap-x-3 tw-p-6"
                  }
                >
                  <div
                    className={
                      "tw-flex tw-col-start-1 tw-col-span-2 tw-max-h-[45rem]"
                    }
                  >
                    <NavigationPane
                      labID={lab}
                      title={Sections[lab].fullname}
                    />
                  </div>
                  <div
                    className={
                      "tw-flex-row tw-z-10 xs:tw-col-start-1 md:tw-col-start-3 xs:tw-col-span-12 tw-p-4 md:tw-col-span-10 tw-bg-white shadow tw-border-solid tw-border-b-0 tw-border-l-0 tw-rounded-tr-xl tw-rounded-bl-xl tw-border-t-primary-blue tw-border-r-primary-blue tw-border-[.5rem] tw-text-center tw-overflow-y-hidden"
                    }
                  >
                    {renderLabs()}
                  </div>
                </div>
              ) : (
                <div className={"tw-flex tw-row-span-10 tw-text-center"}>
                  {renderPages()}
                </div>
              )}
            </div>
          </div>
          {lab === 99 && !isImagine && <MainFooter />}
          <ALLSnackbar />
          {lab !== 99 && (
            <LabFooter
              context={context}
              quizCompleted={quizCompleted}
              setQuizCompleted={setQuizCompleted}
              isImagine={isImagine}
            />
          )}
          {body !== 2 && <SiteAccessibilityButton />}
        </Suspense>
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
