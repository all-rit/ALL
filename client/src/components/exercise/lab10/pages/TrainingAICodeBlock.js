/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../../../../assets/stylesheets/components/CodeBlock.css";
class TrainingAICodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "TrainingAICodeBlock.js",
        };
    }

    isNumberInRange(value, lowerBound, upperBound) {
        return value >= lowerBound && value <= upperBound;
    }

    validateRepair() {
    }

    render() {
        const { timeValue } = this.props;
        const preInput = `
import React, { Component } from "react"; 
class TrainNetwork extends Component {
    //To gather more data, increase the simulation timer to 30-45 seconds
    const time = 
`;
        const postInput = `
} 
export default TrainNetwork;`;

        return (
            <div>
                <div className="filenameHeader">TrainingAICodeBlock.js</div>
                <div style={{ textAlign: "left" }}>
                    <Highlight>
                        <pre>
                            <code className="language-jsx">{preInput.trim()}</code>
                            &nbsp;
                            <input type="text" value={timeValue}></input>&#59;
                            <br></br>
                            <code>{postInput.trim()}</code>
                        </pre>
                    </Highlight>
                </div>
                <button
                    onClick={this.validateRepair.bind(this)}
                    type="submit"
                    className="button button--green button--block">
                    Update
                </button>
            </div>
        );
    }
}
export default TrainingAICodeBlock;
