import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import '../../../assets/stylesheets/main.scss';
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../reducers/lab6/ExerciseReducer";

import ExerciseStart from "./pages/Applicant/ExerciseStart";


import AvatarSelection from "./pages/Applicant/AvatarSelection";

//Added QualQues imports
import QualQues1 from "./pages/Applicant/QualQues1";
import QualQues2 from "./pages/Applicant/QualQues2";
import QualQues3 from "./pages/Applicant/QualQues3";
import QualQues4 from "./pages/Applicant/QualQues4";
import QualQues5 from "./pages/Applicant/QualQues5";


//Add Qualification Questions handler in here and have after Avatar Selection import
// import QualQuestionsFunction from "./components/QualQuestionsFunction";


import QualificationQuestions from "./pages/Applicant/QualificationQuestions";

import AnalyzeData from "./pages/Applicant/AnalyzeData";
import NegativeReasoning from "./pages/Applicant/NegativeReasoning";
import AIAnalysisQuestions from "./pages/Applicant/AIAnalysisQuestions";
import EmployerStart from "./pages/Employer/EmployerStart";

import FavorableHiringCandidate from "./pages/Employer/FavorableHiringCandidate"; 

import HiringCandidate from "./pages/Employer/HiringCandidate";


import Popup from "./pages/Employer/Popup";

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

                    {/* Added qualification questions path to main.js while commenting out 5 redundencies underneath     */}
                    {/* <QualQuestionsFunction path="/QualificationQuestions" actions={actions}/> */}

{/* 
                    <QualQues1 path="/QualQues1" actions={actions}/>
                    <QualQues2 path="/QualQues2" actions={actions}/>
                    <QualQues3 path="/QualQues3" actions={actions}/>
                    <QualQues4 path="/QualQues4" actions={actions}/>
                    <QualQues5 path="/QualQues5" actions={actions}/> */}

                    {/*Commented out QualificationQuestions for now */}

                    <QualificationQuestions path="/QualificationQuestions" actions={actions}/>
                    <AnalyzeData path="/AnalyzeData" actions={actions}/>
                    <NegativeReasoning path="/NegativeReasoning" actions={actions}/>
                    <AIAnalysisQuestions path="/AIAnalysisQuestions" actions={actions}/>
                    {/* Part 2: Employer */}
                    <EmployerStart path="/EmployerStart" actions={actions}/>

                    {/*Added favorablehiringcandidate pg */}
                    <FavorableHiringCandidate path = "/FavorableHiringCandidate" actions={actions}/>

                    {/*Added hiringcandidate pgs */}
                    <HiringCandidate path="/HiringCandidate" actions={actions}/>

                    <Popup path="/Popup" actions={actions}/>

                    

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