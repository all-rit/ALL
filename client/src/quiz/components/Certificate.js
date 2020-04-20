import React, {Component} from "react";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {connect} from "react-redux";
import {actions as appActions} from '../../reducers/AppReducer';
import {bindActionCreators} from 'redux';
import logo from "./../../img/logos/nsf.png";
import logo1 from "./../../img/logos/RIT.png";

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

    constructor(props) {
        super(props);

        this.state = {

        };


    }

    render() {
        console.log(this.props);
        const {state, actions} = this.props;

        return (
            <div style={{width:"100%", height:"auto", padding:"20px", textAlign:"center", border: "10px solid #787878"}}>
                <div style={{width:"100%", height:"auto", padding:"20px", textAlign:"center", border: "5px solid #787878"}}>
                    <span style={{fontSize:"50px", fontWeight:"bold"}}>Certificate of Completion</span>
                    <br /><br />
                        <span style={{fontSize:"25px"}}><i>This is to certify that</i></span>
                        <br /><br />
                            <span style={{fontSize:"30px"}}><b>Sakshi</b></span><br/><br/>
                            <span style={{fontSize:"25px"}}><i>has completed the course</i></span> <br/><br/>
                            <span style={{fontSize:"30px"}}>Accessibility Learning Lab 1</span> <br/><br/>
                            <span style={{fontSize:"20px"}}>with score of <b>{this.props.quizResult}</b></span> <br/><br/>
                            <span style={{fontSize:"25px"}}><i>dated</i></span><br />
                            <span style={{fontSize:"30px"}}>04/20/2020</span><br/><br/>
                            <img src={logo} height="100" width="100">
                            </img> &nbsp; &nbsp; &nbsp; &nbsp;
                            <img src={logo1} height="100" width="150" ></img>
                </div>
            </div>

        );

    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Certificate);
