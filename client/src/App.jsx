import React, { lazy, Suspense, useEffect, useState } from 'react';

/** Body Components **/
import { default as About } from './components/body/About';
import { default as Reading } from './components/body/Reading/Reading';
import { default as Reinforcement } from './components/body/Reinforcement';
import { default as Quiz } from './components/quiz/components/QuizHandler';

/** Exercise Components **/
import { default as ExerciseLab0 } from './components/exercise/lab0/Main';
import { default as ExerciseLab1 } from './components/exercise/lab1/Main';
import { default as ExerciseLab2 } from './components/exercise/lab2/Main';
import { default as ExerciseLab3 } from './components/exercise/lab3/Main';
import { default as ExerciseLab4 } from './components/exercise/lab4/Main';
import { default as ExerciseLab5 } from './components/exercise/lab5/Main';
import { default as ExerciseLab6 } from './components/exercise/lab6/Main';
import { default as ExerciseLab7 } from './components/exercise/lab7/Main';
import { default as ExerciseLab8 } from './components/exercise/lab8/Main';
import { default as ExerciseLab9 } from './components/exercise/lab9/Main';
import { default as ExerciseLab10 } from './components/exercise/lab10/Main';
import { default as ExerciseLab11 } from './components/exercise/lab11/Main';
import { default as ExerciseLab12 } from './components/exercise/lab12/Main';
import { default as ExerciseLab13 } from './components/exercise/lab13/Main';
import { default as ExerciseLab14 } from './components/exercise/lab14/Main';

import { Sections } from './constants/index';

/** Persistent Components **/
import Header from './components/header/header';
import MainFooter from './components/footer/mainFooter';
import ALLSnackbar from './components/all-components/ALLSnackbar';

/** Individual Page Components **/
import LandingPage from './pages/landingpage/index';
import LabsPage from './pages/labspage/LabsPage';
import AboutUsPage from './pages/about-us/AboutUsPage';
import EducatorResources from './pages/EducatorResources/EducatorResources';
import Profile from './components/body/profilepage/Profile';

/** Miscellaneous Components and Redux **/
import { default as Error } from './pages/landingpage/error';
import { default as SiteMap } from './pages/landingpage/sitemap';
import { default as Imagine2023 } from './components/imagine23/Main';
import { default as Imagine2025 } from './components/imagine25/Main';
import { Routes, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions as mainActions } from './reducers/MainReducer';
import { bindActionCreators } from 'redux';
import './assets/stylesheets/main.scss';
import { stateChange } from './helpers/Redirect';
import { actions as appActions } from './reducers/lab1/AppReducer';
import useMainStateContext from './reducers/MainContext';
import { Spinner } from 'reactstrap';

const LabWindow = lazy(
  () => import('./components/all-components/Lab/LabWindow'),
);

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

const App = () => {
  const context = useMainStateContext();
  const { state, actions } = context;
  const [isLoaded, setLoaded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    actions.login().then(() => {
      setLoaded(true);
    });
  }, [actions]);

  useEffect(() => {
    stateChange(actions, location.pathname);
  }, [location.pathname, actions]);

  const lab = state.main.lab;
  const body = state.main.body;
  const isImagine = state.main.isImagine;
  const labInProgress = lab !== 99;

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questions, setQuestions] = useState([
    {
      question: 'Default',
      answers: [
        {
          val: 0,
          type: '0',
          content: 'Default',
        },
      ],
      multiChoice: false,
    },
  ]);
  const [result, setResult] = useState(0);

  const renderLabs = () => {
    return (
      <div className={'tw-h-full tw-w-full'}>
        <Routes>
          <Route
            path={`/Lab${lab}/`}
            element={<About user={state.main.user} labID={lab} />}
          />
          <Route
            path={`/Lab${lab}/About`}
            element={<About user={state.main.user} labID={lab} />}
          />

          <Route
            path={`/Lab${lab}/Reading`}
            element={
              <Reading
                user={state.main.user}
                labID={lab}
                isImagine={isImagine}
              />
            }
          />

          <Route
            path="/Lab0/Exercise/*"
            element={<ExerciseLab0 user={state.main.user} />}
          />
          <Route
            path="/Lab1/Exercise"
            element={<ExerciseLab1 user={state.main.user} />}
          />
          <Route
            path="/Lab2/Exercise"
            element={
              <ExerciseLab2 user={state.main.user} isImagine={isImagine} />
            }
          />
          <Route
            path="/Lab3/Exercise/*"
            element={<ExerciseLab3 user={state.main.user} />}
          />
          <Route
            path="/Lab4/Exercise/*"
            element={<ExerciseLab4 user={state.main.user} />}
          />
          <Route
            path="/Lab5/Exercise/*"
            element={<ExerciseLab5 user={state.main.user} />}
          />
          <Route
            path="/Lab6/Exercise/*"
            element={<ExerciseLab6 user={state.main.user} />}
          />
          <Route
            path="/Lab7/Exercise/*"
            element={<ExerciseLab7 user={state.main.user} />}
          />
          <Route
            path="/Lab8/Exercise/*"
            element={<ExerciseLab8 user={state.main.user} />}
          />
          <Route
            path="/Lab9/Exercise/*"
            element={<ExerciseLab9 user={state.main.user} />}
          />
          <Route
            path="/Lab10/Exercise/*"
            element={<ExerciseLab10 user={state.main.user} />}
          />
          <Route
            path="/Lab11/Exercise/*"
            element={<ExerciseLab11 user={state.main.user} />}
          />
          <Route
            path="/Lab12/Exercise/*"
            element={<ExerciseLab12 user={state.main.user} />}
          />
          <Route
            path="/Lab13/Exercise/*"
            element={<ExerciseLab13 user={state.main.user} />}
          />
          <Route
            path="/Lab14/Exercise/*"
            element={<ExerciseLab14 user={state.main.user} />}
          />

          <Route
            path={`/Lab${lab}/Reinforcement`}
            element={<Reinforcement user={state.main.user} labID={lab} />}
          />
          <Route
            path={`/Lab${lab}/Quiz`}
            element={
              <Quiz
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
            }
          />
        </Routes>
      </div>
    );
  };

  const renderPages = () => {
    return (
      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/SiteMap" element={<SiteMap />} />
        <Route path="/Profile" element={<Profile user={state.main.user} />} />
        <Route
          path="/Labs"
          element={<LabsPage user={state.main.user} actions={actions} />}
        />
        <Route
          path="/EducatorResources"
          element={<EducatorResources user={state.main.user} />}
        />
        <Route path="*" element={<Error actions={actions} />} />

        <Route
          path="/Imagine2023/*"
          element={
            <Imagine2023
              user={state.main.user}
              isImagine={isImagine}
              actions={actions}
            />
          }
        />

        <Route
          path="/Imagine2025/*"
          element={<Imagine2025 user={state.main.user} isImagine={isImagine} />}
        />
      </Routes>
    );
  };

  // look into index.js in constants
  return (
    <>
      {isLoaded ? (
        <div
          className={
            labInProgress || isImagine ? '' : 'overflow-x-hidden min-h-screen'
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
                  <div className={'tw-flex tw-row-span-10 tw-text-center'}>
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
