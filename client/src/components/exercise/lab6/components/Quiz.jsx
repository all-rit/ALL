
import { useState } from 'react';
import AnswerOption from '../../../quiz/components/AnswerOption';
import Question from '../../../quiz/components/Question';
import QuestionCount from '../../../quiz/components/QuestionCount';
import './App.css'


export default function Quiz(props) {  
    //let info = require('./Questions.json')
    // componentDidMount() {
    //     $.getJSON('pages/Applicant/Questions.js'), function(result) {
    //         this.setState({quiz: result})
    //         this.setState({'numberOfQuestions': result.questions.length})
    //     }
    // }

    return(
        // <div className="quiz container shadow" key={props.questionId}>
        <div className='quiz container shadow'>
            <div >
                <QuestionCount 
                counter={props.questionId}
                total={props.questionTotal}
                />

                <Question content='How many jobs have you held?'/>

                <ul className="answerOptions">
                    <AnswerOption 
                        key=''
                        answerContent='0'
                        answerType='text'
                        questionId='1'
                    />
                    <AnswerOption 
                        key=''
                        answerContent='1-2'
                        answerType='text'
                        questionId='2'
                    />
                    <li>0</li>
                    <li>1-2</li>
                    <li>3-4</li>
                    <li>5+</li>
                </ul>
            </div>
        </div>
    );
}

