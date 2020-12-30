import React, {Component} from "react";
import "../../../assets/stylesheets/components/App.scss"
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
    getColor=()=>{
        let score = this.props.quizResult;
        score = parseFloat(score);
        switch (true) {
            case score<=40:
                return "crimson";
            case score<=70:
                return "orange";
            default:
                return "chartreuse";
        }
    };

    render() {
        // console.log(this.props);
        const {state} = this.props;
        var today = new Date();
        // console.log(state.game.results);
        var date = (today.getMonth()+1)+'/'+today.getDate() +'/'+ today.getFullYear();
        return (
            <div style={{width:"100%", height:"auto", padding:"20px", border: "10px solid #787878"}}>
                <div style={{width:"100%", height:"auto", border: "5px solid #787878"}}>
                    <div style={{width:"50%", margin: "auto"}}>
                    <span style={{fontSize:"50px", fontWeight:"bold",textAlign:"center"}}>
                            Certificate of Completion
                    </span>
                    </div>
                    <br /><br />
                        <span style={{fontSize:"25px",textAlign:"center",padding:"20px"}}>
                            {state.main.user !== null
                                ? <i>This is to certify that <b>{state.main.user.firstname}</b> has completed the course:</i>
                                : <i>This is to certify that you have completed the course:</i>
                            }
                            </span>
                        <br /><br />
                            <span style={{fontSize:"30px",textAlign:"center",padding:"20px"}}>Accessibility Learning Lab 1: Accessibility to Sound and Speech</span> <br/><br/>
                            <span style={{fontSize:"25px",textAlign:"center",padding:"20px"}}>with score of <b style={{color:this.getColor()}}>{this.props.quizResult}</b></span> <br/><br/>
                            <span style={{fontSize:"25px",textAlign:"center",padding:"20px"}}><i>dated</i></span><br />
                            <span style={{fontSize:"30px",textAlign:"center",padding:"20px"}}>{date}</span><br/><br/>
                            <div style={{backgroundColor: "rgb(61, 61, 61)"}} >
                            <img src={logo}
                                alt="logo"
                                 style={{height:"120px",
                                     width:"500px"}}></img>
                            </div>
                </div>
            </div>

        );

    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Certificate);
