import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";

/** Body Components **/
import { default as About } from "./components/body/About";
import { default as Reading } from "./components/body/Reading/Reading";
import { default as Reinforcement } from "./components/body/Reinforcement";
import { default as Quiz } from "./components/quiz/components/QuizHandler";

/** Exercise Components **/
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
import LabFooter from "./components/footer/footer";
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
import { default as Imagine } from "./components/imagine23/Main";
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
  // const body = state.main.body;
  const isImagine = state.main.isImagine;

  const [quizCompleted, setQuizCompleted] = useState(false);

  // look into index.js in constants
  initializeReactGA();
  return (
    <>
      <div className="overflow-x-hidden tw-h-lvh">
        <Header />
        <div className="appBody tw-min-h-[50rem] tw-relative tw-gap-x-5 tw-mb-[-3rem]">
          <div
            className={
              "" +
              (lab !== 0
                ? "tw-flex tw-flex-row tw-w-full tw-h-[40rem] tw-items-center tw-justify-between tw-mt-[10rem] tw-px-[4rem] tw-relative"
                : "")
            }
          >
            {lab !== 0 && (
              <div className={"tw-flex"}>
                <NavigationPane labID={lab} title={Sections[lab].fullname} />
                <div
                  className={
                    "tw-h-[20%] tw-w-[98%] tw-bg-primary-yellow tw-absolute tw-top-[2rem] tw-right-0 tw-z-0 tw-rounded-bl-lg tw-flex"
                  }
                />
                <div
                  className={
                    "tw-h-[75%] tw-w-[98%] tw-bg-primary-blue tw-absolute tw-top-[15rem] tw-right-0 tw-z-0 tw-rounded-bl-lg tw-flex"
                  }
                />
              </div>
            )}
            <Router
              basepath={process.env.PUBLIC_URL}
              className={`app tw-z-10 tw-bg-white tw-rounded-lg 
                ${
                  lab !== 0
                    ? `tw-absolute tw-right-[0rem] xs:tw-w-full md:tw-w-[60%] lg:tw-w-[70%] tw-mx-6 
                ${state.main.body === 0 ? "tw-mt-[5rem] tw-h-[90%]" : "tw-h-[105%]"} 
                tw-top-0 tw-justify-center tw-flex tw-flex-col`
                    : "tw-w-full"
                }`}
            >
              <AboutUsPage path={"/about-us"} />
              <LandingPage path="/" />
              <SiteMap path="/SiteMap" />
              <Profile path="/Profile" user={state.main.user} />
              <LabsPage
                path={"/Labs"}
                user={state.main.user}
                actions={actions}
              />
              <EducatorResources
                path={"/EducatorResources"}
                user={state.main.user}
              />
              <Error actions={actions} default />

              <Imagine
                path={"/Imagine/*"}
                user={state.main.user}
                isImagine={isImagine}
                actions={actions}
              />

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
            </Router>
          </div>
        </div>
        {lab === 0 && <MainFooter />}
        <ALLSnackbar />
        <LabFooter
          context={context}
          quizCompleted={quizCompleted}
          setQuizCompleted={setQuizCompleted}
          isImagine={isImagine}
        />
        <SiteAccessibilityButton />
      </div>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
