import React, { Component } from 'react';
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
      answersCount: {},
      result: '',
      myCount: {}
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
      for (var i = 0; i < quizQuestions.length; i++ ){
        for(var x = 0; x < quizQuestions[i]['answers'].length; x++){
          quizQuestions[i]['answers'][x]['type'] = ""+x;
        }
      }

      console.log(quizQuestions);

  }

  componentDidMount() {
    for (var i = 0; i < quizQuestions.length; i++ ){
      quizQuestions[i]['answers'].sort(function(a, b) {
        return parseInt(a.type) - parseInt(b.type);
      });
    }
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0]['answers']
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
    var correctAnswer = 0;
    console.log(quizQuestions);
    if(quizQuestions[this.state.counter]['answers'][event.target.value]['val'] === 1){
      correctAnswer = 1;
    }
    this.setUserAnswer(event.currentTarget.value, correctAnswer);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer, correctanswer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1

      },
        myCount:{
          ...state.myCount,
          [this.state.counter] : correctanswer

        },
      answer: answer
    }), ()=>console.log(this.state));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const myCount = this.state.myCount;
    var correct = 0;
    var total = 0;
    for (var item in myCount){
      total ++;
      if (myCount.hasOwnProperty(item)) {
        if (myCount[item] === 1) correct++;
      }
    }
    var percent = Math.floor(correct/total *100);
    return ""+ percent + "%"
  }

  setResults(result) {
    this.setState({ result: result });
  }

  renderQuiz() {
    return (
        <Quiz
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
        />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
        <div className="quiz back">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Accessibility Lab1 Quiz</h2>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
    );
  }
}

export default App;