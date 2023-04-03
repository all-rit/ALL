import React, { Component } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";

class TrainingAICodeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: "TrainingAICodeBlock.js",
        };
    }


    render() {
        const preInput = `import React, { Component } from "react";
        class TrainNetwork extends Component {
            //To gather more data, increase the simulation timer to 30-45 seconds
           const time = `;
        const postInput = ` 
} 
export default TrainNetwork;`;

        return (
            <div>
                <div style={{ textAlign: "left" }}>
                    <Highlight>
                        <pre>
                            <code className="language-jsx">
                                {preInput.trim()}
                            </code>
                            <input type="text"></input>
                            <br></br>
                            <code>
                                {postInput.trim()}
                            </code>
                        </pre>
                    </Highlight>
                </div>
                <button
                    onClick={this.validateRepair.bind(this)}
                    type="submit"
                    className="button button--green button--block"
                >
                    Update
                </button>
            </div>
        );
    }

}
export default TrainingAICodeBlock;
