import { Component, useState } from "react";
import QualQuesData from "../../components/QualQuesData";
import "../../../../../components/quiz/App.css";
import QualificationQuestionsC from "../../components/QualificationQuestionsC";
import { counter } from "@fortawesome/fontawesome-svg-core";


function App() {

    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            disableNextQuestion: true,
            selectedAnswers: {},
            multiChoice: false,
            qualQuestions: []
        }
        ;

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.assignQualQuestions = this.assignQualQuestions.bind(this);
        this.setNextQuestion = this.setNextQuestion.bind(this);
        }

        assignQualQuestions(){
            return QualQuesData
        }

        handleAnswerSelected(event) {
            this.setState((state, props) => ({
                disableNextQuestion: false
            }));
        }

        setUserAnswer(answer) {
            this.setState((state, props) => ({
                disableNextQuestion: false,
                selectedAnswers: {
                    ...state.selectedAnswers,
                    [this.state.counter]: answer
                },
                answer: answer
            }));
        }

        getCheckedAnswers() {
            let checked = document.getElementsByName('checkboxGroup');
            let currentAnswers = {};
            for (let index = 0; index < checked.length; index++) {
                if (checked[index].checked === true) {
                    currentAnswers[index] = 1

                } else {
                    currentAnswers[index] = 0
                }

            }
            return currentAnswers;
        }

        setNextQuestion() {
            let currentAnswers = this.getCheckedAnswers();

            if (this.state.questionId < this.state.qualQuestions.length) {
                const counter = this.state.counter + 1;
                const questionId = this.state.questionId + 1

                this.setState({
                    counter: counter,
                    questionId: questionId,
                    question: this.state.qualQuestions[counter].question,
                    answerOptions: this.state.qualQuestions[counter].answers,
                    answer: '',
                    disableNextQuestion: true,
                    multiChoice: this.state.qualQuestions[counter].multiChoice
                });
            } 
        }
        getJsonResults() {
            const jsonresults = []
            let counter = 0
            const selectedAnswers = Object.values(this.state.selectedAnswers);
            for (const qualQuestions of this.state.qualQuestions){
                let qualQuestionObject = {Question: question, Answers: [], selectedAnswers: []}
                const selectedAnswerQuestion = selectedAnswers[counter];
                const choices = Object.values(selectedAnswerQuestion);
                let optionCounter = 0;
                for (const choice of choices) {
                    if (choice === 1) {
                        qualQuestionObject["selectedAnswers"].push(answers[optionCounter]['content']);
                    }
                    optionCounter += 1;
                }
                jsonresults.push(qualQuestionObject);
                counter += 1;
            }
            return JSON.stringify(jsonresults);
        }

        //The QualificationQuestionsC also needs a rework in the veign of the Quiz component for this to work.
        //Hold for now. Engage tomorrow 11/15/2022
        renderQualQuestions() {
            return (
                <div>
                    <QualificationQuestionsC
                        answer={this.state.answer}
                        answerOptions={this.state.answerOptions}
                        questionId={this.state.questionId}
                        question={this.state.question}
                        questionTotal={this.state.qualQuestions.length}
                        onAnswerSelected={this.handleAnswerSelected}
                        nextQuestion={this.setNextQuestion}
                        disable={this.state.disableNextQuestion}
                        />
                </div>
            )
        }

        render() {
            initializeReactGA();
            return (
                <div className="QualQuestions">
                {this.renderQualQuestions()}
                </div>
            )
        }
    }

    // const [checkedState, setCheckedState] = useState(new Array(QualQues.length).fill(false));

    // const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //       index === position ? !item : item
    //     );
    
    //     setCheckedState(updatedCheckedState);
    // }

    // return (
    //     <div className = "App">
    //         <h3>Select Qualities</h3>
    //         <ul className = "QualQues list">
    //             {QualQues.map(({content, value}, index) => {
    //                 return(
    //                     <li key = {index}>
    //                         <div className = "QualQues-list-item">
    //                             <div className = "left-section">
    //                                 <input
    //                                     type = "checkbox"
    //                                     id = {`custom-checkbox-${index}`}
    //                                     name = {content}
    //                                     value = {content}
    //                                     checked = {checkedState[index]}
    //                                     onChange={() => handleOnChange(index)}
    //                                 />
    //                                 <label htmlFor={`custom-checkbox-${index}`}>{content}</label>
    //                             </div>
    //                         </div>
    //                         </li>
    //                     );
    //                 })}
    //         </ul>
    //     </div>
    // );
}

