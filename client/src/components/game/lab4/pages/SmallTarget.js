import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import { actions as appActions } from "../../../../reducers/lab4/AppReducer";

class SmallTarget extends Component {

    constructor(props){
        super(props);
        this.state = {
            secondsElapsed = 0,
            marginRight: this.style.marginRight + "px",
      marginLeft: this.style.marginLeft + "px",
      width: this.style.width + "px",
      height: this.style.height + "px",
      fontSize: this.style.fontSize + "px",
      top: "px",
      left: "px"
        }
    }
    handleSubmit() {
        // TODO secondsElapsed
        navigate("/Lab4/Game/TargetGuideline");
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({secondsElapsed: this.state.secondsElapsed + 1 }),
            1000
        );
    }

    render() {

    }
}

export default SmallTarget;
