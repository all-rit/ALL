/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Component} from "react";
import {default as Quiz} from "../../../../quiz/App";
import {EXERCISE_IDLE} from "../../../../../constants/lab7";
import {navigate} from "@reach/router";
import {MathComponent} from "mathjax-react";

class AlterationQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "AlterationQuiz",
            updateStateFunc: props.actions.updateState,
        };
    }

    componentDidMount() {
        const {state} = this.props;
        if (state.exercise7.state === EXERCISE_IDLE)
            setTimeout(() => navigate("/Lab7/Exercise/AlterationStart"));
    }

    render() {
        const {updateStateFunc} = this.state;
        const {state, actions} = this.props;
        return (
            <div className="center-div">
                <p className="playthrough__sentence">Alteration Quiz</p>
                <p className={"playthrough__sentence"}>
                    How does the <b>new utility equation</b> impact the autonomous system
                    compared to the <b>original utility equation</b>?
                </p>
                <div className={"tw-flex tw-flex-col playthrough__sentence"}>
                    <MathComponent tex={String.raw`Original\;Utility\;Equation=\frac{Reward\;Value}{Cost\;Value}`}/>
                </div>
                <Quiz
                    path={`/AlterationQuiz`}
                    user={state.main.user}
                    updateStateFunc={updateStateFunc}
                    hideCertificate={true}
                />
            </div>
        );
    }
}

export default AlterationQuiz;
