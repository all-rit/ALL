import React, {Component} from "react";
import {navigate} from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab7";
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../../../reducers/lab7/ExerciseReducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class BadAIExplanation extends Component {
    constructor(props) {
        super(props);
        this.state = {componentName: "BadAIExplanation"};
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.updateState(EXERCISE_PLAYING);
    }

    handleStart() {
        const {actions} = this.props;
        actions.updateState(EXERCISE_PLAYING);
        navigate("/Lab7/Exercise/AICodeRepair");
    }

    render() {
        return (
            <div>
                <p className="playthrough__sentence">
                    As you can see, the AI made many mistakes when it came to managing
                    file access when threats were detected in the system.
                </p>
                <p className="playthrough__sentence">
                    This is due to the factors of the files that the AI is using to determine in a file&lsquo;s
                    access should be restricted or not.
                </p>
                <p className="playthrough__sentence">
                    The AI is currently only using one piece of sensitive information
                    within the file to determine the sensitivity of the entire file.
                </p>
                <button
                    className="btn btn-primary text-black btn-xl text-uppercase "
                    onClick={this.handleStart.bind(this)}
                    key="start"
                >
                    Start
                </button>
            </div>
        );
    }
}

BadAIExplanation.propTypes = {
    actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...exerciseActions}, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(BadAIExplanation);
