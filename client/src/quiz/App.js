import React, {Component} from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.svg';
import './App.css';

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
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.setNextQuestion = this.setNextQuestion.bind(this)
    }

    componentWillMount() {
        for (var i = 0; i < quizQuestions.length; i++) {
            for (var x = 0; x < quizQuestions[i]['answers'].length; x++) {
                quizQuestions[i]['answers'][x]['type'] = "" + x;
            }
        }

        // console.log(quizQuestions);

    }

    componentDidMount() {
        for (var i = 0; i < quizQuestions.length; i++) {
            quizQuestions[i]['answers'].sort(function (a, b) {
                return parseInt(a.type) - parseInt(b.type);
            });
        }
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: quizQuestions[0]['answers'],
            multiChoice: quizQuestions[0]['multiChoice']
        });
    }

    shuffleArray(array) {
        var currentIndex = array.length,
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
        var correctAnswer = 0;
        var options = quizQuestions[this.state.counter]['answers'].length;
        for (var index = 0; index < options; index++) {
            if (quizQuestions[this.state.counter]['answers'][index]['val'] === currentAnswers[index]) {
                correctAnswer = 1;
            } else {
                correctAnswer = 0;
                break;
            }
        }

        this.setUserAnswer(currentAnswers, correctAnswer);
    }

    getCheckedAnswers() {
        var checked = document.getElementsByName('checkboxGroup');
        var currentAnswers = {};
        for (var index = 0; index < checked.length; index++) {
            if (checked[index].checked === true) {
                currentAnswers[index] = 1

            } else {
                currentAnswers[index] = 0
            }

        }
        return currentAnswers;
    }

    setNextQuestion() {
        var currentAnswers = this.getCheckedAnswers();
        // console.log("get selected answers:");
        // console.log(currentAnswers);

        //Calculate correct answers and set accordingly
        this.checkMultipleAnswers(currentAnswers);

        //Set next question
        if (this.state.questionId < quizQuestions.length) {
            const counter = this.state.counter + 1;
            const questionId = this.state.questionId + 1;

            this.setState({
                counter: counter,
                questionId: questionId,
                question: quizQuestions[counter].question,
                answerOptions: quizQuestions[counter].answers,
                answer: '',
                disableNextQuestion: true,
                multiChoice: quizQuestions[counter].multiChoice,
            });
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }

    }

    getResults() {
        const myCount = this.state.myCount;
        var correct = 0;
        var total = 0;
        for (var item in myCount) {
            total++;
            if (myCount.hasOwnProperty(item)) {
                if (myCount[item] === 1) correct++;
            }
        }
        var percent = Math.floor(correct / total * 100);
        return "" + percent + "%"
    }

    setResults(result) {
        this.setState({result: result});
    }

    renderQuiz() {
        return (
            <div>
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    questionId={this.state.questionId}
                    question={this.state.question}
                    questionTotal={quizQuestions.length}
                    onAnswerSelected={this.handleAnswerSelected}
                    nextQuestion={this.setNextQuestion}
                    disable={this.state.disableNextQuestion}
                    multiChoice = {this.state.multiChoice}
                />
            </div>
        );
    }

    renderResult() {
        return (<Result
                quizResult={this.state.result}
                quizScore = {this.state.myCount}
                selectedAnswers = {this.state.selectedAnswers}
            />
        );
    }

    render() {
        return (
            <div className="quiz">
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}

export default App;
