import React, {Component} from "react";
import "../../../assets/stylesheets/components/css/agency.min.css";
import "../../../assets/stylesheets/components/css/style.css";
import "../../../assets/stylesheets/components/Certificate.scss";
import {connect} from "react-redux";
import {actions as appActions} from '../../../reducers/lab1/AppReducer';
import {bindActionCreators} from 'redux';
import logo from "../../../assets/images/accessCycle.png";

const mapStateToProps = (state) => {
    return {
        // General
        state: state
    };
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});



class Certificate extends Component {
    getColor = () => {
        let score = this.props.quizResult;
        score = parseFloat(score);
        switch (true) {
            case score <= 40:
                return "crimson";
            case score <= 70:
                return "orange";
            default:
                return "chartreuse";
        }
    };

    render() {
        const {state} = this.props;
        const today = new Date();
        const date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        return (
            <div className="outer-border">
                <div className="inner-border">
                    <div className="title-div">
                    <span className="title">
                            Certificate of Completion
                    </span>
                    </div>
                    <br/><br/>
                    <span className="normal-text">
                            {state.main.user !== null
                                ?
                                <i>This is to certify that <b>{state.main.user.firstname}</b> has completed the course:</i>
                                : <i>This is to certify that you have completed the course:</i>
                            }
                            </span>
                    <br/><br/>
                    <span className="bigger-text">Accessibility Learning Lab 1: Accessibility to Sound and Speech</span>
                    <br/><br/>
                    <span className="normal-text">with a score of <b className={this.getColor()}>
                        {this.props.quizResult}</b></span>
                    <br/><br/>
                    <span className="normal-text"><i>dated</i></span><br/>
                    <span className="bigger-text">{date}</span><br/><br/>
                    <div className="logo-div">
                        <img src={logo} alt="logo" className="logo"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Certificate);
