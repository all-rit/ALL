import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import '../../../assets/stylesheets/main.scss';
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../reducers/lab6/ExerciseReducer";

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

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...exerciseActions}, dispatch),
    };
};

class Main extends Component {

    // eslint-disable-next-line require-jsdoc
    render() {
        const {actions,user} = this.props;
        return (
            <div className="container bottomSpace" >
                <Router className="app">
                    {/* Part 1: Applicant */}
                    <ExerciseStart path="/" actions={actions}/>
                    <AvatarSelection path="/AvatarSelection" actions={actions}/>
                    <QualificationQuestions path="/QualificationQuestions" actions={actions}/>
                    <AnalyzeData path="/AnalyzeData" actions={actions}/>
                    <NegativeReasoning path="/NegativeReasoning" actions={actions}/>
                    <AIAnalysisQuestions path="/AIAnalysisQuestions" actions={actions}/>
                    {/* Part 2: Employer */}
                    <EmployerStart path="/EmployerStart" actions={actions}/>

                    {/*Added favorablehiringcandidate pg */}
                    <FavorableHiringCandidate path = "/FavorableHiringCandidate" actions={actions}/>

                    <HiringCandidate path="/HiringCandidate" actions={actions}/>
                    <AIReasoningQuestions path="/AIReasoningQuestions" actions={actions}/>
                    <AIReasoning path="/AIReasoning" actions={actions}/>
                    <AIRepair path="/AIRepair" actions={actions}/>
                    <FixedHiringCandidate path="/FixedHiringCandidate" actions={actions}/>
                    <ExerciseEnd path="/ExerciseEnd" actions={actions}/>

                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);