import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import '../../../assets/stylesheets/main.scss';
import {bindActionCreators} from "redux";
import {actions as exerciseActions} from "../../../reducers/lab6/ExerciseReducer";

import ExerciseStart from "./pages/ExerciseStart";

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...exerciseActions}, dispatch),
    };
};

class Main extends Component {

    // eslint-disable-next-line require-jsdoc
    render() {
        const {actions,user} = this.props;
        return (
            <div className="container bottomSpace" >
                <Router className="app">
                    <ExerciseStart path="/" actions={actions}/>
                </Router>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);