import React from "react";
import { Router } from "@reach/router";
import "../../../assets/stylesheets/main.scss";

import ExerciseStart from "./pages/Applicant/ExerciseStart";

import AvatarSelection from "./pages/Applicant/AvatarSelection";

import QualificationQuestions from "./pages/Applicant/QualificationQuestions";

import AnalyzeData from "./pages/Applicant/AnalyzeData";
import NegativeReasoning from "./pages/Applicant/NegativeReasoning";
import AIAnalysisQuestions from "./pages/Applicant/AIAnalysisQuestions";
import EmployerStart from "./pages/Employer/EmployerStart";

import FavorableHiringCandidate from "./pages/Employer/FavorableHiringCandidate";

import HiringCandidate from "./pages/Employer/HiringCandidate";

import AIReasoningQuestions from "./pages/Employer/AIReasoningQuestions";
import AIReasoning from "./pages/Employer/AIReasoning";
import AIRepair from "./pages/Employer/AIRepair";
import FixedHiringCandidate from "./pages/Employer/FixedHiringCandidate";
import ExerciseEnd from "./pages/Employer/ExerciseEnd";

const Main = () => {
  return (
    <div className="container bottomSpace">
      <Router className="app">
        {/* Part 1: Applicant */}
        <ExerciseStart path="/" />
        <AvatarSelection path="/AvatarSelection" />
        <QualificationQuestions path="/QualificationQuestions" />
        <AnalyzeData path="/AnalyzeData" />
        <NegativeReasoning path="/NegativeReasoning" />
        <AIAnalysisQuestions path="/AIAnalysisQuestions" />
        {/* Part 2: Employer */}
        <EmployerStart path="/EmployerStart" />
        <FavorableHiringCandidate path="/FavorableHiringCandidate" />
        <HiringCandidate path="/HiringCandidate" />
        <AIReasoningQuestions path="/AIReasoningQuestions" />
        <AIReasoning path="/AIReasoning" />
        <AIRepair path="/AIRepair" />
        <FixedHiringCandidate path="/FixedHiringCandidate" />
        <ExerciseEnd path="/ExerciseEnd" />
      </Router>
    </div>
  );
};

export default Main;
