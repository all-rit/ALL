import React, { Component } from 'react';
import ReactGA from 'react-ga';
import quizQuestionsLab1 from './api/Lab1/quizQuestions';
import quizQuestionsLab2 from './api/Lab2/quizQuestions';
import quizQuestionsLab3 from './api/Lab3/quizQuestions';
import quizQuestionsLab4 from "./api/Lab4/quizQuestions";
import quizQuestionsLab5 from './api/Lab5/quizQuestions';
import quizQuestionsLab7 from './api/Lab7/quizQuestions';
import alterationQuizQuestions from './api/Lab7/alterationQuizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import UserLabService from '../../services/UserLabService';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as mainActions } from "../../reducers/MainReducer";

function initializeReactGA() {
    if (process.env.NODE_ENV === 'production') {
        const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
        ReactGA.initialize(TRACKING_ID);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    else if (process.env.NODE_ENV === 'development') {
        console.log("Google Analytics cannot be implemented in development mode")
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(mainActions, dispatch)
    };
};
const mapStateToProps = (state) => {
    return {
        state: state
    };
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            result: '',
            myCount: {},
            disableNextQuestion: true,
            selectedAnswers: {},
            multiChoice: false,
            lab: props.state.main.lab,
            quizQuestions: []
        }
            ;

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.assignQuizQuestions = this.assignQuizQuestions.bind(this);
        this.setNextQuestion = this.setNextQuestion.bind(this)
    }

    assignQuizQuestions() {
        const lab = this.props.state.main.lab;
        switch (lab) {
            case 1:
                return quizQuestionsLab1
            case 2:
                return quizQuestionsLab2
            case 3:
                return quizQuestionsLab3
            // case 4:
            case 4:
                return quizQuestionsLab4

            case 5:
                return quizQuestionsLab5
            case 7:
                if (this.props.state.main.body == 2) {
                    return alterationQuizQuestions
                } else {
                    return quizQuestionsLab7
                }
            default:
                return [{
                    question: "Default",
                    answers: [
                        {
                            val: 0,
                            content: "Default"
                        }
                    ],
                    multiChoice: false
                }]
        }
    }

    UNSAFE_componentWillMount() {
        this.setState({ quizQuestions: this.assignQuizQuestions() }, () => {
            for (let i = 0; i < this.state.quizQuestions.length; i++) {
                for (let x = 0; x < this.state.quizQuestions[i]['answers'].length; x++) {
                    let questions = this.state.quizQuestions;
                    questions[i]['answers'][x]['type'] = "" + x;
                    this.setState({
                        quizQuestions: questions
                    })


                    // this.state.quizQuestions[i]['answers'][x]['type'] = "" + x;
                }
            }
        })
    }


    componentDidMount() {
        for (let i = 0; i < this.state.quizQuestions.length; i++) {
            this.state.quizQuestions[i]['answers'].sort(function (a, b) {
                return parseInt(a.type) - parseInt(b.type);
            });
        }
        this.setState({
            question: this.state.quizQuestions[0].question,
            answerOptions: this.state.quizQuestions[0]['answers'],
            multiChoice: this.state.quizQuestions[0]['multiChoice']
        });
    }

    shuffleArray(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleAnswerSelected(event) {
        this.setState((state, props) => ({
            disableNextQuestion: false
        }));
    }

    setUserAnswer(answer, correctanswer) {
        this.setState((state, props) => ({
            disableNextQuestion: false,
            myCount: {
                ...state.myCount,
                [this.state.counter]: correctanswer
            },
            selectedAnswers: {
                ...state.selectedAnswers,
                [this.state.counter]: answer
            },
            answer: answer
        }));
    }

    checkMultipleAnswers(currentAnswers) {
        let correctAnswer = 0;
        let options = this.state.quizQuestions[this.state.counter]['answers'].length;
        for (var index = 0; index < options; index++) {
            if (this.state.quizQuestions[this.state.counter]['answers'][index]['val'] === currentAnswers[index]) {
                correctAnswer = 1;
            } else {
                correctAnswer = 0;
                break;
            }
        }

        this.setUserAnswer(currentAnswers, correctAnswer);
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

        //Calculate correct answers and set accordingly
        this.checkMultipleAnswers(currentAnswers);

        //Set next question
        if (this.state.questionId < this.state.quizQuestions.length) {
            const counter = this.state.counter + 1;
            const questionId = this.state.questionId + 1;

            this.setState({
                counter: counter,
                questionId: questionId,
                question: this.state.quizQuestions[counter].question,
                answerOptions: this.state.quizQuestions[counter].answers,
                answer: '',
                disableNextQuestion: true,
                multiChoice: this.state.quizQuestions[counter].multiChoice,
            });
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }

    }

    getResults(numerical = false) {
        const myCount = this.state.myCount;
        let correct = 0;
        let total = 0;
        for (var item in myCount) {
            total++;
            if (myCount.hasOwnProperty(item)) {
                if (myCount[item] === 1) correct++;
            }
        }
        let percent = Math.floor(correct / total * 100);
        if (!numerical) {
            return "" + percent + "%"
        }
        return percent;
    }

    setResults(result) {
        UserLabService.complete_quiz(this.state.lab, this.getResults(true), this.getJsonResults())
        if (this.props.user.firstname !== null) {
            UserLabService.user_complete_quiz(this.props.user.userid, this.state.lab, this.getResults(true))
        }
        this.setState({ result: result })
    }


    getJsonResults() {
        const jsonresults = []
        let counter = 0
        const selectedAnswers = Object.values(this.state.selectedAnswers);
        for (const quizQuestion of this.state.quizQuestions) {
            //get right answers
            const { question, answers } = quizQuestion //destructuring
            let quizQuestionObject = { Question: question, Answers: [], SelectedAnswers: [], IsCorrect: this.state.myCount[counter] === 1 }
            for (const answer of answers) {
                if (answer['val'] === 1) {
                    quizQuestionObject['Answers'].push(answer['content'])
                }
            }
            //get user selected answers
            const selectedAnswserQuestion = selectedAnswers[counter];
            const choices = Object.values(selectedAnswserQuestion);
            let optionCounter = 0;
            for (const choice of choices) {
                //is the choice the one that is selected by user
                if (choice === 1) {
                    quizQuestionObject["SelectedAnswers"].push(answers[optionCounter]['content']);
                }
                optionCounter += 1;
            }
            jsonresults.push(quizQuestionObject);
            counter += 1;
        }
        return JSON.stringify(jsonresults);
    }
    renderQuiz() {
        return (
            <div>
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    questionId={this.state.questionId}
                    question={this.state.question}
                    questionTotal={this.state.quizQuestions.length}
                    onAnswerSelected={this.handleAnswerSelected}
                    nextQuestion={this.setNextQuestion}
                    disable={this.state.disableNextQuestion}
                    multiChoice={this.state.multiChoice}
                />
            </div>
        );
    }

    renderResult() {
        return (<Result
            quizResult={this.state.result}
            quizScore={this.state.myCount}
            selectedAnswers={this.state.selectedAnswers}
            quizQuestions={this.state.quizQuestions}
            lab={this.state.lab}
        />
        );
    }

    render() {
        initializeReactGA();
        return (
            <div className="quiz">
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)(App);