import React, { Component, Fragment } from "react";
import { navigate } from "@reach/router";
import PageServiceTimer from "../../../shared/PageServiceTimer";

class ImproveAIStart extends Component {
    constructor(props) {
        super(props);
        this.state = { componentName: "ImproveAIStart" };
    }

    handleStart() {
        navigate("/Lab7/Exercise/AICodeRepair");
    }

    render() {
        const { actions } = this.props;
        return (

            <Fragment>
                <div className="center-div">
                    <div className="guidance margin-bottom-2">
                        <p className="playthrough__sentence">
                            Since we have identified the component of the AI that is impacting its decision-making, let's take a look into the AI and see how it can be improved.
                        </p>
                        <p className="playthrough__sentence">

                            In this part of the exercise, you will be guided in changing the AI code to improve the accuracy of the autonomous file access system.
                        </p>

                    </div><p className="playthrough__sentence">

                        Click the 'Continue' button to view the code of the autonomous system.
                    </p>
                    <button
                        className="btn btn-primary text-black btn-xl text-uppercase "
                        onClick={this.handleStart}
                        key="start"
                    >
                        Start
                    </button>
                </div>
            </Fragment>
        );
    }
}
export default ImproveAIStart;