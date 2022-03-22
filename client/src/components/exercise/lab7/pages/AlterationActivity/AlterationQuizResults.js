import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class AlterationQuizResults extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "AlterationQuizResults" };
    }

    handleSubmit() {
        navigate("/Lab7/Exercise/ExerciseEnd");
    }

    render() {
        const { actions } = this.props;
        return (
            <div className="center-div">

                <p className="playthrough__sentence">
                    Alteration Quiz Results
                </p>

                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleSubmit}
                    key="continue"
                >
                    Continue
                </button>

            </div>
        )
    }
}

export default AlterationQuizResults;