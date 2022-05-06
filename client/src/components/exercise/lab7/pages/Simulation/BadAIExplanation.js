import React, { Component } from "react";
import { navigate } from "@reach/router";

class BadAIExplanation extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "BadAIExplanation" };
    }
    handleStart() {
        navigate("/Lab7/Exercise/AICodeRepair")
    }

    render() {
        const { actions } = this.props;
        return (
            <div>
                <p className="playthrough__sentence">
                    As you can see, the AI made many mistakes when it came to managing file access when threats were detected in the system.
                </p>
                <p className="playthrough__sentence">
                    This is due to the factors of the files that the AI is using to determine in a file's access should be restricted or not.
                </p>
                <p className="playthrough__sentence">
                    The AI is currently only using one piece of sensitive information within the file to determine the sensitivity of the entire file.
                </p>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleStart}
                    key="start"
                >
                    Start
                </button>
            </div>
        )
    }
}
export default BadAIExplanation;