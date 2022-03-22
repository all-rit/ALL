import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class AlterationQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "ImproveAIStart" };
    }

    handleStart() {
        navigate("/Lab7/Exercise/AISimulationStart");
    }

    render() {
        const { actions } = this.props;
        return (
            <div className="center-div">
                <div className="guidance margin-bottom-2">
                    Alteration Quiz
                </div>
            </div>
        )
    }
}

export default AlterationQuiz;