/* eslint-disable react/prop-types */
import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import "../../../../assets/stylesheets/components/CodeBlock.css";

export default function TrainingAICodeBlock() {
  const preInput = `
import React from "react"; 
export default function TrainNetwork() {
    //Here is where you will update the time it take the training to run
    //So that more data can be gathered

    //Enter a value between 30 and 45 seconds into the input below
    const time = 
`;
  const postInput = `
} 
`;

  return (
    <div>
      <div className="filenameHeader">TrainingAICodeBlock.js</div>
      <div style={{ textAlign: "left" }}>
        <Highlight>
          <pre>
            <code className="language-jsx">{preInput.trim()}</code>
            &nbsp;
            <input type="text"></input>&#59;
            <br></br>
            <code>{postInput.trim()}</code>
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
