import React, { Component } from "react";
import GameService from "../../../../services/lab5/GameService";
import {navigate} from "@reach/router";

class KnowledgeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {options: this.props.question.Options, currentSelection: null, question: this.props.question.Question, correct: false};
        this.getCorrectChoice = this.getCorrectChoice.bind(this);
    }

    isCorrectChoice(selected){
        return this.state.options[selected] === 1;
    }
    handleSelection(event) {
        const value = event.target.getAttribute('value');
        if(this.state.currentSelection === null){
            this.setState({currentSelection: value, correct: this.isCorrectChoice(value) }, ()=>
            {
                GameService.submitChoice(this.state.correct, this.state.question, this.state.currentSelection, JSON.stringify(this.state.options));
            });

        }
    }
    getCorrectChoice(){
        for(let itm in this.state.options){
            if (this.state.options[itm] === 1){
                return itm;
            }
        }
    }
    handleNav() {
        navigate(this.props.link);

    }
    render() {
        return (
            <div className="knowledgeTest">
                <div className= "question">
                    {this.state.question}
                </div>
                <div className={"options"}>
                {Object.keys(this.state.options).map((option, index) => (
                    <button  onClick={this.handleSelection.bind(this)}  value={option} className = {`option + ${option === this.state.currentSelection && !this.state.correct ? "incorrect": "" + option === this.state.currentSelection && this.state.correct ? "correct": ""}`} >
                        {option}
                    </button>
                ))}
                </div>
                {this.state.currentSelection !== null &&
                <div className="result">
                    <div className="text">
                        {this.state.correct ? "Good Job! ": "Incorrect! Correct Response was: '" + this.getCorrectChoice() + "'. " } Select 'Next'
                    </div>
                    <button
                        className="btn btn-primary text-black btn-xl text-uppercase js-scroll-triggergreen next"
                        onClick = {this.handleNav.bind(this)}
                        key="next"
                    >
                        Next
                    </button>
                </div>
                }
            </div>
        );
    }
}

export default KnowledgeTest;
