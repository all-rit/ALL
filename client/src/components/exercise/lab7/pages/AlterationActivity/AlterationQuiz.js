import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class AlterationQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "AlterationQuiz" };
    }

    handleSubmit() {
        navigate("/Lab7/Exercise/AlterationQuizResults");
    }

    render() {
        const { actions } = this.props;
        return (
            <div className="center-div">

                <p className="playthrough__sentence">
                    Alteration Quiz
                </p>

                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleSubmit}
                    key="submit"
                >
                    Submit
                </button>

            </div>
        )
    }
}

export default AlterationQuiz;