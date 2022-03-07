import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import '../../../assets/stylesheets/main.scss';
import { actions as  appActions} from "../../../reducers/lab5/AppReducer";
import {actions as repairActions} from '../../../reducers/lab7/RepairReducer';
import { actions as exerciseActions } from "../../../reducers/lab5/ExerciseReducer";


const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...exerciseActions, repairActions, appActions}, dispatch),
    };
};

class Main extends Component {
    render(){
        const {actions,user} = this.props;
        return (
            <div className="bottomSpace">
                <Router className="app">

                </Router>
            </div>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);